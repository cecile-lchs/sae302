import React, { useState, useEffect, useRef } from 'react';
import './TutorialOverlay.css';

const TutorialOverlay = ({ steps = [], currentStepIndex = 0, isOpen, onNext, onSkip, language = 'fr' }) => {
  const [targetRect, setTargetRect] = useState(null);
  const [tooltipPosition, setTooltipPosition] = useState({ top: 0, left: 0 });
  const [forceUpdate, setForceUpdate] = useState(0);

  const currentStep = steps[currentStepIndex];

  // Recalculate position on step change or resize
  useEffect(() => {
    if (!isOpen || !currentStep) return;

    const calculatePosition = () => {
      const element = document.querySelector(currentStep.targetId);
      if (element) {
        const rect = element.getBoundingClientRect();
        // Add some padding
        const padding = 5;
        setTargetRect({
          top: rect.top - padding,
          left: rect.left - padding,
          width: rect.width + (padding * 2),
          height: rect.height + (padding * 2),
          borderRadius: window.getComputedStyle(element).borderRadius
        });
      } else {
        // Fallback if element not found (e.g. not rendered yet), retry in a moment
        setTimeout(() => setForceUpdate(n => n + 1), 500);
      }
    };

    calculatePosition();
    window.addEventListener('resize', calculatePosition);
    return () => window.removeEventListener('resize', calculatePosition);
  }, [currentStepIndex, isOpen, forceUpdate, currentStep]);

  // Calculate Tooltip position based on target rect
  useEffect(() => {
    if (!targetRect) return;

    // Default to 'bottom' if not specified
    const position = currentStep?.position || 'bottom';
    const margin = 15;

    // Simple positioning logic (can be expanded)
    let top = 0;
    let left = targetRect.left; // aligned left by default

    // Center horizontally if needed, or adjust based on position
    if (position === 'bottom') {
      top = targetRect.top + targetRect.height + margin;
      left = targetRect.left + (targetRect.width / 2) - 150; // Center 300px tooltip roughly
    } else if (position === 'top') {
      top = targetRect.top - margin - 150; // approximate height of tooltip? No, this is risky without measuring tooltip.
      // Better: use ref for tooltip height. For now, let's stick to simple or use CSS transform for centering.
      left = targetRect.left + (targetRect.width / 2) - 150;
    } else if (position === 'left') {
      top = targetRect.top;
      left = targetRect.left - 300 - margin;
    } else if (position === 'right') {
      top = targetRect.top;
      left = targetRect.left + targetRect.width + margin;
    }

    // Boundary checks (prevent going off screen)
    if (left < 10) left = 10;
    if (left + 300 > window.innerWidth) left = window.innerWidth - 310;
    if (top < 10) top = 10;
    // (We'll let CSS handle the exact rendering, passed as style)

    setTooltipPosition({ top, left });
  }, [targetRect, currentStep]);

  if (!isOpen || !currentStep || !targetRect) return null;

  const t = {
    fr: { next: "Suivant", finish: "Terminer", skip: "Passer" },
    en: { next: "Next", finish: "Finish", skip: "Skip" }
  };
  const labels = t[language] || t.fr;
  const isLast = currentStepIndex === steps.length - 1;

  // SVG Mask Logic
  // We use an SVG covering the whole screen, filling it with dark overlay
  // And "cutting out" the target rect using a mask.
  return (
    <div className="tutorial-overlay-container">
      <svg width="100%" height="100%" className="tutorial-svg">
        <defs>
          <mask id="spotlight-mask">
            {/* White rect fills everything (opaque) */}
            <rect x="0" y="0" width="100%" height="100%" fill="white" />

            {/* Black rect is the hole (transparent in mask) */}
            <rect
              x={targetRect.left}
              y={targetRect.top}
              width={targetRect.width}
              height={targetRect.height}
              rx={typeof targetRect.borderRadius === 'string' ? parseFloat(targetRect.borderRadius) : 10}
              fill="black"
            />
          </mask>
        </defs>

        {/* The Overlay Rect using the mask */}
        <rect
          x="0"
          y="0"
          width="100%"
          height="100%"
          fill="rgba(0, 0, 0, 0.7)"
          mask="url(#spotlight-mask)"
          style={{ pointerEvents: 'auto' }} // Block interaction everywhere except hole
        />
      </svg>

      {/* Optional: Glow Border on target */}
      <div
        className="spotlight-border"
        style={{
          top: targetRect.top,
          left: targetRect.left,
          width: targetRect.width,
          height: targetRect.height,
          borderRadius: targetRect.borderRadius || '10px'
        }}
      />

      {/* The Tooltip */}
      <div
        className="tutorial-tooltip"
        style={{
          top: tooltipPosition.top,
          left: tooltipPosition.left
        }}
      >
        <p className="tutorial-text">
          {language === 'fr' ? currentStep.content.fr : currentStep.content.en}
        </p>
        <div className="tutorial-controls">
          <button className="tutorial-btn skip" onClick={onSkip}>
            {labels.skip}
          </button>
          <button className="tutorial-btn next" onClick={onNext}>
            {isLast ? labels.finish : labels.next}
          </button>
        </div>
      </div>
    </div>
  );
};

export default TutorialOverlay;
