import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";
import { Target, Compass, Heart, Plane } from "lucide-react";
import students from "@/assets/students.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Airborne Aviation Hyderabad" },
      { name: "description", content: "Founded by aviation professionals, Airborne Aviation Institute trains the next generation of Indian commercial pilots from Kharkhana, Secunderabad." },
      { property: "og:title", content: "About Airborne Aviation Institute" },
      { property: "og:description", content: "Our story, mission and the people guiding India's future pilots." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <SiteLayout>
      <section className="bg-navy text-navy-foreground">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:py-28">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">About us</p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl font-bold sm:text-6xl">
            A ground school built by pilots, for future pilots.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/80">
            Airborne Aviation Institute was founded with a simple mission — to give every aspiring
            Indian pilot world-class DGCA CPL training, right here in Hyderabad.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-4 py-24 sm:px-6 lg:grid-cols-2 lg:items-center">
        <img src={students} alt="Airborne Aviation classroom" width={1024} height={1024} loading="lazy" className="rounded-3xl shadow-elevated" />
        <div>
          <h2 className="font-display text-3xl font-bold text-navy sm:text-4xl">Our story</h2>
          <p className="mt-4 text-muted-foreground">
            Founded by Jagapathi, a passionate aviation educator, Airborne Aviation has grown into
            one of Hyderabad's most trusted CPL ground schools. We combine rigorous academics with
            real-cockpit mentorship from active airline pilots.
          </p>
          <p className="mt-4 text-muted-foreground">
            Every student gets personalised attention, structured study material, and continuous
            assessments — because becoming a commercial pilot demands more than just classroom hours.
          </p>
        </div>
      </section>

      <section className="bg-secondary/60 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { icon: Target, title: "Our Mission", desc: "To train India's most prepared commercial pilots through honest, high-quality ground school education." },
              { icon: Compass, title: "Our Vision", desc: "To be the most respected DGCA CPL institute in South India, known for results and integrity." },
              { icon: Heart, title: "Our Values", desc: "Discipline, mentorship and care — the same values every captain brings to the cockpit." },
            ].map((v) => (
              <div key={v.title} className="rounded-2xl border border-border bg-card p-8">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-navy text-gold">
                  <v.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-navy">{v.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-24 text-center sm:px-6">
        <Plane className="mx-auto h-10 w-10 text-gold" />
        <h2 className="mt-4 font-display text-3xl font-bold text-navy sm:text-4xl">Meet your team</h2>
        <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
          Led by Jagapathi, our faculty includes serving airline pilots, DGCA examiners and
          dedicated ground instructors with decades of combined aviation experience.
        </p>
        <Link to="/contact" className="mt-8 inline-flex rounded-full bg-gold-gradient px-7 py-3.5 font-semibold text-navy shadow-gold">
          Visit our institute
        </Link>
      </section>
    </SiteLayout>
  );
}
