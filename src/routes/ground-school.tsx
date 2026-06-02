import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";
import { CheckCircle2, ArrowRight, Plane, Radio, CloudSun, Wrench, BookOpen, Map } from "lucide-react";
import heroImg from "@/assets/ground-school.jpg";

export const Route = createFileRoute("/ground-school")({
  head: () => ({
    meta: [
      { title: "Ground School — DGCA CPL | Airborne Aviation" },
      { name: "description", content: "Complete DGCA CPL ground school: Air Navigation, Air Regulations, Meteorology, Technical General & Specific, RTR(A)." },
    ],
  }),
  component: GroundSchool,
});

const subjects = [
  { icon: Map, title: "Air Navigation", desc: "Charts, plotting, dead reckoning, GNSS and modern navigation systems." },
  { icon: BookOpen, title: "Air Regulations", desc: "ICAO annexes, DGCA CARs and aviation law in depth." },
  { icon: CloudSun, title: "Aviation Meteorology", desc: "Atmosphere, weather charts, hazards and aviation forecasting." },
  { icon: Wrench, title: "Technical General", desc: "Aircraft systems, instruments, powerplant and aerodynamics." },
  { icon: Plane, title: "Technical Specific", desc: "Type-specific systems and performance for your chosen aircraft." },
  { icon: Radio, title: "RTR (A) — Part I & II", desc: "Radio telephony coaching with practical exam preparation." },
];

function GroundSchool() {
  return (
    <SiteLayout>
      <section className="relative isolate overflow-hidden">
        <img src={heroImg} alt="Ground School students" className="absolute inset-0 -z-10 h-full w-full object-cover" />
        <div className="absolute inset-0 -z-10 bg-hero-gradient" />
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:py-28">
          <div className="max-w-3xl text-white">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">Courses</p>
            <h1 className="mt-3 font-display text-4xl font-bold sm:text-6xl">
              DGCA CPL ground school, end to end.
            </h1>
            <p className="mt-6 text-lg text-white/80">
              Every paper of the DGCA Commercial Pilot Licence syllabus, taught by experienced
              instructors and reinforced with weekly mock tests and simulator sessions.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {subjects.map((c) => (
            <div key={c.title} className="rounded-2xl border border-border bg-card p-7 transition hover:-translate-y-1 hover:border-gold/60 hover:shadow-elevated">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-navy text-gold">
                <c.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-navy">{c.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{c.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-secondary/60 py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <h2 className="font-display text-3xl font-bold text-navy sm:text-4xl">What's included</h2>
          <p className="mt-3 text-muted-foreground">A complete preparation programme designed for serious cadets.</p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {[
              "Structured classroom lectures (offline + online)",
              "DGCA-aligned study material & question banks",
              "Weekly mock tests with detailed review",
              "One-on-one mentorship with airline pilots",
              "Procedural simulator sessions",
              "RTR(A) practical preparation",
              "Interview & medical guidance",
              "Career placement support",
            ].map((i) => (
              <li key={i} className="flex items-start gap-3 rounded-xl border border-border bg-card px-4 py-3 text-sm font-medium text-navy">
                <CheckCircle2 className="mt-0.5 h-5 w-5 text-gold" /> {i}
              </li>
            ))}
          </ul>
          <Link to="/admissions" className="mt-10 inline-flex items-center gap-2 rounded-full bg-gold-gradient px-7 py-3.5 font-semibold text-navy shadow-gold">
            Apply for the May 2026 batch <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
