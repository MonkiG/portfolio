const sharedLinks = [
  { label: "GitHub", href: "https://github.com/monkig", primary: true },
  { label: "LinkedIn", href: "https://linkedin.com/in/ramonha" },
];

const languages = [
  "JavaScript",
  "TypeScript",
  "PHP",
  "Go",
  "Python",
  "PostgreSql",
  "MongoDB",
];

const interests = [
  "Low level programming",
  "Functional programming",
  "Rust",
  "C",
  "Clojure",
  "Gleam",
];

export const portfolioContent = {
  es: {
    lang: "es",
    metadata: {
      title: "Ramon Hernandez",
      description:
        "Ramon Hernandez - Ingeniero en Computacion y desarrollador web. Enfocado en software confiable, sistemas web utiles y tecnologias modernas.",
      keywords:
        "Ramon Hernandez, Puerto Vallarta, Desarrollador Web, Ingeniero en Computacion, Go Developer, JavaScript, Portfolio, Tafer Resorts, Universidad de Guadalajara",
      ogTitle: "Ramon Hernandez - Portfolio de Ingenieria en Computacion",
      ogDescription:
        "Ingeniero en Computacion enfocado en software confiable, sistemas web utiles y tecnologias modernas.",
      ogUrl: "https://monkig.dev",
    },
    languageSwitch: {
      href: "/en/",
      label: "English",
      ariaLabel: "Switch language to English",
    },
    sectionsLabel: "Secciones del portfolio",
    hero: {
      eyebrow: "Ingeniero en Computacion - Puerto Vallarta",
      title: "Ramon Hernandez",
      introPrefix: "Ingeniero en Computacion por",
      universityName: "Universidad de Guadalajara",
      universityUrl: "https://udg.mx/",
      introSuffix:
        "enfocado en construir software confiable, sistemas web utiles y herramientas practicas con codigo limpio y una curiosidad constante por como funcionan las cosas.",
      actionsLabel: "Enlaces principales",
      links: sharedLinks,
    },
    experience: {
      number: "01",
      title: "Experiencia",
      items: [
        {
          period: "Marzo 2025 - Presente",
          role: "Desarrollador Web",
          organization: "Tafer Resorts",
          url: "https://www.taferresorts.com/",
        },
        {
          period: "Marzo 2024 - Agosto 2024",
          role: "Desarrollador Web - Practicante de Servicio Social",
          organization: "Centro Universitario de la Costa",
          url: "https://www.cuc.udg.mx/",
        },
      ],
    },
    languages: {
      number: "02",
      title: "Lenguajes",
      description:
        "He trabajado y experimentado con una variedad de lenguajes, asi que adaptarme a un nuevo stack suele ser directo: entender sus patrones y herramientas, y construir con intencion.",
      ariaLabel: "Lenguajes y herramientas",
      items: languages,
    },
    interests: {
      number: "03",
      title: "Interesado en",
      description:
        "Siempre aprendiendo y profundizando en temas que me hacen pensar distinto sobre software y sistemas.",
      ariaLabel: "Intereses y temas de aprendizaje actuales",
      items: interests,
    },
    projects: {
      number: "04",
      title: "Proyectos",
      loading: "Cargando proyectos...",
      empty: "Todavia no hay proyectos seleccionados.",
      error: "No se pudieron cargar los proyectos.",
      visitWebsiteLabel: "Visitar sitio web",
      viewRepositoryLabel: "Ver repositorio en GitHub",
      gifAlt: "this is fine",
    },
  },
  en: {
    lang: "en",
    metadata: {
      title: "Ramon Hernandez",
      description:
        "Ramon Hernandez - Computer Engineer and Web Developer. Passionate about clean code, Go, and web technologies.",
      keywords:
        "Ramon Hernandez, Puerto Vallarta, Web Developer, Computer Engineer, Go Developer, JavaScript, Portfolio, Tafer Resorts, Universidad de Guadalajara",
      ogTitle: "Ramon Hernandez - Computer Engineer Portfolio",
      ogDescription:
        "Computer Engineer focused on reliable software, useful web systems, and modern web technologies.",
      ogUrl: "https://monkig.dev/en/",
    },
    languageSwitch: {
      href: "/",
      label: "Espanol",
      ariaLabel: "Cambiar idioma a espanol",
    },
    sectionsLabel: "Portfolio sections",
    hero: {
      eyebrow: "Computer Engineer - Puerto Vallarta",
      title: "Ramon Hernandez",
      introPrefix: "Computer Engineer by",
      universityName: "Universidad de Guadalajara",
      universityUrl: "https://udg.mx/",
      introSuffix:
        "focused on building reliable software, useful web systems, and practical tools with clean code and a constant curiosity for how things work.",
      actionsLabel: "Primary links",
      links: sharedLinks,
    },
    experience: {
      number: "01",
      title: "Experience",
      items: [
        {
          period: "March 2025 - Present",
          role: "Web Developer",
          organization: "Tafer Resorts",
          url: "https://www.taferresorts.com/",
        },
        {
          period: "March 2024 - August 2024",
          role: "Web Developer - Social Service Intern",
          organization: "Centro Universitario de la Costa",
          url: "https://www.cuc.udg.mx/",
        },
      ],
    },
    languages: {
      number: "02",
      title: "Languages",
      description:
        "I have worked with and experimented across a wide range of languages, so adapting to a new stack is usually straightforward: understand the idioms, learn the tooling, and build with intention.",
      ariaLabel: "Languages and tools",
      items: languages,
    },
    interests: {
      number: "03",
      title: "Interested in",
      description:
        "Always learning and going deeper into topics that make me think differently about software and systems.",
      ariaLabel: "Interests and current learning topics",
      items: interests,
    },
    projects: {
      number: "04",
      title: "Projects",
      loading: "Loading projects...",
      empty: "No projects selected yet.",
      error: "Unable to load projects.",
      visitWebsiteLabel: "Visit website",
      viewRepositoryLabel: "View GitHub repository",
      gifAlt: "this is fine",
    },
  },
};
