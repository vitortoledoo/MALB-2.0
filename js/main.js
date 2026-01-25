const cursorDot = document.querySelector('.cursor-dot');
const cursorOutline = document.querySelector('.cursor-outline');
const langSelect = document.getElementById('lang-select');

const translations = {
    pt: {
        nav: { about: 'Quem somos', solutions: 'Soluções', contact: 'Contato', language: 'Idioma' },
        about: {
            title: 'Quebramos o padrão...<br><span class="highlight">...Para elevar o nível.</span>',
            p1: 'Nossa jornada começou com uma pergunta simples: por que o mercado entrega apenas o que é pedido, e não o que é necessário? Percebemos que para nos destacar, precisávamos de mais do que logística. Precisávamos de <strong>inteligência</strong>.',
            highlight: "Entender o negócio. Sentir a marca. Saber o 'como' e o 'porquê'.",
            p2: 'Decidimos que não trabalharíamos para o portfólio, mas para o parceiro. Tomamos o poder desse conhecimento estratégico e o colocamos à prova. O resultado? Experiências que não apenas acontecem, mas marcam.',
            p3: 'Seja local ou globalmente, a MALB* assume o peso da execução para que você foque no sucesso.<br><br><span class="signature">Conhecimento é impacto.</span>',
            caption: 'Larissa Coelho Founder & Head de Produção MALB'
        },
        solutions: {
            title: '<span class="highlight">Soluções</span>',
            card1: { title: 'Estratégia e Gestão Operacional', desc: 'Do conceito à execução para eventos de todos os tipos.' },
            card2: { title: 'Customer Experience', desc: 'Criando jornadas de serviço que fortalecem a satisfação e a fidelidade.' },
            card3: { title: 'Otimização de Processos e Fluxos de Trabalho', desc: 'Criação de sistemas operacionais que melhoram eficiência e responsabilidade.' },
            card4: { title: 'Gestão de Projetos e Controle Financeiro', desc: 'Planejamento de recursos, orçamentos e relatórios cruzados entre departamentos.' },
            card5: { title: 'Liderança Interfuncional', desc: 'Coordenação de stakeholders integrando marketing, logística, finanças e produção.' }
        },
        achievements: {
            title: '<span class="highlight">Conquistas</span>',
            card1: { title: 'Recorde Mundial do Guinness', desc: 'Como Produtor Executivo, liderou o Festival Mr Moo (Edição 10 Anos), conquistando o reconhecimento oficial como o Maior Festival de Churrasco do Mundo, com mais de 700 profissionais coordenados.' },
            card2: { title: 'Liderança em Grande Escala', desc: 'Gerenciou com sucesso mais de 30 eventos nacionais de automobilismo, com mais de 80.000 participantes, garantindo logística e hospitalidade impecáveis em diversas cidades.' },
            card3: { title: 'Inovação em Operações', desc: 'Pioneira na autenticação digital por reconhecimento facial, eliminando plásticos, reduzindo custos e estabelecendo um novo padrão de sustentabilidade no automobilismo.' },
            card4: { title: 'Transformação de Sistemas', desc: 'Implementei sistemas integrados para bilhetagem e financeiro, melhorando a visibilidade de dados, reduzindo erros manuais e acelerando a tomada de decisões estratégicas.' },
            card5: { title: 'Eficiência Organizacional', desc: 'Impulsionou um aumento de 30% na eficiência do fluxo de trabalho através da reformulação de processos e ferramentas de coordenação em tempo real.' },
            card6: { title: 'Isso é MALB' }
        },
        portfolio: {
            title: 'Cases de <span class="highlight">sucesso</span>',
            subtitle: 'Explore a trajetória',
            stock: {
                role: 'Sr Producer & Coord. Operações',
                desc: 'Ao longo de quatro anos, evoluí do suporte administrativo/financeiro para a liderança de operações nacionais na Stock Car, coordenando logística, hospitalidade e customer experience em projetos de grande escala no Brasil. Atuei no planejamento e entrega de 30+ eventos de motorsport, garantindo excelência operacional, integração entre áreas e consistência na experiência do público.',
                hl1: 'Planejamento e execução de logística em grande escala',
                hl2: 'Desenvolvimento de processos de ticketing',
                hl3: 'Gestão de crise e service recovery',
                hl4: 'Padronização de atendimento ao público'
            },
            mrmoo: {
                role: 'Executive Producer (Guinness Project)',
                desc: 'Atuação como Executive Producer em um projeto de alta complexidade que culminou no reconhecimento internacional do Guinness World Record (Maior Festival de Churrasco do Mundo).',
                hl1: 'Planejamento operacional de alto impacto',
                hl2: 'Gestão de times multidisciplinares',
                hl3: 'Execução de projeto Guinness World Record',
                hl4: 'Fortalecimento de presença de marca'
            },
            wec: {
                role: 'Coordenação Geral & Estratégica',
                desc: 'Atuei na coordenação estratégica e operacional do WEC em São Paulo, alinhando times locais e internacionais, supervisionando ativações de parceiros, hospitalidade e logística, com foco em conformidade com padrões FIA/ACO. A edição 2025 recebeu 80.000+ pessoas, e sigo liderando o planejamento da edição 2026.',
                hl1: 'Produção internacional (80k+ pax)',
                hl2: 'Gestão de stakeholders (FIA/ACO/Sponsors)',
                hl3: 'Supervisão de hospitalidade e VIP',
                hl4: 'Garantia de conformidade e segurança'
            },
            bh: {
                role: 'Project Manager Operações',
                desc: 'Evento no Mineirão que uniu motorsport, música e entretenimento em uma produção multi-experiência. Como PM, garanti o alinhamento entre Stock Car e equipe do festival, coordenando operações, timelines e infraestrutura, com foco em fluxo do público, segurança e consistência de entrega em grande escala.',
                hl1: 'Integração de times e governança',
                hl2: 'Logística complexa em estádio',
                hl3: 'Consistência de experiência em larga escala',
                hl4: 'Gestão de credenciamento e infra'
            },
            juntos: {
                role: 'Project Manager Engajamento',
                desc: 'Experiência corporativa interna no autódromo, criada com RH para fortalecer cultura e engajamento. Fui responsável pelo planejamento e execução operacional, conectando colaboradores ao bastidor da produção e das operações do motorsport, entregando uma jornada de alto impacto com alinhamento e fluidez.',
                hl1: 'Co-criação de conceito com RH',
                hl2: 'Logística e gestão de convidados',
                hl3: 'Execução on-site completa',
                hl4: 'Fortalecimento de propósito da empresa'
            },
            ctio: {
                role: 'Project Manager Coordenação VIP',
                desc: 'Evento premium voltado à divisão de tecnologia, reunindo CTIOs e lideranças em um dia exclusivo com networking, prospecção e experiências no autódromo. Conduzi planejamento operacional, logística VIP e coordenação de parceiros para uma entrega alinhada ao branding e objetivos de relacionamento.',
                hl1: 'Hospitalidade premium e guest relations',
                hl2: 'Formato integrado: Tech + Motorsport',
                hl3: 'Produção de alto padrão',
                hl4: 'Foco em relacionamento e aquisição'
            },
            f4: {
                role: 'Project Manager F1 Ecosystem',
                desc: 'Por dois anos consecutivos, fui responsável pela coordenação da Fórmula 4 Brasil dentro do ecossistema do GP de F1 em São Paulo. Atuei como ponte operacional entre equipes, garantindo alinhamento de cronograma, segurança, acessos, transporte e operação de pista, com alta pressão e precisão.',
                hl1: 'Gestão de logística da delegação F4',
                hl2: 'Ponte operacional F1 ↔ F4',
                hl3: 'Transporte, travel e operação de pista',
                hl4: 'Execução reconhecida por sincronização'
            },
            tags: {
                operations: 'Operações',
                cx: 'CX',
                leadership: 'Liderança',
                logistics: 'Logística',
                scale: 'Logística Escala',
                suppliers: 'Fornecedores',
                guinness: 'Guinness Planning',
                experience: 'Experiência',
                strategy: 'Estratégia',
                intOps: 'Operações Int.',
                stakeholders: 'Stakeholders',
                hospitality: 'Hospitalidade',
                pmo: 'PMO',
                infrastructure: 'Infraestrutura',
                integration: 'Integração',
                planning: 'Planejamento',
                corporate: 'Eventos Corporativos',
                internal: 'Comunicação Interna',
                engagement: 'Engajamento',
                vip: 'VIP/Corporate',
                relationship: 'Relacionamento',
                activation: 'Ativação',
                intCoord: 'Coordenação Int.',
                motorsport: 'Motorsport',
                pressure: 'Pressão'
            }
        },
        cta: {
            title: 'Pronto para elevar o nível?',
            subtitle: 'Vamos transformar sua próxima ideia em uma experiência inesquecível. A estratégia certa começa aqui.',
            button: 'Começar Projeto'
        },
        footer: {
            desc: 'Desenhamos experiências que constroem marcas. Da estratégia à execução.',
            descLong: 'Desenhamos experiências que constroem marcas. Da estratégia à execução impecável.',
            explore: 'Explorar',
            about: 'Quem Somos',
            solutions: 'Soluções',
            achievements: 'Conquistas',
            cases: 'Cases',
            contact: 'Contato',
            location: 'São Paulo, Brasil',
            rights: '© 2026 MALB Events & Consulting. Todos os direitos reservados.',
            rightsShort: '© 2026 MALB Events & Consulting.',
            credits: 'Designed by DestinoConectado'
        },
        aboutPage: {
            kicker: 'Institucional',
            title: 'Quem somos.',
            p1: 'Somos uma consultoria de eventos especializada em operações, logística e entrega de ponta a ponta.',
            p2: 'Temos vivência sólida em projetos de grande escala no Brasil, com forte atuação no universo motorsport, em hospitalidade premium e em eventos corporativos estratégicos. Funcionamos como o ponto de convergência entre equipes internas, fornecedores, patrocinadores e a organização do evento, garantindo alinhamento de cronograma, conformidade, segurança e experiência do público do início ao fim.',
            p3: 'Nosso diferencial é transformar complexidade em execução. Estruturamos o planejamento, integramos áreas e lideramos a operação em campo com comunicação precisa, visão de risco e ritmo de pista. Assim, entregamos com consistência tanto em eventos nacionais e internacionais com dezenas de milhares de pessoas, quanto em experiências VIP para C-levels e ativações de marca com múltiplas frentes simultâneas.',
            leader: {
                kicker: 'Liderança',
                title: 'Quem é Larissa Coelho<br>',
                role: 'Head da MALB*',
                p1: 'Larissa é uma profissonal especialista em Operações de Eventos de grande, médio e pequeno porte, Experiência do Cliente e Gestão de Projetos, com mais de 5 anos de experiência liderando projetos de grande escala que combinam criatividade, estrutura e precisão.',
                p2: 'Chegou a coordenar produções internacionais como as 6 Horas de São Paulo do FIA WEC Rolex, o Stock Car Championship, o BH Stock Festival e o premiado Festival Mr Moo Edição Especial de 10 Anos, que conquistou um recorde mundial do Guinness em 2025.',
                p3: 'Larissa trabalha combinando planejamento estratégico, gestão financeira e design de serviços, garantindo que cada evento ou projeto seja eficiente, significativo e memorável.',
                quote: '"Sou apaixonada por transformar operações complexas em experiências fluidas e centradas nas pessoas, que conectam marcas, equipes e públicos."',
                cta: 'Saiba mais'
            }
        },
        contact: {
            title: 'Tem um projeto em mente ? <br><span class="highlight">conte para gente!</span>',
            desc: 'Grandes experiências começam com uma boa estratégia. O seu desafio é o nosso trabalho.',
            emailLabel: 'Fale com a gente',
            locationLabel: 'Base',
            formTitle: 'Envie uma mensagem',
            nameLabel: 'Seu Nome',
            emailField: 'E-mail',
            messageLabel: 'Sobre o projeto...',
            submit: 'Enviar Proposta',
            namePlaceholder: ' ',
            emailPlaceholder: ' ',
            messagePlaceholder: ' '
        }
    },
    en: {
        nav: { about: 'About', solutions: 'Solutions', contact: 'Contact', language: 'Language' },
        about: {
            title: 'We break the pattern...<br><span class="highlight">...to raise the bar.</span>',
            p1: 'Our journey started with a simple question: why does the market deliver only what is asked for, and not what is needed? We realized that to stand out, we needed more than logistics. We needed <strong>intelligence</strong>.',
            highlight: "Understand the business. Feel the brand. Know the 'how' and the 'why'.",
            p2: 'We decided we would not work for the portfolio, but for the partner. We took the power of this strategic knowledge and put it to the test. The result? Experiences that don’t just happen, they leave a mark.',
            p3: 'Locally or globally, MALB* carries the execution so you can focus on success.<br><br><span class="signature">Knowledge is impact.</span>',
            caption: 'Larissa Coelho Founder & Head of Production MALB'
        },
        solutions: {
            title: '<span class="highlight">Solutions</span>',
            card1: { title: 'Strategy & Operational Management', desc: 'From concept to execution for events of all kinds.' },
            card2: { title: 'Customer Experience', desc: 'Creating service journeys that strengthen satisfaction and loyalty.' },
            card3: { title: 'Process & Workflow Optimization', desc: 'Building operating systems that improve efficiency and accountability.' },
            card4: { title: 'Project Management & Financial Control', desc: 'Resource planning, budgets, and cross-department reporting.' },
            card5: { title: 'Cross-functional Leadership', desc: 'Coordinating stakeholders across marketing, logistics, finance, and production.' }
        },
        achievements: {
            title: '<span class="highlight">Achievements</span>',
            card1: { title: 'Guinness World Record', desc: 'As Executive Producer, led the Mr Moo Festival (10-Year Edition), earning official recognition as the Largest BBQ Festival in the World, coordinating 700+ professionals.' },
            card2: { title: 'Large-Scale Leadership', desc: 'Successfully managed 30+ national motorsport events with 80,000+ attendees, delivering impeccable logistics and hospitality across cities.' },
            card3: { title: 'Operational Innovation', desc: 'Pioneered digital facial-recognition authentication, removing plastics, reducing costs, and setting a new sustainability standard in motorsport.' },
            card4: { title: 'Systems Transformation', desc: 'Implemented integrated ticketing and finance systems, improving data visibility, reducing manual errors, and accelerating strategic decisions.' },
            card5: { title: 'Organizational Efficiency', desc: 'Drove a 30% increase in workflow efficiency through process redesign and real-time coordination tools.' },
            card6: { title: 'This is MALB' }
        },
        portfolio: {
            title: 'Success <span class="highlight">cases</span>',
            subtitle: 'Explore the journey',
            stock: {
                role: 'Sr Producer & Operations Coordinator',
                desc: 'Over four years, I evolved from administrative/financial support to leading national operations at Stock Car, coordinating logistics, hospitality, and customer experience at large-scale projects in Brazil. I planned and delivered 30+ motorsport events, ensuring operational excellence, cross-team integration, and consistent audience experience.',
                hl1: 'Large-scale logistics planning and execution',
                hl2: 'Ticketing process development',
                hl3: 'Crisis management and service recovery',
                hl4: 'Standardized public service'
            },
            mrmoo: {
                role: 'Executive Producer (Guinness Project)',
                desc: 'Executive Producer in a high-complexity project that culminated in the Guinness World Record (Largest BBQ Festival in the World).',
                hl1: 'High-impact operational planning',
                hl2: 'Multidisciplinary team management',
                hl3: 'Guinness World Record execution',
                hl4: 'Brand presence strengthening'
            },
            wec: {
                role: 'General & Strategic Coordination',
                desc: 'Coordinated WEC operations in São Paulo, aligning local and international teams, overseeing partner activations, hospitality, and logistics, with focus on FIA/ACO compliance. The 2025 edition welcomed 80,000+ people, and I continue leading planning for 2026.',
                hl1: 'International production (80k+ pax)',
                hl2: 'Stakeholder management (FIA/ACO/Sponsors)',
                hl3: 'Hospitality and VIP supervision',
                hl4: 'Compliance and safety assurance'
            },
            bh: {
                role: 'Operations Project Manager',
                desc: 'Event at Mineirão combining motorsport, music, and entertainment in a multi-experience production. As PM, I aligned Stock Car and festival teams, coordinating operations, timelines, and infrastructure with focus on crowd flow, safety, and delivery consistency at scale.',
                hl1: 'Team integration and governance',
                hl2: 'Complex stadium logistics',
                hl3: 'Consistency at scale',
                hl4: 'Credentialing and infrastructure management'
            },
            juntos: {
                role: 'Engagement Project Manager',
                desc: 'Internal corporate experience at the racetrack, created with HR to strengthen culture and engagement. I led planning and operations, connecting employees to behind-the-scenes motorsport production with a high-impact, aligned journey.',
                hl1: 'Co-created concept with HR',
                hl2: 'Guest logistics and management',
                hl3: 'Full on-site execution',
                hl4: 'Strengthened company purpose'
            },
            ctio: {
                role: 'VIP Coordination Project Manager',
                desc: 'Premium event for the technology division, bringing CTIOs and leaders together for a day of networking, prospecting, and racetrack experiences. Led operational planning, VIP logistics, and partner coordination aligned with branding and relationship goals.',
                hl1: 'Premium hospitality and guest relations',
                hl2: 'Integrated format: Tech + Motorsport',
                hl3: 'High-standard production',
                hl4: 'Relationship and acquisition focus'
            },
            f4: {
                role: 'Project Manager F1 Ecosystem',
                desc: 'For two consecutive years, I coordinated Formula 4 Brazil within the São Paulo F1 GP ecosystem, acting as the operational bridge between teams, ensuring schedule alignment, safety, access, transport, and track operations under high pressure and precision.',
                hl1: 'F4 delegation logistics management',
                hl2: 'Operational bridge F1 ↔ F4',
                hl3: 'Transport, travel, and track operations',
                hl4: 'Execution recognized for synchronization'
            },
            tags: {
                operations: 'Operations',
                cx: 'CX',
                leadership: 'Leadership',
                logistics: 'Logistics',
                scale: 'Scaled Logistics',
                suppliers: 'Suppliers',
                guinness: 'Guinness Planning',
                experience: 'Experience',
                strategy: 'Strategy',
                intOps: 'Int. Ops',
                stakeholders: 'Stakeholders',
                hospitality: 'Hospitality',
                pmo: 'PMO',
                infrastructure: 'Infrastructure',
                integration: 'Integration',
                planning: 'Planning',
                corporate: 'Corporate Events',
                internal: 'Internal Comms',
                engagement: 'Engagement',
                vip: 'VIP/Corporate',
                relationship: 'Relationship',
                activation: 'Activation',
                intCoord: 'Int. Coordination',
                motorsport: 'Motorsport',
                pressure: 'Pressure'
            }
        },
        cta: {
            title: 'Ready to raise the bar?',
            subtitle: 'Let’s turn your next idea into an unforgettable experience. The right strategy starts here.',
            button: 'Start a Project'
        },
        footer: {
            desc: 'We design experiences that build brands. From strategy to execution.',
            descLong: 'We design experiences that build brands. From strategy to flawless execution.',
            explore: 'Explore',
            about: 'About',
            solutions: 'Solutions',
            achievements: 'Achievements',
            cases: 'Cases',
            contact: 'Contact',
            location: 'São Paulo, Brazil',
            rights: '© 2026 MALB Events & Consulting. All rights reserved.',
            rightsShort: '© 2026 MALB Events & Consulting.',
            credits: 'Designed by DestinoConectado'
        },
        aboutPage: {
            kicker: 'Institutional',
            title: 'About us.',
            p1: 'We are an event consulting firm specialized in operations, logistics, and end-to-end delivery.',
            p2: 'We have strong experience in large-scale projects in Brazil, with a strong presence in motorsport, premium hospitality, and strategic corporate events. We act as the point of convergence between internal teams, suppliers, sponsors, and the event organization, ensuring schedule alignment, compliance, safety, and audience experience from start to finish.',
            p3: 'Our differentiator is turning complexity into execution. We structure planning, integrate areas, and lead on-site operations with precise communication, risk vision, and track rhythm. We deliver consistently in both national and international events with tens of thousands of attendees and in VIP experiences for C-levels and multi-front brand activations.',
            leader: {
                kicker: 'Leadership',
                title: 'Who is Larissa Coelho<br>',
                role: 'Head of MALB*',
                p1: 'Larissa is a professional specialist in event operations for large, medium, and small events, Customer Experience, and Project Management, with over 5 years leading large-scale projects that combine creativity, structure, and precision.',
                p2: 'She coordinated international productions such as FIA WEC Rolex 6 Hours of São Paulo, Stock Car Championship, BH Stock Festival, and the award-winning Mr Moo Festival 10-Year Special Edition, which achieved a Guinness World Record in 2025.',
                p3: 'Larissa combines strategic planning, financial management, and service design to ensure every event or project is efficient, meaningful, and memorable.',
                quote: '"I am passionate about turning complex operations into smooth, people-centered experiences that connect brands, teams, and audiences."',
                cta: 'Learn more'
            }
        },
        contact: {
            title: 'Have a project in mind? <br><span class="highlight">Tell us about it!</span>',
            desc: 'Great experiences start with a good strategy. Your challenge is our work.',
            emailLabel: 'Talk to us',
            locationLabel: 'Based in',
            formTitle: 'Send a message',
            nameLabel: 'Your name',
            emailField: 'Email',
            messageLabel: 'About the project...',
            submit: 'Send Proposal',
            namePlaceholder: ' ',
            emailPlaceholder: ' ',
            messagePlaceholder: ' '
        }
    },
    fr: {
        nav: { about: 'Qui sommes-nous', solutions: 'Solutions', contact: 'Contact', language: 'Langue' },
        about: {
            title: 'Nous brisons les codes...<br><span class="highlight">...pour élever le niveau.</span>',
            p1: 'Notre parcours a commencé par une question simple : pourquoi le marché ne livre-t-il que ce qui est demandé, et non ce qui est nécessaire ? Nous avons compris que pour nous démarquer, il nous fallait plus que la logistique. Nous avions besoin d’<strong>intelligence</strong>.',
            highlight: "Comprendre l’entreprise. Ressentir la marque. Connaître le 'comment' et le 'pourquoi'.",
            p2: 'Nous avons décidé de ne pas travailler pour le portfolio, mais pour le partenaire. Nous avons mis à l’épreuve ce savoir stratégique. Le résultat ? Des expériences qui ne font pas que se produire, elles marquent.',
            p3: 'Localement ou globalement, MALB* porte l’exécution pour que vous puissiez vous concentrer sur le succès.<br><br><span class="signature">Le savoir est un impact.</span>',
            caption: 'Larissa Coelho Fondatrice & Head de Production MALB'
        },
        solutions: {
            title: '<span class="highlight">Solutions</span>',
            card1: { title: 'Stratégie & Gestion Opérationnelle', desc: 'Du concept à l’exécution pour des événements de tous types.' },
            card2: { title: 'Customer Experience', desc: 'Création de parcours de service qui renforcent la satisfaction et la fidélité.' },
            card3: { title: 'Optimisation des Processus', desc: 'Création de systèmes opérationnels qui améliorent l’efficacité et la responsabilité.' },
            card4: { title: 'Gestion de Projet & Finance', desc: 'Planification des ressources, budgets et rapports inter-départements.' },
            card5: { title: 'Leadership Interfonctionnel', desc: 'Coordination des parties prenantes en intégrant marketing, logistique, finance et production.' }
        },
        achievements: {
            title: '<span class="highlight">Réalisations</span>',
            card1: { title: 'Record du monde Guinness', desc: 'En tant que Productrice Exécutive, a dirigé le Festival Mr Moo (Édition 10 ans) et obtenu la reconnaissance officielle du plus grand festival de barbecue au monde, avec plus de 700 professionnels coordonnés.' },
            card2: { title: 'Leadership à grande échelle', desc: 'A géré avec succès plus de 30 événements nationaux de sport automobile, avec plus de 80 000 participants, garantissant une logistique et une hospitalité impeccables.' },
            card3: { title: 'Innovation opérationnelle', desc: 'Pionnière de l’authentification faciale numérique, éliminant les plastiques, réduisant les coûts et établissant un nouveau standard de durabilité.' },
            card4: { title: 'Transformation des systèmes', desc: 'A mis en place des systèmes intégrés de billetterie et finance, améliorant la visibilité des données et accélérant les décisions.' },
            card5: { title: 'Efficacité organisationnelle', desc: 'A augmenté de 30 % l’efficacité du flux de travail grâce à la refonte des processus et des outils de coordination en temps réel.' },
            card6: { title: 'C’est MALB' }
        },
        portfolio: {
            title: 'Cas de <span class="highlight">succès</span>',
            subtitle: 'Explorez le parcours',
            stock: {
                role: 'Sr Producer & Coord. Opérations',
                desc: 'En quatre ans, j’ai évolué du support administratif/financier au leadership des opérations nationales chez Stock Car, en coordonnant logistique, hospitalité et expérience client pour des projets de grande envergure au Brésil.',
                hl1: 'Planification et exécution logistique à grande échelle',
                hl2: 'Développement des processus de billetterie',
                hl3: 'Gestion de crise et service recovery',
                hl4: 'Standardisation du service au public'
            },
            mrmoo: {
                role: 'Executive Producer (Projet Guinness)',
                desc: 'Executive Producer sur un projet de haute complexité ayant conduit à un Guinness World Record.',
                hl1: 'Planification opérationnelle à fort impact',
                hl2: 'Gestion d’équipes pluridisciplinaires',
                hl3: 'Exécution du projet Guinness World Record',
                hl4: 'Renforcement de la présence de marque'
            },
            wec: {
                role: 'Coordination Générale & Stratégique',
                desc: 'Coordination stratégique et opérationnelle du WEC à São Paulo, alignement d’équipes locales et internationales, supervision des activations partenaires, hospitalité et logistique.',
                hl1: 'Production internationale (80k+ pax)',
                hl2: 'Gestion des parties prenantes (FIA/ACO/Sponsors)',
                hl3: 'Supervision hospitalité et VIP',
                hl4: 'Conformité et sécurité'
            },
            bh: {
                role: 'Chef de Projet Opérations',
                desc: 'Événement au Mineirão combinant sport auto, musique et divertissement. Coordination des opérations, timelines et infrastructure.',
                hl1: 'Intégration des équipes et gouvernance',
                hl2: 'Logistique complexe en stade',
                hl3: 'Cohérence d’expérience à grande échelle',
                hl4: 'Gestion des accréditations et infrastructure'
            },
            juntos: {
                role: 'Chef de Projet Engagement',
                desc: 'Expérience корпоративative interne pour renforcer culture et engagement, avec exécution opérationnelle complète.',
                hl1: 'Co-création de concept avec RH',
                hl2: 'Logistique et gestion des invités',
                hl3: 'Exécution sur site complète',
                hl4: 'Renforcement du sens de l’entreprise'
            },
            ctio: {
                role: 'Chef de Projet Coordination VIP',
                desc: 'Événement premium pour la division tech, réunissant CTIOs et dirigeants. Planification opérationnelle, logistique VIP et coordination partenaires.',
                hl1: 'Hospitalité premium et guest relations',
                hl2: 'Format intégré : Tech + Motorsport',
                hl3: 'Production haut de gamme',
                hl4: 'Focus relation et acquisition'
            },
            f4: {
                role: 'Chef de Projet Écosystème F1',
                desc: 'Coordination de la Formule 4 Brésil au sein du GP F1 de São Paulo, assurant synchronisation, sécurité, accès et opérations piste.',
                hl1: 'Gestion logistique de la délégation F4',
                hl2: 'Pont opérationnel F1 ↔ F4',
                hl3: 'Transport, travel et opérations piste',
                hl4: 'Exécution reconnue pour la synchronisation'
            },
            tags: {
                operations: 'Opérations',
                cx: 'CX',
                leadership: 'Leadership',
                logistics: 'Logistique',
                scale: 'Logistique à grande échelle',
                suppliers: 'Fournisseurs',
                guinness: 'Planification Guinness',
                experience: 'Expérience',
                strategy: 'Stratégie',
                intOps: 'Ops. Int.',
                stakeholders: 'Parties prenantes',
                hospitality: 'Hospitalité',
                pmo: 'PMO',
                infrastructure: 'Infrastructure',
                integration: 'Intégration',
                planning: 'Planification',
                corporate: 'Événements корпоративatifs',
                internal: 'Communication interne',
                engagement: 'Engagement',
                vip: 'VIP/Corporate',
                relationship: 'Relation',
                activation: 'Activation',
                intCoord: 'Coord. Int.',
                motorsport: 'Motorsport',
                pressure: 'Pression'
            }
        },
        cta: {
            title: 'Prêt à élever le niveau ?',
            subtitle: 'Transformons votre prochaine idée en une expérience inoubliable. La bonne stratégie commence ici.',
            button: 'Démarrer un projet'
        },
        footer: {
            desc: 'Nous concevons des expériences qui construisent des marques. De la stratégie à l’exécution.',
            descLong: 'Nous concevons des expériences qui construisent des marques. De la stratégie à l’exécution impeccable.',
            explore: 'Explorer',
            about: 'Qui sommes-nous',
            solutions: 'Solutions',
            achievements: 'Réalisations',
            cases: 'Cas',
            contact: 'Contact',
            location: 'São Paulo, Brésil',
            rights: '© 2026 MALB Events & Consulting. Tous droits réservés.',
            rightsShort: '© 2026 MALB Events & Consulting.',
            credits: 'Designed by DestinoConectado'
        },
        aboutPage: {
            kicker: 'Institutionnel',
            title: 'Qui sommes-nous.',
            p1: 'Nous sommes un cabinet de conseil événementiel spécialisé en opérations, logistique et livraison de bout en bout.',
            p2: 'Nous avons une solide expérience des projets de grande ampleur au Brésil, avec une forte présence dans le motorsport, l’hospitalité premium et les événements корпоративatifs.',
            p3: 'Notre différentiel est de transformer la complexité en exécution. Nous structurons le planning, intégrons les équipes et conduisons l’opération sur le terrain.',
            leader: {
                kicker: 'Leadership',
                title: 'Qui est Larissa Coelho<br>',
                role: 'Head de MALB*',
                p1: 'Larissa est une spécialiste des opérations événementielles, expérience client et gestion de projets, avec plus de 5 ans d’expérience.',
                p2: 'Elle a coordonné des productions internationales comme FIA WEC Rolex 6H São Paulo, Stock Car Championship, BH Stock Festival et Mr Moo Festival 10 ans.',
                p3: 'Larissa combine planification stratégique, gestion financière et design de services.',
                quote: '"Je suis passionnée par la transformation d’opérations complexes en expériences fluides et centrées sur les personnes."',
                cta: 'En savoir plus'
            }
        },
        contact: {
            title: 'Un projet en tête ? <br><span class="highlight">Parlez-nous-en !</span>',
            desc: 'Les grandes expériences commencent par une bonne stratégie. Votre défi est notre travail.',
            emailLabel: 'Parlez avec nous',
            locationLabel: 'Base',
            formTitle: 'Envoyer un message',
            nameLabel: 'Votre nom',
            emailField: 'E-mail',
            messageLabel: 'À propos du projet...',
            submit: 'Envoyer la proposition',
            namePlaceholder: ' ',
            emailPlaceholder: ' ',
            messagePlaceholder: ' '
        }
    },
    ro: {
        nav: { about: 'Despre noi', solutions: 'Soluții', contact: 'Contact', language: 'Limbă' },
        about: {
            title: 'Spargem tiparul...<br><span class="highlight">...pentru a ridica nivelul.</span>',
            p1: 'Călătoria noastră a început cu o întrebare simplă: de ce piața livrează doar ceea ce se cere și nu ceea ce este necesar? Am realizat că, pentru a ne evidenția, aveam nevoie de mai mult decât logistică. Aveam nevoie de <strong>inteligență</strong>.',
            highlight: "Înțelege afacerea. Simte brandul. Cunoaște 'cum' și 'de ce'.",
            p2: 'Am decis să nu lucrăm pentru portofoliu, ci pentru partener. Am pus la încercare această cunoaștere strategică. Rezultatul? Experiențe care nu doar se întâmplă, ci lasă urme.',
            p3: 'Local sau global, MALB* preia execuția ca tu să te concentrezi pe succes.<br><br><span class="signature">Cunoașterea înseamnă impact.</span>',
            caption: 'Larissa Coelho Fondatoare & Head de Producție MALB'
        },
        solutions: {
            title: '<span class="highlight">Soluții</span>',
            card1: { title: 'Strategie & Management Operațional', desc: 'De la concept la execuție pentru evenimente de toate tipurile.' },
            card2: { title: 'Customer Experience', desc: 'Crearea de parcursuri de servicii care cresc satisfacția și loialitatea.' },
            card3: { title: 'Optimizarea proceselor', desc: 'Crearea de sisteme operaționale care îmbunătățesc eficiența și responsabilitatea.' },
            card4: { title: 'Management de Proiect & Control Financiar', desc: 'Planificarea resurselor, bugete și rapoarte între departamente.' },
            card5: { title: 'Leadership interfuncțional', desc: 'Coordonarea stakeholderilor integrând marketing, logistică, finanțe și producție.' }
        },
        achievements: {
            title: '<span class="highlight">Realizări</span>',
            card1: { title: 'Record Guinness', desc: 'Ca Executive Producer, a condus Festivalul Mr Moo (ediția 10 ani), obținând recunoașterea oficială pentru cel mai mare festival de grătar din lume, cu 700+ profesioniști coordonați.' },
            card2: { title: 'Leadership la scară mare', desc: 'A gestionat cu succes 30+ evenimente naționale de motorsport, cu peste 80.000 participanți, asigurând logistică și ospitalitate impecabile.' },
            card3: { title: 'Inovație operațională', desc: 'A pionierat autentificarea digitală prin recunoaștere facială, eliminând plasticul și reducând costurile.' },
            card4: { title: 'Transformarea sistemelor', desc: 'A implementat sisteme integrate de ticketing și financiar, îmbunătățind vizibilitatea datelor și accelerând deciziile.' },
            card5: { title: 'Eficiență organizațională', desc: 'A crescut cu 30% eficiența fluxului de lucru prin reproiectarea proceselor și instrumente de coordonare în timp real.' },
            card6: { title: 'Asta este MALB' }
        },
        portfolio: {
            title: 'Studii de <span class="highlight">succes</span>',
            subtitle: 'Explorați parcursul',
            stock: {
                role: 'Sr Producer & Coordonator Operațiuni',
                desc: 'În patru ani, am evoluat de la suport administrativ/financiar la conducerea operațiunilor naționale în Stock Car, coordonând logistică, ospitalitate și experiența clienților.',
                hl1: 'Planificare și execuție logistică la scară mare',
                hl2: 'Dezvoltarea proceselor de ticketing',
                hl3: 'Gestionarea crizelor și service recovery',
                hl4: 'Standardizarea serviciului către public'
            },
            mrmoo: {
                role: 'Executive Producer (Guinness Project)',
                desc: 'Executive Producer într-un proiect de complexitate ridicată ce a culminat cu un Guinness World Record.',
                hl1: 'Planificare operațională cu impact ridicat',
                hl2: 'Managementul echipelor multidisciplinare',
                hl3: 'Execuție Guinness World Record',
                hl4: 'Consolidarea prezenței brandului'
            },
            wec: {
                role: 'Coordonare Generală & Strategică',
                desc: 'Coordonare strategică și operațională WEC la São Paulo, aliniind echipe locale și internaționale, supervizând activări, ospitalitate și logistică.',
                hl1: 'Producție internațională (80k+ pax)',
                hl2: 'Management stakeholderi (FIA/ACO/Sponsors)',
                hl3: 'Supervizare ospitalitate și VIP',
                hl4: 'Conformitate și siguranță'
            },
            bh: {
                role: 'Project Manager Operațiuni',
                desc: 'Eveniment la Mineirão ce a combinat motorsport, muzică și divertisment. Ca PM, am coordonat operațiuni, timeline-uri și infrastructură.',
                hl1: 'Integrarea echipelor și guvernanță',
                hl2: 'Logistică complexă pe stadion',
                hl3: 'Consistență a experienței la scară',
                hl4: 'Gestionare acreditări și infrastructură'
            },
            juntos: {
                role: 'Project Manager Engajare',
                desc: 'Experiență corporativă internă la circuit, creată cu HR pentru a întări cultura și angajamentul.',
                hl1: 'Co-creare de concept cu HR',
                hl2: 'Logistică și gestionare invitați',
                hl3: 'Execuție completă on-site',
                hl4: 'Consolidarea scopului companiei'
            },
            ctio: {
                role: 'Project Manager Coordonare VIP',
                desc: 'Eveniment premium pentru divizia tech, cu CTIO și lideri. Planificare operațională, logistică VIP și coordonare parteneri.',
                hl1: 'Ospitalitate premium și guest relations',
                hl2: 'Format integrat: Tech + Motorsport',
                hl3: 'Producție de înalt standard',
                hl4: 'Focus pe relaționare și achiziție'
            },
            f4: {
                role: 'Project Manager Ecosistem F1',
                desc: 'Coordonarea Formula 4 Brazilia în ecosistemul GP-ului de F1 São Paulo, asigurând aliniere, siguranță, acces și operațiuni de pistă.',
                hl1: 'Gestionarea logisticii delegației F4',
                hl2: 'Punte operațională F1 ↔ F4',
                hl3: 'Transport, travel și operațiuni de pistă',
                hl4: 'Execuție recunoscută pentru sincronizare'
            },
            tags: {
                operations: 'Operațiuni',
                cx: 'CX',
                leadership: 'Leadership',
                logistics: 'Logistică',
                scale: 'Logistică la scară',
                suppliers: 'Furnizori',
                guinness: 'Planificare Guinness',
                experience: 'Experiență',
                strategy: 'Strategie',
                intOps: 'Op. Int.',
                stakeholders: 'Stakeholderi',
                hospitality: 'Ospitalitate',
                pmo: 'PMO',
                infrastructure: 'Infrastructură',
                integration: 'Integrare',
                planning: 'Planificare',
                corporate: 'Evenimente Corporate',
                internal: 'Comunicare internă',
                engagement: 'Engajare',
                vip: 'VIP/Corporate',
                relationship: 'Relaționare',
                activation: 'Activare',
                intCoord: 'Coord. Int.',
                motorsport: 'Motorsport',
                pressure: 'Presiune'
            }
        },
        cta: {
            title: 'Gata să ridicăm nivelul?',
            subtitle: 'Hai să transformăm următoarea ta idee într-o experiență de neuitat. Strategia potrivită începe aici.',
            button: 'Începe proiectul'
        },
        footer: {
            desc: 'Creăm experiențe care construiesc branduri. De la strategie la execuție.',
            descLong: 'Creăm experiențe care construiesc branduri. De la strategie la execuție impecabilă.',
            explore: 'Explorează',
            about: 'Despre noi',
            solutions: 'Soluții',
            achievements: 'Realizări',
            cases: 'Studii',
            contact: 'Contact',
            location: 'São Paulo, Brazilia',
            rights: '© 2026 MALB Events & Consulting. Toate drepturile rezervate.',
            rightsShort: '© 2026 MALB Events & Consulting.',
            credits: 'Designed by DestinoConectado'
        },
        aboutPage: {
            kicker: 'Instituțional',
            title: 'Despre noi.',
            p1: 'Suntem o consultanță de evenimente specializată în operațiuni, logistică și livrare end-to-end.',
            p2: 'Avem experiență solidă în proiecte de scară mare în Brazilia, cu prezență puternică în motorsport, ospitalitate premium și evenimente corporate strategice.',
            p3: 'Diferențiatorul nostru este să transformăm complexitatea în execuție. Structurăm planificarea, integrăm ariile și conducem operațiunile pe teren.',
            leader: {
                kicker: 'Leadership',
                title: 'Cine este Larissa Coelho<br>',
                role: 'Head MALB*',
                p1: 'Larissa este specialistă în operațiuni de evenimente, experiența clientului și management de proiect, cu peste 5 ani de experiență.',
                p2: 'A coordonat producții internaționale precum FIA WEC Rolex 6H São Paulo, Stock Car Championship, BH Stock Festival și Mr Moo Festival 10 ani.',
                p3: 'Larissa combină planificarea strategică, managementul financiar și designul de servicii.',
                quote: '"Sunt pasionată de transformarea operațiunilor complexe în experiențe fluide și centrate pe oameni."',
                cta: 'Află mai multe'
            }
        },
        contact: {
            title: 'Ai un proiect în minte? <br><span class="highlight">Spune-ne!</span>',
            desc: 'Experiențele mari încep cu o strategie bună. Provocarea ta este munca noastră.',
            emailLabel: 'Vorbește cu noi',
            locationLabel: 'Sediu',
            formTitle: 'Trimite un mesaj',
            nameLabel: 'Numele tău',
            emailField: 'Email',
            messageLabel: 'Despre proiect...',
            submit: 'Trimite propunerea',
            namePlaceholder: ' ',
            emailPlaceholder: ' ',
            messagePlaceholder: ' '
        }
    }
};

const applyTranslations = (lang) => {
    const dictionary = translations[lang] || translations.pt;

    document.querySelectorAll('[data-i18n]').forEach((el) => {
        const key = el.dataset.i18n;
        const value = key.split('.').reduce((acc, part) => acc && acc[part], dictionary);
        if (value) {
            el.textContent = value;
        }
    });

    document.querySelectorAll('[data-i18n-html]').forEach((el) => {
        const key = el.dataset.i18nHtml;
        const value = key.split('.').reduce((acc, part) => acc && acc[part], dictionary);
        if (value) {
            el.innerHTML = value;
        }
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
        const key = el.dataset.i18nPlaceholder;
        const value = key.split('.').reduce((acc, part) => acc && acc[part], dictionary);
        if (value !== undefined) {
            el.setAttribute('placeholder', value);
        }
    });
};

if (langSelect) {
    const storedLang = localStorage.getItem('lang') || 'pt';
    langSelect.value = storedLang;
    applyTranslations(storedLang);

    langSelect.addEventListener('change', (event) => {
        const lang = event.target.value;
        localStorage.setItem('lang', lang);
        applyTranslations(lang);
    });
}

if (cursorDot && cursorOutline) {
    window.addEventListener('mousemove', (e) => {
        const posX = e.clientX;
        const posY = e.clientY;
        cursorDot.style.left = `${posX}px`;
        cursorDot.style.top = `${posY}px`;
        cursorOutline.animate({
            left: `${posX}px`,
            top: `${posY}px`
        }, { duration: 500, fill: "forwards" });
    });
}

if (typeof Lenis !== 'undefined') {
    const lenis = new Lenis({
        duration: 0.5,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smooth: true
    });
    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
}

const panels = document.querySelectorAll('.panel');
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.2 });
panels.forEach(p => observer.observe(p));

window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    if (loader) {
        loader.style.opacity = '0';
        loader.style.pointerEvents = 'none';
        setTimeout(() => loader.remove(), 800);
    }
});

const slider = document.querySelector('.portfolio-container');
let isDown = false;
let startX;
let scrollLeft;

if (slider) {
    slider.addEventListener('mousedown', (e) => {
        isDown = true;
        slider.classList.add('active'); 
        slider.style.cursor = 'grabbing';
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
    });
    slider.addEventListener('mouseleave', () => {
        isDown = false;
        slider.style.cursor = 'grab';
    });
    slider.addEventListener('mouseup', () => {
        isDown = false;
        slider.style.cursor = 'grab';
    });
    slider.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault(); 
        const x = e.pageX - slider.offsetLeft;
        const walk = (x - startX) * 2; 
        slider.scrollLeft = scrollLeft - walk;
    });
}

const navbar = document.querySelector('.navbar');
const hero = document.querySelector('.hero');
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

if (navbar) {
    if (!hero) {
        navbar.classList.add('visible');
    } else {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                navbar.classList.add('visible');
            } else {
                navbar.classList.remove('visible');
            }
        });
    }
}

if (navToggle && navbar && navLinks) {
    navToggle.addEventListener('click', () => {
        const isOpen = navbar.classList.toggle('menu-open');
        navToggle.setAttribute('aria-expanded', String(isOpen));
    });

    navLinks.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', () => {
            if (navbar.classList.contains('menu-open')) {
                navbar.classList.remove('menu-open');
                navToggle.setAttribute('aria-expanded', 'false');
            }
        });
    });
}

const prevBtn = document.querySelector('.nav-arrow.prev');
const nextBtn = document.querySelector('.nav-arrow.next');

if (prevBtn && nextBtn && slider) {
    const scrollAmount = 480; 
    nextBtn.addEventListener('click', () => {
        slider.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    });
    prevBtn.addEventListener('click', () => {
        slider.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    });
}
