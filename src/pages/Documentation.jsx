import React, { useState, useRef, useEffect } from 'react';

const Documentation = ({ language, onNavigate }) => {
  const [selectedThemeIndex, setSelectedThemeIndex] = useState(null);
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [selectedThemeIndex]);

  const themesFr = [
    {
      title: "Pression familiale",
      color: "#FFD7B5", // Pastel Orange
      content: (
        <div style={{ textAlign: 'left' }}>
          <p style={{ marginBottom: '1rem' }}>
            La réorientation scolaire est un moment clé dans la vie d’un étudiant. Si elle peut représenter une opportunité de mieux s’aligner avec ses intérêts et ses ambitions, elle est souvent accompagnée de stress et d’incertitudes. L’un des facteurs majeurs de cette tension est la pression familiale. Comprendre son origine, ses manifestations et ses effets permet non seulement d’informer les étudiants, mais aussi de les aider à faire des choix plus sereins.
          </p>

          <h3 style={{ fontSize: '1.5rem', color: '#fdb933', marginTop: '2rem', marginBottom: '1rem' }}>1. Qu’est-ce que la pression familiale ?</h3>
          <p style={{ marginBottom: '1rem' }}>
            La pression familiale se définit comme l’ensemble des attentes, recommandations ou exigences implicites ou explicites des parents concernant le parcours scolaire et professionnel de leurs enfants. Elle peut prendre des formes très diverses :
          </p>
          <ul style={{ paddingLeft: '2rem', marginBottom: '1rem' }}>
            <li style={{ marginBottom: '0.5rem' }}><strong>Attentes de réussite académique :</strong> certains parents insistent pour que leurs enfants choisissent des filières réputées prestigieuses ou avec de “bonnes perspectives de carrière”.</li>
            <li style={{ marginBottom: '0.5rem' }}><strong>Comparaisons avec d’autres élèves ou membres de la famille :</strong> le fait de mesurer la réussite de l’étudiant à celle d’un frère, d’une sœur ou d’amis peut créer un sentiment constant d’insuffisance.</li>
            <li style={{ marginBottom: '0.5rem' }}><strong>Contrôle indirect :</strong> certaines familles adoptent une posture subtile, valorisant certains choix ou minimisant d’autres, orientant ainsi la décision de l’étudiant sans confrontation directe.</li>
          </ul>
          <p style={{ marginBottom: '1rem' }}>
            Ces pressions, lorsqu’elles sont excessives, peuvent limiter la capacité de l’étudiant à écouter ses propres envies et à prendre des décisions autonomes, notamment lors d’une réorientation.
          </p>

          <h3 style={{ fontSize: '1.5rem', color: '#fdb933', marginTop: '2rem', marginBottom: '1rem' }}>2. Pourquoi les familles exercent cette pression</h3>
          <p style={{ marginBottom: '1rem' }}>
            La pression parentale n’est pas nécessairement malveillante. Dans la majorité des cas, elle découle de soucis de protection et de bien-être de l’enfant. Cependant, plusieurs facteurs peuvent accentuer cette pression :
          </p>
          <ul style={{ paddingLeft: '2rem', marginBottom: '1rem' }}>
            <li style={{ marginBottom: '0.5rem' }}><strong>Peur de l’échec :</strong> Les parents veulent que leur enfant ait un parcours “sécurisé” et stable pour éviter des difficultés financières ou professionnelles à l’avenir.</li>
            <li style={{ marginBottom: '0.5rem' }}><strong>Héritage culturel ou social :</strong> Dans certaines familles, certaines professions ou filières sont valorisées socialement, et dévier de cette norme peut être perçu comme un risque ou une déception.</li>
            <li style={{ marginBottom: '0.5rem' }}><strong>Projections personnelles :</strong> Certains parents projettent leurs propres ambitions ou regrets sur leurs enfants, influençant inconsciemment leurs choix.</li>
          </ul>
          <p style={{ marginBottom: '1rem' }}>
            Cette combinaison de protection, de normes sociales et de projections personnelles peut rendre la pression invisible mais puissante, car l’étudiant ressent un besoin constant de répondre aux attentes sans forcément savoir pourquoi.
          </p>

          <h3 style={{ fontSize: '1.5rem', color: '#fdb933', marginTop: '2rem', marginBottom: '1rem' }}>3. Les effets de la pression familiale sur l’étudiant</h3>
          <p style={{ marginBottom: '1rem' }}>
            Les conséquences de cette pression peuvent être multiples et toucher plusieurs aspects de la vie de l’étudiant :
          </p>
          <p style={{ marginBottom: '1rem' }}>
            <strong>Stress et anxiété</strong><br />
            La peur de décevoir peut provoquer des symptômes physiques et psychologiques : troubles du sommeil, maux de tête, tension, anxiété chronique, voire burnout académique.
          </p>
          <p style={{ marginBottom: '1rem' }}>
            <strong>Doute de soi et perte de motivation</strong><br />
            L’étudiant peut se sentir incapable de faire un choix autonome ou de suivre une voie qui lui correspond. Ce manque de confiance peut freiner sa capacité à explorer de nouvelles options ou à se réorienter.
          </p>
          <p style={{ marginBottom: '1rem' }}>
            <strong>Décisions tardives ou conflictuelles</strong><br />
            Certains étudiants retardent leur réorientation par peur de froisser leurs parents, ou alternent entre plusieurs options sans jamais se décider, ce qui peut prolonger le stress et créer un sentiment d’instabilité.
          </p>
          <p style={{ marginBottom: '1rem' }}>
            <strong>Impact sur le bien-être et la santé mentale</strong><br />
            La pression continue peut contribuer à la dépression, à l’isolement social ou à la perte d’intérêt pour les études. Ces effets sont souvent amplifiés si l’étudiant ne trouve pas de soutien extérieur.
          </p>

          <h3 style={{ fontSize: '1.5rem', color: '#fdb933', marginTop: '2rem', marginBottom: '1rem' }}>4. Identifier et comprendre la pression familiale</h3>
          <p style={{ marginBottom: '1rem' }}>
            Avant de gérer la pression, il est essentiel de la reconnaître et de l’analyser :
          </p>
          <ul style={{ paddingLeft: '2rem', marginBottom: '1rem' }}>
            <li style={{ marginBottom: '0.5rem' }}>Observer les situations où l’on se sent jugé ou contraint.</li>
            <li style={{ marginBottom: '0.5rem' }}>Distinguer ce qui relève de la bienveillance parentale et ce qui devient un poids émotionnel.</li>
            <li style={{ marginBottom: '0.5rem' }}>Comprendre les motivations derrière les attentes des parents (sécurité, prestige, expérience personnelle).</li>
          </ul>
          <p style={{ marginBottom: '1rem' }}>
            Cette démarche permet à l’étudiant de prendre du recul et de mettre des mots sur ce qu’il ressent, étape indispensable pour communiquer efficacement avec ses proches.
          </p>

          <h3 style={{ fontSize: '1.5rem', color: '#fdb933', marginTop: '2rem', marginBottom: '1rem' }}>5. Stratégies pour gérer la pression familiale</h3>
          <p style={{ marginBottom: '1rem' }}>
            Gérer la pression familiale est un processus progressif qui combine communication, préparation et soutien externe :
          </p>
          <p style={{ marginBottom: '1rem' }}>
            <strong>Dialogue ouvert et respectueux</strong><br />
            Exprimer ses motivations et expliquer le projet de réorientation peut réduire les tensions. Par exemple, montrer pourquoi un changement de filière correspond mieux à ses compétences et à ses ambitions permet de légitimer son choix.
          </p>
          <p style={{ marginBottom: '1rem' }}>
            <strong>Information et planification</strong><br />
            Présenter des informations concrètes (programmes, débouchés, opportunités professionnelles) rassure les parents et démontre que la décision n’est pas impulsive mais réfléchie.
          </p>
          <p style={{ marginBottom: '1rem' }}>
            <strong>Soutien extérieur</strong><br />
            Les conseillers d’orientation, psychologues scolaires, tuteurs ou pairs ayant vécu une réorientation peuvent offrir un point de vue objectif, aider à clarifier ses objectifs et renforcer la confiance en soi.
          </p>
          <p style={{ marginBottom: '1rem' }}>
            <strong>Fixer ses propres priorités</strong><br />
            L’étudiant doit identifier ce qui est le plus important pour lui : passion, épanouissement personnel, développement de compétences, perspectives de carrière, ou équilibre personnel. Cela sert de guide lors des discussions familiales.
          </p>
          <p style={{ marginBottom: '1rem' }}>
            <strong>Accepter le temps et les ajustements</strong><br />
            La réorientation peut nécessiter plusieurs étapes et discussions avant que les parents comprennent et acceptent le choix. La patience et la persévérance sont clés pour trouver un compromis entre attentes familiales et aspirations personnelles.
          </p>

          <h3 style={{ fontSize: '1.5rem', color: '#fdb933', marginTop: '2rem', marginBottom: '1rem' }}>6. Conclusion</h3>
          <p style={{ marginBottom: '2rem' }}>
            La réorientation n’est jamais un échec, mais un moment de réflexion personnelle et de croissance. La pression familiale, bien que souvent motivée par le souci du bien-être de l’enfant, peut représenter un obstacle si elle devient trop forte ou mal comprise. Comprendre ses mécanismes, identifier ses effets et mettre en place des stratégies de communication et de soutien permet à l’étudiant de faire un choix éclairé et serein, en respectant à la fois ses aspirations et ses relations familiales.
          </p>

          <hr style={{ border: '0', borderTop: '1px solid #ddd', margin: '2rem 0' }} />

          <h3 style={{ fontSize: '1.2rem', color: '#2c3e50', marginBottom: '1rem' }}>Sources</h3>
          <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.9rem' }}>
            <li style={{ marginBottom: '0.5rem' }}>
              <strong>Sherpas, La pression des parents pour les études</strong><br />
              <a href="https://sherpas.com/blog/la-pression-des-parents-pour-les-etudes/" target="_blank" rel="noopener noreferrer" style={{ color: '#E27D60', textDecoration: 'underline' }}>
                https://sherpas.com/blog/la-pression-des-parents-pour-les-etudes/
              </a>
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <strong>Diplomeo, Gérer la pression des parents sur les études</strong><br />
              <a href="https://diplomeo.com/actualite-gerer_pression_parents_etudes" target="_blank" rel="noopener noreferrer" style={{ color: '#E27D60', textDecoration: 'underline' }}>
                https://diplomeo.com/actualite-gerer_pression_parents_etudes
              </a>
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <strong>Objectif AST, L’influence de la famille sur le choix des études</strong><br />
              <a href="https://objectif-ast.fr/influence-famille-choix-etudes/" target="_blank" rel="noopener noreferrer" style={{ color: '#E27D60', textDecoration: 'underline' }}>
                https://objectif-ast.fr/influence-famille-choix-etudes/
              </a>
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <strong>StudyWatt, Stress des étudiants à la rentrée : 6 causes courantes</strong><br />
              <a href="https://campus.studywatt.fr/articles/stress-des-etudiants-a-la-rentree-6-causes-courantes" target="_blank" rel="noopener noreferrer" style={{ color: '#E27D60', textDecoration: 'underline' }}>
                https://campus.studywatt.fr/articles/stress-des-etudiants-a-la-rentree-6-causes-courantes
              </a>
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <strong>Carré d’As Tutorat, Gérer la pression familiale autour des études en gestion</strong><br />
              <a href="https://carredastutorat.com/article/gerer-la-pression-familiale-autour-des-etudes-en-gestion" target="_blank" rel="noopener noreferrer" style={{ color: '#E27D60', textDecoration: 'underline' }}>
                https://carredastutorat.com/article/gerer-la-pression-familiale-autour-des-etudes-en-gestion
              </a>
            </li>
            <li>
              <strong>KotPlanet, Comment gérer la pression de tes parents pour tes études</strong><br />
              <a href="https://www.kotplanet.be/conseils-vie-etudiante/comment-gerer-la-pression-de-tes-parents-pour-tes-etudes/" target="_blank" rel="noopener noreferrer" style={{ color: '#E27D60', textDecoration: 'underline' }}>
                https://www.kotplanet.be/conseils-vie-etudiante/comment-gerer-la-pression-de-tes-parents-pour-tes-etudes/
              </a>
            </li>
          </ul>
        </div>
      )
    },
    {
      title: "Echec scolaire",
      color: "#A8E6CF", // Pastel Green
      content: (
        <div style={{ textAlign: 'left' }}>
          <p style={{ marginBottom: '1rem' }}>
            L’échec scolaire en enseignement supérieur désigne l’ensemble des situations où un étudiant ne parvient pas à valider ses années, ses cours ou son diplôme, et finit parfois par abandonner son cursus avant d’obtenir un diplôme. Ce phénomène touche une part significative des étudiant·es et constitue un enjeu majeur, tant pour les individus concernés que pour les établissements et la société dans son ensemble.
          </p>

          <h3 style={{ fontSize: '1.5rem', color: '#fdb933', marginTop: '2rem', marginBottom: '1rem' }}>📉 Qu’est-ce que l’échec et le décrochage ?</h3>
          <p style={{ marginBottom: '1rem' }}>
            Un étudiant est considéré en situation d’échec scolaire lorsqu’il échoue à ses examens, ne parvient pas à valider des unités d’enseignement ou stagne dans ses résultats au point de compromettre sa progression dans son cursus. Le décrochage universitaire va plus loin : il s’agit d’un étudiant qui, après des difficultés répétées, quitte définitivement son cursus sans diplôme.
          </p>
          <p style={{ marginBottom: '1rem' }}>
            En France, on estime que plus de 20 % des étudiant·es quittent l’enseignement supérieur sans diplôme, avec une concentration importante de ces abandons en première année de licence, où jusqu’à 25 % des entrants arrêtent leurs études avant la fin de l’année.
          </p>

          <h3 style={{ fontSize: '1.5rem', color: '#fdb933', marginTop: '2rem', marginBottom: '1rem' }}>🎯 Les causes principales de l’échec scolaire</h3>
          <p style={{ marginBottom: '1rem' }}>
            L’échec et le décrochage ne sont pas causés par un seul facteur ; ils résultent généralement d’un ensemble de difficultés interconnectées, tant personnelles qu’académiques, sociales et institutionnelles.
          </p>

          <h4 style={{ fontSize: '1.1rem', color: '#2c3e50', marginTop: '1rem', marginBottom: '0.5rem', fontWeight: 'bold' }}>📌 1. Orientation inadaptée</h4>
          <p style={{ marginBottom: '1rem' }}>
            Beaucoup d’étudiant·es choisissent une formation qui ne correspond pas à leurs intérêts, à leur niveau ou à leurs attentes, parfois parce qu’ils ont suivi des conseils peu adaptés ou parce qu’ils manque d’informations au moment de l’orientation. Cette mauvaise adéquation entre la formation et les aspirations personnelles est l’une des causes les plus fréquentes d’abandon.
          </p>

          <h4 style={{ fontSize: '1.1rem', color: '#2c3e50', marginTop: '1rem', marginBottom: '0.5rem', fontWeight: 'bold' }}>📌 2. Difficultés académiques</h4>
          <p style={{ marginBottom: '1rem' }}>
            Les exigences des études supérieures sont souvent plus élevées que celles rencontrées au lycée. Des lacunes dans les connaissances de base, une mauvaise préparation ou un manque de méthodes d’apprentissage efficaces peuvent entraîner des échecs répétés. L’absence de soutien pédagogique ou d’aide adaptée renforce cette difficulté.
          </p>

          <h4 style={{ fontSize: '1.1rem', color: '#2c3e50', marginTop: '1rem', marginBottom: '0.5rem', fontWeight: 'bold' }}>📌 3. Intégration sociale et environnement académique</h4>
          <p style={{ marginBottom: '1rem' }}>
            Un sentiment de non-appartenance à la communauté universitaire, le manque de contacts sociaux ou l’impression de ne pas être soutenu contribuent fortement au décrochage. L’intégration dans un nouvel environnement demande un temps d’ajustement qui n’est pas toujours facilité.
          </p>

          <h4 style={{ fontSize: '1.1rem', color: '#2c3e50', marginTop: '1rem', marginBottom: '0.5rem', fontWeight: 'bold' }}>📌 4. Problèmes personnels et santé mentale</h4>
          <p style={{ marginBottom: '1rem' }}>
            Le stress, l’anxiété, le manque de motivation, la fatigue mentale ou le découragement peuvent affecter la capacité à étudier et à persévérer. Un étudiant en difficulté personnelle peut vite se sentir dépassé, surtout s’il ne trouve pas d’appui pour en parler ou pour être accompagné.
          </p>

          <h4 style={{ fontSize: '1.1rem', color: '#2c3e50', marginTop: '1rem', marginBottom: '0.5rem', fontWeight: 'bold' }}>📌 5. Contraintes financières</h4>
          <p style={{ marginBottom: '1rem' }}>
            La précarité matérielle est une cause récurrente d’abandon : difficultés à payer le logement, les frais de vie et les dépenses liées aux études obligent certains étudiant·es à travailler en parallèle, ce qui réduit le temps disponible pour leurs études et augmente le risque d’échec.
          </p>

          <h4 style={{ fontSize: '1.1rem', color: '#2c3e50', marginTop: '1rem', marginBottom: '0.5rem', fontWeight: 'bold' }}>📌 6. Organisation et pédagogie des établissements</h4>
          <p style={{ marginBottom: '1rem' }}>
            Dans certains cas, des cursus trop rigides, une absence d’accompagnement pédagogique ou une pédagogie peu engageante peuvent renforcer le sentiment d’échec. Des programmes mal structurés, un manque d’aide méthodologique ou des supports pédagogiques peu accessibles augmentent les risques de décrochage.
          </p>

          <h3 style={{ fontSize: '1.5rem', color: '#fdb933', marginTop: '2rem', marginBottom: '1rem' }}>📊 Les conséquences de l’échec scolaire</h3>
          <p style={{ marginBottom: '1rem' }}>
            Les effets d’un échec ou d’un décrochage ne se limitent pas aux résultats académiques :
          </p>
          <ul style={{ paddingLeft: '2rem', marginBottom: '1rem' }}>
            <li style={{ marginBottom: '0.5rem' }}>🎓 <strong>Retard ou perte de diplôme</strong>, ce qui peut rendre l’accès à certains emplois plus difficile.</li>
            <li style={{ marginBottom: '0.5rem' }}>💼 <strong>Difficultés d’insertion professionnelle</strong>, car ne pas avoir de diplôme peut limiter les opportunités d’emploi qualifié ou stable.</li>
            <li style={{ marginBottom: '0.5rem' }}>🧠 <strong>Impact psychologique</strong>, avec des sentiments de découragement, de perte de confiance ou de manque de perspective, ce qui peut peser sur la santé mentale.</li>
            <li style={{ marginBottom: '0.5rem' }}>💰 <strong>Pression économique accrue</strong>, surtout si l’étudiant·e cumule des dettes, des contrats précaires ou des emplois mal rémunérés après l’arrêt des études.</li>
          </ul>

          <h3 style={{ fontSize: '1.5rem', color: '#fdb933', marginTop: '2rem', marginBottom: '1rem' }}>🤝 Comment prévenir et rebondir ?</h3>
          <p style={{ marginBottom: '1rem' }}>
            Comprendre l’échec comme un phénomène complexe ouvre la voie à des solutions variées et structurées, tant au niveau individuel que collectif.
          </p>
          <p style={{ marginBottom: '1rem' }}>
            📍 <strong>Soutien et accompagnement</strong><br />
            Les services d’orientation, les psychologues universitaires, les tutorats ou les groupes d’entraide entre pairs sont des ressources précieuses pour aider les étudiant·es à garder le cap, à trouver des stratégies d’étude efficaces et à gérer leur motivation.
          </p>
          <p style={{ marginBottom: '1rem' }}>
            📍 <strong>Réorientation et adaptation</strong><br />
            Changer de voie ou d’établissement n’est pas un signe d’échec définitif, mais souvent une étape normale d’un parcours. Des dispositifs comme les bilans d’orientation, les modules de transition (ex. modules tremplin), ou simplement parler de son projet avec des conseillers peut aider à rebondir et à reconstruire un projet cohérent.
          </p>
          <p style={{ marginBottom: '1rem' }}>
            📍 <strong>Soutiens financiers et sociaux</strong><br />
            Des aides financières, des bourses, un accompagnement social ou des plateformes d’information peuvent réduire la pression matérielle et permettre à l’étudiant·e de se concentrer davantage sur ses études.
          </p>

          <h3 style={{ fontSize: '1.5rem', color: '#fdb933', marginTop: '2rem', marginBottom: '1rem' }}>📌 En résumé</h3>
          <p style={{ marginBottom: '2rem' }}>
            L’échec scolaire et le décrochage en études supérieures ne sont pas des phénomènes isolés ou simples : ils résultent d’une interaction complexe de facteurs personnels, académiques, sociaux et institutionnels. Comprendre ces mécanismes permet non seulement de mieux expliquer pourquoi il survient, mais aussi de proposer des réponses adaptées pour aider les étudiant·es à surmonter les difficultés, à réajuster leur projet et à poursuivre leurs études de manière plus sereine.
          </p>

          <hr style={{ border: '0', borderTop: '1px solid #ddd', margin: '2rem 0' }} />

          <h3 style={{ fontSize: '1.2rem', color: '#2c3e50', marginBottom: '1rem' }}>Sources</h3>
          <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.9rem' }}>
            <li style={{ marginBottom: '0.5rem' }}>
              <strong>Info-Jeunes — Études supérieures : comment rebondir en cas de décrochage</strong><br />
              <a href="https://info-jeunes.fr/etudes-superieures-comment-rebondir-en-cas-de-decrochage/" target="_blank" rel="noopener noreferrer" style={{ color: '#E27D60', textDecoration: 'underline' }}>
                https://info-jeunes.fr/etudes-superieures-comment-rebondir-en-cas-de-decrochage/
              </a>
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <strong>Ready Education — Guide sur les abandons (dropouts) universitaires</strong><br />
              <a href="https://resources.readyeducation.com/hubfs/Ready%20France/FR%20-%20GUIDE%20-%20dropouts%20-%20Jan%2023.pdf" target="_blank" rel="noopener noreferrer" style={{ color: '#E27D60', textDecoration: 'underline' }}>
                https://resources.readyeducation.com/hubfs/Ready%20France/FR%20-%20GUIDE%20-%20dropouts%20-%20Jan%2023.pdf
              </a>
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <strong>HAL Sciences Sociales — Article scientifique sur le décrochage universitaire</strong><br />
              <a href="https://shs.hal.science/halshs-04628088/document" target="_blank" rel="noopener noreferrer" style={{ color: '#E27D60', textDecoration: 'underline' }}>
                https://shs.hal.science/halshs-04628088/document
              </a>
            </li>
            <li>
              <strong>Diplomeo — Actualité sur l’échec en études supérieures</strong><br />
              <a href="https://diplomeo.com/actualite-echec_etude_superieures" target="_blank" rel="noopener noreferrer" style={{ color: '#E27D60', textDecoration: 'underline' }}>
                https://diplomeo.com/actualite-echec_etude_superieures
              </a>
            </li>
          </ul>
        </div>
      )
    },
    {
      title: "Reorientation administrative",
      color: "#FDFFAB", // Pastel Yellow
      content: (
        <div style={{ textAlign: 'left' }}>
          <p style={{ marginBottom: '1rem' }}>
            La réorientation administrative correspond à l’ensemble des démarches officielles qu’un étudiant doit effectuer lorsqu’il souhaite changer de formation, de filière ou d’établissement dans l’enseignement supérieur. Contrairement à une simple réflexion personnelle, la réorientation administrative engage des procédures précises qui permettent de formaliser un nouveau parcours d’études et de conserver un statut étudiant reconnu par l’institution.
          </p>
          <p style={{ marginBottom: '1rem' }}>
            La réorientation peut intervenir à différents moments du parcours universitaire. Elle peut avoir lieu en cours d’année, souvent à la fin du premier semestre, ou à la fin de l’année universitaire, lorsque l’étudiant décide de ne pas poursuivre dans la formation initialement choisie. Dans tous les cas, elle implique une nouvelle inscription administrative, parfois dans le même établissement, parfois dans un autre.
          </p>
          <p style={{ marginBottom: '1rem' }}>
            Sur le plan administratif, la réorientation n’est pas automatique. Elle dépend de règles spécifiques, de calendriers précis et des capacités d’accueil des formations. Lorsqu’un étudiant souhaite changer de formation, il doit se renseigner sur les modalités d’accès : certaines réorientations se font directement auprès de l’université, tandis que d’autres passent par la plateforme Parcoursup, notamment lorsqu’il s’agit d’une inscription en première année dans une nouvelle formation.
          </p>
          <p style={{ marginBottom: '1rem' }}>
            Les démarches de réorientation demandent souvent de constituer un dossier, de formuler des vœux et parfois de justifier son projet. Les établissements peuvent examiner les candidatures à travers des commissions pédagogiques, qui évaluent la cohérence du parcours, les résultats obtenus et la motivation de l’étudiant. L’objectif est de vérifier que la nouvelle orientation correspond davantage à son profil et à son projet personnel.
          </p>
          <p style={{ marginBottom: '1rem' }}>
            Les services d’orientation et de scolarité jouent un rôle central dans la réorientation administrative. Ils accompagnent les étudiants dans la compréhension des démarches, les aident à anticiper les conséquences du changement de parcours et les informent sur les dispositifs existants. Cet accompagnement est essentiel pour éviter les erreurs administratives, les ruptures de droits ou les inscriptions tardives.
          </p>
          <p style={{ marginBottom: '1rem' }}>
            La réorientation administrative a également des conséquences importantes sur la vie étudiante. Elle peut impacter le versement de la bourse, le logement universitaire, la sécurité sociale étudiante ou encore la reconnaissance des crédits déjà obtenus. Dans certains cas, des crédits ECTS validés peuvent être conservés et valorisés dans la nouvelle formation, ce qui permet à l’étudiant de ne pas repartir entièrement de zéro.
          </p>
          <p style={{ marginBottom: '1rem' }}>
            Longtemps perçue comme un échec, la réorientation est aujourd’hui reconnue comme une étape possible et légitime du parcours étudiant. Les politiques publiques encouragent désormais une meilleure prise en compte de la diversité des trajectoires et cherchent à sécuriser les transitions. La réorientation administrative s’inscrit ainsi dans une logique de réussite, en permettant à l’étudiant de construire progressivement un projet plus adapté à ses aspirations, à ses compétences et à sa réalité personnelle.
          </p>
          <p style={{ marginBottom: '2rem' }}>
            Bien préparée et accompagnée, la réorientation administrative devient un outil pour reprendre le contrôle de son parcours, corriger un choix initial et avancer vers une formation plus en accord avec ses objectifs.
          </p>

          <hr style={{ border: '0', borderTop: '1px solid #ddd', margin: '2rem 0' }} />

          <h3 style={{ fontSize: '1.2rem', color: '#2c3e50', marginBottom: '1rem' }}>Sources</h3>
          <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.9rem' }}>
            <li style={{ marginBottom: '0.5rem' }}>
              <strong>Service-public.fr – Réorientation dans l’enseignement supérieur</strong><br />
              <a href="https://www.service-public.gouv.fr/particuliers/vosdroits/F31063" target="_blank" rel="noopener noreferrer" style={{ color: '#E27D60', textDecoration: 'underline' }}>
                https://www.service-public.gouv.fr/particuliers/vosdroits/F31063
              </a>
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <strong>Ministère de l’Éducation nationale et de l’Enseignement supérieur – La réorientation dans l’enseignement supérieur</strong><br />
              <a href="https://www.education.gouv.fr/la-reorientation-dans-l-enseignement-superieur-306702" target="_blank" rel="noopener noreferrer" style={{ color: '#E27D60', textDecoration: 'underline' }}>
                https://www.education.gouv.fr/la-reorientation-dans-l-enseignement-superieur-306702
              </a>
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <strong>Youzful by Crédit Agricole – Comment réussir sa réorientation à la fac</strong><br />
              <a href="https://www.youzful-by-ca.fr/les-etudes-superieures/comment-reussir-sa-reorientation-la-fac" target="_blank" rel="noopener noreferrer" style={{ color: '#E27D60', textDecoration: 'underline' }}>
                https://www.youzful-by-ca.fr/les-etudes-superieures/comment-reussir-sa-reorientation-la-fac
              </a>
            </li>
            <li>
              <strong>IGÉSR – La réorientation dans l’enseignement supérieur, rapport 2020</strong> <br />
              <span style={{ fontSize: '0.8rem', fontStyle: 'italic' }}>(Document de référence PDF)</span>
            </li>
          </ul>
        </div>
      )
    },
    {
      title: "Bourses",
      color: "#FFB7B2", // Pastel Red/Pink
      content: (
        <div style={{ textAlign: 'left' }}>
          <p style={{ marginBottom: '1rem' }}>
            La bourse d’enseignement supérieur sur critères sociaux est une aide financière mise en place par l’État pour accompagner les étudiant·es qui rencontrent des difficultés économiques. Elle a pour objectif de réduire les inégalités et de permettre à un plus grand nombre de jeunes d’accéder aux études supérieures et de les poursuivre dans de bonnes conditions. Cette aide vient compléter le soutien familial et peut couvrir une partie des dépenses liées à la vie étudiante (logement, alimentation, transports, matériel).
          </p>
          <p style={{ marginBottom: '1rem' }}>
            Pour bénéficier de la bourse, l’étudiant·e doit faire une demande chaque année via le <strong>Dossier Social Étudiant (DSE)</strong>. Cette démarche est indispensable, même en cas de poursuite d’études ou de réorientation. Le DSE permet de prendre en compte la situation personnelle de l’étudiant·e, les revenus de sa famille et ses choix de formation. Comme le traitement du dossier peut prendre du temps, il est fortement conseillé d’effectuer la demande le plus tôt possible.
          </p>
          <p style={{ marginBottom: '1rem' }}>
            Un étudiant peut bénéficier jusqu’à <strong>7 droits à bourse au total</strong> au cours de ses études supérieures. Ces droits peuvent être utilisés sur plusieurs années, y compris en cas de changement d’orientation, à condition que l’étudiant progresse dans son parcours (par exemple en validant des crédits ECTS à l’université). Cela signifie que la réorientation n’entraîne pas automatiquement la perte de la bourse.
          </p>
          <p style={{ marginBottom: '1rem' }}>
            Le montant de la bourse dépend de plusieurs critères : les revenus du foyer fiscal, le nombre de personnes à charge dans la famille et la distance entre le domicile familial et le lieu d’études. La bourse est versée sur 10 mois et son montant varie selon des échelons définis. Pour conserver cette aide, l’étudiant·e doit respecter certaines obligations, notamment l’assiduité aux cours et aux examens.
          </p>
          <p style={{ marginBottom: '2rem' }}>
            Dans un parcours de réorientation, la bourse joue un rôle essentiel. Elle peut permettre à un étudiant de s’engager dans une nouvelle formation avec davantage de sécurité financière, tout en l’encourageant à bien s’informer sur ses droits et les démarches à effectuer pour continuer à en bénéficier.
          </p>

          <hr style={{ border: '0', borderTop: '1px solid #ddd', margin: '2rem 0' }} />

          <h3 style={{ fontSize: '1.2rem', color: '#2c3e50', marginBottom: '1rem' }}>Sources</h3>
          <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.9rem' }}>
            <li style={{ marginBottom: '0.5rem' }}>
              <strong>Ministère de l’Enseignement supérieur :</strong> modalités d’attribution des bourses d’enseignement supérieur sur critères sociaux.<br />
              <a href="https://www.enseignementsup-recherche.gouv.fr/fr/bo/21/Hebdo26/ESRS2117943C.htm" target="_blank" rel="noopener noreferrer" style={{ color: '#E27D60', textDecoration: 'underline' }}>
                https://www.enseignementsup-recherche.gouv.fr/fr/bo/21/Hebdo26/ESRS2117943C.htm
              </a>
            </li>
            <li>
              <strong>Étudiant.gouv :</strong> jusqu’à 7 bourses successives durant vos études.<br />
              <a href="https://www.etudiant.gouv.fr/fr/jusqu-7-bourses-successives-durant-vos-etudes-2974" target="_blank" rel="noopener noreferrer" style={{ color: '#E27D60', textDecoration: 'underline' }}>
                https://www.etudiant.gouv.fr/fr/jusqu-7-bourses-successives-durant-vos-etudes-2974
              </a>
            </li>
          </ul>
        </div>
      )
    },
    {
      title: "Santé mentale",
      color: "#BFD7ED", // Pastel Blue
      content: (
        <div style={{ textAlign: 'left' }}>
          <p style={{ marginBottom: '1rem' }}>
            La santé mentale correspond à un état de bien-être psychologique qui permet à une personne de se sentir bien dans sa vie quotidienne, de faire face aux difficultés, de développer ses capacités et d’entretenir des relations sociales équilibrées. Elle ne se limite pas à l’absence de troubles psychiques : elle inclut aussi le sentiment d’épanouissement, la confiance en soi, la gestion des émotions et la capacité à demander de l’aide lorsque cela est nécessaire.
          </p>
          <p style={{ marginBottom: '1rem' }}>
            Chez les étudiant·es, la santé mentale est devenue un enjeu majeur de l’enseignement supérieur. Les études et rapports récents montrent une augmentation importante des situations de mal-être psychologique, touchant une large partie de la population étudiante. Stress, anxiété, épuisement, découragement ou sentiment de solitude sont des réalités fréquentes, parfois banalisées, mais qui peuvent avoir des conséquences importantes sur les parcours scolaires et personnels.
          </p>

          <h3 style={{ fontSize: '1.5rem', color: '#fdb933', marginTop: '2rem', marginBottom: '1rem' }}>🎓 Une période de vie particulièrement fragile</h3>
          <p style={{ marginBottom: '1rem' }}>
            La vie étudiante correspond à une période de transition majeure. Elle marque souvent le passage à l’âge adulte, avec de nombreux changements simultanés : départ du domicile familial, nouvelle autonomie, gestion du budget, organisation du temps, construction de l’identité personnelle et professionnelle. Ces transformations peuvent être sources d’enthousiasme, mais aussi de fortes tensions psychologiques.
          </p>
          <p style={{ marginBottom: '1rem' }}>
            À cela s’ajoutent les exigences du monde universitaire : charge de travail importante, évaluations régulières, pression de la réussite, comparaison avec les autres étudiants et incertitude face à l’avenir professionnel. Pour certains, ces facteurs peuvent provoquer un sentiment d’échec, une perte de motivation ou une anxiété durable.
          </p>

          <h3 style={{ fontSize: '1.5rem', color: '#fdb933', marginTop: '2rem', marginBottom: '1rem' }}>📉 Un mal-être largement répandu</h3>
          <p style={{ marginBottom: '1rem' }}>
            Les données disponibles montrent que la santé mentale des étudiant·es s’est nettement dégradée ces dernières années. Une part importante des étudiant·es déclare souffrir de stress intense, de fatigue mentale ou de troubles anxieux. De nombreux jeunes évoquent également des épisodes dépressifs, des difficultés de concentration ou un sentiment de découragement face à leurs études.
          </p>
          <p style={{ marginBottom: '1rem' }}>
            Le mal-être étudiant est souvent renforcé par la précarité financière. Le coût de la vie étudiante, les difficultés d’accès au logement, la nécessité de travailler en parallèle des études ou l’insécurité matérielle peuvent alourdir la charge mentale. Ces contraintes réduisent le temps de repos, fragilisent l’équilibre personnel et augmentent le risque d’épuisement.
          </p>
          <p style={{ marginBottom: '1rem' }}>
            L’isolement social constitue un autre facteur important. Certains étudiant·es peinent à créer des liens, notamment lors d’un changement de ville, d’établissement ou de filière. La réorientation peut accentuer ce sentiment de solitude, car elle implique parfois de recommencer dans un nouvel environnement, sans repères ni réseau social établi.
          </p>

          <h3 style={{ fontSize: '1.5rem', color: '#fdb933', marginTop: '2rem', marginBottom: '1rem' }}>🔄 Santé mentale et réorientation</h3>
          <p style={{ marginBottom: '1rem' }}>
            La question de la santé mentale est étroitement liée aux parcours de réorientation. Le doute sur son choix d’études, la peur de se tromper, le regard des proches ou la pression sociale peuvent générer un fort stress émotionnel. Beaucoup d’étudiant·es vivent la réorientation comme un échec personnel, alors qu’il s’agit souvent d’une étape normale dans un parcours.
          </p>
          <p style={{ marginBottom: '1rem' }}>
            Un mal-être psychologique non pris en compte peut conduire à un décrochage, à l’abandon des études ou à une perte de confiance durable. À l’inverse, un accompagnement adapté et une meilleure reconnaissance de la diversité des parcours peuvent aider les étudiant·es à se réorienter dans de meilleures conditions, en préservant leur équilibre mental.
          </p>

          <h3 style={{ fontSize: '1.5rem', color: '#fdb933', marginTop: '2rem', marginBottom: '1rem' }}>🧠 Une approche globale de la santé mentale</h3>
          <p style={{ marginBottom: '1rem' }}>
            Les institutions éducatives rappellent que la santé mentale doit être abordée de manière globale et préventive. Il ne s’agit pas seulement de soigner des troubles, mais aussi de créer des environnements favorables au bien-être. Cela passe par la qualité de l’accueil des étudiant·es, la clarté des informations, la bienveillance pédagogique et la reconnaissance des difficultés rencontrées.
          </p>
          <p style={{ marginBottom: '1rem' }}>
            Les référentiels de santé mentale insistent sur l’importance de développer les compétences psychosociales : apprendre à gérer le stress, à reconnaître ses émotions, à demander de l’aide et à maintenir un équilibre entre vie personnelle et études. Ces compétences jouent un rôle clé dans la prévention des situations de crise.
          </p>

          <h3 style={{ fontSize: '1.5rem', color: '#fdb933', marginTop: '2rem', marginBottom: '1rem' }}>🤝 Dispositifs de soutien et politiques publiques</h3>
          <p style={{ marginBottom: '1rem' }}>
            Face à l’ampleur du phénomène, les pouvoirs publics et les établissements d’enseignement supérieur ont mis en place différents dispositifs pour soutenir la santé mentale des étudiant·es. Des actions de prévention, des campagnes de sensibilisation et des services d’écoute psychologique ont été développés sur les campus.
          </p>
          <p style={{ marginBottom: '1rem' }}>
            Des mesures nationales ont également été proposées pour améliorer le bien-être étudiant, notamment à travers le renforcement de l’accompagnement psychologique, la formation des personnels éducatifs au repérage des signes de détresse et le développement de partenariats avec des acteurs de la santé.
          </p>
          <p style={{ marginBottom: '1rem' }}>
            L’objectif est de rompre l’isolement, de lutter contre la stigmatisation liée aux difficultés psychiques et de favoriser une culture du soutien et de l’entraide dans le monde étudiant.
          </p>

          <h3 style={{ fontSize: '1.5rem', color: '#fdb933', marginTop: '2rem', marginBottom: '1rem' }}>🌱 Un enjeu central pour la réussite étudiante</h3>
          <p style={{ marginBottom: '1rem' }}>
            La santé mentale est aujourd’hui reconnue comme un facteur déterminant de la réussite et de la persévérance dans les études. Un étudiant qui se sent soutenu, écouté et compris est plus à même de s’engager dans son parcours, de surmonter les difficultés et de construire un projet cohérent.
          </p>
          <p style={{ marginBottom: '2rem' }}>
            Prendre en compte la santé mentale des étudiant·es, c’est reconnaître que la réussite ne dépend pas uniquement des capacités académiques, mais aussi du bien-être psychologique, du contexte de vie et de la possibilité de faire des choix éclairés, y compris celui de se réorienter.
          </p>

          <hr style={{ border: '0', borderTop: '1px solid #ddd', margin: '2rem 0' }} />

          <h3 style={{ fontSize: '1.2rem', color: '#2c3e50', marginBottom: '1rem' }}>Sources</h3>
          <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.9rem' }}>
            <li style={{ marginBottom: '0.5rem' }}>
              <strong>EMD – Santé mentale des étudiants : enjeux et constats</strong><br />
              <a href="https://www.emd.fr/sante-mentale-etudiants/" target="_blank" rel="noopener noreferrer" style={{ color: '#E27D60', textDecoration: 'underline' }}>
                https://www.emd.fr/sante-mentale-etudiants/
              </a>
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <strong>Eduscol – Agir pour favoriser la santé mentale et le bien-être</strong><br />
              <a href="https://eduscol.education.fr/4063/agir-pour-favoriser-la-sante-mentale-et-le-bien-etre-des-eleves" target="_blank" rel="noopener noreferrer" style={{ color: '#E27D60', textDecoration: 'underline' }}>
                https://eduscol.education.fr/4063/agir-pour-favoriser-la-sante-mentale-et-le-bien-etre-des-eleves
              </a>
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <strong>Ministère de l’Enseignement supérieur – 15 mesures pour le bien-être des étudiant·es en santé</strong><br />
              <a href="https://www.enseignementsup-recherche.gouv.fr/sites/default/files/2021-10/15-mesures-sur-le-bien--tre-des-tudiants-en-sant-avril-2018--13355.pdf" target="_blank" rel="noopener noreferrer" style={{ color: '#E27D60', textDecoration: 'underline' }}>
                https://www.enseignementsup-recherche.gouv.fr/sites/default/files/2021-10/15-mesures-sur-le-bien--tre-des-tudiants-en-sant-avril-2018--13355.pdf
              </a>
            </li>
            <li>
              <strong>RRAPPS – Référentiel Santé Mentale</strong><br />
              <a href="https://rrapps-bfc.org/sites/default/files/publications/fichiers/2023/2023-ReferentielSanteMentale.pdf" target="_blank" rel="noopener noreferrer" style={{ color: '#E27D60', textDecoration: 'underline' }}>
                https://rrapps-bfc.org/sites/default/files/publications/fichiers/2023/2023-ReferentielSanteMentale.pdf
              </a>
            </li>
          </ul>
        </div>
      )
    },
    {
      title: "Aide Alternant",
      color: "#E0BBE4", // Pastel Purple
      content: (
        <div style={{ textAlign: 'left' }}>
          <p style={{ marginBottom: '1rem' }}>
            Faire le choix de l’alternance — que ce soit en contrat d’apprentissage ou en contrat de professionnalisation — permet de cumuler formation théorique et expérience professionnelle. Mais même avec un salaire, les dépenses liées au logement, au transport et à la vie quotidienne peuvent être lourdes, surtout quand on débute. Heureusement, plusieurs dispositifs existent pour soutenir les alternants.
          </p>

          <h3 style={{ fontSize: '1.5rem', color: '#fdb933', marginTop: '2rem', marginBottom: '1rem' }}>1. Quelles aides peut‑on obtenir quand on est en alternance ?</h3>
          <p style={{ marginBottom: '1rem' }}>
            Lorsque l’on est alternant, on peut prétendre à différentes aides financières pour alléger les charges liées à la formation, notamment :
          </p>

          <h4 style={{ fontSize: '1.2rem', color: '#2c3e50', marginTop: '1.5rem', marginBottom: '0.5rem', fontWeight: 'bold' }}>✔ Aides au logement</h4>
          <ul style={{ paddingLeft: '2rem', marginBottom: '1rem' }}>
            <li style={{ marginBottom: '0.5rem' }}><strong>APL (Aide personnalisée au logement) :</strong> comme pour tout locataire, l’APL versée par la CAF permet de réduire le montant du loyer en fonction des revenus, de la composition du foyer et du type de logement. Les alternants peuvent en bénéficier comme tout étudiant salarié.</li>
            <li style={{ marginBottom: '0.5rem' }}><strong>Mobili‑Jeune® :</strong> une aide spécifique proposée par Action Logement, destinée aux alternants de moins de 30 ans. Elle prend en charge une partie du loyer, après déduction de l’APL, généralement comprise entre 10 et 100 € par mois.</li>
          </ul>

          <h4 style={{ fontSize: '1.2rem', color: '#2c3e50', marginTop: '1.5rem', marginBottom: '0.5rem', fontWeight: 'bold' }}>✔ Garanties et facilités pour accéder à un logement</h4>
          <ul style={{ paddingLeft: '2rem', marginBottom: '1rem' }}>
            <li style={{ marginBottom: '0.5rem' }}><strong>Garantie Visale :</strong> une caution gratuite offerte par Action Logement qui se porte garant pour l’alternant auprès des bailleurs, facilitant l’accès au logement sans avoir de garant personnel.</li>
            <li style={{ marginBottom: '0.5rem' }}><strong>Avance Loca‑Pass® :</strong> avance sans intérêts pouvant aller jusqu’à 1 200 € pour financer le dépôt de garantie demandé par le propriétaire.</li>
          </ul>

          <h4 style={{ fontSize: '1.2rem', color: '#2c3e50', marginTop: '1.5rem', marginBottom: '0.5rem', fontWeight: 'bold' }}>✔ Autres aides financières/pratiques</h4>
          <p style={{ marginBottom: '1rem' }}>Outre le logement, d’autres aides peuvent compléter le soutien à l’alternant :</p>
          <ul style={{ paddingLeft: '2rem', marginBottom: '1rem' }}>
            <li style={{ marginBottom: '0.5rem' }}><strong>Prime d’activité :</strong> versée par la CAF pour compléter les revenus modestes des alternants salariés, augmentant leur pouvoir d’achat.</li>
            <li style={{ marginBottom: '0.5rem' }}><strong>Tarifs réduits ou subventions pour le transport :</strong> certaines régions ou services offrent des réductions pour les trajets domicile‑travail ou transports en commun.</li>
            <li style={{ marginBottom: '0.5rem' }}><strong>Aide au permis de conduire :</strong> subvention autour de 500 € pour faciliter la mobilité pour les besoins professionnels.</li>
            <li style={{ marginBottom: '0.5rem' }}><strong>Aides régionales ou OPCO :</strong> possibilités de soutien pour l’achat de matériel professionnel ou lors d’une mobilité en formation ou stage à l’étranger.</li>
          </ul>

          <h3 style={{ fontSize: '1.5rem', color: '#fdb933', marginTop: '2rem', marginBottom: '1rem' }}>2. Focalisation sur l’aide Mobili‑Jeune®</h3>
          <p style={{ marginBottom: '1rem' }}>
            L’aide Mobili‑Jeune® est l’un des principaux dispositifs spécifiques à l’alternance en matière de logement.
          </p>
          <p style={{ marginBottom: '0.5rem' }}><strong>👉 Qui peut y prétendre ?</strong></p>
          <ul style={{ paddingLeft: '2rem', marginBottom: '1rem' }}>
            <li style={{ marginBottom: '0.5rem' }}>Vous avez moins de 30 ans.</li>
            <li style={{ marginBottom: '0.5rem' }}>Vous êtes en contrat d’apprentissage ou de professionnalisation dans une entreprise du secteur privé non agricole.</li>
            <li style={{ marginBottom: '0.5rem' }}>Votre salaire mensuel brut est inférieur ou égal à 120 % du SMIC.</li>
            <li style={{ marginBottom: '0.5rem' }}>Vous êtes locataire d’un logement proche de votre lieu de travail ou de formation.</li>
          </ul>
          <p style={{ marginBottom: '0.5rem' }}><strong>👉 Comment est‑elle calculée ?</strong></p>
          <p style={{ marginBottom: '1rem' }}>
            L’aide Mobili‑Jeune est complémentaire aux autres aides au logement : elle est calculée sur le loyer après déduction de l’APL.
          </p>
          <p style={{ marginBottom: '0.5rem' }}><strong>👉 Montant et durée</strong></p>
          <ul style={{ paddingLeft: '2rem', marginBottom: '1rem' }}>
            <li style={{ marginBottom: '0.5rem' }}>Elle peut aller de 10 € à 100 € par mois.</li>
            <li style={{ marginBottom: '0.5rem' }}>Elle est versée pour une durée maximale de 11 mois par année de formation.</li>
          </ul>
          <p style={{ marginBottom: '0.5rem' }}><strong>👉 Démarches</strong></p>
          <p style={{ marginBottom: '1rem' }}>
            La demande doit être faite en ligne sur le site d’Action Logement, généralement entre 3 mois avant le début du contrat et jusqu’à 5 mois après son démarrage.
          </p>

          <h3 style={{ fontSize: '1.5rem', color: '#fdb933', marginTop: '2rem', marginBottom: '1rem' }}>3. D’autres aides ou dispositifs à connaître</h3>
          <p style={{ marginBottom: '1rem' }}>
            Même au‑delà du logement, plusieurs autres aides et dispositifs peuvent compléter le soutien à l’alternant :
          </p>
          <ul style={{ paddingLeft: '2rem', marginBottom: '1rem' }}>
            <li style={{ marginBottom: '0.5rem' }}><strong>APL / ALS / ALF via la CAF :</strong> réduction du loyer indépendamment de Mobili‑Jeune.</li>
            <li style={{ marginBottom: '0.5rem' }}><strong>Prime d’activité :</strong> aide mensuelle complémentaire pour les salariés aux revenus modestes.</li>
            <li style={{ marginBottom: '0.5rem' }}><strong>Garanties gratuites (Visale) :</strong> rassurent les propriétaires et facilitent l’obtention d’un bail.</li>
            <li style={{ marginBottom: '0.5rem' }}><strong>Avance Loca‑Pass :</strong> facilite l’entrée dans les logements en prenant en charge le dépôt de garantie sans frais.</li>
            <li style={{ marginBottom: '0.5rem' }}><strong>Aides locales ou régionales :</strong> certaines régions proposent des aides pour les transports, l’équipement ou les projets liés à l’alternance.</li>
          </ul>

          <h3 style={{ fontSize: '1.5rem', color: '#fdb933', marginTop: '2rem', marginBottom: '1rem' }}>4. Conseils pratiques pour optimiser ses aides</h3>
          <ul style={{ paddingLeft: '2rem', marginBottom: '1rem' }}>
            <li style={{ marginBottom: '0.5rem' }}><strong>Faire les démarches tôt :</strong> beaucoup de ces aides doivent être demandées dans des délais précis.</li>
            <li style={{ marginBottom: '0.5rem' }}><strong>Cumuler intelligemment :</strong> l’aide Mobili‑Jeune peut se cumuler avec l’APL, la garantie Visale ou l’avance Loca‑Pass.</li>
            <li style={{ marginBottom: '0.5rem' }}><strong>Conserver tous les justificatifs :</strong> un dossier complet accélère l’étude des aides.</li>
            <li style={{ marginBottom: '0.5rem' }}><strong>Utiliser les simulateurs officiels</strong> (CAF, Action Logement ou 1jeune1solution) pour estimer ses droits.</li>
          </ul>

          <h3 style={{ fontSize: '1.5rem', color: '#fdb933', marginTop: '2rem', marginBottom: '1rem' }}>5. Conclusion</h3>
          <p style={{ marginBottom: '2rem' }}>
            Être alternant ne signifie pas être seul face aux dépenses. Grâce à une combinaison d’aides CAF, Action Logement et d’aides complémentaires (prime d’activité, transports, garant), il est possible de réduire significativement les charges liées à l’entrée dans un logement et à la vie quotidienne. L’important est de connaître ces dispositifs, préparer les démarches à l’avance et bien assembler son dossier pour maximiser ses chances de bénéficier de tous les soutiens auxquels on a droit.
          </p>

          <hr style={{ border: '0', borderTop: '1px solid #ddd', margin: '2rem 0' }} />

          <h3 style={{ fontSize: '1.2rem', color: '#2c3e50', marginBottom: '1rem' }}>Sources</h3>
          <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.9rem' }}>
            <li style={{ marginBottom: '0.5rem' }}>
              <strong>Service‑Public, Vous êtes (ou allez être) apprenti : aides financières</strong><br />
              <a href="https://www.service-public.gouv.fr/particuliers/vosdroits/F38630" target="_blank" rel="noopener noreferrer" style={{ color: '#E27D60', textDecoration: 'underline' }}>
                https://www.service-public.gouv.fr/particuliers/vosdroits/F38630
              </a>
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <strong>Action Logement, L’aide MOBILI‑JEUNE®</strong><br />
              <a href="https://www.actionlogement.fr/l-aide-mobili-jeune" target="_blank" rel="noopener noreferrer" style={{ color: '#E27D60', textDecoration: 'underline' }}>
                https://www.actionlogement.fr/l-aide-mobili-jeune
              </a>
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <strong>L’Étudiant, Aides financières pour alternants</strong><br />
              <a href="https://www.letudiant.fr/etudes/alternance/alternance-quelles-aides-financieres-peut-on-obtenir.html" target="_blank" rel="noopener noreferrer" style={{ color: '#E27D60', textDecoration: 'underline' }}>
                https://www.letudiant.fr/etudes/alternance/alternance-quelles-aides-financieres-peut-on-obtenir.html
              </a>
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <strong>Concepteurs d’Avenirs, Liste des aides financières pour l’alternance</strong><br />
              <a href="https://www.concepteursdavenirs.fr/liste-aide-financiere-alternance" target="_blank" rel="noopener noreferrer" style={{ color: '#E27D60', textDecoration: 'underline' }}>
                https://www.concepteursdavenirs.fr/liste-aide-financiere-alternance
              </a>
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <strong>Money Wizbii, Aide alternance : le guide pour la rentrée</strong><br />
              <a href="https://money.wizbii.com/advices/aide-alternance-le-guide-pour-la-rentree" target="_blank" rel="noopener noreferrer" style={{ color: '#E27D60', textDecoration: 'underline' }}>
                https://money.wizbii.com/advices/aide-alternance-le-guide-pour-la-rentree
              </a>
            </li>
          </ul>
        </div>
      )
    },
    {
      title: "APL (Aide au Logement)",
      color: "#957DAD", // Pastel Darker Purple
      content: (
        <div style={{ textAlign: 'left' }}>
          <p style={{ marginBottom: '1rem' }}>
            Pour de nombreux étudiants, accéder à un logement constitue un défi financier majeur. Le coût des loyers, associé aux dépenses du quotidien, peut représenter un obstacle important. Pour accompagner les étudiants, l’État français propose plusieurs dispositifs d’aide, parmi lesquels l’APL (Aide Personnalisée au Logement) est l’un des plus connus. Comprendre son fonctionnement, ses conditions et ses démarches est essentiel pour sécuriser un logement tout en allégeant le budget étudiant.
          </p>

          <h3 style={{ fontSize: '1.5rem', color: '#fdb933', marginTop: '2rem', marginBottom: '1rem' }}>1. Qu’est-ce que l’APL ?</h3>
          <p style={{ marginBottom: '1rem' }}>
            L’APL est une aide financière destinée à réduire le montant du loyer ou de la mensualité d’emprunt d’un logement. Elle est calculée en fonction :
          </p>
          <ul style={{ paddingLeft: '2rem', marginBottom: '1rem' }}>
            <li style={{ marginBottom: '0.5rem' }}>Du revenu de l’étudiant (ou de ses parents, selon le cas)</li>
            <li style={{ marginBottom: '0.5rem' }}>Du montant du loyer</li>
            <li style={{ marginBottom: '0.5rem' }}>Du type de logement</li>
            <li style={{ marginBottom: '0.5rem' }}>De la localisation géographique</li>
          </ul>
          <p style={{ marginBottom: '1rem' }}>
            L’objectif est de rendre le logement plus accessible, particulièrement pour les étudiants en situation de mobilité, ceux qui s’installent loin de leur famille ou qui doivent financer seuls leurs études.
          </p>

          <h3 style={{ fontSize: '1.5rem', color: '#fdb933', marginTop: '2rem', marginBottom: '1rem' }}>2. Qui peut en bénéficier ?</h3>
          <p style={{ marginBottom: '1rem' }}>
            L’APL n’est pas réservée à tous les étudiants. Les conditions principales sont les suivantes :
          </p>
          <ul style={{ paddingLeft: '2rem', marginBottom: '1rem' }}>
            <li style={{ marginBottom: '0.5rem' }}>Être locataire ou colocataire d’un logement conventionné (c’est-à-dire reconnu par la CAF pour recevoir l’aide).</li>
            <li style={{ marginBottom: '0.5rem' }}>Être étudiant, apprenti ou en formation professionnelle.</li>
            <li style={{ marginBottom: '0.5rem' }}>Résider en France de manière régulière.</li>
            <li style={{ marginBottom: '0.5rem' }}>Respecter certaines conditions de ressources, qui varient selon la situation personnelle et familiale.</li>
          </ul>
          <p style={{ marginBottom: '1rem' }}>
            Il est important de noter que l’APL est différente des autres aides au logement, comme l’ALF (Allocation de Logement à caractère Familial) ou l’ALS (Allocation de Logement Social), qui s’adressent à des publics spécifiques.
          </p>

          <h3 style={{ fontSize: '1.5rem', color: '#fdb933', marginTop: '2rem', marginBottom: '1rem' }}>3. Comment faire sa demande ?</h3>
          <p style={{ marginBottom: '1rem' }}>
            La demande d’APL peut se faire en ligne via le site de la CAF ou via des plateformes partenaires, et suit plusieurs étapes clés :
          </p>
          <ul style={{ paddingLeft: '2rem', marginBottom: '1rem' }}>
            <li style={{ marginBottom: '0.5rem' }}>Créer un compte CAF ou se connecter à son espace personnel.</li>
            <li style={{ marginBottom: '0.5rem' }}>Renseigner sa situation : type de logement, montant du loyer, coordonnées du bailleur, statut étudiant.</li>
            <li style={{ marginBottom: '0.5rem' }}>Fournir les justificatifs nécessaires.</li>
            <li style={{ marginBottom: '0.5rem' }}>Attendre le calcul et la notification : la CAF détermine le montant de l’aide et informe l’étudiant.</li>
            <li style={{ marginBottom: '0.5rem' }}>Versement de l’aide : l’APL est directement versée au bailleur ou à l’étudiant selon les cas.</li>
          </ul>
          <p style={{ marginBottom: '1rem' }}>
            Le délai de traitement peut varier, mais il est conseillé de faire la demande avant la signature du bail ou dès l’installation dans le logement.
          </p>

          <h3 style={{ fontSize: '1.5rem', color: '#fdb933', marginTop: '2rem', marginBottom: '1rem' }}>4. Les documents essentiels</h3>
          <p style={{ marginBottom: '1rem' }}>
            Pour une demande complète et rapide, certains documents sont systématiquement demandés :
          </p>
          <ul style={{ paddingLeft: '2rem', marginBottom: '1rem' }}>
            <li style={{ marginBottom: '0.5rem' }}>Contrat de location ou bail récent</li>
            <li style={{ marginBottom: '0.5rem' }}>Attestation d’hébergement si nécessaire</li>
            <li style={{ marginBottom: '0.5rem' }}>Justificatifs de revenus (salaires, bourses, aides éventuelles)</li>
            <li style={{ marginBottom: '0.5rem' }}>Carte ou certificat de scolarité</li>
            <li style={{ marginBottom: '0.5rem' }}>RIB pour les versements</li>
          </ul>
          <p style={{ marginBottom: '1rem' }}>
            Diplomeo et les CAF locales insistent sur l’importance de préparer soigneusement ces documents pour éviter tout retard dans le traitement de la demande.
          </p>

          <h3 style={{ fontSize: '1.5rem', color: '#fdb933', marginTop: '2rem', marginBottom: '1rem' }}>5. Points importants à savoir</h3>
          <ul style={{ paddingLeft: '2rem', marginBottom: '1rem' }}>
            <li style={{ marginBottom: '0.5rem' }}>L’APL n’est pas automatique : il faut la demander et respecter toutes les conditions.</li>
            <li style={{ marginBottom: '0.5rem' }}>Le montant varie chaque mois en fonction des revenus déclarés et du loyer réel.</li>
            <li style={{ marginBottom: '0.5rem' }}>L’APL peut compléter d’autres aides étudiantes ou bourses, mais il est essentiel de vérifier les règles de cumul.</li>
            <li style={{ marginBottom: '0.5rem' }}>Une mise à jour régulière des informations est nécessaire pour éviter des trop-perçus ou des interruptions de versement.</li>
          </ul>

          <h3 style={{ fontSize: '1.5rem', color: '#fdb933', marginTop: '2rem', marginBottom: '1rem' }}>6. Conseils pratiques pour les étudiants</h3>
          <ul style={{ paddingLeft: '2rem', marginBottom: '1rem' }}>
            <li style={{ marginBottom: '0.5rem' }}><strong>Anticiper la demande :</strong> préparer les documents et créer son compte CAF dès que possible.</li>
            <li style={{ marginBottom: '0.5rem' }}><strong>Vérifier la convention du logement :</strong> seuls certains logements sont éligibles à l’APL.</li>
            <li style={{ marginBottom: '0.5rem' }}><strong>Suivre son dossier en ligne :</strong> la CAF offre un suivi complet pour savoir si des informations manquent.</li>
            <li style={{ marginBottom: '0.5rem' }}><strong>Se faire accompagner :</strong> associations étudiantes, services sociaux des universités et plateformes comme Gestetud peuvent guider les étudiants dans les démarches.</li>
            <li style={{ marginBottom: '0.5rem' }}><strong>Évaluer son budget réel :</strong> même avec l’APL, il est essentiel de calculer ses dépenses pour ne pas rencontrer de difficultés financières.</li>
          </ul>

          <h3 style={{ fontSize: '1.5rem', color: '#fdb933', marginTop: '2rem', marginBottom: '1rem' }}>7. Conclusion</h3>
          <p style={{ marginBottom: '2rem' }}>
            L’APL constitue un soutien crucial pour les étudiants, en permettant de réduire significativement le coût du logement et de se concentrer sur leurs études. Comprendre les conditions d’éligibilité, préparer les documents nécessaires et suivre attentivement les démarches permet de maximiser ses chances de recevoir cette aide et de sécuriser son logement. Bien gérée, cette aide contribue à réduire le stress financier et favorise la réussite académique.
          </p>

          <hr style={{ border: '0', borderTop: '1px solid #ddd', margin: '2rem 0' }} />

          <h3 style={{ fontSize: '1.2rem', color: '#2c3e50', marginBottom: '1rem' }}>Sources</h3>
          <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.9rem' }}>
            <li style={{ marginBottom: '0.5rem' }}>
              <strong>Capital, APL étudiant</strong><br />
              <a href="https://www.capital.fr/immobilier/apl-etudiant-1397706" target="_blank" rel="noopener noreferrer" style={{ color: '#E27D60', textDecoration: 'underline' }}>
                https://www.capital.fr/immobilier/apl-etudiant-1397706
              </a>
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <strong>CAF du Nord, L’aide au logement étudiant</strong><br />
              <a href="https://www.caf.fr/allocataires/caf-du-nord/offre-de-service/logement/l-aide-au-logement-etudiant" target="_blank" rel="noopener noreferrer" style={{ color: '#E27D60', textDecoration: 'underline' }}>
                https://www.caf.fr/allocataires/caf-du-nord/offre-de-service/logement/l-aide-au-logement-etudiant
              </a>
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <strong>Diplomeo, Quels documents pour demander l’APL</strong><br />
              <a href="https://diplomeo.com/actualite-quel_document_pour_demande_apl" target="_blank" rel="noopener noreferrer" style={{ color: '#E27D60', textDecoration: 'underline' }}>
                https://diplomeo.com/actualite-quel_document_pour_demande_apl
              </a>
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <strong>Gestetud, APL étudiant : conditions et démarches</strong><br />
              <a href="https://www.gestetud.fr/apl-etudiant-toutes-les-conditions-et-demarches-pour-beneficier-de-laide-au-logement" target="_blank" rel="noopener noreferrer" style={{ color: '#E27D60', textDecoration: 'underline' }}>
                https://www.gestetud.fr/apl-etudiant-toutes-les-conditions-et-demarches-pour-beneficier-de-laide-au-logement
              </a>
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <strong>CAF, Guide aide au logement étudiant 2023</strong><br />
              <a href="https://www.caf.fr/sites/default/files/medias/861/Offre%20de%20service/Documents/Guide%20aide%20au%20logement%20%C3%A9tudiant%202023.pdf" target="_blank" rel="noopener noreferrer" style={{ color: '#E27D60', textDecoration: 'underline' }}>
                https://www.caf.fr/sites/default/files/medias/861/Offre%20de%20service/Documents/Guide%20aide%20au%20logement%20%C3%A9tudiant%202023.pdf
              </a>
            </li>
          </ul>
        </div>
      )
    },
  ];

  const themesEn = [
    {
      title: "Family Pressure",
      color: "#FFD7B5",
      content: (
        <div style={{ textAlign: 'left' }}>
          <p style={{ marginBottom: '1rem' }}>
            School reorientation is a key moment in a student's life. While it can represent an opportunity to better align with one's interests and ambitions, it is often accompanied by stress and uncertainty. One of the major factors of this tension is family pressure. Understanding its origin, manifestations, and effects allows not only to inform students but also to help them make more serene choices.
          </p>
          <h3 style={{ fontSize: '1.5rem', color: '#fdb933', marginTop: '2rem', marginBottom: '1rem' }}>1. What is family pressure?</h3>
          <p style={{ marginBottom: '1rem' }}>
            Family pressure is defined as the set of implicit or explicit expectations, recommendations, or demands from parents regarding their children's educational and professional path.
          </p>
          <p><em>(Detailed English content to be added...)</em></p>
        </div>
      )
    },
    {
      title: "School Failure",
      color: "#A8E6CF",
      content: (
        <div style={{ textAlign: 'left' }}>
          <p style={{ marginBottom: '1rem' }}>
            Academic failure in higher education refers to situations where a student fails to validate their years, courses, or diploma.
          </p>
          <p><em>(Detailed English content to be added...)</em></p>
        </div>
      )
    },
    {
      title: "Administrative Reorientation",
      color: "#FDFFAB",
      content: (
        <div style={{ textAlign: 'left' }}>
          <p>Administrative reorientation corresponds to the official procedures a student must undertake to change training or institution.</p>
          <p><em>(Detailed English content to be added...)</em></p>
        </div>
      )
    },
    {
      title: "Scholarships",
      color: "#FFB7B2",
      content: (
        <div style={{ textAlign: 'left' }}>
          <p>The higher education scholarship based on social criteria is financial aid provided by the State.</p>
          <p><em>(Detailed English content to be added...)</em></p>
        </div>
      )
    },
    {
      title: "Mental Health",
      color: "#BFD7ED",
      content: (
        <div style={{ textAlign: 'left' }}>
          <p>Mental health corresponds to a state of psychological well-being.</p>
          <p><em>(Detailed English content to be added...)</em></p>
        </div>
      )
    },
    { title: "Work-Study Aid", content: <p>Details about work-study aid...</p>, color: "#E0BBE4" },
    { title: "Housing Aid (APL)", content: <p>Details about APL...</p>, color: "#957DAD" },
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
    <div style={{
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      height: '100vh',
      backgroundColor: 'rgb(255, 252, 244)',
      color: '#2c3e50',
      padding: '2rem',
      boxSizing: 'border-box',
      overflowY: 'auto'
    }}
      ref={containerRef}
    >

      {selectedThemeIndex === null ? (
        // LIST VIEW
        <>
          <h1 style={{ textAlign: 'center', fontSize: '3rem', color: '#fdb933', marginBottom: '3rem', textShadow: '1px 1px 2px rgba(0,0,0,0.1)' }}>
            {language === 'fr' ? 'THÈMES' : 'THEMES'}
          </h1>

          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '30px',
            justifyContent: 'center',
            flex: 1,
            alignContent: 'center',
            marginBottom: '6rem' // Increased spacing between cards and bottom button
          }}>
            {themes.map((theme, index) => (
              <div
                key={index}
                onClick={() => handleCardClick(index)}
                style={{
                  width: '300px',
                  height: '150px',
                  backgroundColor: theme.color,
                  borderRadius: '30px', // More rounded
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-start',
                  alignItems: 'flex-start',
                  padding: '25px',
                  cursor: 'pointer',
                  border: 'none',
                  transition: 'all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)',
                  boxShadow: '0 10px 20px rgba(0,0,0,0.05)',
                  color: '#2c3e50', // Dark text on pastel
                  fontSize: '1.6rem',
                  fontWeight: '800', // Bold text
                  lineHeight: '1.2',
                  position: 'relative',
                  boxSizing: 'border-box'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-10px) scale(1.02)';
                  e.currentTarget.style.boxShadow = '0 15px 30px rgba(0,0,0,0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.boxShadow = '0 10px 20px rgba(0,0,0,0.05)';
                }}
              >
                {theme.title}
              </div>
            ))}
          </div>

          <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'center', paddingBottom: '4rem' }}>
            <button
              onClick={() => onNavigate('game')}
              style={{
                padding: '1rem 3rem',
                fontSize: '1.5rem',
                fontWeight: 'bold',
                backgroundColor: '#fdb933',
                color: '#2c3e50',
                border: 'none',
                borderRadius: '50px',
                cursor: 'pointer',
                boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
                transition: 'transform 0.2s',
              }}
              onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
              onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
            >
              {language === 'fr' ? "ALLER AU JEU" : "GO TO GAME"}
            </button>
          </div>
        </>
      ) : (
        // DETAIL VIEW
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'flex-start',
          minHeight: '100%',
          maxWidth: '1000px',
          margin: '0 auto',
          textAlign: 'center',
          paddingBottom: '4rem',
          width: '100%'
        }}>
          <div style={{ width: '100%', display: 'flex', justifyContent: 'flex-start', marginBottom: '1rem' }}>
            <button
              onClick={() => setSelectedThemeIndex(null)}
              style={{
                background: 'none',
                border: 'none',
                color: '#2c3e50',
                fontSize: '1.2rem',
                fontWeight: 'bold',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                padding: '0.5rem 0',
                transition: 'opacity 0.2s'
              }}
              onMouseEnter={(e) => e.target.style.opacity = '0.7'}
              onMouseLeave={(e) => e.target.style.opacity = '1'}
            >
              <span style={{ fontSize: '1.5rem', marginRight: '0.5rem' }}>&#8592;</span>
              {language === 'fr' ? 'Retour aux thèmes' : 'Back to themes'}
            </button>
          </div>

          <h2 style={{ fontSize: '3rem', color: '#fdb933', marginBottom: '2rem', textShadow: '1px 1px 2px rgba(0,0,0,0.1)' }}>
            {currentTheme.title}
          </h2>

          <div style={{
            fontSize: '1.1rem',
            lineHeight: '1.8',
            marginBottom: '6rem', // Increased spacing
            backgroundColor: '#ffffff',
            color: '#2c3e50',
            padding: '3rem',
            borderRadius: '20px',
            boxShadow: '0 10px 40px rgba(0,0,0,0.05)',
            width: '100%',
            textAlign: 'left'
          }}>
            {currentTheme.content}
          </div>

          {/* Navigation Controls */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
            marginTop: 'auto',
            paddingBottom: '2rem' // Margin from bottom of screen
          }}>

            {/* Left Area (Prev) */}
            <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-start' }}>
              {prevTheme && (
                <div
                  onClick={handlePrev}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    cursor: 'pointer',
                    color: '#2c3e50',
                    transition: 'color 0.2s'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#fdb933'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#2c3e50'}
                >
                  <span style={{ fontSize: '2.5rem', marginRight: '1rem' }}>&#8592;</span>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                    <span style={{ fontSize: '0.9rem', textTransform: 'uppercase', opacity: 0.7, fontWeight: 'bold' }}>Précédent</span>
                    <span style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>{prevTheme.title}</span>
                  </div>
                </div>
              )}
            </div>

            {/* Center (Return) */}
            <button
              onClick={() => onNavigate('game')}
              style={{
                padding: '1.2rem 2.5rem',
                fontSize: '1.1rem',
                fontWeight: '800',
                backgroundColor: 'transparent',
                color: '#2c3e50',
                border: '3px solid #2c3e50',
                borderRadius: '50px',
                cursor: 'pointer',
                transition: 'all 0.2s',
                whiteSpace: 'nowrap',
                letterSpacing: '0.5px'
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#2c3e50';
                e.target.style.color = '#fffcf4';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'transparent';
                e.target.style.color = '#2c3e50';
              }}
            >
              {language === 'fr' ? "RETOUR AU JEU" : "RETURN TO GAME"}
            </button>

            {/* Right Area (Next) */}
            <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
              {nextTheme && (
                <div
                  onClick={handleNext}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    cursor: 'pointer',
                    color: '#2c3e50',
                    transition: 'color 0.2s'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#fdb933'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#2c3e50'}
                >
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
                    <span style={{ fontSize: '0.9rem', textTransform: 'uppercase', opacity: 0.7, fontWeight: 'bold' }}>Suivant</span>
                    <span style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>{nextTheme.title}</span>
                  </div>
                  <span style={{ fontSize: '2.5rem', marginLeft: '1rem' }}>&#8594;</span>
                </div>
              )}
            </div>

          </div>
        </div>
      )}
    </div>
  );
};

export default Documentation;
