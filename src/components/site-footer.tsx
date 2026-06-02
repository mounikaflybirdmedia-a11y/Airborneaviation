import { Link } from "@tanstack/react-router";
import { Instagram, Phone, MapPin, Mail, Plane } from "lucide-react";
import logo from "@/assets/logo.png";

export function SiteFooter() {
  return (
    <footer className="bg-navy text-navy-foreground">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <img src={logo} alt="" width={56} height={56} className="h-14 w-14" />
            <div>
              <div className="font-display text-xl font-bold">Airborne Aviation</div>
              <div className="text-xs uppercase tracking-[0.2em] text-gold">Hyderabad</div>
            </div>
          </div>
          <p className="mt-5 max-w-md text-sm text-white/70">
            India's trusted ground school for aspiring commercial pilots. DGCA CPL training,
            mentorship by airline pilots, and modern simulator sessions.
          </p>
          <a
            href="https://www.instagram.com/airborne.aviation"
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex items-center gap-2 text-sm text-gold hover:underline"
          >
            <Instagram className="h-4 w-4" /> @airborne.aviation
          </a>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-gold">Explore</h4>
          <ul className="mt-4 space-y-2 text-sm text-white/80">
            <li><Link to="/about" className="hover:text-gold">About</Link></li>
            <li><Link to="/courses" className="hover:text-gold">Courses</Link></li>
            <li><Link to="/admissions" className="hover:text-gold">Admissions</Link></li>
            <li><Link to="/contact" className="hover:text-gold">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-gold">Contact</h4>
          <ul className="mt-4 space-y-3 text-sm text-white/80">
            <li className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4 text-gold" /> Kharkhana, Secunderabad, Hyderabad</li>
            <li className="flex items-start gap-2"><Phone className="mt-0.5 h-4 w-4 text-gold" /> +91 89785 26266</li>
            <li className="flex items-start gap-2"><Mail className="mt-0.5 h-4 w-4 text-gold" /> info@airborneaviation.in</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-6 text-xs text-white/60 sm:flex-row sm:px-6">
          <div className="flex items-center gap-2"><Plane className="h-3.5 w-3.5 text-gold" /> © {new Date().getFullYear()} Airborne Aviation Institute. All rights reserved.</div>
          <div>Knowledge today, pilot tomorrow.</div>
        </div>
      </div>
    </footer>
  );
}
