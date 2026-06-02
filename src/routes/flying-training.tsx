import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";
import { ArrowRight, PlaneTakeoff, ShieldCheck, Clock } from "lucide-react";
import heroImg from "@/assets/flight-school.jpg";

export const Route = createFileRoute("/flying-training")({
  head: () => ({
    meta: [
      { title: "Flying Training — Airborne Aviation" },
      { name: "description", content: "Collaborations with India's leading approved flying schools to help you log structured flight hours and earn your CPL." },
    ],
  }),
  component: FlyingTraining,
});

function FlyingTraining() {
  return (
    <SiteLayout>
      <section className="relative isolate overflow-hidden">
        <img src={heroImg} alt="Flight Training" className="absolute inset-0 -z-10 h-full w-full object-cover" />
        <div className="absolute inset-0 -z-10 bg-hero-gradient" />
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:py-28">
          <div className="max-w-3xl text-white">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">Courses</p>
            <h1 className="mt-3 font-display text-4xl font-bold sm:text-6xl">
              Take to the skies.
            </h1>
            <p className="mt-6 text-lg text-white/80">
              Through collaborations with India's leading approved flying schools, our cadets log structured flight hours on modern training aircraft to earn their CPL with confidence.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="rounded-2xl border border-border bg-card p-8 text-center shadow-sm">
            <PlaneTakeoff className="mx-auto h-10 w-10 text-gold" />
            <h3 className="mt-5 font-display text-xl font-bold text-navy">Modern Fleet</h3>
            <p className="mt-3 text-sm text-muted-foreground">Train on glass-cockpit equipped aircraft that prepare you for modern airline operations.</p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-8 text-center shadow-sm">
            <ShieldCheck className="mx-auto h-10 w-10 text-gold" />
            <h3 className="mt-5 font-display text-xl font-bold text-navy">DGCA Approved</h3>
            <p className="mt-3 text-sm text-muted-foreground">All our flying partners are strictly vetted and fully approved by the DGCA.</p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-8 text-center shadow-sm">
            <Clock className="mx-auto h-10 w-10 text-gold" />
            <h3 className="mt-5 font-display text-xl font-bold text-navy">Timely Completion</h3>
            <p className="mt-3 text-sm text-muted-foreground">We ensure you get your flying hours completed within the projected timeline.</p>
          </div>
        </div>

        <div className="mt-20 overflow-hidden rounded-3xl bg-secondary/60 p-10 text-center sm:p-14">
          <h2 className="font-display text-3xl font-bold text-navy">Ready to start flying?</h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">Contact our admissions team to get detailed pricing and availability for our flying programmes.</p>
          <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-navy px-8 py-4 font-semibold text-white transition-transform hover:scale-105">
            Contact Us <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
