import { useEffect, useState } from "react";
import "./App.css";

const INDUSTRIES = [
  "Restaurants", "Med spas", "Salons", "Plumbers", "HVAC", "Electricians",
  "Auto repair", "Dentists", "Daycare", "Retail shops", "Landscaping", "Cleaning",
  "Bakeries", "Gyms", "Law offices", "Real estate", "And more",
];

const SERVICES = [
  {
    icon: "◆",
    title: "Custom local sites",
    text: "A site built for your business—not a generic template with your logo slapped on.",
  },
  {
    icon: "◇",
    title: "Mobile-first design",
    text: "Most customers find you on their phone. Your site will look sharp on every screen.",
  },
  {
    icon: "○",
    title: "Google-ready setup",
    text: "Structured so people searching your services can find you and contact you fast.",
  },
];

const PROCESS = [
  { title: "Quick call", text: "Tell us about your business, services, and what you want customers to do." },
  { title: "Design & build", text: "We create your pages, photos, and copy direction—usually within days, not months." },
  { title: "Review & launch", text: "You approve everything. We connect your domain and put you live." },
  { title: "Support", text: "Need updates? We're here. Your site grows when your business does." },
];

const PLANS = [
  {
    name: "Website Package",
    price: "$300",
    note: "One-time · everything most local businesses need",
    features: [
      "Up to 5 pages",
      "Mobile responsive design",
      "Contact form & Google map",
      "Services / about sections",
      "Basic SEO setup",
      "1 round of revisions",
    ],
    featured: true,
  },
  {
    name: "Custom",
    price: "Custom",
    note: "Bigger builds · we'll quote based on your project",
    features: [
      "More pages or locations",
      "Online booking or ordering",
      "E-commerce or blog",
      "Brand refresh & copy help",
      "Ongoing maintenance available",
      "Priority timeline",
    ],
    featured: false,
  },
];

const MAILTO = "mailto:jakeflow0@gmail.com?subject=FlowWeb%20website%20quote";

export default function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="site">
      <nav className={`nav ${scrolled ? "nav--scrolled" : ""}`}>
        <a href="#" className="nav__logo">
          Flow<span>Web</span>
        </a>
        <ul className="nav__links">
          <li><a href="#services">Services</a></li>
          <li><a href="#industries">Who we help</a></li>
          <li><a href="#process">Process</a></li>
          <li><a href="#pricing">Pricing</a></li>
        </ul>
        <a href={MAILTO} className="nav__cta">Get a quote</a>
      </nav>

      <header className="hero">
        <div className="hero__glow" aria-hidden="true" />
        <div>
          <p className="hero__eyebrow">Websites for every local business</p>
          <h1 className="hero__title">
            Turn browsers into <em>customers</em>
          </h1>
          <p className="hero__sub">
            FlowWeb builds clean, mobile-friendly websites for restaurants, salons,
            contractors, shops, and every business that deserves more than a Facebook page.
          </p>
          <div className="hero__actions">
            <a href={MAILTO} className="btn-primary">Start your project</a>
            <a href="#pricing" className="btn-ghost">View pricing</a>
          </div>
          <div className="hero__stats">
            <div className="hero__stat">
              <strong>7 days</strong>
              <span>Typical launch</span>
            </div>
            <div className="hero__stat">
              <strong>100%</strong>
              <span>Mobile optimized</span>
            </div>
            <div className="hero__stat">
              <strong>Any</strong>
              <span>Local industry</span>
            </div>
          </div>
        </div>
        <div className="hero__visual" aria-hidden="true">
          <div className="browser-mock">
            <div className="browser-mock__bar">
              <span className="browser-mock__dot" />
              <span className="browser-mock__dot" />
              <span className="browser-mock__dot" />
            </div>
            <div className="browser-mock__content">
              <div className="mock-hero">
                <span>Your Business</span>
              </div>
              <div className="mock-grid">
                <div /><div /><div />
              </div>
              <div className="mock-cta" />
            </div>
          </div>
        </div>
      </header>

      <section id="services" className="section section--alt">
        <div className="section__inner">
          <p className="section__label">What we do</p>
          <h2 className="section__title">Everything you need to look legit online</h2>
          <p className="section__lead">
            No website, an outdated site, or Facebook-only? We build a real home on the web
            that earns trust and drives calls, messages, and bookings.
          </p>
          <div className="grid-3">
            {SERVICES.map((s) => (
              <article key={s.title} className="card">
                <div className="card__icon">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="industries" className="section">
        <p className="section__label">Who we help</p>
        <h2 className="section__title">Every local business. Yours included.</h2>
        <p className="section__lead">
          If customers search for what you do, you need a site that shows up and converts.
          We work with owners across industries—same quality, tailored to your trade.
        </p>
        <div className="industries">
          {INDUSTRIES.map((name) => (
            <span key={name} className="tag">{name}</span>
          ))}
        </div>
      </section>

      <section id="process" className="section section--alt">
        <div className="section__inner">
          <p className="section__label">How it works</p>
          <h2 className="section__title">Live in about a week</h2>
          <p className="section__lead">
            Simple process, clear communication, no tech jargon unless you want it.
          </p>
          <div className="process">
            {PROCESS.map((step) => (
              <div key={step.title} className="process__step">
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="section">
        <p className="section__label">Pricing</p>
        <h2 className="section__title">Straightforward packages</h2>
        <p className="section__lead">
          Simple pricing: a solid site from $300, or a custom quote when you need more.
        </p>
        <div className="pricing">
          {PLANS.map((plan) => (
            <article
              key={plan.name}
              className={`price-card ${plan.featured ? "price-card--featured" : ""}`}
            >
              {plan.featured && <span className="price-card__badge">Popular</span>}
              <h3>{plan.name}</h3>
              <p className="price-card__amount">
                {plan.price}
                {plan.price !== "Custom" && <span> starting</span>}
              </p>
              <p className="price-card__note">{plan.note}</p>
              <ul>
                {plan.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
              <a
                href={MAILTO}
                className={plan.featured ? "btn-primary" : "btn-ghost"}
              >
                Get started
              </a>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="cta-block">
        <h2>Ready to get found online?</h2>
        <p>
          Tell us about your business. We&apos;ll reply with a quote and timeline—no pressure,
          no 47-page proposals.
        </p>
        <a href={MAILTO} className="btn-primary">jakeflow0@gmail.com</a>
      </section>

      <footer className="footer">
        <div className="footer__brand">FlowWeb</div>
        <p>© {new Date().getFullYear()} FlowWeb. Websites for every local business.</p>
        <a href={MAILTO} style={{ color: "#c8a96e" }}>Contact</a>
      </footer>
    </div>
  );
}
