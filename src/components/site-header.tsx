import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Phone, Mail, MessageCircle } from "lucide-react";
import logo from "@/assets/logo.png";

const nav = [
  { to: "/", label: "Home" },
  { to: "/ground-school", label: "DGCA Ground Classes" },
  { to: "/flying-training", label: "Flying Training" },
  { to: "/aelp", label: "AELP" },
  { to: "/about", label: "About Us" },
  { to: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Utility top bar */}
      <div className="hidden bg-navy text-navy-foreground md:block">
        <div className="mx-auto flex h-11 max-w-7xl items-center justify-between px-4 sm:px-6">
          <div className="flex items-center gap-6 text-xs text-white/85">
            <a href="mailto:info@airborneaviation.in" className="inline-flex items-center gap-2 hover:text-gold">
              <Mail className="h-3.5 w-3.5 text-gold" /> info@airborneaviation.in
            </a>
            <a href="tel:+918978526266" className="inline-flex items-center gap-2 hover:text-gold">
              <Phone className="h-3.5 w-3.5 text-gold" /> +91 89785 26266
            </a>
          </div>
          <div className="flex items-center gap-4">
            <Link
              to="/admissions"
              className="rounded-full bg-gold-gradient px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-navy shadow-gold"
            >
              Apply Online
            </Link>
            <a
              href="https://wa.me/918978526266"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-xs font-semibold text-white hover:text-gold"
            >
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#25D366] text-white">
                <MessageCircle className="h-3.5 w-3.5" />
              </span>
              +91 89785 26266
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="border-b border-white/10 bg-navy/95 text-navy-foreground backdrop-blur">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6">
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="Airborne Aviation logo" width={48} height={48} className="h-12 w-12" />
            <div className="leading-tight">
              <div className="font-display text-lg font-extrabold tracking-wide text-white">AIRBORNE</div>
              <div className="text-[10px] font-semibold uppercase tracking-[0.3em] text-gold">Aviation · Hyderabad</div>
            </div>
          </Link>

          <nav className="hidden items-center gap-7 lg:flex">
            {nav.map((n) => (
              <Link
                key={n.label}
                to={n.to}
                className="text-sm font-medium text-white/85 transition-colors hover:text-gold"
                activeProps={{ className: "text-gold" }}
              >
                {n.label}
              </Link>
            ))}
          </nav>

          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/20 text-white lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
        {open && (
          <div className="border-t border-white/10 bg-navy lg:hidden">
            <div className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4">
              {nav.map((n) => (
                <Link
                  key={n.label}
                  to={n.to}
                  onClick={() => setOpen(false)}
                  className="rounded-md px-3 py-3 text-sm font-medium text-white/90 hover:bg-white/5 hover:text-gold"
                >
                  {n.label}
                </Link>
              ))}
              <Link
                to="/admissions"
                onClick={() => setOpen(false)}
                className="mt-2 rounded-full bg-gold-gradient px-5 py-3 text-center text-sm font-bold uppercase tracking-wider text-navy"
              >
                Apply Online
              </Link>
              <a
                href="tel:+918978526266"
                className="mt-1 inline-flex items-center justify-center gap-2 rounded-full border border-white/30 px-5 py-3 text-sm font-semibold text-white"
              >
                <Phone className="h-4 w-4 text-gold" /> +91 89785 26266
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
