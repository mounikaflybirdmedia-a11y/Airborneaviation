import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";
import { Phone, Mail, MapPin, Instagram, Clock } from "lucide-react";
import aircraft from "@/assets/aircraft.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Airborne Aviation Hyderabad" },
      { name: "description", content: "Visit Airborne Aviation Institute at Kharkhana, Secunderabad. Call +91 89785 26266 or DM @airborne.aviation on Instagram." },
      { property: "og:title", content: "Contact Airborne Aviation" },
      { property: "og:description", content: "Get in touch with the Airborne Aviation admissions team." },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <SiteLayout>
      <section className="relative isolate overflow-hidden bg-navy text-navy-foreground">
        <img src={aircraft} alt="" width={1280} height={960} loading="lazy" className="absolute inset-0 -z-10 h-full w-full object-cover opacity-25" />
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:py-28">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">Contact</p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl font-bold sm:text-6xl">
            Let's get you closer to the cockpit.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/85">
            Our team is here to answer your questions — call us, drop by the institute, or message us on Instagram.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-4 py-20 sm:px-6 md:grid-cols-2 lg:grid-cols-4">
        {[
          { icon: Phone, title: "Call us", value: "+91 89785 26266", href: "tel:+918978526266" },
          { icon: Mail, title: "Email", value: "info@airborneaviation.in", href: "mailto:info@airborneaviation.in" },
          { icon: Instagram, title: "Instagram", value: "@airborne.aviation", href: "https://www.instagram.com/airborne.aviation" },
          { icon: MapPin, title: "Visit", value: "Kharkhana, Secunderabad", href: "#map" },
        ].map((c) => (
          <a key={c.title} href={c.href} className="group rounded-2xl border border-border bg-card p-6 transition hover:-translate-y-1 hover:border-gold/60 hover:shadow-elevated">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-navy text-gold">
              <c.icon className="h-6 w-6" />
            </div>
            <h3 className="mt-5 text-sm font-semibold uppercase tracking-wider text-muted-foreground">{c.title}</h3>
            <p className="mt-1 font-display text-lg font-semibold text-navy group-hover:text-gold">{c.value}</p>
          </a>
        ))}
      </section>

      <section id="map" className="bg-secondary/60 py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_1.2fr] lg:items-start">
          <div className="rounded-3xl border border-border bg-card p-8">
            <h2 className="font-display text-3xl font-bold text-navy">Find us</h2>
            <p className="mt-2 text-muted-foreground">
              Airborne Aviation Institute<br />Kharkhana, Secunderabad, Hyderabad, Telangana
            </p>
            <div className="mt-6 space-y-3 text-sm">
              <div className="flex items-center gap-3"><Clock className="h-5 w-5 text-gold" /> Mon – Sat · 9:00 AM – 7:00 PM</div>
              <div className="flex items-center gap-3"><Phone className="h-5 w-5 text-gold" /> +91 89785 26266</div>
              <div className="flex items-center gap-3"><Mail className="h-5 w-5 text-gold" /> info@airborneaviation.in</div>
            </div>
          </div>
          <div className="overflow-hidden rounded-3xl border border-border shadow-elevated">
            <iframe
              title="Airborne Aviation location"
              src="https://www.google.com/maps?q=Kharkhana,Secunderabad,Hyderabad&output=embed"
              className="h-[420px] w-full"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
