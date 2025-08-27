"use client";

import React, { useMemo, useState } from "react";
import { profile } from "@/data/profile";
import { copy } from "@/data/copy";
import { Badge } from "@/components/Badge";
import { Section } from "@/components/Section";
import { Card } from "@/components/Card";

// Portafolio de Rubén Orero Levy — React + Tailwind + i18n (ES/EN)
// ⭐ Modern UI (glass + gradient), accesible, responsive .
// ——— Page ——————————————————————————————————————————————————————————
export default function Portfolio() {
  const [lang, setLang] = useState<"es" | "en">("es");
  const t = useMemo(() => copy[lang], [lang]);

  return (
    <div className="relative min-h-screen overflow-x-clip bg-gradient-to-b from-indigo-50 via-white to-white text-gray-900 antialiased dark:from-gray-950 dark:via-gray-950 dark:to-gray-900 dark:text-gray-50">
      {/* Decorative blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-[-10%] top-[-10%] h-72 w-72 rounded-full bg-indigo-300/40 blur-3xl dark:bg-indigo-600/30" />
        <div className="absolute right-[-10%] top-1/3 h-72 w-72 rounded-full bg-fuchsia-300/40 blur-3xl dark:bg-fuchsia-600/30" />
        <div className="absolute left-1/3 bottom-[-10%] h-72 w-72 rounded-full bg-cyan-300/40 blur-3xl dark:bg-cyan-600/30" />
      </div>

      {/* Header */}
      <header className="sticky top-0 z-40 border-b/0 bg-white/60 backdrop-blur dark:bg-gray-950/60">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <a href="#home" className="text-lg font-bold tracking-tight">
            Rubén Orero Levy
          </a>
          <nav className="hidden items-center gap-6 text-sm font-medium sm:flex">
            <a href="#about" className="hover:underline">
              {t.nav.about}
            </a>
            <a href="#skills" className="hover:underline">
              {t.nav.skills}
            </a>
            <a href="#projects" className="hover:underline">
              {t.nav.projects}
            </a>
            <a href="#certs" className="hover:underline">
              {t.nav.certs}
            </a>
            <a href="#contact" className="hover:underline">
              {t.nav.contact}
            </a>
            <button
            onClick={() => setLang((l) => (l === "es" ? "en" : "es"))}
            className="flex items-center gap-2 rounded-full border border-gray-200 bg-white/80 px-3 py-1 text-xs font-semibold backdrop-blur hover:bg-white dark:border-white/10 dark:bg-white/10 dark:hover:bg-white/20"
            aria-label={lang === "es" ? "Cambiar a inglés" : "Switch to Spanish"}
            title={lang === "es" ? "Cambiar a inglés" : "Switch to Spanish"}
          >
            <img
              src={lang === "es" ? "/uk.png" : "/sp.png"}
              alt={lang === "es" ? "English" : "Español"}
              className="h-4 w-4 rounded-full ring-1 ring-black/10 dark:ring-white/10"
              loading="eager"
              decoding="async"
            />
          <span>{lang === "es" ? "EN" : "ES"}</span>
        </button>



          </nav>
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="border-b/0">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-4 py-20 sm:grid-cols-2 sm:items-center">
          <div>
            <h1 className="text-4xl font-extrabold leading-tight sm:text-6xl">
              {profile.role[lang]}
            </h1>
            <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">{profile.headline[lang]}</p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href={profile.linkedin}
                target="_blank"
                className="rounded-full bg-gray-900 px-5 py-2.5 text-sm font-semibold text-white shadow hover:opacity-90 dark:bg-gray-100 dark:text-gray-900"
              >
                LinkedIn
              </a>
              <a
                href={profile.github}
                target="_blank"
                className="rounded-full border border-white/20 bg-white/60 px-5 py-2.5 text-sm font-semibold backdrop-blur hover:bg-white/80 dark:bg-white/10 dark:hover:bg-white/20"
              >
                GitHub
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="rounded-full border border-white/20 bg-white/60 px-5 py-2.5 text-sm font-semibold backdrop-blur hover:bg-white/80 dark:bg-white/10 dark:hover:bg-white/20"
              >
                {lang === "es" ? "Contacto" : "Contact"}
              </a>
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              {profile.stats.map((s) => (
                <div key={s.label[lang]} className="rounded-2xl border border-white/20 bg-white/60 px-4 py-3 text-center backdrop-blur dark:bg-white/10">
                  <div className="text-2xl font-bold">{s.value}</div>
                  <div className="text-sm text-gray-700 dark:text-gray-300">{s.label[lang]}</div>
                </div>
              ))}
            </div>
          </div>
      {/* Profile Image */}
          <div className="">
            <div className="mx-auto w-52 sm:w-72">
              <img
                src={profile.avatar}
                alt="Foto de Rubén Orero Levy"
                className="aspect-square rounded-3xl object-cover shadow-lg ring-1 ring-black/5"
              />
            </div>
            <p className="mt-5 text-sm text-gray-700 dark:text-gray-300">
              {profile.location[lang]} · {profile.availability[lang]}
            </p>
          </div>

        </div>
      </section>

      {/* About */}
      <Section id="about" title={t.nav.about}>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          <Card>
            <h3 className="text-base font-semibold">{lang === "es" ? "Resumen" : "Summary"}</h3>
            <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">{profile.summary[lang]}</p>
          </Card>
          <Card>
            <h3 className="text-base font-semibold">{t.principles}</h3>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-gray-700 dark:text-gray-300">
              {t.principlesList.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </Card>
          <Card>
            <h3 className="text-base font-semibold">{t.techFav}</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {["Flutter", "Dart", "BLoC", "Provider", "Firebase", "Jenkins", "GitHub Actions", "Docker"].map((t) => (
                <Badge key={t} text={t} />
              ))}
            </div>
          </Card>
        </div>
      </Section>

      {/* Skills */}
      <Section id="skills" title={t.stackTitle}>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {profile.skills.map((group) => (
            <Card key={group.title.es}>
              <h3 className="text-base font-semibold">{group.title[lang]}</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {group.items.map((it) => (
                  <Badge key={it} text={it} />
                ))}
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* Projects */}
      <Section id="projects" title={t.featured}>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {profile.projects.map((p) => (
            
           <Card key={p.title}>
 <div className="flex items-start justify-between">
  <div className="flex items-center gap-3">
    {p.image && (
      <div className="relative h-13 w-13 shrink-0 overflow-hidden rounded-xl ring-1 ring-black/10 dark:ring-blue/10 bg-blue">
        <img
          src={p.image}
          alt={`${p.title} logo`}
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>
    )}
    <h3 className="text-lg font-semibold leading-tight">{p.title}</h3>
  </div>
  <span className="text-sm text-gray-500 dark:text-gray-400">{p.period}</span>
</div>

  <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">{p.description[lang]}</p>
  <div className="mt-3 flex flex-wrap gap-2">
    {p.highlights.map((h: string) => (
      <Badge key={h} text={h} />
    ))}
  </div>
  <div className="mt-4">
    <a
      href={p.link}
      target="_blank"
      className="text-sm font-medium underline underline-offset-4"
    >
      {t.seeMore}
    </a>
  </div>
</Card>

          ))}
        </div>
      </Section>

      {/* Certificates */}
      <Section id="certs" title={t.certsTitle}>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {profile.certificates.map((c) => (
            <Card key={c.name}>
              <h3 className="text-base font-semibold">{c.name}</h3>
              <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">{c.issuer}</p>
              <p className="mt-1 text-xs text-gray-600 dark:text-gray-400">
                {c.date[lang]} {c.hours !== "—" && `· ${c.hours}`}
              </p>
              <div className="mt-3">
                <a href={c.link} target="_blank" rel="noopener noreferrer" className="text-sm underline underline-offset-4">
                  {lang === "es" ? "Ver certificado" : "View certificate"}
                </a>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* Contact */}
      <Section id="contact" title={t.nav.contact}>
        <Card>
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <h3 className="text-base font-semibold">{t.contactTitle}</h3>
              <p className="mt-1 text-sm text-gray-700 dark:text-gray-300">{t.contactBody}</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href={`mailto:${profile.email}?subject=${encodeURIComponent(
                  lang === "es" ? "Contacto desde tu portfolio" : "Contact from your portfolio"
                )}&body=${encodeURIComponent(
                  lang === "es"
                    ? "Hola Rubén,\n\nMe gustaría hablar contigo sobre..."
                    : "Hi Rubén,\n\nI would like to talk to you about..."
                )}`}
                rel="noopener noreferrer"
                className="rounded-full bg-gray-900 px-5 py-2.5 text-sm font-semibold text-white shadow hover:opacity-90 dark:bg-gray-100 dark:text-gray-900"
              >
                {t.contactEmail}
              </a>

              {/* Fallback: Copiar email al portapapeles */}
              <button
                onClick={async () => {
                  try {
                    await navigator.clipboard.writeText(profile.email);
                    alert(lang === "es" ? "Email copiado 📋" : "Email copied 📋");
                  } catch {
                    // Fallback extremo si el clipboard no está disponible
                    window.prompt(lang === "es" ? "Copia el email:" : "Copy the email:", profile.email);
                  }
                }}
                className="rounded-full border border-white/20 bg-white/60 px-5 py-2.5 text-sm font-semibold backdrop-blur hover:bg-white/80 dark:bg-white/10 dark:hover:bg-white/20"
              >
                {lang === "es" ? "Copiar email" : "Copy email"}
              </button>

              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/20 bg-white/60 px-5 py-2.5 text-sm font-semibold backdrop-blur hover:bg-white/80 dark:bg-white/10 dark:hover:bg-white/20"
              >
                LinkedIn
              </a>
            </div>

          </div>
        </Card>
      </Section>

      {/* Footer */}
      <footer className="border-t/0">
        <div className="mx-auto max-w-6xl px-4 py-12 text-sm text-gray-700 dark:text-gray-300">
          © {new Date().getFullYear()} {profile.name}. React + Tailwind. · {lang === "es" ? "Última actualización 08/25" : "Last update 08/25"}.
        </div>
      </footer>
    </div>
  );
}
