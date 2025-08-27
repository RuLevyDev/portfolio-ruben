export const profile = {
  name: "Rubén Orero Levy",
  avatar: "/avatar.png",
  role: {
    es: "Lead/Senior Flutter Developer",
    en: "Lead/Senior Flutter Developer",
  },
  headline: {
    es: "Desarrollo apps móviles y multiplataforma con Flutter. Arquitecturas limpias, CI/CD y foco en performance.",
    en: "I build high‑quality cross‑platform apps with Flutter. Clean Architecture, CI/CD and performance focus.",
  },
  location: { es: "Malaga, España", en: "Malaga, Spain" },
  email: "rulevydeveloper@gmail.com",

  linkedin: "https://www.linkedin.com/in/ruben-orero-levy",
  github: "https://github.com/RulevyDev",
  availability: { es: "Disponible para proyectos y liderazgo técnico", en: "Open to projects & tech leadership" },
  summary: {
    es: "Full‑Stack y Flutter Dev con experiencia liderando equipos y apps en producción (120k+ usuarios). Clean Architecture, MVVM/BLoC/Provider, Firebase y CI/CD (Jenkins/GitHub Actions). Enfoque en automatización, calidad y métricas.",
    en: "Full‑Stack & Flutter Dev with experience leading teams and production apps (120k+ users). Clean Architecture, MVVM/BLoC/Provider, Firebase and CI/CD (Jenkins/GitHub Actions). Focus on automation, quality and metrics.",
  },
  stats: [
    { value: "120k+", label: { es: "usuarios en apps", en: "app users" } },
    { value: "400+", label: { es: "proyectos usando mi librería", en: "projects using my package" } },
    { value: "6+", label: { es: "años de experiencia", en: "years experience" } },
  ],
  skills: [
    {
      title: { es: "Mobile / Multiplataforma", en: "Mobile / Cross‑Platform" },
      items: ["Flutter", "Dart", "Android", "Kotlin", "Swift (basic)", "PWA"],
    },
    {
      title: { es: "Arquitectura", en: "Architecture" },
      items: ["Clean Architecture", "MVVM", "BLoC", "Provider", "DDD", "SOLID"],
    },
    {
      title: { es: "Backend & Cloud", en: "Backend & Cloud" },
      items: [
        "Firebase (Auth, Firestore, FCM, Storage)",
        "Node.js",
        "NestJS",
        "Dio/REST",
        "PostgreSQL",
        "Cloud Functions",
      ],
    },
    {
      title: { es: "CI/CD & DevOps", en: "CI/CD & DevOps" },
      items: ["Jenkins", "GitHub Actions", "Fastlane", "Docker", "Play Console / App Store Connect"],
    },
    { title: { es: "Calidad", en: "Quality" }, items: ["Unit/Widget Tests", "Golden Tests", "Lint", "Sentry"] },
  ],
  projects: [
    {
      title: "Backgroud Task Optimizer - pub.dev",
      image: "/dart.png",
      period: "2023–Presente",
       description: {
        es: "Paquete oficial en Dart/Flutter, usado en más de 400 proyectos. Diseñado para ejecutar operaciones costosas en segundo plano mediante isolates, evitando bloquear la UI. Ofrece soporte para profiling de rendimiento, gestión de timeouts y lógica de reintentos con backoff exponencial. Ideal para operaciones intensivas como procesamiento de datos, peticiones HTTP o conversión de medios.",
        en: "Official Dart/Flutter package used in 400+ projects. Designed to run heavy operations in the background using isolates, keeping the UI responsive. Includes built-in performance profiling, timeout handling, and retry logic with exponential backoff. Perfect for intensive tasks like data processing, HTTP requests, or media conversion.",
      },
      highlights: ["Dart", "Flutter", "OSS"],
      link: "https://pub.dev/packages/background_task_optimizer",
    },
    {
      title: "Baby Mam",
      image: "/baby-mam.png",
      period: "2023",
       description: {
       es: "App móvil para embarazadas que combina seguros de maternidad con herramientas de acompañamiento. Incluye contador regresivo al parto, seguimiento del crecimiento del bebé, artículos, consejos, videos formativos y foros para futuras mamás.con énfasis en accesibilidad, rendimiento y buenas prácticas.",
       en: "Mobile app for pregnant women combining maternity insurance with support tools. Features countdown to due date, baby growth tracker, articles, tips, video training and community forums. With focus on accessibility, performance, and best practices.",
      },
      highlights: ["Flutter", "BLoC", "Firebase", "CI/CD", "A11y","Clean Architecture"],
      link: "https://www.babymam.com/",
    },{
      title: "Koru: Your Acne Coach App",
      image: "/koru.png",
      period: "2024",
      description: {
        es: "App móvil para el cuidado de la piel con enfoque en el acné. Incluye escáner facial con IA, contenidos de dermatólogos y psicólogos, seguimiento del progreso con selfies, registro de hábitos y emociones, retos personalizados y recordatorios. Enfoque en accesibilidad, rendimiento y Clean Architecture.",
        en: "Mobile app for skincare with a focus on acne. Features AI facial scanner, dermatologist and mental health expert content, progress tracking with selfies, habit and mood logging, personalized challenges and reminders. Focused on accessibility, performance and Clean Architecture.",
      },
      highlights: ["Flutter", "BLoC", "Firebase","TensorFlow", "CI/CD", "AI", "A11y","Clean Architecture","MVVM"],
      link: "https://www.koruacne.com/",
    },
    {
      title: "Prodigy Padel App",
      image: "/padel.png",
      period: "2024–2025",
      description: {
        es: "App móvil de alto rendimiento para padel que combina entrenamiento digital con suscripciones in-app. Basada en el método Prodigy, ofrece más de 140 golpes en video, consejos diarios, retos interactivos y guías tácticas. Incluye doble rol (coach/player) con sistema de referidos: el coach genera un código y recibe un porcentaje cuando el jugador se suscribe. Con foco en escalabilidad, arquitectura limpia y experiencia de usuario.",
        en: "High-performance padel training app combining digital coaching with in-app subscriptions. Built on the Prodigy Method, it features 140+ video shots, daily tips, interactive challenges, and tactical play guidance. Supports dual role (coach/player) with a referral system: coaches generate a code and earn a percentage when players subscribe. Focusing on scalability, clean architecture, and user experience.",
      },
      highlights: ["Flutter", "In-App Purchases", "Firebase", "Clean Architecture", "CI/CD"],
      link: "https://prodigypadel.com/",
    },
    // {
    //   title: "Gestr App — Autónomos (ES)",
    //   period: "2025",
    //   description: {
    //     es: "Facturación, IVA/IRPF, dashboard con métricas y evolución mensual. Generación de PDF y gestión de imágenes.",
    //     en: "Invoicing, VAT/withholding, dashboards with metrics and monthly evolution. PDF generation and image handling.",
    //   },
    //   highlights: ["Flutter", "fl_chart", "PDF", "Bloc", "In-App Purchases", "Firebase", "Clean Architecture", "CI/CD"],
    //   link: "#",
    // },
    // {
    //   title: "Módulo E‑Learning — Certificación",
    //   period: "2025",
    //   description: {
    //     es: "Unidades, lecciones, vídeo, tests, bookmarks y progreso. VideoPlayerController y expansión por unidad.",
    //     en: "Units, lessons, video, tests, bookmarks and progress. VideoPlayerController and expandable units.",
    //   },
    //   highlights: ["Flutter", "BLoC", "Video", "Testing"],
    //   link: "#",
    // },
  ],
  certificates: [
    {
      name: "Flutter & Dart — The Complete Guide [2023]",
      issuer: "Udemy (Academind by Maximilian Schwarzmüller)",
      date: { es: "28 de abril de 2023", en: "Apr 28, 2023" },
      hours: "68.5h",
      link: "/fluttercertificado.PNG", // ← url del certificado udemy
    },
    {
      name: "Microsoft Learn — DevOps (Achievements)",
      issuer: "Microsoft Learn",
      date: { es: "—", en: "—" },
      hours: "—",
      link: "https://learn.microsoft.com/en-us/users/rubenlevy-5371/",
    },
  ],
};

export default profile;