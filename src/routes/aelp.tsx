import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";
import { ArrowRight, Mic, Headphones, Globe2 } from "lucide-react";
import heroImg from "@/assets/communication.jpg";

export const Route = createFileRoute("/aelp")({
  head: () => ({
    meta: [
      { title: "AELP Communication School — Airborne Aviation" },
      { name: "description", content: "Aviation English Language Proficiency (AELP) aligned with DGCA, ICAO and global standards." },
    ],
  }),
  component: AelpCourse,
});

function AelpCourse() {
  return (
    <SiteLayout>
      <section className="relative isolate overflow-hidden">
        <img src={heroImg} alt="AELP Training" className="absolute inset-0 -z-10 h-full w-full object-cover" />
        <div className="absolute inset-0 -z-10 bg-hero-gradient" />
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:py-28">
          <div className="max-w-3xl text-white">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">Courses</p>
            <h1 className="mt-3 font-display text-4xl font-bold sm:text-6xl">
              Aviation Communication.
            </h1>
            <p className="mt-6 text-lg text-white/80">
              We specialise in aviation language proficiency aligned with DGCA, ICAO and global standards — endorsed by airlines and recognised across operators.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="rounded-2xl border border-border bg-card p-8 text-center shadow-sm">
            <Mic className="mx-auto h-10 w-10 text-gold" />
            <h3 className="mt-5 font-display text-xl font-bold text-navy">Clear Pronunciation</h3>
            <p className="mt-3 text-sm text-muted-foreground">Master the standard phraseology required for ATC communications.</p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-8 text-center shadow-sm">
            <Globe2 className="mx-auto h-10 w-10 text-gold" />
            <h3 className="mt-5 font-display text-xl font-bold text-navy">ICAO Standard</h3>
            <p className="mt-3 text-sm text-muted-foreground">Train to meet and exceed ICAO Level 4 language proficiency requirements.</p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-8 text-center shadow-sm">
            <Headphones className="mx-auto h-10 w-10 text-gold" />
            <h3 className="mt-5 font-display text-xl font-bold text-navy">Listening Skills</h3>
            <p className="mt-3 text-sm text-muted-foreground">Improve comprehension of diverse accents in busy airspace environments.</p>
          </div>
        </div>

        <div className="mt-20 overflow-hidden rounded-3xl bg-secondary/60 p-10 text-center sm:p-14">
          <h2 className="font-display text-3xl font-bold text-navy">Speak with confidence</h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">Join our AELP preparation programme to secure your required proficiency level.</p>
          <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-navy px-8 py-4 font-semibold text-white transition-transform hover:scale-105">
            Contact Us <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
