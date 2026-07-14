/**
 * Matriz tecnológica — fuente de verdad escalable.
 * category id → t(`skillsCategories.${id}`)
 * iconKey → assets/skillAssetIcons o components/Icon.jsx
 * description.es / description.en → valor en primera persona
 */
export const skillsMatrix = [
  {
    id: "languages",
    skills: [
      {
        id: "javascript",
        label: "JavaScript (ES6+)",
        accent: "#F7DF1E",
        iconKey: "javascript",
        description: {
          es: "Base de mi stack para lógica asíncrona, patrones modernos y prototipado rápido sin fricción.",
          en: "Core of my stack for async logic, modern patterns, and frictionless rapid prototyping.",
        },
      },
      {
        id: "typescript",
        label: "TypeScript",
        accent: "#3178C6",
        iconKey: "typescript",
        description: {
          es: "Herramienta obligatoria en mi flujo para garantizar tipado estricto y código libre de bugs.",
          en: "A non-negotiable in my workflow for strict typing and bug-resistant code.",
        },
      },
      {
        id: "html5",
        label: "HTML5",
        accent: "#E34F26",
        iconKey: "html5",
        description: {
          es: "Semántica accesible como cimiento de interfaces claras, indexables y mantenibles.",
          en: "Accessible semantics as the foundation of clear, indexable, and maintainable interfaces.",
        },
      },
      {
        id: "css3",
        label: "CSS3",
        accent: "#1572B6",
        iconKey: "css3",
        description: {
          es: "Control fino de layout, motion y responsividad sin sacrificar rendimiento de render.",
          en: "Fine-grained control of layout, motion, and responsiveness without sacrificing paint performance.",
        },
      },
    ],
  },
  {
    id: "frontend",
    skills: [
      {
        id: "react",
        label: "React",
        accent: "#61DAFB",
        iconKey: "react",
        description: {
          es: "Mi core para el desarrollo de interfaces modulares, escalables y con renderizado óptimo.",
          en: "My core for building modular, scalable interfaces with optimized rendering.",
        },
      },
      {
        id: "nextjs",
        label: "Next.js",
        accent: "#FFFFFF",
        accentLight: "#0A0A0A",
        iconKey: "nextjs",
        description: {
          es: "Arquitectura full-stack orientada a SSR/SSG, routing y performance en producción.",
          en: "Full-stack architecture focused on SSR/SSG, routing, and production performance.",
        },
      },
      {
        id: "tailwind",
        label: "Tailwind CSS",
        accent: "#38BDF8",
        iconKey: "tailwind",
        description: {
          es: "Sistema de diseño utilitario que acelera UI consistentes y payloads CSS mínimos.",
          en: "A utility design system that speeds up consistent UI with minimal CSS payloads.",
        },
      },
      {
        id: "shadcn",
        label: "Shadcn UI",
        accent: "#A1A1AA",
        iconKey: "shadcn",
        description: {
          es: "Componentes accesibles y ownership total del código para sistemas de diseño propios.",
          en: "Accessible components with full code ownership for custom design systems.",
        },
      },
      {
        id: "framer",
        label: "Framer Motion",
        accent: "#FF0055",
        iconKey: "framer",
        description: {
          es: "Orquestación de microinteracciones y layouts elásticos con física de alta fidelidad.",
          en: "Orchestration of micro-interactions and elastic layouts with high-fidelity physics.",
        },
      },
    ],
  },
  {
    id: "state",
    skills: [
      {
        id: "redux",
        label: "Redux",
        accent: "#764ABC",
        iconKey: "redux",
        description: {
          es: "Estado global predecible cuando la complejidad de dominio exige trazabilidad estricta.",
          en: "Predictable global state when domain complexity demands strict traceability.",
        },
      },
      {
        id: "zustand",
        label: "Zustand",
        accent: "#8B7355",
        iconKey: "zustand",
        description: {
          es: "Stores livianos y ergonómicos para estado de UI sin boilerplate innecesario.",
          en: "Lightweight, ergonomic stores for UI state without unnecessary boilerplate.",
        },
      },
      {
        id: "tanstack",
        label: "TanStack Query",
        accent: "#FF4154",
        iconKey: "tanstack",
        description: {
          es: "Caché y sincronización de datos remotos con fetching eficiente y UX resiliente.",
          en: "Remote data cache and sync with efficient fetching and resilient UX.",
        },
      },
    ],
  },
  {
    id: "backend",
    skills: [
      {
        id: "nodejs",
        label: "Node.js",
        accent: "#339933",
        iconKey: "nodejs",
        description: {
          es: "Runtime de alto throughput para APIs, workers y servicios event-driven.",
          en: "High-throughput runtime for APIs, workers, and event-driven services.",
        },
      },
      {
        id: "nestjs",
        label: "NestJS",
        accent: "#E0234E",
        iconKey: "nestjs",
        description: {
          es: "Arquitectura modular y tipada para backends empresariales escalables.",
          en: "Modular, typed architecture for scalable enterprise backends.",
        },
      },
      {
        id: "express",
        label: "Express",
        accent: "#68A063",
        iconKey: "express",
        description: {
          es: "Capa HTTP ágil para microservicios y middlewares a medida.",
          en: "Agile HTTP layer for microservices and custom middleware.",
        },
      },
      {
        id: "rest",
        label: "REST APIs",
        accent: "#6C63FF",
        iconKey: "api",
        description: {
          es: "Contratos claros, versionado y rendimiento predecible entre cliente y servidor.",
          en: "Clear contracts, versioning, and predictable performance between client and server.",
        },
      },
      {
        id: "jwt",
        label: "JWT / JWKS",
        accent: "#D63AFF",
        description: {
          es: "Autenticación stateless y rotación de claves para seguridad de APIs.",
          en: "Stateless auth and key rotation for API security.",
        },
      },
      {
        id: "prisma",
        label: "Prisma (ORM)",
        accent: "#5A67D8",
        iconKey: "prisma",
        description: {
          es: "Acceso tipado a datos con migraciones seguras y queries productivas.",
          en: "Typed data access with safe migrations and productive queries.",
        },
      },
    ],
  },
  {
    id: "database",
    skills: [
      {
        id: "postgresql",
        label: "PostgreSQL",
        accent: "#4169E1",
        iconKey: "postgresql",
        description: {
          es: "Motor relacional robusto para integridad, consultas complejas y carga real.",
          en: "Robust relational engine for integrity, complex queries, and real-world load.",
        },
      },
      {
        id: "postgis",
        label: "PostGIS",
        accent: "#1F9C4D",
        description: {
          es: "Capacidad geoespacial nativa para analytics y consultas espaciales de alto valor.",
          en: "Native geospatial power for analytics and high-value spatial queries.",
        },
      },
      {
        id: "sqlserver",
        label: "SQL Server",
        accent: "#CC2927",
        description: {
          es: "Experiencia en entornos enterprise con T-SQL y cargas transaccionales.",
          en: "Experience in enterprise environments with T-SQL and transactional workloads.",
        },
      },
      {
        id: "firebase",
        label: "Firebase",
        accent: "#FFCA28",
        iconKey: "firebase",
        description: {
          es: "Backend managed para auth, realtime y shipping rápido de productos.",
          en: "Managed backend for auth, realtime, and rapid product shipping.",
        },
      },
      {
        id: "supabase",
        label: "Supabase",
        accent: "#3ECF8E",
        iconKey: "supabase",
        description: {
          es: "Postgres + auth + realtime con DX moderna para MVPs y SaaS.",
          en: "Postgres + auth + realtime with modern DX for MVPs and SaaS.",
        },
      },
    ],
  },
  {
    id: "cloud",
    skills: [
      {
        id: "gcp",
        label: "Google Cloud (GCP)",
        accent: "#4285F4",
        iconKey: "gcp",
        description: {
          es: "Infra cloud para servicios escalables, datos y despliegues confiables.",
          en: "Cloud infra for scalable services, data, and reliable deployments.",
        },
      },
      {
        id: "cloudrun",
        label: "Cloud Run",
        accent: "#4285F4",
        iconKey: "cloudrun",
        description: {
          es: "Contenedores serverless con escala automática y costos alineados al uso.",
          en: "Serverless containers with auto-scaling and usage-aligned cost.",
        },
      },
      {
        id: "railway",
        label: "Railway",
        accent: "#A0A0A0",
        iconKey: "railway",
        description: {
          es: "Deploy ágil de APIs y workers con pipelines simples y feedback rápido.",
          en: "Agile deploy of APIs and workers with simple pipelines and fast feedback.",
        },
      },
      {
        id: "firebasehosting",
        label: "Firebase Hosting",
        accent: "#FFCA28",
        iconKey: "firebasehosting",
        description: {
          es: "Entrega CDN de frontends estáticos con preview y rollbacks sencillos.",
          en: "CDN delivery for static frontends with simple previews and rollbacks.",
        },
      },
    ],
  },
  {
    id: "tools",
    skills: [
      {
        id: "git",
        label: "Git",
        accent: "#F05032",
        iconKey: "git",
        description: {
          es: "Control de versiones disciplinado para colaboración y entrega continua.",
          en: "Disciplined version control for collaboration and continuous delivery.",
        },
      },
      {
        id: "docker",
        label: "Docker",
        accent: "#2496ED",
        iconKey: "docker",
        description: {
          es: "Uso clave para la contenedorización de microservicios y paridad exacta entre entornos.",
          en: "Key for containerizing microservices and exact parity across environments.",
        },
      },
      {
        id: "postman",
        label: "Postman",
        accent: "#FF6C37",
        iconKey: "postman",
        description: {
          es: "Exploración y validación de APIs con colecciones reproducibles.",
          en: "API exploration and validation with reproducible collections.",
        },
      },
      {
        id: "figma",
        label: "Figma",
        accent: "#F24E1E",
        iconKey: "figma",
        description: {
          es: "Puente diseño–desarrollo para sistemas visuales y handoff preciso.",
          en: "Design–dev bridge for visual systems and precise handoff.",
        },
      },
      {
        id: "sentry",
        label: "Sentry",
        accent: "#9B8BB4",
        iconKey: "sentry",
        description: {
          es: "Observabilidad de errores en producción para diagnóstico y priorización.",
          en: "Production error observability for diagnosis and prioritization.",
        },
      },
      {
        id: "claudecode",
        label: "Claude Code",
        accent: "#D97757",
        iconKey: "claudecode",
        description: {
          es: "Agente de coding para acelerar refactors, tests y exploración de código.",
          en: "Coding agent to accelerate refactors, tests, and codebase exploration.",
        },
      },
      {
        id: "cursor",
        label: "Cursor",
        accent: "#A0A0A0",
        iconKey: "cursor",
        description: {
          es: "IDE asistido por IA para iterar más rápido sin perder control del diseño.",
          en: "AI-assisted IDE to iterate faster without losing design control.",
        },
      },
    ],
  },
  {
    id: "testing",
    skills: [
      {
        id: "jest",
        label: "Jest",
        accent: "#C21325",
        iconKey: "jest",
        description: {
          es: "Suite de tests unitarios/integración para regresiones y confianza en CI.",
          en: "Unit/integration test suite for regressions and CI confidence.",
        },
      },
      // {
      //   id: "supertest",
      //   label: "Supertest",
      //   accent: "#3C873A",
      //   description: {
      //     es: "Pruebas HTTP end-to-end de APIs para contratos y status codes reales.",
      //     en: "HTTP end-to-end API tests for contracts and real status codes.",
      //   },
      // },
    ],
  },
];

export function getSkillDescription(skill, lang = "en") {
  const key = lang?.startsWith("es") ? "es" : "en";
  return skill?.description?.[key] ?? skill?.description?.en ?? "";
}
