export type Language = "pt" | "en" | "es"

export const siteConfig = {
  name: "Ruan Natividade",
  title: "Ruan Natividade | Back-end, Dados & Automação",
  email: "ruan.natividade1@icloud.com",
  whatsapp: "",
  social: {
    linkedin: "https://www.linkedin.com/in/ruan-natividade/",
    instagram: "https://www.instagram.com/ruan.natividade/",
    github: "https://github.com/NatiivaZ",
    portfolio: "https://natiivaz.github.io/Portifolio-/",
  },
  profileImage: "/images/profile.jpg",
  backgroundImage: "/images/background.jpg",
}

export const navItems = {
  pt: [
    { id: "home", label: "Início" },
    { id: "about", label: "Sobre" },
    { id: "portfolio", label: "Portfólio" },
    { id: "certifications", label: "Certificações" },
    { id: "contact", label: "Contato" },
  ],
  en: [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "portfolio", label: "Portfolio" },
    { id: "certifications", label: "Certifications" },
    { id: "contact", label: "Contact" },
  ],
  es: [
    { id: "home", label: "Inicio" },
    { id: "about", label: "Sobre mí" },
    { id: "portfolio", label: "Portafolio" },
    { id: "certifications", label: "Certificaciones" },
    { id: "contact", label: "Contacto" },
  ],
}

export const heroContent = {
  pt: {
    welcome: "Bem-vindo ao meu",
    welcomeHighlight: "portfólio pessoal",
    badge: "Disponível para oportunidades",
    title: "Desenvolvedor Back-end · Dados, SQL & Automação",
    subtitle:
      "SQL e cubos para análise; validação de rito processual e inscrições (SERASA, Dívida Ativa, CADIN). Automações em Python que integram sistemas e reduzem retrabalho.",
    highlights: [
      "6+ projetos em automação e análise de dados.",
      "Python · SQL · React — stack principal.",
      "Foco em back-end, dados e conformidade regulatória.",
      "Automações que integram SIFAMA, SERASA e CADIN.",
    ],
  },
  en: {
    welcome: "Welcome to my",
    welcomeHighlight: "personal portfolio",
    badge: "Open to opportunities",
    title: "Back-end Developer · Data, SQL & Automation",
    subtitle:
      "SQL and cubes for analysis; procedural validation and registrations (SERASA, Active Debt, CADIN). Python automations that integrate systems and reduce rework.",
    highlights: [
      "6+ projects in automation and data analysis.",
      "Python · SQL · React — main stack.",
      "Focus on back-end, data and regulatory compliance.",
      "Automations integrating SIFAMA, SERASA and CADIN.",
    ],
  },
  es: {
    welcome: "Bienvenido a mi",
    welcomeHighlight: "portafolio personal",
    badge: "Disponible para oportunidades",
    title: "Desarrollador Back-end · Datos, SQL y Automatización",
    subtitle:
      "SQL y cubos para análisis; validación de rito procesal e inscripciones (SERASA, Deuda Activa, CADIN). Automatizaciones en Python que integran sistemas y reducen retrabajo.",
    highlights: [
      "6+ proyectos en automatización y análisis de datos.",
      "Python · SQL · React — stack principal.",
      "Enfoque en back-end, datos y conformidad regulatoria.",
      "Automatizaciones que integran SIFAMA, SERASA y CADIN.",
    ],
  },
}

export const technologiesContent = {
  pt: {
    title: "Stack e Ferramentas",
    subtitle: "Foco em back-end: SQL, cubos de dados, Python e automação",
  },
  en: {
    title: "Stack and Tools",
    subtitle: "Back-end focus: SQL, data cubes, Python and automation",
  },
  es: {
    title: "Stack y Herramientas",
    subtitle: "Enfoque back-end: SQL, cubos de datos, Python y automatización",
  },
}

export const technologies = [
  {
    name: "Python",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    color: "#1E40AF",
    textColor: "#fff",
  },
  {
    name: "SQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    color: "#2563EB",
    textColor: "#fff",
  },
  {
    name: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    color: "#22D3EE",
    textColor: "#fff",
  },
  {
    name: "TypeScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    color: "#1F2937",
    textColor: "#fff",
  },
  {
    name: "Streamlit",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    color: "#FF4B4B",
    textColor: "#fff",
  },
  {
    name: "Git",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    color: "#EAB308",
    textColor: "#000",
  },
]

export const aboutContent = {
  pt: {
    title: "SOBRE MIM",
    intro: [
      "Atuo na ANTT, nas unidades SUDEG, GEAUT e CCOBI, com foco em back-end, análise de dados e automação aplicada a processos regulatórios. O núcleo do meu trabalho é extrair dados de autos de infração (cubo multas e bases correlatas), cruzar informações e validar se o processo e o auto observaram o rito processual exigido para inscrição em cadastros como SERASA, Dívida Ativa e CADIN.",
      "Uso SQL em cubos e bancos para tratar bases volumosas, construir consultas e relatórios que apoiam decisões. Desenvolvo automações em Python para integrar sistemas, reduzir retrabalho e padronizar entregas.",
      "Busco unir rigor analítico, automação e comunicação clara: processos mais previsíveis, dados confiáveis e entregas que facilitem auditoria e a tomada de decisão.",
    ],
    dailyTitle: "No dia a dia",
    cta: "ENTRAR EM CONTATO",
  },
  en: {
    title: "ABOUT ME",
    intro: [
      "I work at ANTT, in the SUDEG, GEAUT and CCOBI units, focusing on back-end, data analysis and automation applied to regulatory processes.",
      "I use SQL in cubes and databases to process large datasets and build reports. I develop Python automations to integrate systems and reduce rework.",
      "I seek to combine analytical rigor, automation and clear communication for auditable processes and reliable data.",
    ],
    dailyTitle: "Day to day",
    cta: "GET IN TOUCH",
  },
  es: {
    title: "SOBRE MÍ",
    intro: [
      "Actúo en ANTT, en las unidades SUDEG, GEAUT y CCOBI, con enfoque en back-end, análisis de datos y automatización aplicada a procesos regulatorios.",
      "Uso SQL en cubos y bases de datos para tratar volúmenes grandes y construir informes. Desarrollo automatizaciones en Python para integrar sistemas.",
      "Busco unir rigor analítico, automatización y comunicación clara para procesos auditables y datos confiables.",
    ],
    dailyTitle: "En el día a día",
    cta: "CONTACTAR",
  },
}

export const dailyActivities = {
  pt: [
    "Extração de dados de autos de infração a partir do cubo multas e bases correlatas (Dívida Ativa, SIFAMA), com análise e preparação para inscrição",
    "Validação do rito processual para inscrição em SERASA, Dívida Ativa e CADIN",
    "Inscrição e acompanhamento pós-inscrição via Serasa Experian e EXPERIAN BRAZIL B2B",
    "Fluxo no SIFAMA: lotes, pré-lotes e transmissão dos autos à SERASA via API",
    "Modelagem e análise com SQL em cubos e bancos de dados",
    "Automações em Python: conversor de texto, comparador de bases, inscrição SERASA e contagem de cartas",
    "Pacote Office (Excel, Word, PowerPoint) para planilhas, documentação e apresentações",
    "Colaboração com outras áreas para reduzir retrabalho e padronizar entregas",
  ],
  en: [
    "Data extraction from infraction records from multas cube and related databases",
    "Procedural validation for registration in SERASA, Active Debt and CADIN",
    "Registration and post-registration monitoring via Serasa Experian",
    "SIFAMA workflow: batches, pre-batches and API transmission to SERASA",
    "SQL modeling and analysis in cubes and databases",
    "Python automations: text converter, database comparator, SERASA registration",
    "Office package for spreadsheets, documentation and presentations",
    "Cross-team collaboration to reduce rework and standardize deliveries",
  ],
  es: [
    "Extracción de datos de autos de infracción desde cubo multas y bases correlatas",
    "Validación del rito procesal para inscripción en SERASA, Deuda Activa y CADIN",
    "Inscripción y seguimiento post-inscripción vía Serasa Experian",
    "Flujo en SIFAMA: lotes, pre-lotes y transmisión a SERASA vía API",
    "Modelado y análisis con SQL en cubos y bases de datos",
    "Automatizaciones en Python: conversor, comparador de bases, inscripción SERASA",
    "Paquete Office para hojas de cálculo, documentación y presentaciones",
    "Colaboración con otras áreas para reducir retrabajo",
  ],
}

export const experienceContent = {
  pt: {
    title: "Trajetória e Foco",
    subtitle: "Atuação na ANTT com foco em dados, conformidade e automação",
    achievements: "Principais atividades:",
  },
  en: {
    title: "Career & Focus",
    subtitle: "Work at ANTT focused on data, compliance and automation",
    achievements: "Key activities:",
  },
  es: {
    title: "Trayectoria y Enfoque",
    subtitle: "Actuación en ANTT enfocada en datos, conformidad y automatización",
    achievements: "Principales actividades:",
  },
}

export const experiences = [
  {
    title: {
      pt: "Dados, conformidade e inscrições",
      en: "Data, compliance and registrations",
      es: "Datos, conformidad e inscripciones",
    },
    company: "ANTT / SUDEG / GEAUT / CCOBI",
    period: { pt: "Atual", en: "Present", es: "Actual" },
    location: { pt: "Brasília, DF, Brasil", en: "Brasília, DF, Brazil", es: "Brasília, DF, Brasil" },
    type: { pt: "Tempo integral", en: "Full-time", es: "Tiempo completo" },
    description: {
      pt: "Núcleo dedicado à verificação e inscrição de autos de infração na SERASA. Extração no cubo multas, validação do rito processual e monitoramento no Serasa Experian e EXPERIAN BRAZIL B2B. Organização de lotes no SIFAMA e transmissão via API.",
      en: "Core team for verification and registration of infraction records in SERASA. Data extraction, procedural validation and monitoring via Serasa Experian.",
      es: "Núcleo dedicado a verificación e inscripción de autos en SERASA. Extracción en cubo multas, validación del rito y monitoreo en Serasa Experian.",
    },
    achievements: {
      pt: ["Extração e cruzamento de bases (cubo multas, Dívida Ativa)", "Validação de rito para SERASA, Dívida Ativa e CADIN", "Fluxo SIFAMA com rastreabilidade ponta a ponta"],
      en: ["Data extraction and cross-referencing", "Procedural validation for SERASA and CADIN", "End-to-end SIFAMA workflow"],
      es: ["Extracción y cruce de bases", "Validación de rito para SERASA y CADIN", "Flujo SIFAMA con trazabilidad"],
    },
    skills: {
      pt: ["SQL", "Cubos de Dados", "SERASA", "SIFAMA", "Conformidade"],
      en: ["SQL", "Data Cubes", "SERASA", "SIFAMA", "Compliance"],
      es: ["SQL", "Cubos de Datos", "SERASA", "SIFAMA", "Conformidad"],
    },
  },
  {
    title: {
      pt: "Automações e integração de sistemas",
      en: "Automations and system integration",
      es: "Automatizaciones e integración de sistemas",
    },
    company: "ANTT / SUDEG / GEAUT / CCOBI",
    period: { pt: "Atual", en: "Present", es: "Actual" },
    location: { pt: "Brasília, DF, Brasil", en: "Brasília, DF, Brazil", es: "Brasília, DF, Brasil" },
    type: { pt: "Tempo integral", en: "Full-time", es: "Tiempo completo" },
    description: {
      pt: "Desenvolvimento de automações em Python: conversor de texto, comparador de bases SERASA x Dívida Ativa, inscrição automática na SERASA e contagem de cartas. Integração entre sistemas internos e bases de dados.",
      en: "Python automation development: text converter, SERASA vs Active Debt comparator, automatic SERASA registration and letter counting.",
      es: "Desarrollo de automatizaciones en Python: conversor, comparador SERASA x Deuda Activa, inscripción automática en SERASA.",
    },
    achievements: {
      pt: ["6+ automações desktop e web em produção", "Redução de retrabalho em processos repetitivos", "Integração SIFAMA, SERASA e CADIN"],
      en: ["6+ desktop and web automations in production", "Reduced rework in repetitive processes", "SIFAMA, SERASA and CADIN integration"],
      es: ["6+ automatizaciones en producción", "Reducción de retrabajo", "Integración SIFAMA, SERASA y CADIN"],
    },
    skills: {
      pt: ["Python", "Selenium", "Tkinter", "Streamlit", "Pandas"],
      en: ["Python", "Selenium", "Tkinter", "Streamlit", "Pandas"],
      es: ["Python", "Selenium", "Tkinter", "Streamlit", "Pandas"],
    },
  },
  {
    title: {
      pt: "Análise, integração e relatórios",
      en: "Analysis, integration and reports",
      es: "Análisis, integración e informes",
    },
    company: "ANTT / SUDEG / GEAUT / CCOBI",
    period: { pt: "Atual", en: "Present", es: "Actual" },
    location: { pt: "Brasília, DF, Brasil", en: "Brasília, DF, Brazil", es: "Brasília, DF, Brasil" },
    type: { pt: "Tempo integral", en: "Full-time", es: "Tiempo completo" },
    description: {
      pt: "Integração ponta a ponta entre cubos analíticos, SIFAMA, SERASA, Dívida Ativa e CADIN. Consultas SQL, relatórios e visões consolidadas; entregas em Excel, Word e PowerPoint para gestores.",
      en: "End-to-end integration between analytical cubes, SIFAMA, SERASA, Active Debt and CADIN. SQL queries, reports and consolidated views.",
      es: "Integración entre cubos analíticos, SIFAMA, SERASA, Deuda Activa y CADIN. Consultas SQL, informes y vistas consolidadas.",
    },
    achievements: {
      pt: ["Relatórios semanais no EXPERIAN BRAZIL B2B", "Visões consolidadas para tomada de decisão", "Dados auditáveis e rastreáveis"],
      en: ["Weekly reports in EXPERIAN BRAZIL B2B", "Consolidated views for decision making", "Auditable and traceable data"],
      es: ["Informes semanales en EXPERIAN BRAZIL B2B", "Vistas consolidadas para decisiones", "Datos auditables y rastreables"],
    },
    skills: {
      pt: ["Power BI", "Excel", "SQL", "Relatórios", "Office"],
      en: ["Power BI", "Excel", "SQL", "Reports", "Office"],
      es: ["Power BI", "Excel", "SQL", "Informes", "Office"],
    },
  },
]

export const portfolioContent = {
  pt: {
    title: "Projetos",
    subtitle: "Automações e sistemas CCOBI/SERASA. Clique em um card para ver detalhes.",
    tabProjects: "🖥️ Automações Desktop",
    tabBI: "🌐 Ferramentas Web",
    viewDetails: "Ver detalhes",
    live: "Ver projeto",
  },
  en: {
    title: "Projects",
    subtitle: "CCOBI/SERASA automations and systems. Click a card for details.",
    tabProjects: "🖥️ Desktop Automations",
    tabBI: "🌐 Web Tools",
    viewDetails: "View details",
    live: "View project",
  },
  es: {
    title: "Proyectos",
    subtitle: "Automatizaciones y sistemas CCOBI/SERASA. Haz clic en una tarjeta para detalles.",
    tabProjects: "🖥️ Automatizaciones Desktop",
    tabBI: "🌐 Herramientas Web",
    viewDetails: "Ver detalles",
    live: "Ver proyecto",
  },
}

export const certificationsContent = {
  pt: {
    title: "Certificações",
    subtitle: "Formações e certificações que compõem minha base técnica",
  },
  en: {
    title: "Certifications",
    subtitle: "Training and certifications that form my technical foundation",
  },
  es: {
    title: "Certificaciones",
    subtitle: "Formaciones y certificaciones que componen mi base técnica",
  },
}

export const certifications = [
  {
    title: "Foundations of Data Science",
    issuer: "Google · Coursera · Certificado profissional",
    year: "2026",
    url: "https://www.coursera.org/verify/5ZZCS2T8SZKM",
    pdf: "/certifications/foundations-of-data-science-google.pdf",
  },
  {
    title: "Master Power BI — De A à Z",
    issuer: "Udemy · Felipe Mafra · 20,5 h",
    year: "2024",
    url: "https://ude.my/UC-313a4b6f-3260-4d7f-8d61-877efb2c663f",
  },
  {
    title: "Criando Robôs com Python — Automatizando Processos",
    issuer: "Udemy · Gabriel Casemiro · 10,5 h",
    year: "2025",
    url: "https://ude.my/UC-cda45169-8b94-4cb7-94dd-035468bbb196",
  },
]

export const blogContent = {
  pt: {
    title: "Blog",
    subtitle: "Artigos e novidades em breve.",
    featured: "Destaques",
    latest: "Recentes",
    empty: "Nenhum artigo publicado ainda.",
  },
  en: {
    title: "Blog",
    subtitle: "Articles and updates coming soon.",
    featured: "Featured",
    latest: "Latest",
    empty: "No articles published yet.",
  },
  es: {
    title: "Blog",
    subtitle: "Artículos y novedades próximamente.",
    featured: "Destacados",
    latest: "Recientes",
    empty: "Aún no hay artículos publicados.",
  },
}

export const footerContent = {
  pt: {
    portfolio: "PORTFÓLIO",
    about: "SOBRE MIM",
    connect: "VAMOS CONECTAR",
    projectQuestion: "Tem um projeto em mente?",
    cta: "ENTRAR EM CONTATO",
    madeBy: "FEITO POR",
    links: {
      portfolio: ["Automações Python", "Ferramentas Streamlit", "Análise de Dados"],
      about: ["Trajetória ANTT", "Stack Técnico", "Certificações"],
    },
  },
  en: {
    portfolio: "PORTFOLIO",
    about: "ABOUT ME",
    connect: "LET'S CONNECT",
    projectQuestion: "Have a project in mind?",
    cta: "GET IN TOUCH",
    madeBy: "MADE BY",
    links: {
      portfolio: ["Python Automations", "Streamlit Tools", "Data Analysis"],
      about: ["ANTT Career", "Tech Stack", "Certifications"],
    },
  },
  es: {
    portfolio: "PORTAFOLIO",
    about: "SOBRE MÍ",
    connect: "CONECTEMOS",
    projectQuestion: "¿Tienes un proyecto en mente?",
    cta: "CONTACTAR",
    madeBy: "HECHO POR",
    links: {
      portfolio: ["Automatizaciones Python", "Herramientas Streamlit", "Análisis de Datos"],
      about: ["Trayectoria ANTT", "Stack Técnico", "Certificaciones"],
    },
  },
}
