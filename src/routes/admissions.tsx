import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";
import { Calendar, CheckCircle2, Phone, Instagram, MapPin } from "lucide-react";
import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";

export const Route = createFileRoute("/admissions")({
  head: () => ({
    meta: [
      { title: "Admissions — Airborne Aviation Hyderabad" },
      { name: "description", content: "Apply for the DGCA CPL ground school batch starting May 21, 2026 at Airborne Aviation, Kharkhana, Secunderabad." },
      { property: "og:title", content: "Admissions — Airborne Aviation" },
      { property: "og:description", content: "Book your seat for the upcoming DGCA CPL batch." },
    ],
  }),
  component: Admissions,
});

const steps = [
  { n: "01", title: "Enquire", desc: "Call or submit the enquiry form and our team gets back within 24 hours." },
  { n: "02", title: "Counselling", desc: "A free one-on-one session to understand your goals and the right path." },
  { n: "03", title: "Enroll", desc: "Complete the simple enrolment and unlock all study material instantly." },
  { n: "04", title: "Take off", desc: "Begin classes, mentorship and simulator sessions with your batch." },
];

const eligibility = [
  "10+2 with Physics & Mathematics (or equivalent)",
  "Minimum age: 17 years",
  "DGCA Class 2 / Class 1 medical (we guide you)",
  "Passion for aviation",
];

function Admissions() {
  const [loading, setLoading] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      (e.target as HTMLFormElement).reset();
      toast.success("Thank you! Our team will contact you shortly.");
    }, 700);
  }

  return (
    <SiteLayout>
      <Toaster richColors position="top-center" />
      <section className="bg-navy text-navy-foreground">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:py-28">
          <div className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-gold">
            <Calendar className="h-3.5 w-3.5" /> New batch · May 21, 2026
          </div>
          <h1 className="mt-5 max-w-3xl font-display text-4xl font-bold sm:text-6xl">
            Enroll today. <span className="text-gold">Fly tomorrow.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/80">
            Limited seats. Submit the enquiry form below and our admissions team will reach out.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1.2fr_1fr]">
        <form onSubmit={onSubmit} className="rounded-3xl border border-border bg-card p-8 shadow-elevated sm:p-10">
          <h2 className="font-display text-2xl font-bold text-navy">Enquiry form</h2>
          <p className="mt-1 text-sm text-muted-foreground">Tell us a little about yourself.</p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <Field label="Full name" name="name" required />
            <Field label="Phone" name="phone" type="tel" required />
            <Field label="Email" name="email" type="email" required className="sm:col-span-2" />
            <Field label="City" name="city" />
            <Field label="Education" name="education" placeholder="e.g. 10+2 PCM" />
            <div className="sm:col-span-2">
              <label className="text-sm font-medium text-navy">Message</label>
              <textarea name="message" rows={4} className="mt-1.5 w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm outline-none focus:border-gold focus:ring-2 focus:ring-gold/30" placeholder="What would you like to know?" />
            </div>
          </div>
          <button disabled={loading} className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold-gradient px-7 py-3.5 font-semibold text-navy shadow-gold disabled:opacity-60">
            {loading ? "Submitting…" : "Submit enquiry"}
          </button>
        </form>

        <aside className="space-y-6">
          <div className="rounded-3xl bg-navy p-8 text-navy-foreground shadow-elevated">
            <h3 className="font-display text-xl font-bold">Talk to us directly</h3>
            <p className="mt-2 text-sm text-white/75">Our admissions team is available 9 AM – 7 PM, all days.</p>
            <a href="tel:+918978526266" className="mt-5 flex items-center gap-3 text-gold">
              <Phone className="h-5 w-5" /> <span className="font-semibold">+91 89785 26266</span>
            </a>
            <a href="https://www.instagram.com/airborne.aviation" target="_blank" rel="noreferrer" className="mt-3 flex items-center gap-3 text-white/85 hover:text-gold">
              <Instagram className="h-5 w-5" /> @airborne.aviation
            </a>
            <div className="mt-3 flex items-start gap-3 text-white/85">
              <MapPin className="mt-0.5 h-5 w-5 text-gold" /> Kharkhana, Secunderabad, Hyderabad
            </div>
          </div>
          <div className="rounded-3xl border border-border bg-card p-8">
            <h3 className="font-display text-xl font-bold text-navy">Eligibility</h3>
            <ul className="mt-4 space-y-2.5">
              {eligibility.map((e) => (
                <li key={e} className="flex items-start gap-2 text-sm text-foreground/85">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-gold" /> {e}
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </section>

      <section className="bg-secondary/60 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="font-display text-3xl font-bold text-navy sm:text-4xl">How admissions work</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s) => (
              <div key={s.n} className="rounded-2xl border border-border bg-card p-6">
                <div className="font-display text-3xl font-bold text-gold">{s.n}</div>
                <h3 className="mt-3 text-lg font-semibold text-navy">{s.title}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

function Field({ label, className = "", ...rest }: { label: string; className?: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className={className}>
      <label className="text-sm font-medium text-navy">{label}</label>
      <input {...rest} className="mt-1.5 w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm outline-none focus:border-gold focus:ring-2 focus:ring-gold/30" />
    </div>
  );
}
