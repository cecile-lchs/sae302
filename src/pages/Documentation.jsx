import React, { useState, useRef, useEffect } from 'react';
import './Documentation.css';

const Documentation = ({ language, onNavigate }) => {
  const [selectedThemeIndex, setSelectedThemeIndex] = useState(null);
  const [activeAccordionIndices, setActiveAccordionIndices] = useState([]);
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [selectedThemeIndex]);

  useEffect(() => {
    setActiveAccordionIndices([]);
  }, [selectedThemeIndex]);

  const toggleAccordion = (index) => {
    setActiveAccordionIndices(prev => {
      if (prev.includes(index)) {
        return prev.filter(i => i !== index);
      } else {
        return [...prev, index];
      }
    });
  };

  const themesFr = [
    {
      title: "Pression familiale",
      color: "#FFD7B5",
      sections: [
        {
          title: "1. Qu’est-ce que la pression familiale ?",
          content: (
            <div>
              <p style={{ marginBottom: '1rem' }}>
                La réorientation scolaire est un moment clé dans la vie d’un étudiant. Si elle peut représenter une opportunité de mieux s’aligner avec ses intérêts et ses ambitions, elle est souvent accompagnée de stress et d’incertitudes.
              </p>
              <p style={{ marginBottom: '1rem' }}>
                La pression familiale se définit comme l’ensemble des attentes, recommandations ou exigences implicites ou explicites des parents concernant le parcours scolaire et professionnel de leurs enfants. Elle peut prendre des formes très diverses :
              </p>
              <ul style={{ paddingLeft: '2rem' }}>
                <li style={{ marginBottom: '0.5rem' }}><strong>Attentes de réussite académique :</strong> certains parents insistent pour que leurs enfants choisissent des filières réputées prestigieuses ou avec de “bonnes perspectives de carrière”.</li>
                <li style={{ marginBottom: '0.5rem' }}><strong>Comparaisons avec d’autres élèves ou membres de la famille :</strong> le fait de mesurer la réussite de l’étudiant à celle d’un frère, d’une sœur ou d’amis peut créer un sentiment constant d’insuffisance.</li>
                <li style={{ marginBottom: '0.5rem' }}><strong>Contrôle indirect :</strong> certaines familles adoptent une posture subtile, valorisant certains choix ou minimisant d’autres, orientant ainsi la décision de l’étudiant sans confrontation directe.</li>
              </ul>
            </div>
          )
        },
        {
          title: "2. Pourquoi les familles exercent cette pression",
          content: (
            <div>
              <p style={{ marginBottom: '1rem' }}>
                La pression parentale n’est pas nécessairement malveillante. Dans la majorité des cas, elle découle de soucis de protection et de bien-être de l’enfant. Cependant, plusieurs facteurs peuvent accentuer cette pression :
              </p>
              <ul style={{ paddingLeft: '2rem' }}>
                <li style={{ marginBottom: '0.5rem' }}><strong>Peur de l’échec :</strong> Les parents veulent que leur enfant ait un parcours “sécurisé” et stable pour éviter des difficultés financières ou professionnelles à l’avenir.</li>
                <li style={{ marginBottom: '0.5rem' }}><strong>Héritage culturel ou social :</strong> Dans certaines familles, certaines professions ou filières sont valorisées socialement, et dévier de cette norme peut être perçu comme un risque ou une déception.</li>
                <li style={{ marginBottom: '0.5rem' }}><strong>Projections personnelles :</strong> Certains parents projettent leurs propres ambitions ou regrets sur leurs enfants, influençant inconsciemment leurs choix.</li>
              </ul>
            </div>
          )
        },
        {
          title: "3. Les effets de la pression familiale sur l’étudiant",
          content: (
            <div>
              <p style={{ marginBottom: '1rem' }}>
                Les conséquences de cette pression peuvent être multiples et toucher plusieurs aspects de la vie de l’étudiant :
              </p>
              <p style={{ marginBottom: '1rem' }}>
                <strong>Stress et anxiété :</strong> La peur de décevoir peut provoquer des symptômes physiques et psychologiques : troubles du sommeil, maux de tête, tension, anxiété chronique, voire burnout académique.
              </p>
              <p style={{ marginBottom: '1rem' }}>
                <strong>Doute de soi et perte de motivation :</strong> L’étudiant peut se sentir incapable de faire un choix autonome ou de suivre une voie qui lui correspond. Ce manque de confiance peut freiner sa capacité à explorer de nouvelles options ou à se réorienter.
              </p>
              <p style={{ marginBottom: '1rem' }}>
                <strong>Décisions tardives ou conflictuelles :</strong> Certains étudiants retardent leur réorientation par peur de froisser leurs parents, ou alternent entre plusieurs options sans jamais se décider.
              </p>
              <p>
                <strong>Impact sur le bien-être et la santé mentale :</strong> La pression continue peut contribuer à la dépression, à l’isolement social ou à la perte d’intérêt pour les études.
              </p>
            </div>
          )
        },
        {
          title: "4. Identifier et comprendre la pression familiale",
          content: (
            <div>
              <p style={{ marginBottom: '1rem' }}>
                Avant de gérer la pression, il est essentiel de la reconnaître et de l’analyser :
              </p>
              <ul style={{ paddingLeft: '2rem' }}>
                <li style={{ marginBottom: '0.5rem' }}>Observer les situations où l’on se sent jugé ou contraint.</li>
                <li style={{ marginBottom: '0.5rem' }}>Distinguer ce qui relève de la bienveillance parentale et ce qui devient un poids émotionnel.</li>
                <li style={{ marginBottom: '0.5rem' }}>Comprendre les motivations derrière les attentes des parents (sécurité, prestige, expérience personnelle).</li>
              </ul>
            </div>
          )
        },
        {
          title: "5. Stratégies pour gérer la pression familiale",
          content: (
            <div>
              <p style={{ marginBottom: '1rem' }}>
                Gérer la pression familiale est un processus progressif qui combine communication, préparation et soutien externe :
              </p>
              <p style={{ marginBottom: '1rem' }}><strong>Dialogue ouvert et respectueux :</strong> Exprimer ses motivations et expliquer le projet de réorientation peut réduire les tensions.</p>
              <p style={{ marginBottom: '1rem' }}><strong>Information et planification :</strong> Présenter des informations concrètes rassure les parents.</p>
              <p style={{ marginBottom: '1rem' }}><strong>Soutien extérieur :</strong> Les conseillers d’orientation ou psychologues peuvent aider.</p>
              <p><strong>Fixer ses propres priorités :</strong> Identifier ce qui est le plus important pour soi (passion, épanouissement personnel).</p>
            </div>
          )
        },
        {
          title: "6. Conclusion",
          content: <p>La réorientation n’est jamais un échec, mais un moment de réflexion personnelle et de croissance. La pression familiale, bien que souvent motivée par le souci du bien-être de l’enfant, peut représenter un obstacle si elle devient trop forte ou mal comprise.</p>
        },
        {
          title: "Sources",
          content: (
            <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.9rem' }}>
              <li style={{ marginBottom: '0.5rem' }}><a href="https://sherpas.com/blog/la-pression-des-parents-pour-les-etudes/" target="_blank" rel="noopener noreferrer" style={{ color: '#E27D60' }}>Sherpas, La pression des parents pour les études</a></li>
              <li style={{ marginBottom: '0.5rem' }}><a href="https://diplomeo.com/actualite-gerer_pression_parents_etudes" target="_blank" rel="noopener noreferrer" style={{ color: '#E27D60' }}>Diplomeo, Gérer la pression des parents sur les études</a></li>
              <li style={{ marginBottom: '0.5rem' }}><a href="https://objectif-ast.fr/influence-famille-choix-etudes/" target="_blank" rel="noopener noreferrer" style={{ color: '#E27D60' }}>Objectif AST, L’influence de la famille sur le choix des études</a></li>
              <li style={{ marginBottom: '0.5rem' }}><a href="https://campus.studywatt.fr/articles/stress-des-etudiants-a-la-rentree-6-causes-courantes" target="_blank" rel="noopener noreferrer" style={{ color: '#E27D60' }}>StudyWatt, Stress des étudiants</a></li>
              <li><a href="https://www.kotplanet.be/conseils-vie-etudiante/comment-gerer-la-pression-de-tes-parents-pour-tes-etudes/" target="_blank" rel="noopener noreferrer" style={{ color: '#E27D60' }}>KotPlanet, Comment gérer la pression de tes parents</a></li>
            </ul>
          )
        }
      ]
    },
    {
      title: "Echec scolaire",
      color: "#A8E6CF",
      sections: [
        {
          title: "Introduction",
          content: <p>L’échec scolaire en enseignement supérieur désigne l’ensemble des situations où un étudiant ne parvient pas à valider ses années, ses cours ou son diplôme, et finit parfois par abandonner son cursus avant d’obtenir un diplôme. Ce phénomène touche une part significative des étudiant·es et constitue un enjeu majeur.</p>
        },
        {
          title: "📉 Qu’est-ce que l’échec et le décrochage ?",
          content: (
            <div>
              <p style={{ marginBottom: '1rem' }}>Un étudiant est considéré en situation d’échec scolaire lorsqu’il échoue à ses examens, ne parvient pas à valider des unités d’enseignement ou stagne dans ses résultats. Le décrochage universitaire va plus loin : il s’agit d’un étudiant qui quitte définitivement son cursus sans diplôme.</p>
              <p>En France, on estime que plus de 20 % des étudiant·es quittent l’enseignement supérieur sans diplôme, avec une concentration importante de ces abandons en première année.</p>
            </div>
          )
        },
        {
          title: "🎯 Les causes principales de l’échec scolaire",
          content: (
            <div>
              <p style={{ marginBottom: '1rem' }}>L’échec et le décrochage résultent généralement d’un ensemble de difficultés interconnectées :</p>
              <ul style={{ paddingLeft: '2rem' }}>
                <li style={{ marginBottom: '0.5rem' }}><strong>1. Orientation inadaptée :</strong> Beaucoup d’étudiant·es choisissent une formation qui ne correspond pas à leurs intérêts ou à leur niveau.</li>
                <li style={{ marginBottom: '0.5rem' }}><strong>2. Difficultés académiques :</strong> Les exigences des études supérieures sont plus élevées qu'au lycée. Des lacunes ou un manque de méthode peuvent entraîner des échecs.</li>
                <li style={{ marginBottom: '0.5rem' }}><strong>3. Intégration sociale :</strong> Un sentiment de non-appartenance à la communauté universitaire et l’isolement contribuent au décrochage.</li>
                <li style={{ marginBottom: '0.5rem' }}><strong>4. Problèmes personnels :</strong> Le stress, l’anxiété, la santé mentale fragile ou la fatigue.</li>
                <li style={{ marginBottom: '0.5rem' }}><strong>5. Contraintes financières :</strong> La précarité obligeant à travailler en parallèle des études réduit le temps disponible pour réussir.</li>
              </ul>
            </div>
          )
        },
        {
          title: "📊 Les conséquences de l’échec scolaire",
          content: (
            <ul style={{ paddingLeft: '2rem' }}>
              <li style={{ marginBottom: '0.5rem' }}>Retard ou perte de diplôme.</li>
              <li style={{ marginBottom: '0.5rem' }}>Difficultés d’insertion professionnelle.</li>
              <li style={{ marginBottom: '0.5rem' }}>Impact psychologique (découragement, perte de confiance).</li>
              <li style={{ marginBottom: '0.5rem' }}>Pression économique accrue.</li>
            </ul>
          )
        },
        {
          title: "🤝 Comment prévenir et rebondir ?",
          content: (
            <div>
              <p style={{ marginBottom: '1rem' }}><strong>Soutien et accompagnement :</strong> Les services d’orientation et psychologues sont des ressources précieuses.</p>
              <p style={{ marginBottom: '1rem' }}><strong>Réorientation et adaptation :</strong> Changer de voie n’est pas un échec définitif, mais une étape.</p>
              <p><strong>Soutiens financiers et sociaux :</strong> Aides financières, bourses, accompagnement social.</p>
            </div>
          )
        },
        {
          title: "Sources",
          content: (
            <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.9rem' }}>
              <li style={{ marginBottom: '0.5rem' }}><a href="https://info-jeunes.fr/etudes-superieures-comment-rebondir-en-cas-de-decrochage/" target="_blank" rel="noopener noreferrer" style={{ color: '#E27D60' }}>Info-Jeunes — Études supérieures : comment rebondir</a></li>
              <li style={{ marginBottom: '0.5rem' }}><a href="https://resources.readyeducation.com/hubfs/Ready%20France/FR%20-%20GUIDE%20-%20dropouts%20-%20Jan%2023.pdf" target="_blank" rel="noopener noreferrer" style={{ color: '#E27D60' }}>Ready Education — Guide sur les abandons</a></li>
              <li style={{ marginBottom: '0.5rem' }}><a href="https://shs.hal.science/halshs-04628088/document" target="_blank" rel="noopener noreferrer" style={{ color: '#E27D60' }}>HAL Sciences Sociales — Article sur le décrochage</a></li>
              <li><a href="https://diplomeo.com/actualite-echec_etude_superieures" target="_blank" rel="noopener noreferrer" style={{ color: '#E27D60' }}>Diplomeo — Actualité sur l’échec</a></li>
            </ul>
          )
        }
      ]
    },
    {
      title: "Reorientation administrative",
      color: "#FDFFAB",
      sections: [
        {
          title: "Définition",
          content: <p>La réorientation administrative correspond à l’ensemble des démarches officielles qu’un étudiant doit effectuer lorsqu’il souhaite changer de formation, de filière ou d’établissement. Elle implique une nouvelle inscription administrative et l’engagement de procédures précises.</p>
        },
        {
          title: "Le processus et les étapes",
          content: (
            <div>
              <p style={{ marginBottom: '1rem' }}>La réorientation peut intervenir en cours d’année (souvent fin du 1er semestre) ou en fin d’année universitaire.</p>
              <p style={{ marginBottom: '1rem' }}>Les démarches :</p>
              <ul style={{ paddingLeft: '2rem' }}>
                <li style={{ marginBottom: '0.5rem' }}>Se renseigner sur les modalités d'accès (Parcoursup ou direct université).</li>
                <li style={{ marginBottom: '0.5rem' }}>Constituer un dossier (motivations, résultats).</li>
                <li style={{ marginBottom: '0.5rem' }}>Passage en commission pédagogique pour évaluer la cohérence du projet.</li>
              </ul>
            </div>
          )
        },
        {
          title: "Impact et accompagnement",
          content: (
            <div>
              <p style={{ marginBottom: '1rem' }}>La réorientation a des conséquences sur le statut étudiant : bourses, logement, sécu. Il est crucial de vérifier la conservation des crédits ECTS.</p>
              <p>Les services d’orientation et de scolarité accompagnent les étudiants pour éviter les erreurs administratives.</p>
            </div>
          )
        },
        {
          title: "Sources",
          content: (
            <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.9rem' }}>
              <li style={{ marginBottom: '0.5rem' }}><a href="https://www.service-public.gouv.fr/particuliers/vosdroits/F31063" target="_blank" rel="noopener noreferrer" style={{ color: '#E27D60' }}>Service-public.fr – Réorientation</a></li>
              <li style={{ marginBottom: '0.5rem' }}><a href="https://www.education.gouv.fr/la-reorientation-dans-l-enseignement-superieur-306702" target="_blank" rel="noopener noreferrer" style={{ color: '#E27D60' }}>Ministère de l’Éducation nationale</a></li>
              <li><a href="https://www.youzful-by-ca.fr/les-etudes-superieures/comment-reussir-sa-reorientation-la-fac" target="_blank" rel="noopener noreferrer" style={{ color: '#E27D60' }}>Youzful – Réussir sa réorientation</a></li>
            </ul>
          )
        }
      ]
    },
    {
      title: "Bourses",
      color: "#FFB7B2",
      sections: [
        {
          title: "Fonctionnement",
          content: <p>La bourse d’enseignement supérieur sur critères sociaux est une aide financière de l’État. Elle vise à réduire les inégalités et permettre l'accès aux études.</p>
        },
        {
          title: "Demande et Conditions",
          content: (
            <div>
              <p style={{ marginBottom: '1rem' }}>La demande se fait via le <strong>Dossier Social Étudiant (DSE)</strong> chaque année. C'est indispensable, même en cas de réorientation.</p>
              <p>Le montant dépend des revenus familiaux, des charges, et de la distance. Elle est versée sur 10 mois.</p>
            </div>
          )
        },
        {
          title: "Bourses et Réorientation",
          content: <p>Un étudiant a droit à 7 droits à bourse au total. La réorientation ne fait pas perdre la bourse tant que la progression dans les études est justifiée (validation de crédits ECTS).</p>
        },
        {
          title: "Sources",
          content: (
            <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.9rem' }}>
              <li style={{ marginBottom: '0.5rem' }}><a href="https://www.enseignementsup-recherche.gouv.fr/fr/bo/21/Hebdo26/ESRS2117943C.htm" target="_blank" rel="noopener noreferrer" style={{ color: '#E27D60' }}>Ministère de l’Enseignement supérieur - Modalités</a></li>
              <li><a href="https://www.etudiant.gouv.fr/fr/jusqu-7-bourses-successives-durant-vos-etudes-2974" target="_blank" rel="noopener noreferrer" style={{ color: '#E27D60' }}>Étudiant.gouv - 7 bourses successives</a></li>
            </ul>
          )
        }
      ]
    },
    {
      title: "Santé mentale",
      color: "#BFD7ED",
      sections: [
        {
          title: "Introduction",
          content: <p>La santé mentale est un état de bien-être qui permet de faire face aux difficultés de la vie. Chez les étudiants, le stress et l'anxiété sont en forte augmentation.</p>
        },
        {
          title: "Facteurs de risque étudiant",
          content: (
            <div>
              <p style={{ marginBottom: '1rem' }}>La période étudiante est une transition fragile (autonomie, pression académique). S'ajoutent souvent précarité financière et isolement.</p>
            </div>
          )
        },
        {
          title: "Lien avec la réorientation",
          content: <p>Le doute, la peur de l'échec et le regard des autres rendent la réorientation stressante. Elle peut être vécue comme un échec personnel, risquant de fragiliser la santé mentale.</p>
        },
        {
          title: "Dispositifs de soutien",
          content: (
            <div>
              <p style={{ marginBottom: '1rem' }}>Il est crucial de ne pas rester seul. Des services de santé universitaire (SSE), des psychologues et des lignes d'écoute existent.</p>
              <p>Développer des compétences psychosociales (gestion du stress) fait partie de la prévention.</p>
            </div>
          )
        },
        {
          title: "Sources",
          content: (
            <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.9rem' }}>
              <li style={{ marginBottom: '0.5rem' }}><a href="https://www.emd.fr/sante-mentale-etudiants/" target="_blank" rel="noopener noreferrer" style={{ color: '#E27D60' }}>EMD – Santé mentale des étudiants</a></li>
              <li style={{ marginBottom: '0.5rem' }}><a href="https://eduscol.education.fr/4063/agir-pour-favoriser-la-sante-mentale-et-le-bien-etre-des-eleves" target="_blank" rel="noopener noreferrer" style={{ color: '#E27D60' }}>Eduscol – Agir pour la santé mentale</a></li>
              <li><a href="https://rrapps-bfc.org/sites/default/files/publications/fichiers/2023/2023-ReferentielSanteMentale.pdf" target="_blank" rel="noopener noreferrer" style={{ color: '#E27D60' }}>RRAPPS – Référentiel Santé Mentale</a></li>
            </ul>
          )
        }
      ]
    },
    {
      title: "Aide Alternant",
      color: "#E0BBE4",
      sections: [
        {
          title: "1. Quelles aides pour les alternants ?",
          content: (
            <div>
              <p style={{ marginBottom: '1rem' }}>En alternance, on cumule salaire et statut étudiant, ce qui ouvre droit à plusieurs aides :</p>
              <ul style={{ paddingLeft: '2rem' }}>
                <li style={{ marginBottom: '0.5rem' }}><strong>Logement :</strong> APL (CAF) et Mobili-Jeune (Action Logement).</li>
                <li style={{ marginBottom: '0.5rem' }}><strong>Garanties logement :</strong> Garantie Visale (caution gratuite) et Avance Loca-Pas.</li>
                <li style={{ marginBottom: '0.5rem' }}><strong>Autres :</strong> Prime d'activité (CAF), aides au transport, aide au permis de conduire (500€).</li>
              </ul>
            </div>
          )
        },
        {
          title: "2. Focus sur Mobili-Jeune",
          content: (
            <div>
              <p style={{ marginBottom: '1rem' }}>C'est une aide spécifique pour les alternants de moins de 30 ans avec un salaire &le; SMIC.</p>
              <p>Elle prend en charge une partie du loyer (entre 10€ et 100€ par mois) APRÈS déduction des APL. La demande se fait sur le site d'Action Logement.</p>
            </div>
          )
        },
        {
          title: "3. Conseils",
          content: <p>Faites vos démarches tôt ! Les aides comme Mobili-Jeune ont des délais stricts (demande proche du début du contrat).</p>
        },
        {
          title: "Sources",
          content: (
            <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.9rem' }}>
              <li style={{ marginBottom: '0.5rem' }}><a href="https://www.service-public.gouv.fr/particuliers/vosdroits/F38630" target="_blank" rel="noopener noreferrer" style={{ color: '#E27D60' }}>Service-Public - Apprenti aides financières</a></li>
              <li style={{ marginBottom: '0.5rem' }}><a href="https://www.actionlogement.fr/l-aide-mobili-jeune" target="_blank" rel="noopener noreferrer" style={{ color: '#E27D60' }}>Action Logement - Aide MOBILI-JEUNE</a></li>
              <li><a href="https://money.wizbii.com/advices/aide-alternance-le-guide-pour-la-rentree" target="_blank" rel="noopener noreferrer" style={{ color: '#E27D60' }}>Wizbii - Guide rentrée alternance</a></li>
            </ul>
          )
        }
      ]
    },
    {
      title: "APL (Aide au Logement)",
      color: "#957DAD",
      sections: [
        {
          title: "1. Qu’est-ce que l’APL ?",
          content: <p>Une aide financière versée par la CAF pour réduire le montant du loyer. Elle dépend du revenu, du loyer, du type de logement et de la localisation.</p>
        },
        {
          title: "2. Conditions",
          content: <p>Être locataire d'un logement conventionné, être étudiant, et respecter les critères de ressources.</p>
        },
        {
          title: "3. Demande",
          content: (
            <div>
              <p style={{ marginBottom: '1rem' }}>Tout se fait en ligne sur le site de la CAF. Il faut fournir le bail, un RIB, et des justificatifs de revenus.</p>
              <p>Attention : l'aide n'est pas rétroactive, faites la demande dès l'entrée dans le logement.</p>
            </div>
          )
        },
        {
          title: "Sources",
          content: (
            <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.9rem' }}>
              <li style={{ marginBottom: '0.5rem' }}><a href="https://www.caf.fr/allocataires/caf-du-nord/offre-de-service/logement/l-aide-au-logement-etudiant" target="_blank" rel="noopener noreferrer" style={{ color: '#E27D60' }}>CAF - Aide au logement étudiant</a></li>
              <li style={{ marginBottom: '0.5rem' }}><a href="https://www.gestetud.fr/apl-etudiant-toutes-les-conditions-et-demarches-pour-beneficier-de-laide-au-logement" target="_blank" rel="noopener noreferrer" style={{ color: '#E27D60' }}>Gestetud - Conditions et démarches</a></li>
              <li><a href="https://diplomeo.com/actualite-quel_document_pour_demande_apl" target="_blank" rel="noopener noreferrer" style={{ color: '#E27D60' }}>Diplomeo - Documents APL</a></li>
            </ul>
          )
        }
      ]
    }
  ];

  const themesEn = [
    {
      title: "Family Pressure",
      color: "#FFD7B5",
      sections: [
        {
          title: "1. What is family pressure?",
          content: (
            <div>
              <p style={{ marginBottom: '1rem' }}>
                Academic reorientation is a key moment in a student's life. While it can represent an opportunity to better align with one's interests and ambitions, it is often accompanied by stress and uncertainty.
              </p>
              <p style={{ marginBottom: '1rem' }}>
                Family pressure is defined as the set of implicit or explicit expectations, recommendations, or demands from parents regarding their children's academic and professional path. It can take very diverse forms:
              </p>
              <ul style={{ paddingLeft: '2rem' }}>
                <li style={{ marginBottom: '0.5rem' }}><strong>Expectations of academic success:</strong> some parents insist that their children choose fields deemed prestigious or with "good career prospects".</li>
                <li style={{ marginBottom: '0.5rem' }}><strong>Comparisons with other students or family members:</strong> measuring the student's success against that of a sibling or friends can create a constant feeling of inadequacy.</li>
                <li style={{ marginBottom: '0.5rem' }}><strong>Indirect control:</strong> some families adopt a subtle posture, valuing certain choices or minimizing others, thus guiding the student's decision without direct confrontation.</li>
              </ul>
            </div>
          )
        },
        {
          title: "2. Why families exert this pressure",
          content: (
            <div>
              <p style={{ marginBottom: '1rem' }}>
                Parental pressure is not necessarily malicious. In most cases, it stems from concerns for the child's protection and well-being. However, several factors can accentuate this pressure:
              </p>
              <ul style={{ paddingLeft: '2rem' }}>
                <li style={{ marginBottom: '0.5rem' }}><strong>Fear of failure:</strong> Parents want their child to have a "secure" and stable path to avoid financial or professional difficulties in the future.</li>
                <li style={{ marginBottom: '0.5rem' }}><strong>Cultural or social heritage:</strong> In some families, certain professions or fields are socially valued, and deviating from this norm can be perceived as a risk or disappointment.</li>
                <li style={{ marginBottom: '0.5rem' }}><strong>Personal projections:</strong> Some parents project their own ambitions or regrets onto their children, unconsciously influencing their choices.</li>
              </ul>
            </div>
          )
        },
        {
          title: "3. The effects of family pressure on the student",
          content: (
            <div>
              <p style={{ marginBottom: '1rem' }}>
                The consequences of this pressure can be multiple and affect several aspects of the student's life:
              </p>
              <p style={{ marginBottom: '1rem' }}>
                <strong>Stress and anxiety:</strong> The fear of disappointing can cause physical and psychological symptoms: sleep disorders, headaches, tension, chronic anxiety, or even academic burnout.
              </p>
              <p style={{ marginBottom: '1rem' }}>
                <strong>Self-doubt and loss of motivation:</strong> The student may feel incapable of making an autonomous choice or following a path that suits them. This lack of confidence can hinder their ability to explore new options or reorient themselves.
              </p>
              <p style={{ marginBottom: '1rem' }}>
                <strong>Late or conflicting decisions:</strong> Some students delay their reorientation for fear of offending their parents, or alternate between several options without ever deciding.
              </p>
              <p>
                <strong>Impact on well-being and mental health:</strong> Continuous pressure can contribute to depression, social isolation, or loss of interest in studies.
              </p>
            </div>
          )
        },
        {
          title: "4. Identifying and understanding family pressure",
          content: (
            <div>
              <p style={{ marginBottom: '1rem' }}>
                Before managing pressure, it is essential to recognize and analyze it:
              </p>
              <ul style={{ paddingLeft: '2rem' }}>
                <li style={{ marginBottom: '0.5rem' }}>Observe situations where you feel judged or constrained.</li>
                <li style={{ marginBottom: '0.5rem' }}>Distinguish between parental benevolence and emotional burden.</li>
                <li style={{ marginBottom: '0.5rem' }}>Understand the motivations behind parental expectations (security, prestige, personal experience).</li>
              </ul>
            </div>
          )
        },
        {
          title: "5. Strategies for managing family pressure",
          content: (
            <div>
              <p style={{ marginBottom: '1rem' }}>
                Managing family pressure is a gradual process that combines communication, preparation, and external support:
              </p>
              <p style={{ marginBottom: '1rem' }}><strong>Open and respectful dialogue:</strong> Expressing your motivations and explaining the reorientation project can reduce tensions.</p>
              <p style={{ marginBottom: '1rem' }}><strong>Information and planning:</strong> Presenting concrete information reassures parents.</p>
              <p style={{ marginBottom: '1rem' }}><strong>External support:</strong> Guidance counselors or psychologists can help.</p>
              <p><strong>Set your own priorities:</strong> Identify what is most important to you (passion, personal fulfillment).</p>
            </div>
          )
        },
        {
          title: "6. Conclusion",
          content: <p>Reorientation is never a failure, but a moment of personal reflection and growth. Family pressure, although often motivated by concern for the child's well-being, can represent an obstacle if it becomes too strong or misunderstood.</p>
        },
        {
          title: "Sources",
          content: (
            <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.9rem' }}>
              <li style={{ marginBottom: '0.5rem' }}><a href="https://sherpas.com/blog/la-pression-des-parents-pour-les-etudes/" target="_blank" rel="noopener noreferrer" style={{ color: '#E27D60' }}>Sherpas, La pression des parents pour les études</a></li>
              <li style={{ marginBottom: '0.5rem' }}><a href="https://diplomeo.com/actualite-gerer_pression_parents_etudes" target="_blank" rel="noopener noreferrer" style={{ color: '#E27D60' }}>Diplomeo, Gérer la pression des parents sur les études</a></li>
              <li style={{ marginBottom: '0.5rem' }}><a href="https://objectif-ast.fr/influence-famille-choix-etudes/" target="_blank" rel="noopener noreferrer" style={{ color: '#E27D60' }}>Objectif AST, L’influence de la famille sur le choix des études</a></li>
              <li style={{ marginBottom: '0.5rem' }}><a href="https://campus.studywatt.fr/articles/stress-des-etudiants-a-la-rentree-6-causes-courantes" target="_blank" rel="noopener noreferrer" style={{ color: '#E27D60' }}>StudyWatt, Stress des étudiants</a></li>
              <li><a href="https://www.kotplanet.be/conseils-vie-etudiante/comment-gerer-la-pression-de-tes-parents-pour-tes-etudes/" target="_blank" rel="noopener noreferrer" style={{ color: '#E27D60' }}>KotPlanet, Comment gérer la pression de tes parents</a></li>
            </ul>
          )
        }
      ]
    },
    {
      title: "Academic Failure",
      color: "#A8E6CF",
      sections: [
        {
          title: "Introduction",
          content: <p>Academic failure in higher education refers to all situations where a student fails to validate their years, courses, or degree, and sometimes ends up dropping out of their curriculum before obtaining a degree. This phenomenon affects a significant portion of students and is a major issue.</p>
        },
        {
          title: "📉 What is failure and dropping out?",
          content: (
            <div>
              <p style={{ marginBottom: '1rem' }}>A student is considered in a situation of academic failure when they fail their exams, do not validate teaching units, or stagnate in their results. University dropout goes further: it involves a student who definitively leaves their curriculum without a degree.</p>
              <p>In France, it is estimated that more than 20% of students leave higher education without a degree, with a significant concentration of these dropouts in the first year.</p>
            </div>
          )
        },
        {
          title: "🎯 The main causes of academic failure",
          content: (
            <div>
              <p style={{ marginBottom: '1rem' }}>Failure and dropout generally result from a set of interconnected difficulties:</p>
              <ul style={{ paddingLeft: '2rem' }}>
                <li style={{ marginBottom: '0.5rem' }}><strong>1. Unsuitable orientation:</strong> Many students choose a program that does not match their interests or level.</li>
                <li style={{ marginBottom: '0.5rem' }}><strong>2. Academic difficulties:</strong> The requirements of higher education are higher than high school. Gaps or a lack of method can lead to failures.</li>
                <li style={{ marginBottom: '0.5rem' }}><strong>3. Social integration:</strong> A feeling of not belonging to the university community and isolation contribute to dropout.</li>
                <li style={{ marginBottom: '0.5rem' }}><strong>4. Personal problems:</strong> Stress, anxiety, fragile mental health, or fatigue.</li>
                <li style={{ marginBottom: '0.5rem' }}><strong>5. Financial constraints:</strong> Precariousness forcing work alongside studies reduces the time available to succeed.</li>
              </ul>
            </div>
          )
        },
        {
          title: "📊 The consequences of academic failure",
          content: (
            <ul style={{ paddingLeft: '2rem' }}>
              <li style={{ marginBottom: '0.5rem' }}>Delay or loss of degree.</li>
              <li style={{ marginBottom: '0.5rem' }}>Difficulties in professional insertion.</li>
              <li style={{ marginBottom: '0.5rem' }}>Psychological impact (discouragement, loss of confidence).</li>
              <li style={{ marginBottom: '0.5rem' }}>Increased economic pressure.</li>
            </ul>
          )
        },
        {
          title: "🤝 How to prevent and bounce back?",
          content: (
            <div>
              <p style={{ marginBottom: '1rem' }}><strong>Support and guidance:</strong> Orientation services and psychologists are valuable resources.</p>
              <p style={{ marginBottom: '1rem' }}><strong>Reorientation and adaptation:</strong> Changing paths is not a definitive failure, but a step.</p>
              <p><strong>Financial and social support:</strong> Financial aid, scholarships, social support.</p>
            </div>
          )
        },
        {
          title: "Sources",
          content: (
            <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.9rem' }}>
              <li style={{ marginBottom: '0.5rem' }}><a href="https://info-jeunes.fr/etudes-superieures-comment-rebondir-en-cas-de-decrochage/" target="_blank" rel="noopener noreferrer" style={{ color: '#E27D60' }}>Info-Jeunes — Études supérieures : comment rebondir</a></li>
              <li style={{ marginBottom: '0.5rem' }}><a href="https://resources.readyeducation.com/hubfs/Ready%20France/FR%20-%20GUIDE%20-%20dropouts%20-%20Jan%2023.pdf" target="_blank" rel="noopener noreferrer" style={{ color: '#E27D60' }}>Ready Education — Guide sur les abandons</a></li>
              <li style={{ marginBottom: '0.5rem' }}><a href="https://shs.hal.science/halshs-04628088/document" target="_blank" rel="noopener noreferrer" style={{ color: '#E27D60' }}>HAL Sciences Sociales — Article sur le décrochage</a></li>
              <li><a href="https://diplomeo.com/actualite-echec_etude_superieures" target="_blank" rel="noopener noreferrer" style={{ color: '#E27D60' }}>Diplomeo — Actualité sur l’échec</a></li>
            </ul>
          )
        }
      ]
    },
    {
      title: "Administrative Reorientation",
      color: "#FDFFAB",
      sections: [
        {
          title: "Definition",
          content: <p>Administrative reorientation corresponds to all the official procedures that a student must carry out when they wish to change formation, field, or institution. It involves a new administrative registration and engaging in precise procedures.</p>
        },
        {
          title: "The process and steps",
          content: (
            <div>
              <p style={{ marginBottom: '1rem' }}>Reorientation can take place during the year (often end of the 1st semester) or at the end of the academic year.</p>
              <p style={{ marginBottom: '1rem' }}>Procedures:</p>
              <ul style={{ paddingLeft: '2rem' }}>
                <li style={{ marginBottom: '0.5rem' }}>Inquire about access modalities (Parcoursup or direct university).</li>
                <li style={{ marginBottom: '0.5rem' }}>Compile a file (motivations, results).</li>
                <li style={{ marginBottom: '0.5rem' }}>Passage through an educational commission to evaluate the coherence of the project.</li>
              </ul>
            </div>
          )
        },
        {
          title: "Impact and support",
          content: (
            <div>
              <p style={{ marginBottom: '1rem' }}>Reorientation has consequences on student status: scholarships, housing, social security. It is crucial to verify the conservation of ECTS credits.</p>
              <p>Guidance and schooling services support students to avoid administrative errors.</p>
            </div>
          )
        },
        {
          title: "Sources",
          content: (
            <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.9rem' }}>
              <li style={{ marginBottom: '0.5rem' }}><a href="https://www.service-public.gouv.fr/particuliers/vosdroits/F31063" target="_blank" rel="noopener noreferrer" style={{ color: '#E27D60' }}>Service-public.fr – Réorientation</a></li>
              <li style={{ marginBottom: '0.5rem' }}><a href="https://www.education.gouv.fr/la-reorientation-dans-l-enseignement-superieur-306702" target="_blank" rel="noopener noreferrer" style={{ color: '#E27D60' }}>Ministère de l’Éducation nationale</a></li>
              <li><a href="https://www.youzful-by-ca.fr/les-etudes-superieures/comment-reussir-sa-reorientation-la-fac" target="_blank" rel="noopener noreferrer" style={{ color: '#E27D60' }}>Youzful – Réussir sa réorientation</a></li>
            </ul>
          )
        }
      ]
    },
    {
      title: "Scholarships",
      color: "#FFB7B2",
      sections: [
        {
          title: "Functioning",
          content: <p>The higher education scholarship based on social criteria is financial aid from the State. It aims to reduce inequalities and allow access to studies.</p>
        },
        {
          title: "Application and Conditions",
          content: (
            <div>
              <p style={{ marginBottom: '1rem' }}>The application is made via the <strong>Student Social File (DSE)</strong> each year. It is essential, even in case of reorientation.</p>
              <p>The amount depends on family income, charges, and distance. It is paid over 10 months.</p>
            </div>
          )
        },
        {
          title: "Scholarships and Reorientation",
          content: <p>A student is entitled to 7 scholarship rights in total. Reorientation does not cause the loss of the scholarship as long as progression in studies is justified (validation of ECTS credits).</p>
        },
        {
          title: "Sources",
          content: (
            <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.9rem' }}>
              <li style={{ marginBottom: '0.5rem' }}><a href="https://www.enseignementsup-recherche.gouv.fr/fr/bo/21/Hebdo26/ESRS2117943C.htm" target="_blank" rel="noopener noreferrer" style={{ color: '#E27D60' }}>Ministère de l’Enseignement supérieur - Modalités</a></li>
              <li><a href="https://www.etudiant.gouv.fr/fr/jusqu-7-bourses-successives-durant-vos-etudes-2974" target="_blank" rel="noopener noreferrer" style={{ color: '#E27D60' }}>Étudiant.gouv - 7 bourses successives</a></li>
            </ul>
          )
        }
      ]
    },
    {
      title: "Mental Health",
      color: "#BFD7ED",
      sections: [
        {
          title: "Introduction",
          content: <p>Mental health is a state of well-being that allows one to cope with life's difficulties. Among students, stress and anxiety are sharply increasing.</p>
        },
        {
          title: "Student risk factors",
          content: (
            <div>
              <p style={{ marginBottom: '1rem' }}>The student period is a fragile transition (autonomy, academic pressure). Financial precariousness and isolation are often added.</p>
            </div>
          )
        },
        {
          title: "Link with reorientation",
          content: <p>Doubt, fear of failure, and the gaze of others make reorientation stressful. It can be experienced as a personal failure, risking mental health fragility.</p>
        },
        {
          title: "Support systems",
          content: (
            <div>
              <p style={{ marginBottom: '1rem' }}>It is crucial not to remain alone. University health services (SSE), psychologists, and helplines exist.</p>
              <p>Developing psychosocial skills (stress management) is part of prevention.</p>
            </div>
          )
        },
        {
          title: "Sources",
          content: (
            <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.9rem' }}>
              <li style={{ marginBottom: '0.5rem' }}><a href="https://www.emd.fr/sante-mentale-etudiants/" target="_blank" rel="noopener noreferrer" style={{ color: '#E27D60' }}>EMD – Santé mentale des étudiants</a></li>
              <li style={{ marginBottom: '0.5rem' }}><a href="https://eduscol.education.fr/4063/agir-pour-favoriser-la-sante-mentale-et-le-bien-etre-des-eleves" target="_blank" rel="noopener noreferrer" style={{ color: '#E27D60' }}>Eduscol – Agir pour la santé mentale</a></li>
              <li><a href="https://rrapps-bfc.org/sites/default/files/publications/fichiers/2023/2023-ReferentielSanteMentale.pdf" target="_blank" rel="noopener noreferrer" style={{ color: '#E27D60' }}>RRAPPS – Référentiel Santé Mentale</a></li>
            </ul>
          )
        }
      ]
    },
    {
      title: "Work-Study Aid",
      color: "#E0BBE4",
      sections: [
        {
          title: "1. What aid for work-study students?",
          content: (
            <div>
              <p style={{ marginBottom: '1rem' }}>In work-study programs, salary and student status are combined, which opens rights to several aids:</p>
              <ul style={{ paddingLeft: '2rem' }}>
                <li style={{ marginBottom: '0.5rem' }}><strong>Housing:</strong> APL (CAF) and Mobili-Jeune (Action Logement).</li>
                <li style={{ marginBottom: '0.5rem' }}><strong>Housing guarantees:</strong> Visale Guarantee (free deposit) and Loca-Pas Advance.</li>
                <li style={{ marginBottom: '0.5rem' }}><strong>Others:</strong> Activity bonus (CAF), transport aid, driving license aid (€500).</li>
              </ul>
            </div>
          )
        },
        {
          title: "2. Focus on Mobili-Jeune",
          content: (
            <div>
              <p style={{ marginBottom: '1rem' }}>This is specific aid for work-study students under 30 with a salary &le; Minimum Wage.</p>
              <p>It covers part of the rent (between €10 and €100 per month) AFTER deduction of APL. The application is made on the Action Logement website.</p>
            </div>
          )
        },
        {
          title: "3. Advice",
          content: <p>Start your procedures early! Aids like Mobili-Jeune have strict deadlines (application close to the start of the contract).</p>
        },
        {
          title: "Sources",
          content: (
            <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.9rem' }}>
              <li style={{ marginBottom: '0.5rem' }}><a href="https://www.service-public.gouv.fr/particuliers/vosdroits/F38630" target="_blank" rel="noopener noreferrer" style={{ color: '#E27D60' }}>Service-Public - Apprenti aides financières</a></li>
              <li style={{ marginBottom: '0.5rem' }}><a href="https://www.actionlogement.fr/l-aide-mobili-jeune" target="_blank" rel="noopener noreferrer" style={{ color: '#E27D60' }}>Action Logement - Aide MOBILI-JEUNE</a></li>
              <li><a href="https://money.wizbii.com/advices/aide-alternance-le-guide-pour-la-rentree" target="_blank" rel="noopener noreferrer" style={{ color: '#E27D60' }}>Wizbii - Guide rentrée alternance</a></li>
            </ul>
          )
        }
      ]
    },
    {
      title: "APL (Housing Aid)",
      color: "#957DAD",
      sections: [
        {
          title: "1. What is APL?",
          content: <p>Financial aid paid by the CAF to reduce the amount of rent. It depends on income, rent, type of housing, and location.</p>
        },
        {
          title: "2. Conditions",
          content: <p>Be a tenant of a contracted housing, be a student, and meet resource criteria.</p>
        },
        {
          title: "3. Application",
          content: (
            <div>
              <p style={{ marginBottom: '1rem' }}>Everything is done online on the CAF website. You must provide the lease, a bank account confirmation (RIB), and proof of income.</p>
              <p>Attention: the aid is not retroactive, apply as soon as you enter the housing.</p>
            </div>
          )
        },
        {
          title: "Sources",
          content: (
            <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.9rem' }}>
              <li style={{ marginBottom: '0.5rem' }}><a href="https://www.caf.fr/allocataires/caf-du-nord/offre-de-service/logement/l-aide-au-logement-etudiant" target="_blank" rel="noopener noreferrer" style={{ color: '#E27D60' }}>CAF - Aide au logement étudiant</a></li>
              <li style={{ marginBottom: '0.5rem' }}><a href="https://www.gestetud.fr/apl-etudiant-toutes-les-conditions-et-demarches-pour-beneficier-de-laide-au-logement" target="_blank" rel="noopener noreferrer" style={{ color: '#E27D60' }}>Gestetud - Conditions et démarches</a></li>
              <li><a href="https://diplomeo.com/actualite-quel_document_pour_demande_apl" target="_blank" rel="noopener noreferrer" style={{ color: '#E27D60' }}>Diplomeo - Documents APL</a></li>
            </ul>
          )
        }
      ]
    }
  ];

  const themes = language === 'en' ? themesEn : themesFr;

  const handleCardClick = (index) => {
    setSelectedThemeIndex(index);
  };

  const handleNext = () => {
    if (selectedThemeIndex !== null && selectedThemeIndex < themes.length - 1) {
      setSelectedThemeIndex(selectedThemeIndex + 1);
    }
  };

  const handlePrev = () => {
    if (selectedThemeIndex !== null && selectedThemeIndex > 0) {
      setSelectedThemeIndex(selectedThemeIndex - 1);
    }
  };

  const currentTheme = selectedThemeIndex !== null ? themes[selectedThemeIndex] : null;
  const prevTheme = selectedThemeIndex !== null && selectedThemeIndex > 0 ? themes[selectedThemeIndex - 1] : null;
  const nextTheme = selectedThemeIndex !== null && selectedThemeIndex < themes.length - 1 ? themes[selectedThemeIndex + 1] : null;

  return (
    <div className="doc-container" ref={containerRef}>

      {selectedThemeIndex === null ? (
        // LIST VIEW (Grid of White Cards)
        <>
          <h1 className="doc-title">
            {language === 'fr' ? 'THÈMES & AIDES' : 'THEMES & HELP'}
          </h1>

          <div className="themes-grid">
            {themes.map((theme, index) => (
              <div
                key={index}
                className="theme-card"
                style={{ '--theme-color': theme.color }}
                onClick={() => handleCardClick(index)}
              >
                {theme.title}
              </div>
            ))}
          </div>

          <div className="doc-navigation-bottom">
            <button
              onClick={() => onNavigate('game')}
              className="return-btn"
            >
              {language === 'fr' ? "ALLER AU JEU" : "GO TO GAME"}
            </button>
          </div>
        </>
      ) : (
        // DETAIL VIEW (Accordion List)
        <div className="detail-container">
          <div className="back-btn-container">
            <button
              onClick={() => setSelectedThemeIndex(null)}
              className="back-link-btn"
            >
              <span style={{ fontSize: '1.5rem', marginRight: '0.5rem' }}>&#8592;</span>
              {language === 'fr' ? 'Retour aux thèmes' : 'Back to themes'}
            </button>
          </div>

          <h2 className="theme-title">
            {currentTheme.title}
          </h2>

          <div className="detail-accordion-wrapper">
            {currentTheme.sections.map((section, idx) => {
              const isOpen = activeAccordionIndices.includes(idx);
              return (
                <div key={idx} className={`accordion-item ${isOpen ? 'active' : ''}`}>
                  <div className="accordion-header" onClick={() => toggleAccordion(idx)}>
                    <div className="accordion-title">
                      {section.title}
                    </div>
                    <div className="accordion-icon">
                      {isOpen ? '−' : '+'}
                    </div>
                  </div>
                  <div className="accordion-content">
                    <div className="content-inner">
                      {section.content}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Navigation Controls */}
          {/* Note: In CSS .detail-controls now uses center alignment with a fixed gap.
              We simply render elements in order: Prev (if exists) -> Return -> Next (if exists).
              To ensure they are spaced equally relative to the center, we are avoiding flex:1 spacers 
              and just using the gap. However, if Prev is missing, we don't want Return to shift left?
              Or do we? "Separé du même écart" implies visually equidistant. 
              If the user wants Prev on Far Left, Next on Far Right, and Return Center, we go back to flex:1 
              but fix the issue of them NOT being equidistant if width varies.
              Actually, the safest visual bet for "buttons separated by same gap" is simply:
              [Prev] [Return] [Next] centered together.
              Visual:
                    <-- gap --> [Return] <-- gap --> 
              If Prev exists: [Prev] <-- gap --> [Return]
              If Next exists: [Return] <-- gap --> [Next]
           */}

          <div className="detail-controls">

            {/* Prev Button */}
            {prevTheme ? (
              <div className="nav-arrow-container" onClick={handlePrev}>
                <span style={{ fontSize: '2.5rem', marginRight: '1rem' }}>&#8592;</span>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                  <span style={{ fontSize: '0.9rem', textTransform: 'uppercase', opacity: 0.7, fontWeight: 'bold' }}>{language === 'fr' ? "Précédent" : "Previous"}</span>
                  <span style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>{prevTheme.title}</span>
                </div>
              </div>
            ) : (
              /* Invisible spacer to maintain layout if using grid logic, but with flex gap it's fine to just omit. 
                 However, omitting shifts the center. 
                 If we want the Return button to STAY CENTERED regardless of neighbors, we'd need grid or absolute positioning.
                 Let's assume centered group is acceptable. */
              null
            )}

            {/* Return Button - Always present */}
            <button
              onClick={() => onNavigate('game')}
              className="return-btn-outline"
            >
              {language === 'fr' ? "RETOUR AU JEU" : "RETURN TO GAME"}
            </button>

            {/* Next Button */}
            {nextTheme ? (
              <div className="nav-arrow-container" onClick={handleNext}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
                  <span style={{ fontSize: '0.9rem', textTransform: 'uppercase', opacity: 0.7, fontWeight: 'bold' }}>{language === 'fr' ? "Suivant" : "Next"}</span>
                  <span style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>{nextTheme.title}</span>
                </div>
                <span style={{ fontSize: '2.5rem', marginLeft: '1rem' }}>&#8594;</span>
              </div>
            ) : (
              null
            )}

          </div>
        </div>
      )}
    </div>
  );
};

export default Documentation;
