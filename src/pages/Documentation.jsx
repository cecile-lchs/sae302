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
                La pression familiale se définit comme l’ensemble des attentes, recommandations ou exigences implicites ou explicites des parents concernant le parcours scolaire et professionnel de leurs enfants. Elle peut prendre des formes très diverses :
                Attentes de réussite académique : certains parents insistent pour que leurs enfants choisissent des filières réputées prestigieuses ou avec de “bonnes perspectives de carrière”.
                Comparaisons avec d’autres élèves ou membres de la famille : le fait de mesurer la réussite de l’étudiant à celle d’un frère, d’une sœur ou d’amis peut créer un sentiment constant d’insuffisance.
                Contrôle indirect : certaines familles adoptent une posture subtile, valorisant certains choix ou minimisant d’autres, orientant ainsi la décision de l’étudiant sans confrontation directe.
                Ces pressions, lorsqu’elles sont excessives, peuvent limiter la capacité de l’étudiant à écouter ses propres envies et à prendre des décisions autonomes, notamment lors d’une réorientation.
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
                Peur de l’échec : Les parents veulent que leur enfant ait un parcours “sécurisé” et stable pour éviter des difficultés financières ou professionnelles à l’avenir.
                Héritage culturel ou social : Dans certaines familles, certaines professions ou filières sont valorisées socialement, et dévier de cette norme peut être perçu comme un risque ou une déception.
                Projections personnelles : Certains parents projettent leurs propres ambitions ou regrets sur leurs enfants, influençant inconsciemment leurs choix.
                Cette combinaison de protection, de normes sociales et de projections personnelles peut rendre la pression invisible mais puissante, car l’étudiant ressent un besoin constant de répondre aux attentes sans forcément savoir pourquoi.
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

              Cette démarche permet à l’étudiant de prendre du recul et de mettre des mots sur ce qu’il ressent, étape indispensable pour communiquer efficacement avec ses proches.

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
              <p style={{ marginBottom: '1rem' }}><strong>Dialogue ouvert et respectueux :</strong> Exprimer ses motivations et expliquer le projet de réorientation peut réduire les tensions. Par exemple, montrer pourquoi un changement de filière correspond mieux à ses compétences et à ses ambitions permet de légitimer son choix.</p>
              <p style={{ marginBottom: '1rem' }}><strong>Information et planification :</strong>Présenter des informations concrètes (programmes, débouchés, opportunités professionnelles) rassure les parents et démontre que la décision n’est pas impulsive mais réfléchie.</p>
              <p style={{ marginBottom: '1rem' }}><strong>Soutien extérieur :</strong> Les conseillers d’orientation, psychologues scolaires, tuteurs ou pairs ayant vécu une réorientation peuvent offrir un point de vue objectif, aider à clarifier ses objectifs et renforcer la confiance en soi.</p>
              <p><strong>Fixer ses propres priorités :</strong> L’étudiant doit identifier ce qui est le plus important pour lui : passion, épanouissement personnel, développement de compétences, perspectives de carrière, ou équilibre personnel. Cela sert de guide lors des discussions familiales.
              </p>
              <p><strong>Accepter le temps et les ajustements:</strong> La réorientation peut nécessiter plusieurs étapes et discussions avant que les parents comprennent et acceptent le choix. La patience et la persévérance sont clés pour trouver un compromis entre attentes familiales et aspirations personnelles.

              </p>
            </div>
          )
        },
        {
          title: "6. Conclusion",
          content: <p>La réorientation n’est jamais un échec, mais un moment de réflexion personnelle et de croissance. La pression familiale, bien que souvent motivée par le souci du bien-être de l’enfant, peut représenter un obstacle si elle devient trop forte ou mal comprise. Comprendre ses mécanismes, identifier ses effets et mettre en place des stratégies de communication et de soutien permet à l’étudiant de faire un choix éclairé et serein, en respectant à la fois ses aspirations et ses relations familiales.
          </p>
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
          title: " Qu’est-ce que l’échec et le décrochage ?",
          content: (
            <div>
              <p style={{ marginBottom: '1rem' }}>Un étudiant est considéré en situation d’échec scolaire lorsqu’il échoue à ses examens, ne parvient pas à valider des unités d’enseignement ou stagne dans ses résultats. Le décrochage universitaire va plus loin : il s’agit d’un étudiant qui quitte définitivement son cursus sans diplôme.</p>
              <p>En France, on estime que plus de 20 % des étudiant·es quittent l’enseignement supérieur sans diplôme, avec une concentration importante de ces abandons en première année de licence, où jusqu’à 25 % des entrants arrêtent leurs études avant la fin de l’année.</p>
            </div>
          )
        },
        {
          title: " Les causes principales de l’échec scolaire",
          content: (
            <div>
              <p style={{ marginBottom: '1rem' }}>L’échec et le décrochage ne sont pas causés par un seul facteur ; ils résultent généralement d’un ensemble de difficultés interconnectées, tant personnelles qu’académiques, sociales et institutionnelles : </p>
              <ul style={{ paddingLeft: '2rem' }}>
                <li style={{ marginBottom: '0.5rem' }}><strong>1. Orientation inadaptée :</strong> Beaucoup d’étudiant·es choisissent une formation qui ne correspond pas à leurs intérêts, à leur niveau ou à leurs attentes, parfois parce qu’ils ont suivi des conseils peu adaptés ou parce qu’ils manque d’informations au moment de l’orientation. Cette mauvaise adéquation entre la formation et les aspirations personnelles est l’une des causes les plus fréquentes d’abandon.</li>
                <li style={{ marginBottom: '0.5rem' }}><strong>2. Difficultés académiques :</strong>Les exigences des études supérieures sont souvent plus élevées que celles rencontrées au lycée. Des lacunes dans les connaissances de base, une mauvaise préparation ou un manque de méthodes d’apprentissage efficaces peuvent entraîner des échecs répétés. L’absence de soutien pédagogique ou d’aide adaptée renforce cette difficulté.</li>
                <li style={{ marginBottom: '0.5rem' }}><strong>3. Intégration sociale :</strong>Un sentiment de non-appartenance à la communauté universitaire, le manque de contacts sociaux ou l’impression de ne pas être soutenu contribuent fortement au décrochage. L’intégration dans un nouvel environnement demande un temps d’ajustement qui n’est pas toujours facilité.
                </li>
                <li style={{ marginBottom: '0.5rem' }}><strong>4. Problèmes personnels :</strong> Le stress, l’anxiété, le manque de motivation, la fatigue mentale ou le découragement peuvent affecter la capacité à étudier et à persévérer. Un étudiant en difficulté personnelle peut vite se sentir dépassé, surtout s’il ne trouve pas d’appui pour en parler ou pour être accompagné.
                </li>
                <li style={{ marginBottom: '0.5rem' }}><strong>5. Contraintes financières :</strong>La précarité matérielle est une cause récurrente d’abandon : difficultés à payer le logement, les frais de vie et les dépenses liées aux études obligent certains étudiant·es à travailler en parallèle, ce qui réduit le temps disponible pour leurs études et augmente le risque d’échec.
                </li>
                <li style={{ marginBottom: '0.5rem' }}><strong> 6. Organisation et pédagogie des établissements :</strong>Dans certains cas, des cursus trop rigides, une absence d’accompagnement pédagogique ou une pédagogie peu engageante peuvent renforcer le sentiment d’échec. Des programmes mal structurés, un manque d’aide méthodologique ou des supports pédagogiques peu accessibles augmentent les risques de décrochage.</li>
              </ul>
            </div>
          )
        },
        {
          title: " Les conséquences de l’échec scolaire",
          content: (
            <div>
              <p>Les effets d’un échec ou d’un décrochage ne se limitent pas aux résultats académiques :</p>
              <ul style={{ paddingLeft: '2rem' }}>
                <li style={{ marginBottom: '0.5rem' }}>Retard ou perte de diplôme, ce qui peut rendre l’accès à certains emplois plus difficile.</li>
                <li style={{ marginBottom: '0.5rem' }}>Difficultés d’insertion professionnelle, car ne pas avoir de diplôme peut limiter les opportunités d’emploi qualifié ou stable.</li>
                <li style={{ marginBottom: '0.5rem' }}>Impact psychologique (découragement, perte de confiance), , avec des sentiments de découragement, de perte de confiance ou de manque de perspective, ce qui peut peser sur la santé mentale.
                </li>
                <li style={{ marginBottom: '0.5rem' }}>Pression économique accrue,  surtout si l’étudiant·e cumule des dettes, des contrats précaires ou des emplois mal rémunérés après l’arrêt des études.
                </li>
              </ul>
            </div>
          )
        },
        {
          title: " Comment prévenir et rebondir ?",
          content: (
            <div>
              <p style={{ marginBottom: '1rem' }}><strong>Soutien et accompagnement :</strong> Les services d’orientation, les psychologues universitaires, les tutorats ou les groupes d’entraide entre pairs sont des ressources précieuses pour aider les étudiant·es à garder le cap, à trouver des stratégies d’étude efficaces et à gérer leur motivation.</p>
              <p style={{ marginBottom: '1rem' }}><strong>Réorientation et adaptation :</strong> Changer de voie ou d’établissement n’est pas un signe d’échec définitif, mais souvent une étape normale d’un parcours. Des dispositifs comme les bilans d’orientation, les modules de transition (ex. modules tremplin), ou simplement parler de son projet avec des conseillers peut aider à rebondir et à reconstruire un projet cohérent.</p>
              <p><strong>Soutiens financiers et sociaux :</strong>Des aides financières, des bourses, un accompagnement social ou des plateformes d’information peuvent réduire la pression matérielle et permettre à l’étudiant·e de se concentrer davantage sur ses études.</p>
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
          title: "Qu’est-ce que la réorientation administrative ?",
          content: <p>La réorientation administrative correspond à l’ensemble des démarches officielles qu’un étudiant doit effectuer lorsqu’il souhaite changer de formation, de filière ou d’établissement dans l’enseignement supérieur. Contrairement à une simple réflexion personnelle, la réorientation administrative engage des procédures précises qui permettent de formaliser un nouveau parcours d’études et de conserver un statut étudiant reconnu par l’institution.
          </p>
        },
        {
          title: "Quand et comment se réorienter ?",
          content: (
            <div>
              <p style={{ marginBottom: '1rem' }}>La réorientation peut intervenir à différents moments du parcours universitaire. Elle peut avoir lieu en cours d’année, souvent à la fin du premier semestre, ou à la fin de l’année universitaire, lorsque l’étudiant décide de ne pas poursuivre dans la formation initialement choisie. Dans tous les cas, elle implique une nouvelle inscription administrative, parfois dans le même établissement, parfois dans un autre.</p>
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
          title: "Les démarches et conditions à respecter",
          content: (
            <div>
              <p style={{ marginBottom: '1rem' }}>Sur le plan administratif, la réorientation n’est pas automatique. Elle dépend de règles spécifiques, de calendriers précis et des capacités d’accueil des formations. Lorsqu’un étudiant souhaite changer de formation, il doit se renseigner sur les modalités d’accès : certaines réorientations se font directement auprès de l’université, tandis que d’autres passent par la plateforme Parcoursup, notamment lorsqu’il s’agit d’une inscription en première année dans une nouvelle formation.</p>
              <p>Les démarches de réorientation demandent souvent de constituer un dossier, de formuler des vœux et parfois de justifier son projet. Les établissements peuvent examiner les candidatures à travers des commissions pédagogiques, qui évaluent la cohérence du parcours, les résultats obtenus et la motivation de l’étudiant. L’objectif est de vérifier que la nouvelle orientation correspond davantage à son profil et à son projet personnel.</p>
            </div>
          )
        },
        {
          title: "Se faire accompagner dans sa réorientation",
          content: (
            <div>
              <p style={{ marginBottom: '1rem' }}>Les services d’orientation et de scolarité jouent un rôle central dans la réorientation administrative. Ils accompagnent les étudiants dans la compréhension des démarches, les aident à anticiper les conséquences du changement de parcours et les informent sur les dispositifs existants. Cet accompagnement est essentiel pour éviter les erreurs administratives, les ruptures de droits ou les inscriptions tardives.</p>
            </div>
          )
        },
        {
          title: "Impacts sur le parcours et la vie étudiante",
          content: (
            <div>
              <p style={{ marginBottom: '1rem' }}>La réorientation administrative a également des conséquences importantes sur la vie étudiante. Elle peut impacter le versement de la bourse, le logement universitaire, la sécurité sociale étudiante ou encore la reconnaissance des crédits déjà obtenus. Dans certains cas, des crédits ECTS validés peuvent être conservés et valorisés dans la nouvelle formation, ce qui permet à l’étudiant de ne pas repartir entièrement de zéro.</p>
            </div>
          )
        },
        {
          title: "Une étape légitime pour réussir son parcours",
          content: (
            <div>
              <p style={{ marginBottom: '1rem' }}>Longtemps perçue comme un échec, la réorientation est aujourd’hui reconnue comme une étape possible et légitime du parcours étudiant. Les politiques publiques encouragent désormais une meilleure prise en compte de la diversité des trajectoires et cherchent à sécuriser les transitions. La réorientation administrative s’inscrit ainsi dans une logique de réussite, en permettant à l’étudiant de construire progressivement un projet plus adapté à ses aspirations, à ses compétences et à sa réalité personnelle.</p>
              <p style={{ marginBottom: '1rem' }}>Bien préparée et accompagnée, la réorientation administrative devient un outil pour reprendre le contrôle de son parcours, corriger un choix initial et avancer vers une formation plus en accord avec ses objectifs.</p>
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
          content: <p>La bourse d’enseignement supérieur sur critères sociaux est une aide financière mise en place par l’État pour accompagner les étudiant·es qui rencontrent des difficultés économiques. Elle a pour objectif de réduire les inégalités et de permettre à un plus grand nombre de jeunes d’accéder aux études supérieures et de les poursuivre dans de bonnes conditions. Cette aide vient compléter le soutien familial et peut couvrir une partie des dépenses liées à la vie étudiante (logement, alimentation, transports, matériel).
          </p>
        },
        {
          title: "Demande et Conditions",
          content: (
            <div>
              <p style={{ marginBottom: '1rem' }}>Pour bénéficier de la bourse, l’étudiant·e doit faire une demande chaque année via le <strong>Dossier Social Étudiant (DSE)</strong> chaque année. C'est indispensable, même en cas de réorientation.</p>
              <p> Cette démarche est indispensable, même en cas de poursuite d’études ou de réorientation. Le DSE permet de prendre en compte la situation personnelle de l’étudiant·e, les revenus de sa famille et ses choix de formation. Comme le traitement du dossier peut prendre du temps, il est fortement conseillé d’effectuer la demande le plus tôt possible.
              </p>
              <p> Un étudiant peut bénéficier jusqu’à 7 droits à bourse au total au cours de ses études supérieures. Ces droits peuvent être utilisés sur plusieurs années, y compris en cas de changement d’orientation, à condition que l’étudiant progresse dans son parcours (par exemple en validant des crédits ECTS à l’université). Cela signifie que la réorientation n’entraîne pas automatiquement la perte de la bourse.
              </p>
            </div>
          )
        },
        {
          title: "Bourses et Réorientation",
          content:
            <div> <p>Un étudiant peut bénéficier jusqu’à 7 droits à bourse au total au cours de ses études supérieures. Ces droits peuvent être utilisés sur plusieurs années, y compris en cas de changement d’orientation, à condition que l’étudiant progresse dans son parcours (par exemple en validant des crédits ECTS à l’université). Cela signifie que la réorientation n’entraîne pas automatiquement la perte de la bourse.
            </p>
              <p>Le montant de la bourse dépend de plusieurs critères : les revenus du foyer fiscal, le nombre de personnes à charge dans la famille et la distance entre le domicile familial et le lieu d’études. La bourse est versée sur 10 mois et son montant varie selon des échelons définis. Pour conserver cette aide, l’étudiant·e doit respecter certaines obligations, notamment l’assiduité aux cours et aux examens.
              </p>
              <p>Dans un parcours de réorientation, la bourse joue un rôle essentiel. Elle peut permettre à un étudiant de s’engager dans une nouvelle formation avec davantage de sécurité financière, tout en l’encourageant à bien s’informer sur ses droits et les démarches à effectuer pour continuer à en bénéficier.
              </p>
            </div>
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
          content:
            <div> <p>La santé mentale correspond à un état de bien-être psychologique qui permet à une personne de se sentir bien dans sa vie quotidienne, de faire face aux difficultés, de développer ses capacités et d’entretenir des relations sociales équilibrées. Elle ne se limite pas à l’absence de troubles psychiques : elle inclut aussi le sentiment d’épanouissement, la confiance en soi, la gestion des émotions et la capacité à demander de l’aide lorsque cela est nécessaire.
            </p>
              <p>Chez les étudiant·es, la santé mentale est devenue un enjeu majeur de l’enseignement supérieur. Les études et rapports récents montrent une augmentation importante des situations de mal-être psychologique, touchant une large partie de la population étudiante. Stress, anxiété, épuisement, découragement ou sentiment de solitude sont des réalités fréquentes, parfois banalisées, mais qui peuvent avoir des conséquences importantes sur les parcours scolaires et personnels.
              </p>
            </div>
        },
        {
          title: "Une période de vie particulièrement fragile",
          content: (
            <div>
              <p style={{ marginBottom: '1rem' }}>La vie étudiante correspond à une période de transition majeure. Elle marque souvent le passage à l’âge adulte, avec de nombreux changements simultanés : départ du domicile familial, nouvelle autonomie, gestion du budget, organisation du temps, construction de l’identité personnelle et professionnelle. Ces transformations peuvent être sources d’enthousiasme, mais aussi de fortes tensions psychologiques.
              </p>
              <p style={{ marginBottom: '1rem' }}>À cela s’ajoutent les exigences du monde universitaire : charge de travail importante, évaluations régulières, pression de la réussite, comparaison avec les autres étudiants et incertitude face à l’avenir professionnel. Pour certains, ces facteurs peuvent provoquer un sentiment d’échec, une perte de motivation ou une anxiété durable.
              </p>
            </div>
          )
        },
        {
          title: "Un mal-être largement répandu",
          content:
            <div>
              <p>Les données disponibles montrent que la santé mentale des étudiant·es s’est nettement dégradée ces dernières années. Une part importante des étudiant·es déclare souffrir de stress intense, de fatigue mentale ou de troubles anxieux. De nombreux jeunes évoquent également des épisodes dépressifs, des difficultés de concentration ou un sentiment de découragement face à leurs études.</p>
              <p>Le mal-être étudiant est souvent renforcé par la précarité financière. Le coût de la vie étudiante, les difficultés d’accès au logement, la nécessité de travailler en parallèle des études ou l’insécurité matérielle peuvent alourdir la charge mentale. Ces contraintes réduisent le temps de repos, fragilisent l’équilibre personnel et augmentent le risque d’épuisement.
              </p>
              <p>L’isolement social constitue un autre facteur important. Certains étudiant·es peinent à créer des liens, notamment lors d’un changement de ville, d’établissement ou de filière. La réorientation peut accentuer ce sentiment de solitude, car elle implique parfois de recommencer dans un nouvel environnement, sans repères ni réseau social établi.
              </p>
            </div>
        },
        {
          title: " Santé mentale et réorientation",
          content: (
            <div>
              <p style={{ marginBottom: '1rem' }}>La question de la santé mentale est étroitement liée aux parcours de réorientation. Le doute sur son choix d’études, la peur de se tromper, le regard des proches ou la pression sociale peuvent générer un fort stress émotionnel. Beaucoup d’étudiant·es vivent la réorientation comme un échec personnel, alors qu’il s’agit souvent d’une étape normale dans un parcours.
              </p>
              <p>Un mal-être psychologique non pris en compte peut conduire à un décrochage, à l’abandon des études ou à une perte de confiance durable. À l’inverse, un accompagnement adapté et une meilleure reconnaissance de la diversité des parcours peuvent aider les étudiant·es à se réorienter dans de meilleures conditions, en préservant leur équilibre mental.
              </p>
            </div>
          )
        },
        {
          title: "  Une approche globale de la santé mentale",
          content: (
            <div>
              <p style={{ marginBottom: '1rem' }}>Les institutions éducatives rappellent que la santé mentale doit être abordée de manière globale et préventive. Il ne s’agit pas seulement de soigner des troubles, mais aussi de créer des environnements favorables au bien-être. Cela passe par la qualité de l’accueil des étudiant·es, la clarté des informations, la bienveillance pédagogique et la reconnaissance des difficultés rencontrées.
              </p>
              <p>Les référentiels de santé mentale insistent sur l’importance de développer les compétences psychosociales : apprendre à gérer le stress, à reconnaître ses émotions, à demander de l’aide et à maintenir un équilibre entre vie personnelle et études. Ces compétences jouent un rôle clé dans la prévention des situations de crise.
              </p>
            </div>
          )
        },
        {
          title: "Dispositifs de soutien et politiques publiques",
          content: (
            <div>
              <p style={{ marginBottom: '1rem' }}>Face à l’ampleur du phénomène, les pouvoirs publics et les établissements d’enseignement supérieur ont mis en place différents dispositifs pour soutenir la santé mentale des étudiant·es. Des actions de prévention, des campagnes de sensibilisation et des services d’écoute psychologique ont été développés sur les campus.
              </p>
              <p>Des mesures nationales ont également été proposées pour améliorer le bien-être étudiant, notamment à travers le renforcement de l’accompagnement psychologique, la formation des personnels éducatifs au repérage des signes de détresse et le développement de partenariats avec des acteurs de la santé.
                L’objectif est de rompre l’isolement, de lutter contre la stigmatisation liée aux difficultés psychiques et de favoriser une culture du soutien et de l’entraide dans le monde étudiant.
              </p>
            </div>
          )
        },

        {
          title: " Un enjeu central pour la réussite étudiante",
          content: (
            <div>
              <p style={{ marginBottom: '1rem' }}>La santé mentale est aujourd’hui reconnue comme un facteur déterminant de la réussite et de la persévérance dans les études. Un étudiant qui se sent soutenu, écouté et compris est plus à même de s’engager dans son parcours, de surmonter les difficultés et de construire un projet cohérent.
              </p>
              <p>Prendre en compte la santé mentale des étudiant·es, c’est reconnaître que la réussite ne dépend pas uniquement des capacités académiques, mais aussi du bien-être psychologique, du contexte de vie et de la possibilité de faire des choix éclairés, y compris celui de se réorienter.
              </p>
            </div>
          )
        },
        {
          title: "Sources",
          content: (
            <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.9rem' }}>
              <li style={{ marginBottom: '0.5rem' }}><a href="https://www.emd.fr/sante-mentale-etudiants/" target="_blank" rel="noopener noreferrer" style={{ color: '#E27D60' }}>EMD – Santé mentale des étudiants</a></li>
              <li style={{ marginBottom: '0.5rem' }}><a href="https://eduscol.education.fr/4063/agir-pour-favoriser-la-sante-mentale-et-le-bien-etre-des-eleves" target="_blank" rel="noopener noreferrer" style={{ color: '#E27D60' }}>Eduscol – Agir pour la santé mentale</a></li>
              <li style={{ marginBottom: '0.5rem' }}><a href="https://rrapps-bfc.org/sites/default/files/publications/fichiers/2023/2023-ReferentielSanteMentale.pdf" target="_blank" rel="noopener noreferrer" style={{ color: '#E27D60' }}>RRAPPS – Référentiel Santé Mentale</a></li>
              <li style={{ marginBottom: '0.5rem' }}><a href="https://www.enseignementsup-recherche.gouv.fr/sites/default/files/2021-10/15-mesures-sur-le-bien--tre-des-tudiants-en-sant-avril-2018--13355.pdf" target="_blank" rel="noopener noreferrer" style={{ color: '#E27D60' }}>Ministère de l’Enseignement supérieur – 15 mesures pour le bien-être des étudiant·es en santé</a></li>
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
          title: "1. Introduction",
          content: (
            <div>
              <p style={{ marginBottom: '1rem' }}>Faire le choix de l’alternance, que ce soit en contrat d’apprentissage ou en contrat de professionnalisation, permet de cumuler formation théorique et expérience professionnelle. Mais même avec un salaire, les dépenses liées au logement, au transport et à la vie quotidienne peuvent être lourdes, surtout quand on débute. Heureusement, plusieurs dispositifs existent pour soutenir les alternants.</p>
            </div>
          )
        },
        {
          title: "2. Quelles aides peut‑on obtenir quand on est en alternance ?",
          content: (
            <div>
              <p style={{ marginBottom: '1rem' }}>Lorsque l’on est alternant, on peut prétendre à différentes aides financières pour alléger les charges liées à la formation, notamment :</p>

              <p style={{ marginBottom: '0.5rem' }}><strong>✔ Aides au logement :</strong></p>
              <ul style={{ paddingLeft: '2rem' }}>
                <li>APL ( Aide personnalisée au logement - CAF) : comme pour tout locataire, l’APL versée par la CAF permet de réduire le montant du loyer en fonction des revenus, de la composition du foyer et du type de logement. Les alternants peuvent en bénéficier comme tout étudiant salarié.
                </li>
                <li>Mobili‑Jeune® (Action Logement):  une aide spécifique proposée par Action Logement, destinée aux alternants de moins de 30 ans en contrat d’apprentissage ou de professionnalisation. Elle prend en charge une partie du loyer, après déduction de l’APL, généralement comprise entre 10 et 100 € par mois selon le loyer et les ressources, jusqu’à l’équivalent d’environ 1 100 € par année de formation.
                </li>
              </ul >

              <p style={{ marginBottom: '0.5rem' }}><strong>✔ Garanties et facilités pour accéder à un logement</strong></p>
              <ul style={{ paddingLeft: '2rem' }}>
                <li>Garantie Visale : une caution gratuite offerte par Action Logement qui se porte garant pour l’alternant auprès des bailleurs, facilitant l’accès au logement sans avoir de garant personnel.
                </li>
                <li>Avance Loca‑Pass® : avance sans intérêts pouvant aller jusqu’à 1 200 € pour financer le dépôt de garantie demandé par le propriétaire.
                </li>
              </ul >

              <p style={{ marginBottom: '0.5rem' }}><strong>✔ Autres aides financières/pratiques</strong></p>
              <p> Outre le logement, d’autres aides peuvent compléter le soutien à l’alternant :</p>
              <ul style={{ paddingLeft: '2rem' }}>
                <li>Prime d’activité : versée par la CAF pour compléter les revenus modestes des alternants salariés, augmentant leur pouvoir d’achat.
                </li>
                <li>Tarifs réduits ou subventions pour le transport : certaines régions ou services offrent des réductions pour les trajets domicile‑travail ou transports en commun.
                </li>
                <li>Aide au permis de conduire : subvention autour de 500 € pour faciliter la mobilité pour les besoins professionnels.
                </li>
                <li>Aides régionales ou OPCO : possibilités de soutien pour l’achat de matériel professionnel ou lors d’une mobilité en formation ou stage à l’étranger.
                </li>
              </ul >

            </div >
          )
        },
        {
          title: "3. Focalisation sur l’aide Mobili‑Jeune®",
          content: (
            <div>
              <p style={{ marginBottom: '1rem' }}>L’aide Mobili‑Jeune® est l’un des principaux dispositifs spécifiques à l’alternance. Elle prend en charge une partie du loyer (entre 10€ et 100€ par mois) après déduction des APL, pour une durée max de 11 mois par an.</p>
              <p style={{ marginBottom: '0.5rem' }}><strong>Qui peut y prétendre ?</strong></p>
              <ul style={{ paddingLeft: '2rem', marginBottom: '1rem' }}>
                <li>Moins de 30 ans.</li>
                <li>Contrat d’apprentissage ou de professionnalisation (secteur privé non agricole).</li>
                <li>Salaire &le; 120% SMIC.</li>
                <li>Locataire proche du travail/formation ou double loyer.</li>
              </ul>
              <p style={{ marginBottom: '0.5rem' }}><strong>Comment est‑elle calculée ?</strong></p>
              <p> L’aide Mobili‑Jeune est complémentaire aux autres aides au logement : elle est calculée sur le loyer après déduction de l’APL, de manière à alléger encore le coût global du logement pour l’étudiant.
              </p>

              <p style={{ marginBottom: '0.5rem' }}><strong>Montant et durée</strong></p>
              <ul>
                <li>Elle peut aller de 10 € à 100 € par mois, selon la situation.</li>
                <li>Elle est versée pour une durée maximale de 11 mois par année de formation, cumulable sur deux années consécutives ou non.</li>
              </ul>

              <p style={{ marginBottom: '0.5rem' }}><strong>Démarches :</strong></p>
              <p> La demande doit être faite en ligne sur le site d’Action Logement, généralement entre 3 mois avant le début du contrat et jusqu’à 5 mois après son démarrage. Il faut fournir les pièces justificatives comme le contrat d’alternance, le bail de location et un RIB.
              </p>

            </div>
          )
        },
        {
          title: "4. D’autres aides ou dispositifs à connaître",
          content: (
            <div>
              <p>Même au‑delà du logement, plusieurs autres aides et dispositifs peuvent compléter le soutien à l’alternant :</p>
              <ul style={{ paddingLeft: '2rem' }}>
                <li style={{ marginBottom: '0.5rem' }}><strong>APL / ALS / ALF (CAF) :</strong> Réduction loyer indépendante de Mobili-Jeune.</li>
                <li style={{ marginBottom: '0.5rem' }}><strong>Prime d’activité :</strong> aide mensuelle complémentaire pour les salariés aux revenus modestes.
                </li>
                <li style={{ marginBottom: '0.5rem' }}><strong>Garantie Visale :</strong> rassurent les propriétaires et facilitent l’obtention d’un bail.
                </li>
                <li style={{ marginBottom: '0.5rem' }}><strong>Avance Loca-Pass :</strong>  facilite l’entrée dans les logements en prenant en charge le dépôt de garantie sans frais</li>
                <li style={{ marginBottom: '0.5rem' }}><strong>Aides locales :</strong>  certaines régions proposent des aides pour les transports, l’équipement ou les projets liés à l’alternance — elles varient selon les territoires.
                </li>
              </ul>
            </div>
          )
        },
        {
          title: "5. Conseils pratiques",
          content: (
            <div>
              <ul style={{ paddingLeft: '2rem' }}>
                <li style={{ marginBottom: '0.5rem' }}><strong> Faire les démarches tôt :</strong> beaucoup de ces aides (comme Mobili‑Jeune ou l’avance Loca‑Pass) doivent être demandées dans des délais précis autour du début du contrat d’alternance.
                </li>
                <li style={{ marginBottom: '0.5rem' }}><strong> Cumuler intelligemment :</strong>l’aide Mobili‑Jeune peut se cumuler avec l’APL, la garantie Visale ou l’avance Loca‑Pass pour réduire au maximum le coût du logement.</li>
                <li style={{ marginBottom: '0.5rem' }}><strong> Conserver les justificatifs :</strong>  un dossier complet accélère l’étude des aides.
                </li>
                <li style={{ marginBottom: '0.5rem' }}><strong> Utiliser les simulateurs :</strong> (CAF, Action Logement ou 1jeune1solution) pour estimer ses droits.
                </li>
              </ul>
            </div>
          )
        },
        {
          title: "6. Conclusion",
          content: <p>Être alternant ne signifie pas être seul face aux dépenses. Grâce à une combinaison d’aides CAF, Action Logement et d’aides complémentaires (prime d’activité, transports, garant), il est possible de réduire significativement les charges liées à l’entrée dans un logement et à la vie quotidienne. L’important est de connaître ces dispositifs, préparer les démarches à l’avance et bien assembler son dossier pour maximiser ses chances de bénéficier de tous les soutiens auxquels on a droit.
          </p>
        },
        {
          title: "Sources",
          content: (
            <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.9rem' }}>
              <li style={{ marginBottom: '0.5rem' }}><a href="https://www.service-public.gouv.fr/particuliers/vosdroits/F38630" target="_blank" rel="noopener noreferrer" style={{ color: '#E27D60' }}>Service-Public - Apprenti aides financières</a></li>
              <li style={{ marginBottom: '0.5rem' }}><a href="https://www.actionlogement.fr/l-aide-mobili-jeune" target="_blank" rel="noopener noreferrer" style={{ color: '#E27D60' }}>Action Logement - Aide MOBILI-JEUNE</a></li>
              <li style={{ marginBottom: '0.5rem' }}><a href="https://www.letudiant.fr/etudes/alternance/alternance-quelles-aides-financieres-peut-on-obtenir.html" target="_blank" rel="noopener noreferrer" style={{ color: '#E27D60' }}>L’Étudiant, Aides financières pour alternants : logement et dispositifs</a></li>
              <li style={{ marginBottom: '0.5rem' }}><a href="https://www.concepteursdavenirs.fr/liste-aide-financiere-alternance" target="_blank" rel="noopener noreferrer" style={{ color: '#E27D60' }}>Concepteurs d’Avenirs, Liste des aides financières pour l’alternance</a></li>
              <li style={{ marginBottom: '0.5rem' }}><a href="https://www.caf.fr/allocataires/caf-du-var/offre-de-service/logement/je-suis-etudiant-etou-apprenti/je-suis-etudiant-en-alternance" target="_blank" rel="noopener noreferrer" style={{ color: '#E27D60' }}>CAF du Var, Je suis étudiant ou apprenti en alternance</a></li>
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
          title: "1. Introduction",
          content: <p>Pour de nombreux étudiants, accéder à un logement constitue un défi financier majeur. Le coût des loyers, associé aux dépenses du quotidien, peut représenter un obstacle important. Pour accompagner les étudiants, l’État français propose plusieurs dispositifs d’aide, parmi lesquels l’APL (Aide Personnalisée au Logement) est l’un des plus connus. Comprendre son fonctionnement, ses conditions et ses démarches est essentiel pour sécuriser un logement tout en allégeant le budget étudiant.
          </p>
        },
        {
          title: "2. Qu’est-ce que l’APL ?",
          content:
            <div>
              <p>L’APL est une aide financière destinée à réduire le montant du loyer ou de la mensualité d’emprunt d’un logement. Elle est calculée en fonction :
              </p>
              <ul>
                <li>Du revenu de l’étudiant (ou de ses parents, selon le cas)</li>
                <li>Du montant du loyer</li>
                <li>Du type de logement</li>
                <li>De la localisation géographique</li>
              </ul>
              <p>L’objectif est de rendre le logement plus accessible, particulièrement pour les étudiants en situation de mobilité, ceux qui s’installent loin de leur famille ou qui doivent financer seuls leurs études.
              </p>
            </div>
        },
        {
          title: "3. Qui peut en bénéficier ?",
          content:
            <div>
              <p>L’APL n’est pas réservée à tous les étudiants. Les conditions principales sont les suivantes :
              </p>
              <ul>
                <li>Être locataire ou colocataire d’un logement conventionné (c’est-à-dire reconnu par la CAF pour recevoir l’aide).
                </li>
                <li>Être étudiant, apprenti ou en formation professionnelle.

                </li>
                <li>Résider en France de manière régulière.</li>
                <li>Respecter certaines conditions de ressources, qui varient selon la situation personnelle et familiale.</li>
              </ul>
              <p>Il est important de noter que l’APL est différente des autres aides au logement, comme l’ALF (Allocation de Logement à caractère Familial) ou l’ALS (Allocation de Logement Social), qui s’adressent à des publics spécifiques.
              </p>
            </div>
        },
        {
          title: "4. Comment faire sa demande ?",
          content: (
            <div>
              <p style={{ marginBottom: '1rem' }}>La demande d’APL peut se faire en ligne via le site de la CAF ou via des plateformes partenaires, et suit plusieurs étapes clés :
              </p>
              <ol>
                <li>Créer un compte CAF ou se connecter à son espace personnel.

                </li>
                <li>Renseigner sa situation : type de logement, montant du loyer, coordonnées du bailleur, statut étudiant.
                </li>
                <li>Fournir les justificatifs nécessaires, notamment :
                  <ul>
                    <li>Contrat de location ou attestation du bailleur</li>
                    <li>Relevé d’identité bancaire (RIB)</li>
                    <li>Justificatif de ressources personnelles ou familiales</li>
                    <li>Carte d’étudiant ou attestation de scolarité</li>
                  </ul>
                </li>
                <li>Attendre le calcul et la notification : la CAF détermine le montant de l’aide et informe l’étudiant.
                </li>
                <li>Versement de l’aide : l’APL est directement versée au bailleur ou à l’étudiant selon les cas.
                </li>
              </ol>
              <p>Le délai de traitement peut varier, mais il est conseillé de faire la demande avant la signature du bail ou dès l’installation dans le logement.
              </p></div>
          )
        },
        {
          title: "5. Les documents essentiels",
          content:
            <div>
              <p>Pour une demande complète et rapide, certains documents sont systématiquement demandés :
              </p>
              <ul>
                <li>Contrat de location ou bail récent</li>
                <li>Attestation d’hébergement si nécessaire</li>
                <li>Justificatifs de revenus (salaires, bourses, aides éventuelles)</li>
                <li>Carte ou certificat de scolarité</li>
                <li>RIB pour les versements</li>
              </ul>
              <p>Diplomeo et les CAF locales insistent sur l’importance de préparer soigneusement ces documents pour éviter tout retard dans le traitement de la demande.
              </p>
            </div>
        },
        {
          title: "6. Points importants à savoir",
          content:
            <div>
              <ul>
                <li>L’APL n’est pas automatique : il faut la demander et respecter toutes les conditions.</li>
                <li>Le montant varie chaque mois en fonction des revenus déclarés et du loyer réel.</li>
                <li>L’APL peut compléter d’autres aides étudiantes ou bourses, mais il est essentiel de vérifier les règles de cumul.</li>
                <li>Une mise à jour régulière des informations est nécessaire pour éviter des trop-perçus ou des interruptions de versement.</li>

              </ul>
            </div>
        },
        {
          title: "7. Conseils pratiques pour les étudiants",
          content:
            <div>
              <ol>
                <li><strong>Anticiper la demande :</strong> préparer les documents et créer son compte CAF dès que possible.
                </li>
                <li><strong>Vérifier la convention du logement :</strong> seuls certains logements sont éligibles à l’APL.</li>
                <li><strong>Suivre son dossier en ligne :</strong> la CAF offre un suivi complet pour savoir si des informations manquent.</li>
                <li><strong>Se faire accompagner :</strong> associations étudiantes, services sociaux des universités et plateformes comme Gestetud peuvent guider les étudiants dans les démarches.
                </li>
                <li><strong>Évaluer son budget réel :</strong> même avec l’APL, il est essentiel de calculer ses dépenses pour ne pas rencontrer de difficultés financières.
                </li>
              </ol>
            </div>
        },
        {
          title: "8. Conclusion",
          content:
            <p>L’APL constitue un soutien crucial pour les étudiants, en permettant de réduire significativement le coût du logement et de se concentrer sur leurs études. Comprendre les conditions d’éligibilité, préparer les documents nécessaires et suivre attentivement les démarches permet de maximiser ses chances de recevoir cette aide et de sécuriser son logement. Bien gérée, cette aide contribue à réduire le stress financier et favorise la réussite académique.
            </p>
        },
        {
          title: "Sources",
          content: (
            <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.9rem' }}>
              <li style={{ marginBottom: '0.5rem' }}><a href="https://www.caf.fr/allocataires/caf-du-nord/offre-de-service/logement/l-aide-au-logement-etudiant" target="_blank" rel="noopener noreferrer" style={{ color: '#E27D60' }}>CAF - Aide au logement étudiant</a></li>
              <li style={{ marginBottom: '0.5rem' }}><a href="https://www.gestetud.fr/apl-etudiant-toutes-les-conditions-et-demarches-pour-beneficier-de-laide-au-logement" target="_blank" rel="noopener noreferrer" style={{ color: '#E27D60' }}>Gestetud - Conditions et démarches</a></li>
              <li style={{ marginBottom: '0.5rem' }}><a href="https://diplomeo.com/actualite-quel_document_pour_demande_apl" target="_blank" rel="noopener noreferrer" style={{ color: '#E27D60' }}>Diplomeo - Documents APL</a></li>
              <li style={{ marginBottom: '0.5rem' }}><a href="https://www.capital.fr/immobilier/apl-etudiant-1397706" target="_blank" rel="noopener noreferrer" style={{ color: '#E27D60' }}>Capital - APL étudiant</a></li>
              <li style={{ marginBottom: '0.5rem' }}><a href="https://www.caf.fr/allocataires/caf-du-nord/offre-de-service/logement/l-aide-au-logement-etudiant" target="_blank" rel="noopener noreferrer" style={{ color: '#E27D60' }}>CAF du Nord - Aide au logement étudiant</a></li>
              <li style={{ marginBottom: '0.5rem' }}><a href="https://www.caf.fr/allocataires/caf-de-la-vienne/offre-de-service/logement/je-suis-etudiante/faire-votre-demande-d-aide-au-logement/les-etapes-cles-pour-faire-sa-demande-d-aide-au-logement-etudiant" target="_blank" rel="noopener noreferrer" style={{ color: '#E27D60' }}>CAF de la Vienne - Les étapes clés pour faire sa demande d’aide au logement étudiant</a></li>
              <li style={{ marginBottom: '0.5rem' }}><a href="https://caf.fr/allocataires/caf-du-var/offre-de-service/logement/je-suis-etudiant-etou-apprenti/les-etapes-cles-pour-faire-sa-demande-d-aide-au-logement" target="_blank" rel="noopener noreferrer" style={{ color: '#E27D60' }}>CAF du Var - Les étapes clés pour faire sa demande d’aide au logement étudiant</a></li>
              <li><a href="https://www.gestetud.fr/apl-etudiant-toutes-les-conditions-et-demarches-pour-beneficier-de-laide-au-logement" target="_blank" rel="noopener noreferrer" style={{ color: '#E27D60' }}>Gestetud - APL étudiant : conditions et démarches</a></li>
            </ul>
          )
        },

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
                Family pressure can be defined as the set of implicit or explicit expectations, recommendations, or demands that parents place on their children regarding their academic and professional paths. It can take many different forms:
                Expectations of academic success: some parents insist that their children choose fields considered prestigious or offering “good career prospects”.
                Comparisons with other students or family members: measuring a student’s success against that of a sibling or friends can create a constant feeling of inadequacy.
                Indirect control: some families adopt a subtle stance, valuing certain choices while minimizing others, thus guiding the student’s decision without direct confrontation.
                When excessive, these pressures can limit a student’s ability to listen to their own desires and make autonomous decisions, particularly during a reorientation.
              </p>
              <p style={{ marginBottom: '1rem' }}>
                Family pressure can be defined as the set of implicit or explicit expectations, recommendations, or demands that parents place on their children regarding their academic and professional paths. It can take many different forms:
              </p>
              <ul style={{ paddingLeft: '2rem' }}>
                <li style={{ marginBottom: '0.5rem' }}><strong>Expectations of academic success:</strong> some parents insist that their children choose fields considered prestigious or offering “good career prospects”.</li>
                <li style={{ marginBottom: '0.5rem' }}><strong>Comparisons with other students or family members:</strong> measuring a student’s success against that of a sibling or friends can create a constant feeling of inadequacy.</li>
                <li style={{ marginBottom: '0.5rem' }}><strong>Indirect control:</strong> some families adopt a subtle stance, valuing certain choices while minimizing others, thus guiding the student’s decision without direct confrontation.</li>
              </ul>
            </div>
          )
        },
        {
          title: "2. Why families exert this pressure",
          content: (
            <div>
              <p style={{ marginBottom: '1rem' }}>
                Parental pressure is not necessarily malicious. In most cases, it stems from a desire to protect the child and ensure their well-being. However, several factors can intensify this pressure:
                Fear of failure: parents want their child to have a “secure” and stable path in order to avoid financial or professional difficulties in the future.
                Cultural or social heritage: in some families, certain professions or fields are socially valued, and deviating from this norm may be perceived as a risk or a disappointment.
                Personal projections: some parents project their own ambitions or regrets onto their children, unconsciously influencing their choices.
                This combination of protection, social norms, and personal projections can make the pressure invisible yet powerful, as the student feels a constant need to meet expectations without necessarily understanding why.
              </p>
              <ul style={{ paddingLeft: '2rem' }}>
                <li style={{ marginBottom: '0.5rem' }}><strong>Fear of failure:</strong> parents want their child to have a “secure” and stable path in order to avoid financial or professional difficulties in the future.</li>
                <li style={{ marginBottom: '0.5rem' }}><strong>Cultural or social heritage:</strong> in some families, certain professions or fields are socially valued, and deviating from this norm may be perceived as a risk or a disappointment.</li>
                <li style={{ marginBottom: '0.5rem' }}><strong>Personal projections:</strong> some parents project their own ambitions or regrets onto their children, unconsciously influencing their choices.</li>
              </ul>
            </div>
          )
        },
        {
          title: "3. The effects of family pressure on students",
          content: (
            <div>
              <p style={{ marginBottom: '1rem' }}>
                The consequences of this pressure can be numerous and affect several aspects of a student’s life:
              </p>
              <p style={{ marginBottom: '1rem' }}>
                <strong>Stress and anxiety:</strong> the fear of disappointing others can lead to physical and psychological symptoms such as sleep disorders, headaches, tension, chronic anxiety, or even academic burnout.
              </p>
              <p style={{ marginBottom: '1rem' }}>
                <strong>Self-doubt and loss of motivation:</strong> the student may feel incapable of making an autonomous choice or pursuing a path that truly suits them. This lack of confidence can hinder their ability to explore new options or consider reorientation.
              </p>
              <p style={{ marginBottom: '1rem' }}>
                <strong>Delayed or conflicted decisions:</strong> some students postpone reorientation out of fear of upsetting their parents, or alternate between several options without ever making a decision.
              </p>
              <p>
                <strong>Impact on well-being and mental health:</strong> continuous pressure can contribute to depression, social isolation, or a loss of interest in studies.
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
                <li style={{ marginBottom: '0.5rem' }}>Observing situations where one feels judged or constrained.</li>
                <li style={{ marginBottom: '0.5rem' }}>Distinguishing between parental care and what becomes an emotional burden.</li>
                <li style={{ marginBottom: '0.5rem' }}>Understanding the motivations behind parents’ expectations (security, prestige, personal experience).</li>
              </ul>

              This approach allows the student to gain perspective and put words to their feelings, an essential step for effective communication with loved ones.

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
              <p style={{ marginBottom: '1rem' }}><strong>Open and respectful dialogue:</strong> expressing one’s motivations and explaining the reorientation project can reduce tensions. For example, showing why a change of field better matches one’s skills and ambitions helps legitimize the choice.</p>
              <p style={{ marginBottom: '1rem' }}><strong>Information and planning:</strong> presenting concrete information (programs, career prospects, professional opportunities) reassures parents and demonstrates that the decision is thoughtful rather than impulsive.</p>
              <p style={{ marginBottom: '1rem' }}><strong>External support:</strong> career counselors, school psychologists, tutors, or peers who have experienced reorientation can offer an objective perspective, help clarify goals, and strengthen self-confidence.</p>
              <p><strong>Setting personal priorities:</strong> the student must identify what matters most to them: passion, personal fulfillment, skill development, career prospects, or personal balance. This serves as a guide during family discussions.
              </p>
              <p><strong>Accepting time and adjustments:</strong> reorientation may require several steps and discussions before parents understand and accept the choice. Patience and perseverance are key to finding a compromise between family expectations and personal aspirations.

              </p>
            </div>
          )
        },
        {
          title: "6. Conclusion",
          content: <p>Reorientation is never a failure, but rather a moment of personal reflection and growth. Family pressure, although often motivated by concern for the child’s well-being, can become an obstacle if it becomes too strong or poorly understood. Understanding its mechanisms, identifying its effects, and implementing communication and support strategies allows students to make informed and calm decisions while respecting both their aspirations and their family relationships.
          </p>
        },
        {
          title: "Sources",
          content: (
            <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.9rem' }}>
              <li style={{ marginBottom: '0.5rem' }}><a href="https://sherpas.com/blog/la-pression-des-parents-pour-les-etudes/" target="_blank" rel="noopener noreferrer" style={{ color: '#E27D60' }}>Sherpas, Parental pressure for studies</a></li>
              <li style={{ marginBottom: '0.5rem' }}><a href="https://diplomeo.com/actualite-gerer_pression_parents_etudes" target="_blank" rel="noopener noreferrer" style={{ color: '#E27D60' }}>Diplomeo, Managing parental pressure on studies</a></li>
              <li style={{ marginBottom: '0.5rem' }}><a href="https://objectif-ast.fr/influence-famille-choix-etudes/" target="_blank" rel="noopener noreferrer" style={{ color: '#E27D60' }}>Objectif AST, The influence of family on study choices</a></li>
              <li style={{ marginBottom: '0.5rem' }}><a href="https://campus.studywatt.fr/articles/stress-des-etudiants-a-la-rentree-6-causes-courantes" target="_blank" rel="noopener noreferrer" style={{ color: '#E27D60' }}>StudyWatt, Student stress</a></li>
              <li><a href="https://www.kotplanet.be/conseils-vie-etudiante/comment-gerer-la-pression-de-tes-parents-pour-tes-etudes/" target="_blank" rel="noopener noreferrer" style={{ color: '#E27D60' }}>KotPlanet, How to manage parental pressure</a></li>
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
          content: <p>Academic failure in higher education refers to all situations in which a student is unable to validate their academic years, courses, or degree, and sometimes ends up dropping out before obtaining a diploma. This phenomenon affects a significant proportion of students and represents a major challenge.</p>
        },
        {
          title: " What are academic failure and dropout?",
          content: (
            <div>
              <p style={{ marginBottom: '1rem' }}>A student is considered to be in a situation of academic failure when they fail exams, are unable to validate teaching units, or stagnate in their results. University dropout goes further: it refers to a student who permanently leaves their program without obtaining a degree.</p>
              <p>In France, it is estimated that more than 20% of students leave higher education without a degree, with a significant concentration of these dropouts occurring during the first year of a bachelor’s degree, where up to 25% of entrants stop their studies before the end of the year.</p>
            </div>
          )
        },
        {
          title: " Main causes of academic failure",
          content: (
            <div>
              <p style={{ marginBottom: '1rem' }}>Failure and dropout are not caused by a single factor; they generally result from a combination of interconnected difficulties—personal, academic, social, and institutional:</p>
              <ul style={{ paddingLeft: '2rem' }}>
                <li style={{ marginBottom: '0.5rem' }}><strong>1. Inadequate orientation:</strong> Many students choose a program that does not match their interests, level, or expectations, sometimes because they followed poorly adapted advice or lacked sufficient information at the time of orientation. This mismatch between training and personal aspirations is one of the most frequent causes of dropout.</li>
                <li style={{ marginBottom: '0.5rem' }}><strong>2. Academic difficulties:</strong>The demands of higher education are often greater than those encountered in high school. Gaps in basic knowledge, poor preparation, or a lack of effective learning methods can lead to repeated failures. The absence of pedagogical support or appropriate assistance reinforces these difficulties.</li>
                <li style={{ marginBottom: '0.5rem' }}><strong>3. Social integration:</strong>A feeling of not belonging to the academic community, a lack of social connections, or the impression of not being supported strongly contribute to dropout. Integration into a new environment requires an adjustment period that is not always facilitated.
                </li>
                <li style={{ marginBottom: '0.5rem' }}><strong>4. Personal issues:</strong> Stress, anxiety, lack of motivation, mental fatigue, or discouragement can affect the ability to study and persevere. A student facing personal difficulties can quickly feel overwhelmed, especially if they do not find support to talk about their situation or receive guidance.
                </li>
                <li style={{ marginBottom: '0.5rem' }}><strong>5. Financial constraints:</strong>Material insecurity is a recurring cause of dropout: difficulties paying for housing, living expenses, and study-related costs force some students to work alongside their studies, reducing the time available for coursework and increasing the risk of failure.
                </li>
                <li style={{ marginBottom: '0.5rem' }}><strong> 6. Organization and pedagogy of institutions:</strong>In some cases, overly rigid programs, a lack of pedagogical support, or unengaging teaching methods can reinforce feelings of failure. Poorly structured curricula, insufficient methodological help, or inaccessible learning materials increase the risk of dropout.</li>
              </ul>
            </div>
          )
        },
        {
          title: " Consequences of academic failure",
          content: (
            <div>
              <p>The effects of failure or dropout are not limited to academic results:</p>
              <ul style={{ paddingLeft: '2rem' }}>
                <li style={{ marginBottom: '0.5rem' }}>Delay or loss of a degree, which can make access to certain jobs more difficult.</li>
                <li style={{ marginBottom: '0.5rem' }}>Difficulties with professional integration, as not having a degree can limit access to qualified or stable employment.</li>
                <li style={{ marginBottom: '0.5rem' }}>Psychological impact (discouragement, loss of confidence), with feelings of hopelessness, reduced self-esteem, or lack of perspective, which can affect mental health.
                </li>
                <li style={{ marginBottom: '0.5rem' }}>Increased economic pressure, especially if the student accumulates debt, precarious contracts, or poorly paid jobs after leaving their studies.
                </li>
              </ul>
            </div>
          )
        },
        {
          title: " How to prevent failure and bounce back",
          content: (
            <div>
              <p style={{ marginBottom: '1rem' }}><strong>Support and guidance:</strong> Career services, university psychologists, tutoring programs, or peer support groups are valuable resources to help students stay on track, develop effective study strategies, and manage motivation.</p>
              <p style={{ marginBottom: '1rem' }}><strong>Reorientation and adaptation:</strong> Changing paths or institutions is not a sign of definitive failure, but often a normal step in an academic journey. Tools such as orientation assessments, transition modules (e.g., bridge programs), or simply discussing one’s project with advisors can help students recover and rebuild a coherent plan.</p>
              <p><strong>Financial and social support:</strong>Financial aid, scholarships, social support services, or information platforms can reduce material pressure and allow students to focus more fully on their studies.</p>
            </div>
          )
        },
        {
          title: "Sources",
          content: (
            <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.9rem' }}>
              <li style={{ marginBottom: '0.5rem' }}><a href="https://info-jeunes.fr/etudes-superieures-comment-rebondir-en-cas-de-decrochage/" target="_blank" rel="noopener noreferrer" style={{ color: '#E27D60' }}>Info-Jeunes — Higher education: how to bounce back</a></li>
              <li style={{ marginBottom: '0.5rem' }}><a href="https://resources.readyeducation.com/hubfs/Ready%20France/FR%20-%20GUIDE%20-%20dropouts%20-%20Jan%2023.pdf" target="_blank" rel="noopener noreferrer" style={{ color: '#E27D60' }}>Ready Education — Dropout guide</a></li>
              <li style={{ marginBottom: '0.5rem' }}><a href="https://shs.hal.science/halshs-04628088/document" target="_blank" rel="noopener noreferrer" style={{ color: '#E27D60' }}>HAL Social Sciences — Article on dropout</a></li>
              <li><a href="https://diplomeo.com/actualite-echec_etude_superieures" target="_blank" rel="noopener noreferrer" style={{ color: '#E27D60' }}>Diplomeo — News on academic failure</a></li>
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
          title: "What is administrative reorientation?",
          content: <p>Administrative reorientation refers to all the official procedures that a student must complete when they wish to change their program, field of study, or institution in higher education. Unlike a simple personal reflection, administrative reorientation involves specific procedures that formalize a new academic path and allow the student to retain an officially recognized student status within the institution.
          </p>
        },
        {
          title: "When and how to reorient?",
          content: (
            <div>
              <p style={{ marginBottom: '1rem' }}>Reorientation can occur at different stages of a university journey. It may take place during the academic year, often at the end of the first semester, or at the end of the academic year, when the student decides not to continue in the initially chosen program. In all cases, it involves a new administrative enrollment, sometimes within the same institution and sometimes in another.</p>
              <p style={{ marginBottom: '1rem' }}>Steps:</p>
              <ul style={{ paddingLeft: '2rem' }}>
                <li style={{ marginBottom: '0.5rem' }}>Find out about admission procedures (Parcoursup or direct university application).</li>
                <li style={{ marginBottom: '0.5rem' }}>Prepare an application file (motivations, academic results).</li>
                <li style={{ marginBottom: '0.5rem' }}>Review by an academic committee to assess the coherence of the project.</li>
              </ul>
            </div>
          )
        },
        {
          title: "Procedures and conditions to be met",
          content: (
            <div>
              <p style={{ marginBottom: '1rem' }}>From an administrative standpoint, reorientation is not automatic. It depends on specific rules, strict timelines, and the intake capacities of programs. When a student wishes to change programs, they must inform themselves about admission modalities: some reorientations are handled directly by the university, while others go through the Parcoursup platform, particularly when applying for first-year entry into a new program.</p>
              <p>Reorientation procedures often require compiling an application file, submitting preferences, and sometimes justifying one’s project. Institutions may review applications through academic committees, which assess the coherence of the academic path, previous results, and the student’s motivation. The goal is to ensure that the new orientation better matches the student’s profile and personal project.</p>
            </div>
          )
        },
        {
          title: "Getting support during reorientation",
          content: (
            <div>
              <p style={{ marginBottom: '1rem' }}>Academic advising and student services play a central role in administrative reorientation. They support students in understanding procedures, help them anticipate the consequences of changing paths, and inform them about existing support systems. This guidance is essential to avoid administrative errors, loss of student rights, or late enrollments.</p>
            </div>
          )
        },
        {
          title: "Impact on academic path and student life",
          content: (
            <div>
              <p style={{ marginBottom: '1rem' }}>Administrative reorientation also has significant consequences for student life. It can affect scholarship payments, student housing, health coverage, and the recognition of previously earned credits. In some cases, validated ECTS credits can be retained and transferred to the new program, allowing students not to start entirely from scratch.</p>
            </div>
          )
        },
        {
          title: "A legitimate step toward academic success",
          content: (
            <div>
              <p style={{ marginBottom: '1rem' }}>Once perceived as a failure, reorientation is now recognized as a possible and legitimate step in a student’s academic journey. Public policies increasingly encourage better recognition of diverse trajectories and seek to secure transitions. Administrative reorientation thus fits into a logic of success, allowing students to progressively build a project better aligned with their aspirations, skills, and personal realities.</p>
              <p style={{ marginBottom: '1rem' }}>When well prepared and supported, administrative reorientation becomes a tool for regaining control over one’s academic path, correcting an initial choice, and moving toward a program that better aligns with personal goals.</p>
            </div>
          )
        },
        {
          title: "Sources",
          content: (
            <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.9rem' }}>
              <li style={{ marginBottom: '0.5rem' }}><a href="https://www.service-public.gouv.fr/particuliers/vosdroits/F31063" target="_blank" rel="noopener noreferrer" style={{ color: '#E27D60' }}>Service-public.fr – Reorientation</a></li>
              <li style={{ marginBottom: '0.5rem' }}><a href="https://www.education.gouv.fr/la-reorientation-dans-l-enseignement-superieur-306702" target="_blank" rel="noopener noreferrer" style={{ color: '#E27D60' }}>Ministry of National Education</a></li>
              <li><a href="https://www.youzful-by-ca.fr/les-etudes-superieures/comment-reussir-sa-reorientation-la-fac" target="_blank" rel="noopener noreferrer" style={{ color: '#E27D60' }}>Youzful – Succeeding in reorientation</a></li>
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
          title: "How it works",
          content: <p>The higher education scholarship based on social criteria is a financial aid provided by the State to support students who face economic difficulties. Its goal is to reduce inequalities and allow a greater number of young people to access higher education and pursue their studies under good conditions. This aid complements family support and can cover part of the expenses related to student life (housing, food, transportation, materials).
          </p>
        },
        {
          title: "Application and Conditions",
          content: (
            <div>
              <p style={{ marginBottom: '1rem' }}>To receive a scholarship, the student must submit an application each year through the <strong>Student Social File (DSE)</strong>. This step is mandatory every year, even in the case of reorientation.</p>
              <p>This process is essential, whether continuing studies or changing academic paths. The DSE takes into account the student’s personal situation, family income, and study choices. Since processing the application may take time, it is strongly recommended to submit it as early as possible.
              </p>
              <p>A student may benefit from up to 7 scholarship entitlements in total throughout their higher education. These entitlements can be used over several years, including in the event of a change in orientation, provided that the student progresses in their academic path (for example, by validating ECTS credits at university). This means that reorientation does not automatically result in the loss of the scholarship.
              </p>
            </div>
          )
        },
        {
          title: "Scholarships and Reorientation",
          content:
            <div>
              <p>A student may benefit from up to 7 scholarship entitlements in total throughout their higher education. These entitlements can be used over several years, including in the event of a change in orientation, provided that the student progresses in their academic path (for example, by validating ECTS credits at university). This means that reorientation does not automatically result in the loss of the scholarship.
              </p>
              <p>The amount of the scholarship depends on several criteria: household income, the number of dependents in the family, and the distance between the family home and the place of study. The scholarship is paid over 10 months and its amount varies according to predefined levels. To retain this aid, the student must meet certain obligations, particularly regular attendance at classes and exams.
              </p>
              <p>In a reorientation pathway, the scholarship plays a crucial role. It allows students to commit to a new program with greater financial security, while encouraging them to stay well informed about their rights and the procedures required to continue benefiting from this aid.
              </p>
            </div>
        },
        {
          title: "Sources",
          content: (
            <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.9rem' }}>
              <li style={{ marginBottom: '0.5rem' }}><a href="https://www.enseignementsup-recherche.gouv.fr/fr/bo/21/Hebdo26/ESRS2117943C.htm" target="_blank" rel="noopener noreferrer" style={{ color: '#E27D60' }}>Ministry of Higher Education – Eligibility rules</a></li>
              <li><a href="https://www.etudiant.gouv.fr/fr/jusqu-7-bourses-successives-durant-vos-etudes-2974" target="_blank" rel="noopener noreferrer" style={{ color: '#E27D60' }}>Etudiant.gouv – Up to 7 consecutive scholarships</a></li>
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
          content:
            <div>
              <p>Mental health refers to a state of psychological well-being that allows a person to feel good in their daily life, cope with difficulties, develop their abilities, and maintain balanced social relationships. It is not limited to the absence of mental disorders; it also includes a sense of fulfillment, self-confidence, emotional regulation, and the ability to seek help when necessary.
              </p>
              <p>Among students, mental health has become a major issue in higher education. Recent studies and reports show a significant increase in psychological distress affecting a large proportion of the student population. Stress, anxiety, exhaustion, discouragement, or feelings of loneliness are common realities—sometimes trivialized—but they can have serious consequences on academic and personal trajectories.
              </p>
            </div>
        },
        {
          title: "A particularly vulnerable life stage",
          content: (
            <div>
              <p style={{ marginBottom: '1rem' }}>Student life represents a major transition period. It often marks the passage into adulthood, with many simultaneous changes: leaving the family home, gaining autonomy, managing a budget, organizing time, and building personal and professional identity. These transformations can be sources of excitement but also of significant psychological strain.
              </p>
              <p style={{ marginBottom: '1rem' }}>Added to this are the demands of the academic world: heavy workloads, frequent assessments, pressure to succeed, comparison with other students, and uncertainty about future career prospects. For some, these factors can lead to feelings of failure, loss of motivation, or long-lasting anxiety.
              </p>
            </div>
          )
        },
        {
          title: "Widespread psychological distress",
          content:
            <div>
              <p>Available data show that students’ mental health has significantly deteriorated in recent years. A large proportion of students report experiencing intense stress, mental fatigue, or anxiety disorders. Many young people also mention depressive episodes, concentration difficulties, or feelings of discouragement regarding their studies.</p>
              <p>Student distress is often exacerbated by financial insecurity. The cost of student life, difficulties accessing housing, the need to work alongside studies, or material insecurity can increase mental load. These constraints reduce rest time, weaken personal balance, and heighten the risk of burnout.
              </p>
              <p>Social isolation is another major factor. Some students struggle to build connections, especially when changing cities, institutions, or fields of study. Reorientation can intensify this sense of loneliness, as it sometimes requires starting over in a new environment without established reference points or social networks.
              </p>
            </div>
        },
        {
          title: " Mental health and reorientation",
          content: (
            <div>
              <p style={{ marginBottom: '1rem' }}>Mental health issues are closely linked to reorientation pathways. Doubts about study choices, fear of making the wrong decision, the взгляд of relatives, or social pressure can generate strong emotional stress. Many students experience reorientation as a personal failure, even though it is often a normal step in an academic journey.
              </p>
              <p>Unaddressed psychological distress can lead to dropout, abandonment of studies, or long-term loss of confidence. Conversely, appropriate support and better recognition of diverse academic paths can help students reorient under better conditions while preserving their mental well-being.
              </p>
            </div>
          )
        },
        {
          title: " A comprehensive approach to mental health",
          content: (
            <div>
              <p style={{ marginBottom: '1rem' }}>Educational institutions emphasize that mental health must be addressed in a global and preventive manner. It is not only about treating disorders, but also about creating environments that promote well-being. This includes the quality of student reception, clarity of information, pedagogical care, and recognition of the difficulties encountered.
              </p>
              <p>Mental health frameworks stress the importance of developing psychosocial skills: learning to manage stress, recognize emotions, seek help, and maintain a balance between personal life and studies. These skills play a key role in preventing crisis situations.
              </p>
            </div>
          )
        },
        {
          title: "Support systems and public policies",
          content: (
            <div>
              <p style={{ marginBottom: '1rem' }}>In response to the scale of the issue, public authorities and higher education institutions have implemented various measures to support student mental health. Preventive actions, awareness campaigns, and psychological listening services have been developed on campuses.
              </p>
              <p>National measures have also been introduced to improve student well-being, particularly through strengthening psychological support, training educational staff to identify signs of distress, and developing partnerships with health professionals. The goal is to break isolation, combat stigma related to mental health difficulties, and foster a culture of support and mutual aid within the student community.
              </p>
            </div>
          )
        },
        {
          title: " A central issue for student success",
          content: (
            <div>
              <p style={{ marginBottom: '1rem' }}>Mental health is now recognized as a key determinant of academic success and persistence. A student who feels supported, listened to, and understood is more likely to engage in their academic path, overcome difficulties, and build a coherent project.
              </p>
              <p>Taking student mental health into account means recognizing that success does not depend solely on academic abilities, but also on psychological well-being, life context, and the ability to make informed choices—including the decision to reorient.
              </p>
            </div>
          )
        },
        {
          title: "Sources",
          content: (
            <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.9rem' }}>
              <li style={{ marginBottom: '0.5rem' }}><a href="https://www.emd.fr/sante-mentale-etudiants/" target="_blank" rel="noopener noreferrer" style={{ color: '#E27D60' }}>EMD – Student mental health</a></li>
              <li style={{ marginBottom: '0.5rem' }}><a href="https://eduscol.education.fr/4063/agir-pour-favoriser-la-sante-mentale-et-le-bien-etre-des-eleves" target="_blank" rel="noopener noreferrer" style={{ color: '#E27D60' }}>Eduscol – Promoting mental health</a></li>
              <li style={{ marginBottom: '0.5rem' }}><a href="https://rrapps-bfc.org/sites/default/files/publications/fichiers/2023/2023-ReferentielSanteMentale.pdf" target="_blank" rel="noopener noreferrer" style={{ color: '#E27D60' }}>RRAPPS – Mental Health Framework</a></li>
              <li style={{ marginBottom: '0.5rem' }}><a href="https://www.enseignementsup-recherche.gouv.fr/sites/default/files/2021-10/15-mesures-sur-le-bien--tre-des-tudiants-en-sant-avril-2018--13355.pdf" target="_blank" rel="noopener noreferrer" style={{ color: '#E27D60' }}>Ministry of Higher Education – 15 measures for student well-being in health studies</a></li>
            </ul>
          )
        }
      ]
    },
    {
      title: "Apprenticeship Support",
      color: "#E0BBE4",
      sections: [
        {
          title: "1. Introduction",
          content: (
            <div>
              <p style={{ marginBottom: '1rem' }}>Choosing an apprenticeship, whether through an apprenticeship contract or a professional training contract, allows students to combine theoretical education with professional experience. However, even with a salary, expenses related to housing, transportation, and daily living can be heavy—especially at the beginning. Fortunately, several support schemes exist to help apprentices.</p>
            </div>
          )
        },
        {
          title: "2. What financial aid is available for apprentices?",
          content: (
            <div>
              <p style={{ marginBottom: '1rem' }}>As an apprentice, you may be eligible for various types of financial assistance to reduce costs related to training, including:</p>

              <p style={{ marginBottom: '0.5rem' }}><strong>✔ Housing assistance:</strong></p>
              <ul style={{ paddingLeft: '2rem' }}>
                <li>APL (Personalized Housing Assistance – CAF): as with any tenant, APL provided by the CAF helps reduce rent based on income, household composition, and type of accommodation. Apprentices are eligible in the same way as working students.
                </li>
                <li>Mobili-Jeune® (Action Logement): a specific aid offered by Action Logement for apprentices under 30 with an apprenticeship or professional training contract. It covers part of the rent after APL deduction, generally between €10 and €100 per month depending on rent and income, up to approximately €1,100 per training year.
                </li>
              </ul>

              <p style={{ marginBottom: '0.5rem' }}><strong>✔ Guarantees and support to access housing</strong></p>
              <ul style={{ paddingLeft: '2rem' }}>
                <li>Visale Guarantee: a free guarantee provided by Action Logement that acts as a guarantor for the apprentice, making it easier to access housing without a personal guarantor.
                </li>
                <li>Loca-Pass® Advance: an interest-free advance of up to €1,200 to finance the security deposit required by the landlord.
                </li>
              </ul>

              <p style={{ marginBottom: '0.5rem' }}><strong>✔ Other financial and practical support</strong></p>
              <p>In addition to housing, other forms of assistance can further support apprentices:</p>
              <ul style={{ paddingLeft: '2rem' }}>
                <li>Activity bonus: paid by the CAF to supplement the modest income of working apprentices, increasing their purchasing power.
                </li>
                <li>Reduced fares or transport subsidies: some regions or services offer discounts for commuting or public transportation.
                </li>
                <li>Driving license assistance: a subsidy of around €500 to facilitate mobility for professional needs.
                </li>
                <li>Regional or OPCO aid: possible support for purchasing professional equipment or during mobility periods such as training or internships abroad.
                </li>
              </ul>

            </div>
          )
        },
        {
          title: "3. Focus on the Mobili-Jeune® scheme",
          content: (
            <div>
              <p style={{ marginBottom: '1rem' }}>The Mobili-Jeune® scheme is one of the main forms of support specifically for apprentices. It covers part of the rent (between €10 and €100 per month) after APL deduction, for a maximum duration of 11 months per year.</p>
              <p style={{ marginBottom: '0.5rem' }}><strong>Who is eligible?</strong></p>
              <ul style={{ paddingLeft: '2rem', marginBottom: '1rem' }}>
                <li>Under 30 years old.</li>
                <li>Apprenticeship or professional training contract (private non-agricultural sector).</li>
                <li>Salary ≤ 120% of the minimum wage.</li>
                <li>Tenant living near the workplace/training location or paying double rent.</li>
              </ul>
              <p style={{ marginBottom: '0.5rem' }}><strong>How is it calculated?</strong></p>
              <p>The Mobili-Jeune aid complements other housing assistance: it is calculated based on rent after APL deduction, further reducing the overall housing cost for the student.
              </p>

              <p style={{ marginBottom: '0.5rem' }}><strong>Amount and duration</strong></p>
              <ul>
                <li>Between €10 and €100 per month, depending on the situation.</li>
                <li>Paid for a maximum of 11 months per training year, and can be combined over two consecutive or non-consecutive years.</li>
              </ul>

              <p style={{ marginBottom: '0.5rem' }}><strong>Application process:</strong></p>
              <p>The application must be submitted online on the Action Logement website, generally between 3 months before the start of the contract and up to 5 months after it begins. Supporting documents such as the apprenticeship contract, rental agreement, and bank details are required.
              </p>

            </div>
          )
        },
        {
          title: "4. Other support schemes to be aware of",
          content: (
            <div>
              <p>Beyond housing, several other forms of assistance can further support apprentices:</p>
              <ul style={{ paddingLeft: '2rem' }}>
                <li style={{ marginBottom: '0.5rem' }}><strong>APL / ALS / ALF (CAF):</strong> Rent reduction independent of Mobili-Jeune.</li>
                <li style={{ marginBottom: '0.5rem' }}><strong>Activity bonus:</strong> Monthly supplementary benefit for low-income workers.
                </li>
                <li style={{ marginBottom: '0.5rem' }}><strong>Visale Guarantee:</strong> Reassures landlords and facilitates obtaining a lease.
                </li>
                <li style={{ marginBottom: '0.5rem' }}><strong>Loca-Pass Advance:</strong> Makes moving into housing easier by covering the security deposit at no cost.</li>
                <li style={{ marginBottom: '0.5rem' }}><strong>Local aid:</strong> Some regions offer assistance for transport, equipment, or apprenticeship-related projects—these vary by location.
                </li>
              </ul>
            </div>
          )
        },
        {
          title: "5. Practical advice",
          content: (
            <div>
              <ul style={{ paddingLeft: '2rem' }}>
                <li style={{ marginBottom: '0.5rem' }}><strong> Apply early:</strong> many of these aids (such as Mobili-Jeune or the Loca-Pass advance) must be requested within specific timeframes around the start of the apprenticeship contract.
                </li>
                <li style={{ marginBottom: '0.5rem' }}><strong> Combine support wisely:</strong> Mobili-Jeune can be combined with APL, the Visale Guarantee, or the Loca-Pass advance to minimize housing costs.</li>
                <li style={{ marginBottom: '0.5rem' }}><strong> Keep all documents:</strong> a complete file speeds up the processing of applications.
                </li>
                <li style={{ marginBottom: '0.5rem' }}><strong> Use simulators:</strong> (CAF, Action Logement, or 1jeune1solution) to estimate your eligibility.
                </li>
              </ul>
            </div>
          )
        },
        {
          title: "6. Conclusion",
          content: <p>Being an apprentice does not mean facing expenses alone. Thanks to a combination of CAF assistance, Action Logement schemes, and complementary support (activity bonus, transport aid, guarantees), it is possible to significantly reduce costs related to housing and daily living. The key is to be aware of these schemes, prepare applications in advance, and carefully build your file to maximize access to all available support.
          </p>
        },
        {
          title: "Sources",
          content: (
            <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.9rem' }}>
              <li style={{ marginBottom: '0.5rem' }}><a href="https://www.service-public.gouv.fr/particuliers/vosdroits/F38630" target="_blank" rel="noopener noreferrer" style={{ color: '#E27D60' }}>Service-Public – Financial aid for apprentices</a></li>
              <li style={{ marginBottom: '0.5rem' }}><a href="https://www.actionlogement.fr/l-aide-mobili-jeune" target="_blank" rel="noopener noreferrer" style={{ color: '#E27D60' }}>Action Logement – MOBILI-JEUNE aid</a></li>
              <li style={{ marginBottom: '0.5rem' }}><a href="https://www.letudiant.fr/etudes/alternance/alternance-quelles-aides-financieres-peut-on-obtenir.html" target="_blank" rel="noopener noreferrer" style={{ color: '#E27D60' }}>L’Étudiant – Financial aid for apprentices</a></li>
              <li style={{ marginBottom: '0.5rem' }}><a href="https://www.concepteursdavenirs.fr/liste-aide-financiere-alternance" target="_blank" rel="noopener noreferrer" style={{ color: '#E27D60' }}>Concepteurs d’Avenirs – List of apprenticeship financial aid</a></li>
              <li style={{ marginBottom: '0.5rem' }}><a href="https://www.caf.fr/allocataires/caf-du-var/offre-de-service/logement/je-suis-etudiant-etou-apprenti/je-suis-etudiant-en-alternance" target="_blank" rel="noopener noreferrer" style={{ color: '#E27D60' }}>CAF du Var – Apprentices and students</a></li>
              <li><a href="https://money.wizbii.com/advices/aide-alternance-le-guide-pour-la-rentree" target="_blank" rel="noopener noreferrer" style={{ color: '#E27D60' }}>Wizbii – Apprenticeship back-to-school guide</a></li>
            </ul>
          )
        }
      ]
    },

    {
      title: "APL (Housing Assistance)",
      color: "#957DAD",
      sections: [
        {
          title: "1. Introduction",
          content: <p>For many students, accessing housing represents a major financial challenge. Rent costs, combined with everyday expenses, can be a significant obstacle. To support students, the French government offers several financial aid schemes, among which APL (Personalized Housing Assistance) is one of the most well-known. Understanding how it works, its eligibility conditions, and application process is essential to secure housing while easing the student budget.
          </p>
        },
        {
          title: "2. What is APL?",
          content:
            <div>
              <p>APL is a financial aid designed to reduce the amount of rent or monthly loan payments for housing. It is calculated based on:
              </p>
              <ul>
                <li>The student’s income (or their parents’ income, depending on the situation)</li>
                <li>The amount of rent</li>
                <li>The type of accommodation</li>
                <li>The geographical location</li>
              </ul>
              <p>The goal is to make housing more affordable, particularly for students who are mobile, living far from their family, or fully financing their studies on their own.
              </p>
            </div>
        },
        {
          title: "3. Who is eligible?",
          content:
            <div>
              <p>APL is not available to all students. The main eligibility conditions are:
              </p>
              <ul>
                <li>Being a tenant or co-tenant of an approved (CAF-recognized) housing unit.</li>
                <li>Being a student, apprentice, or enrolled in vocational training.</li>
                <li>Residing legally in France.</li>
                <li>Meeting specific income conditions, which vary depending on personal and family circumstances.</li>
              </ul>
              <p>It is important to note that APL differs from other housing benefits, such as ALF (Family Housing Allowance) or ALS (Social Housing Allowance), which target specific groups.
              </p>
            </div>
        },
        {
          title: "4. How to apply?",
          content: (
            <div>
              <p style={{ marginBottom: '1rem' }}>The APL application can be submitted online via the CAF website or partner platforms and follows several key steps:
              </p>
              <ol>
                <li>Create a CAF account or log in to your personal space.</li>
                <li>Provide details about your situation: type of accommodation, rent amount, landlord’s contact details, and student status.</li>
                <li>Submit the required supporting documents, including:
                  <ul>
                    <li>Rental agreement or landlord’s certificate</li>
                    <li>Bank account details (RIB)</li>
                    <li>Proof of personal or family income</li>
                    <li>Student ID card or enrollment certificate</li>
                  </ul>
                </li>
                <li>Wait for the calculation and notification: CAF determines the amount of aid and informs the student.</li>
                <li>Payment of the aid: APL is paid directly to the landlord or to the student, depending on the case.</li>
              </ol>
              <p>Processing times may vary, but it is recommended to apply before signing the lease or as soon as you move into the accommodation.
              </p>
            </div>
          )
        },
        {
          title: "5. Essential documents",
          content:
            <div>
              <p>For a complete and fast application, certain documents are always required:
              </p>
              <ul>
                <li>Rental contract or recent lease agreement</li>
                <li>Accommodation certificate, if applicable</li>
                <li>Proof of income (salary, scholarships, possible benefits)</li>
                <li>Student card or enrollment certificate</li>
                <li>Bank account details (RIB) for payments</li>
              </ul>
              <p>Diplomeo and local CAF offices emphasize the importance of carefully preparing these documents to avoid delays in processing the application.
              </p>
            </div>
        },
        {
          title: "6. Important points to know",
          content:
            <div>
              <ul>
                <li>APL is not automatic: you must apply for it and meet all eligibility requirements.</li>
                <li>The amount may vary each month depending on declared income and actual rent.</li>
                <li>APL can complement other student aid or scholarships, but it is essential to check combination rules.</li>
                <li>Regular updates of personal information are necessary to avoid overpayments or interruptions.</li>
              </ul>
            </div>
        },
        {
          title: "7. Practical advice for students",
          content:
            <div>
              <ol>
                <li><strong>Anticipate the application:</strong> prepare documents and create your CAF account as early as possible.</li>
                <li><strong>Check housing approval:</strong> only certain housing units are eligible for APL.</li>
                <li><strong>Monitor your application online:</strong> CAF provides full tracking to identify missing information.</li>
                <li><strong>Seek support:</strong> student associations, university social services, and platforms like Gestetud can help guide students through the process.</li>
                <li><strong>Assess your real budget:</strong> even with APL, it is essential to calculate expenses to avoid financial difficulties.</li>
              </ol>
            </div>
        },
        {
          title: "8. Conclusion",
          content:
            <p>APL is a crucial support for students, helping significantly reduce housing costs and allowing them to focus on their studies. Understanding eligibility criteria, preparing the necessary documents, and carefully following the application process maximizes the chances of receiving this aid and securing accommodation. When properly managed, this support reduces financial stress and contributes to academic success.
            </p>
        },
        {
          title: "Sources",
          content: (
            <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.9rem' }}>
              <li style={{ marginBottom: '0.5rem' }}><a href="https://www.caf.fr/allocataires/caf-du-nord/offre-de-service/logement/l-aide-au-logement-etudiant" target="_blank" rel="noopener noreferrer" style={{ color: '#E27D60' }}>CAF – Student housing assistance</a></li>
              <li style={{ marginBottom: '0.5rem' }}><a href="https://www.gestetud.fr/apl-etudiant-toutes-les-conditions-et-demarches-pour-beneficier-de-laide-au-logement" target="_blank" rel="noopener noreferrer" style={{ color: '#E27D60' }}>Gestetud – Conditions and procedures</a></li>
              <li style={{ marginBottom: '0.5rem' }}><a href="https://diplomeo.com/actualite-quel_document_pour_demande_apl" target="_blank" rel="noopener noreferrer" style={{ color: '#E27D60' }}>Diplomeo – APL required documents</a></li>
              <li style={{ marginBottom: '0.5rem' }}><a href="https://www.capital.fr/immobilier/apl-etudiant-1397706" target="_blank" rel="noopener noreferrer" style={{ color: '#E27D60' }}>Capital – APL for students</a></li>
              <li style={{ marginBottom: '0.5rem' }}><a href="https://www.caf.fr/allocataires/caf-du-nord/offre-de-service/logement/l-aide-au-logement-etudiant" target="_blank" rel="noopener noreferrer" style={{ color: '#E27D60' }}>CAF du Nord – Student housing assistance</a></li>
              <li style={{ marginBottom: '0.5rem' }}><a href="https://www.caf.fr/allocataires/caf-de-la-vienne/offre-de-service/logement/je-suis-etudiante/faire-votre-demande-d-aide-au-logement/les-etapes-cles-pour-faire-sa-demande-d-aide-au-logement-etudiant" target="_blank" rel="noopener noreferrer" style={{ color: '#E27D60' }}>CAF de la Vienne – Key steps to apply for student housing assistance</a></li>
              <li style={{ marginBottom: '0.5rem' }}><a href="https://caf.fr/allocataires/caf-du-var/offre-de-service/logement/je-suis-etudiant-etou-apprenti/les-etapes-cles-pour-faire-sa-demande-d-aide-au-logement" target="_blank" rel="noopener noreferrer" style={{ color: '#E27D60' }}>CAF du Var – Key steps to apply for student housing assistance</a></li>
              <li><a href="https://www.gestetud.fr/apl-etudiant-toutes-les-conditions-et-demarches-pour-beneficier-de-laide-au-logement" target="_blank" rel="noopener noreferrer" style={{ color: '#E27D60' }}>Gestetud – APL for students: conditions and procedures</a></li>
            </ul>
          )
        },

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
