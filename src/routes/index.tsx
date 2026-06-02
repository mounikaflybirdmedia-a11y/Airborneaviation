import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, Phone, Calendar, Star, Quote, Plane, CheckCircle2 } from "lucide-react";
import { SiteLayout } from "@/components/site-layout";
import hero from "@/assets/hero-cockpit.jpg";
import groundSchool from "@/assets/ground-school.jpg";
import flightSchool from "@/assets/flight-school.jpg";
import communication from "@/assets/communication.jpg";
import trainer from "@/assets/trainer.jpg";
import t1 from "@/assets/testimonial-1.jpg";
import t2 from "@/assets/testimonial-2.jpg";
import t3 from "@/assets/testimonial-3.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Airborne Aviation Hyderabad — DGCA CPL Ground School" },
      { name: "description", content: "Hyderabad's trusted DGCA CPL ground school. Ground classes, flying training, AELP & mentorship by airline pilots. New batch starts May 21, 2026." },
      { property: "og:title", content: "Airborne Aviation — DGCA CPL Classes in Hyderabad" },
      { property: "og:description", content: "Knowledge today, pilot tomorrow. Train with India's most dedicated CPL ground school." },
    ],
  }),
  component: Home,
});

const schools = [
  {
    title: "Ground School",
    img: groundSchool,
    desc: "Airborne's Ground School stands as a beacon of aviation education with a proven track record of delivering top-notch theoretical training for aspiring pilots — every DGCA paper, mastered.",
    href: "/ground-school",
  },
  {
    title: "Flying Training",
    img: flightSchool,
    desc: "Through collaborations with India's leading approved flying schools, our cadets log structured flight hours on modern training aircraft to earn their CPL with confidence.",
    href: "/flying-training",
  },
  {
    title: "Communication School",
    img: communication,
    desc: "We specialise in aviation language proficiency aligned with DGCA, ICAO and global standards — endorsed by airlines and recognised across operators.",
    href: "/aelp",
  },
];

const testimonials = [
  {
    quote: "Very professionally conducted classes. The infrastructure is excellent and the staff are knowledgeable and patient. I cleared my DGCA papers in the first attempt — Airborne made it possible.",
    name: "Varun Chakrapani",
    role: "Aspiring Airline Pilot",
    img: t2,
  },
  {
    quote: "It's such a fun environment. They make learning enjoyable and have tons of material to prep for the exam. Cleared all subjects in a single attempt. I strongly recommend Airborne Aviation.",
    name: "Jyothsna Reddy",
    role: "Student Pilot",
    img: t3,
  },
  {
    quote: "Airborne stands for quality, class and standard. They provide the best DGCA CPL training and the entire team is extremely warm and supportive. Highly recommended.",
    name: "Harleen Singh",
    role: "Commercial Pilot",
    img: t1,
  },
];

const reviews = [
  { name: "Yash B.", date: "12 Jun 25", text: "At Airborne, discipline is more than just punctuality. The instructors lead by example and guided me back on track every time I struggled." },
  { name: "Prajwal M.", date: "12 Jun 25", text: "Studying here changed everything for me. I went from struggling to scoring well in all subjects. Even my parents were impressed by the regular feedback." },
  { name: "Khushi V.", date: "11 Jun 25", text: "Their focus on building fundamentals first impressed me most. Instead of rushing, they make sure you understand. The weekly tests are a bonus." },
  { name: "Deepak K.", date: "11 Jun 25", text: "The ambience, the discipline, and the resources at Airborne make it a true centre of learning. I felt supported, not just taught." },
];

const blogs = [
  { title: "Pilot Training and CPL Ground Classes: Navigating Your Way to 100% Success", date: "April 29, 2026", excerpt: "Before you embark on this exciting journey of learning to fly, take a few minutes to understand what's ahead." },
  { title: "From Aspiring Aviator to Airline Pilot: The Path of Pilot Selection", date: "April 22, 2026", excerpt: "Dreaming of a career in aviation? The allure of the skies and the opportunity to command an aircraft await." },
  { title: "How to Instantly Feel More Confident in the Cockpit", date: "April 15, 2026", excerpt: "Welcome to the thrilling world of aviation, where skilled pilots navigate the skies with confidence and finesse." },
];

function useCounter(target: number, durationMs = 1400) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLDivElement | null>(null);
  const started = useRef(false);
  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const step = (t: number) => {
            const p = Math.min(1, (t - start) / durationMs);
            setValue(Math.round(target * (1 - Math.pow(1 - p, 3))));
            if (p < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
      });
    }, { threshold: 0.3 });
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, [target, durationMs]);
  return { value, ref };
}

function Stat({ value, suffix, label, sublabel }: { value: number; suffix: string; label: string; sublabel: string }) {
  const c = useCounter(value);
  return (
    <div ref={c.ref} className="border-l border-white/15 px-6 first:border-l-0 sm:px-8">
      <div className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">{label}</div>
      <div className="mt-2 font-display text-5xl font-extrabold text-white sm:text-6xl">
        {c.value.toLocaleString()}<span className="text-gold">{suffix}</span>
      </div>
      <p className="mt-3 max-w-xs text-sm text-white/75">{sublabel}</p>
    </div>
  );
}

function TypewriterText({ text }: { text: string }) {
  const [displayedText, setDisplayedText] = useState("");
  
  useEffect(() => {
    setDisplayedText("");
    let i = 0;
    const interval = setInterval(() => {
      setDisplayedText(text.slice(0, i + 1));
      i++;
      if (i >= text.length) clearInterval(interval);
    }, 60);
    return () => clearInterval(interval);
  }, [text]);

  return (
    <h2 className="font-display text-4xl font-bold text-white sm:text-5xl">
      Our <span className="text-gold">{displayedText}</span>
      <span className="animate-pulse text-gold">|</span>
    </h2>
  );
}

function CourseTabs() {
  const [activeIdx, setActiveIdx] = useState(0);
  const active = schools[activeIdx];

  return (
    <section className="bg-navy py-24 text-center text-white">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        
        <div className="mb-10">
          <TypewriterText text={active.title} />
        </div>

        <p className="mx-auto max-w-4xl text-sm leading-relaxed text-white/80 sm:text-base">
          As the country is all set to become a global leader in the Aviation Market, Airborne strives to bridge the gap between demand and supply of skilled aviation professionals by introducing an array of professional courses in collaboration with globally reputed ATOs and Institutions.
        </p>

        <div className="mt-14 flex flex-wrap justify-center gap-4 sm:gap-6">
          {schools.map((s, i) => {
            const isActive = i === activeIdx;
            return (
              <button
                key={s.title}
                onClick={() => setActiveIdx(i)}
                className={`rounded-full px-6 py-3 text-sm font-semibold transition-all sm:px-8 ${
                  isActive 
                    ? "bg-white text-navy shadow-lg" 
                    : "bg-white/10 text-white hover:bg-white/20"
                }`}
              >
                {s.title}
              </button>
            );
          })}
        </div>

        <div className="mx-auto mt-16 max-w-5xl text-left">
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            <div className="overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
              <img 
                key={active.img} // Force re-render for animation if needed
                src={active.img} 
                alt={active.title} 
                className="h-64 w-full object-cover sm:h-[350px]" 
              />
            </div>
            <div>
              <h3 className="font-display text-2xl font-bold text-white mb-4">{active.title}</h3>
              <p className="text-base leading-relaxed text-white/80 sm:text-lg">
                {active.desc}
              </p>
              <div className="mt-8">
                <Link 
                  to={active.href} 
                  className="inline-flex items-center gap-2 rounded bg-[#5cb85c] px-8 py-3 text-sm font-bold text-white transition-colors hover:bg-[#4cae4c]"
                >
                  Know More
                </Link>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

function Home() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative isolate overflow-hidden">
        <img src={hero} alt="Cockpit view above the clouds at sunrise" width={1920} height={1080} className="absolute inset-0 -z-10 h-full w-full object-cover" />
        <div className="absolute inset-0 -z-10 bg-hero-gradient" />
        <div className="mx-auto max-w-7xl px-4 py-28 sm:px-6 lg:py-40">
          <div className="max-w-3xl text-white">
            <div className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-gold backdrop-blur">
              <Calendar className="h-3.5 w-3.5" /> New batch starts May 21, 2026
            </div>
            <p className="mt-6 text-sm font-semibold uppercase tracking-[0.3em] text-gold">It's time to become a</p>
            <h1 className="mt-3 font-display text-5xl font-bold leading-[1.05] sm:text-6xl lg:text-7xl">
              Pilot. <span className="text-gold">Take flight from Hyderabad.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-white/85">
              DGCA CPL ground classes, flying training partnerships, AELP and mentorship by airline pilots — all under one roof in Kharkhana, Secunderabad.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link to="/admissions" className="inline-flex items-center gap-2 rounded-full bg-gold-gradient px-7 py-3.5 font-semibold text-navy shadow-gold transition-transform hover:scale-[1.03]">
                How to Become a Pilot? <ArrowRight className="h-4 w-4" />
              </Link>
              <a href="tel:+918978526266" className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/5 px-7 py-3.5 font-semibold text-white backdrop-blur transition hover:bg-white/10">
                <Phone className="h-4 w-4" /> +91 89785 26266
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">About Airborne</p>
            <h2 className="mt-3 font-display text-4xl font-bold text-navy sm:text-5xl">
              India's trusted name in pilot training.
            </h2>
          </div>
          <div className="space-y-5 text-base text-muted-foreground">
            <p>
              Airborne Aviation Institute was established to impart world-class aviation training programmes to
              professional pilots, student pilots and aviation enthusiasts.
            </p>
            <p>
              We are backed by the most experienced professionals in pilot training, theoretical training and airline
              operations — bringing real cockpit wisdom into every classroom hour.
            </p>
            <p>
              From Kharkhana, Hyderabad, we've helped hundreds of aspiring pilots take the incredible journey from
              classroom to cockpit.
            </p>
            <Link to="/about" className="inline-flex items-center gap-2 font-semibold text-navy hover:text-gold">
              Know More <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* COURSES TABS */}
      <CourseTabs />

      {/* STATS */}
      <section className="relative isolate overflow-hidden bg-navy text-navy-foreground">
        <div className="absolute inset-0 -z-10 opacity-20" style={{ backgroundImage: `url(${hero})`, backgroundSize: "cover", backgroundPosition: "center" }} />
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            <Stat value={17} suffix="+" label="Years" sublabel="Delivering quality training programmes since establishment." />
            <Stat value={50} suffix="+" label="Clients" sublabel="Trusted service provider for major airlines & NSOP operators." />
            <Stat value={1800} suffix="+" label="Pilots" sublabel="Aspiring pilots turned into professional aviators — and counting." />
            <Stat value={20} suffix="k+" label="Training Hours" sublabel="Domain-specific SMEs for every training vertical we offer." />
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">Our Testimonials</p>
          <h2 className="mt-3 font-display text-4xl font-bold text-navy sm:text-5xl">
            Words from our cadets.
          </h2>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure key={t.name} className="rounded-3xl border border-border bg-card p-7 shadow-sm">
              <Quote className="h-7 w-7 text-gold" />
              <blockquote className="mt-4 text-sm leading-relaxed text-foreground/85">"{t.quote}"</blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <img src={t.img} alt={t.name} width={56} height={56} loading="lazy" className="h-12 w-12 rounded-full object-cover" />
                <div>
                  <div className="text-sm font-semibold text-navy">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* GOOGLE REVIEWS */}
      <section className="bg-secondary/60 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">Our Reviews</p>
              <h2 className="mt-3 font-display text-4xl font-bold text-navy">Loved on Google</h2>
            </div>
            <div className="inline-flex items-center gap-2 rounded-full bg-card px-4 py-2 text-sm font-semibold shadow-sm">
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                ))}
              </div>
              <span className="text-navy">4.9 / 5</span>
              <span className="text-muted-foreground">· 120+ reviews</span>
            </div>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {reviews.map((r) => (
              <div key={r.name} className="rounded-2xl border border-border bg-card p-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-navy font-display text-sm font-bold text-gold">
                    {r.name.charAt(0)}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-navy">{r.name}</div>
                    <div className="text-[11px] text-muted-foreground">{r.date}</div>
                  </div>
                </div>
                <div className="mt-3 flex">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-gold text-gold" />
                  ))}
                </div>
                <p className="mt-3 text-sm leading-relaxed text-foreground/80">{r.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BLOGS */}
      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">Latest Blogs</p>
            <h2 className="mt-3 font-display text-4xl font-bold text-navy">From the runway journal</h2>
          </div>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {blogs.map((b, i) => (
            <article key={b.title} className="group overflow-hidden rounded-3xl border border-border bg-card transition hover:-translate-y-1 hover:shadow-elevated">
              <div className="relative h-44 overflow-hidden bg-navy">
                <img
                  src={[groundSchool, flightSchool, communication][i]}
                  alt=""
                  width={1280}
                  height={720}
                  loading="lazy"
                  className="h-full w-full object-cover opacity-90 transition group-hover:scale-105"
                />
                <span className="absolute left-4 top-4 rounded-full bg-gold px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-navy">Blog</span>
              </div>
              <div className="p-6">
                <div className="text-xs text-muted-foreground">{b.date}</div>
                <h3 className="mt-2 font-display text-lg font-bold leading-snug text-navy group-hover:text-gold">{b.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{b.excerpt}</p>
                <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-navy">
                  Read More <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* PROMISE STRIP */}
      <section className="bg-navy py-14 text-navy-foreground">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 md:grid-cols-3">
          {[
            "Expert instructors & airline mentors",
            "DGCA-aligned curriculum & study material",
            "Regular mock tests + simulator sessions",
          ].map((p) => (
            <div key={p} className="flex items-center gap-3 text-sm font-medium">
              <CheckCircle2 className="h-5 w-5 flex-none text-gold" /> {p}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6">
        <div className="overflow-hidden rounded-3xl bg-card p-10 shadow-elevated sm:p-14">
          <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto]">
            <div>
              <Plane className="h-9 w-9 text-gold" />
              <h2 className="mt-3 font-display text-3xl font-bold text-navy sm:text-4xl">
                Take the first step towards your <span className="text-gold">pilot dream.</span>
              </h2>
              <p className="mt-3 max-w-xl text-muted-foreground">
                Limited seats for the May 2026 batch. Book a counselling session with our admissions team today.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link to="/admissions" className="inline-flex items-center gap-2 rounded-full bg-gold-gradient px-7 py-3.5 font-semibold text-navy shadow-gold">
                Apply Online <ArrowRight className="h-4 w-4" />
              </Link>
              <a href="tel:+918978526266" className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-3.5 font-semibold text-navy hover:bg-secondary">
                <Phone className="h-4 w-4" /> Call us
              </a>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
