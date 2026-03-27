import { useState, useEffect, useRef } from 'react'
import {
  Shield, Car, Users, Globe,
  Instagram, Mail, MapPin, Phone,
  Lock, Eye, ArrowRight, CheckCircle, ChevronDown, Menu, X, Star
} from 'lucide-react'

// ─────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────
const SERVICES = [
  {
    id: 'executive-protection',
    icon: Shield,
    title: 'Executive Protection',
    description:
      'Discrete, professional protection for high-profile individuals, corporate executives, and dignitaries. 24/7 personal security assignment tailored to your lifestyle and threat profile.',
  },
  {
    id: 'event-security',
    icon: Users,
    title: 'Event & Private Security',
    description:
      'Comprehensive crowd management and perimeter control for corporate galas, private events, concerts, and VIP gatherings. Every guest, every moment — secured.',
  },
  {
    id: 'armed-unarmed',
    icon: Lock,
    title: 'Armed & Unarmed Security',
    description:
      'Fully licensed armed officers and professional unarmed agents deployed to fit your specific security environment and regulatory requirements.',
  },
  {
    id: 'chauffeuring',
    icon: Car,
    title: 'Chauffeuring Services',
    description:
      'Secure, discreet executive transportation with trained defensive-driving specialists. Airport transfers to multi-day overland operations handled with precision.',
  },
  {
    id: 'site-services',
    icon: Eye,
    title: 'Site Services',
    description:
      'Static guard posts, patrol services, and access-control systems for corporate campuses, residential properties, and active construction sites.',
  },
  {
    id: 'global-operations',
    icon: Globe,
    title: 'Global Operations',
    description:
      'International security consulting, advance-team deployment, and risk assessment for clients operating in high-threat environments across the world.',
  },
]

const NAV_LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

// ─────────────────────────────────────────────
// HOOK
// ─────────────────────────────────────────────
function useFadeIn(threshold = 0.12) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [threshold])
  return { ref, visible }
}

// ─────────────────────────────────────────────
// NAVBAR
// ─────────────────────────────────────────────
function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'glass border-b border-white/5 shadow-[0_4px_40px_rgba(0,0,0,0.6)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-8 lg:px-16 h-20 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group" aria-label="Powerson Protection">
          {/* Gold shield mark */}
          <div
            className="w-8 h-8 flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-105"
            style={{ border: '1px solid rgba(184,151,106,0.6)' }}
          >
            <Shield size={14} style={{ color: '#b8976a' }} />
          </div>
          <div className="flex flex-col leading-none">
            <span
              className="font-display font-black uppercase text-[10px] tracking-[0.28em]"
              style={{ color: '#f5f3ef' }}
            >
              POWERSON
            </span>
            <span
              className="font-display font-light uppercase text-[10px] tracking-[0.28em]"
              style={{ color: '#b8976a' }}
            >
              PROTECTION
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href} className="nav-link">
              {l.label}
            </a>
          ))}
          <a href="#contact" className="btn-primary text-[0.6rem] px-6 py-3">
            Request Protection
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          id="mobile-menu-toggle"
          className="md:hidden transition-colors duration-300"
          style={{ color: 'rgba(245,243,239,0.6)' }}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`md:hidden glass border-t transition-all duration-300 overflow-hidden ${
          open ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        }`}
        style={{ borderColor: '#1e1e1e' }}
      >
        <nav className="flex flex-col px-8 py-8 gap-7">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="label-tag hover:text-warm-white transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)} className="btn-primary justify-center">
            Request Protection
          </a>
        </nav>
      </div>
    </header>
  )
}

// ─────────────────────────────────────────────
// HERO
// ─────────────────────────────────────────────
function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        backgroundImage: 'url(/hero_bg.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center top',
      }}
    >
      {/* Layered overlays for depth — no blue, pure darkness */}
      <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(10,10,10,0.97) 0%, rgba(10,10,10,0.82) 55%, rgba(10,10,10,0.35) 100%)' }} />
      <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(10,10,10,1) 0%, transparent 40%)' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-8 lg:px-16 w-full pt-28 pb-24">
        <div className="max-w-xl">

          {/* Eyebrow */}
          <div
            className="inline-flex items-center gap-3 mb-10 animate-fade-in"
            style={{ borderBottom: '1px solid rgba(184,151,106,0.3)', paddingBottom: '0.75rem' }}
          >
            <div className="w-4 h-px" style={{ backgroundColor: '#b8976a' }} />
            <span className="label-tag">Elite Security Services</span>
          </div>

          {/* Headline — refined weight, not screaming */}
          <h1
            className="font-display font-black uppercase leading-[0.9] mb-8 animate-slide-up"
            style={{ fontSize: 'clamp(3.5rem, 8vw, 6.5rem)', color: '#f5f3ef', letterSpacing: '-0.01em' }}
          >
            Safety is<br />
            <span style={{ color: '#b8976a', fontWeight: 300, fontStyle: 'italic', letterSpacing: '0.01em' }}>
              Paramount
            </span>
          </h1>

          {/* Sub */}
          <p
            className="text-base leading-relaxed mb-12 animate-slide-up-delay"
            style={{ color: 'rgba(245,243,239,0.5)', maxWidth: '440px', fontWeight: 300, letterSpacing: '0.01em' }}
          >
            Premier Executive Protection & Global Security Solutions serving{' '}
            <span style={{ color: 'rgba(245,243,239,0.8)', fontWeight: 400 }}>NY, NJ, PA, CT, FL,</span>{' '}
            and Worldwide.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 animate-slide-up-delay-2">
            <a href="#contact" id="hero-cta-request" className="btn-primary">
              Request Protection <ArrowRight size={13} />
            </a>
            <a href="#services" className="btn-ghost">
              Our Services <ChevronDown size={13} />
            </a>
          </div>

          {/* Stats — muted and refined */}
          <div
            className="flex flex-wrap gap-10 mt-16 pt-10"
            style={{ borderTop: '1px solid rgba(245,243,239,0.07)' }}
          >
            {[
              { val: '24/7', label: 'Active Protection' },
              { val: '6+', label: 'States Covered' },
              { val: '100%', label: 'Discretion Guaranteed' },
            ].map((s) => (
              <div key={s.label}>
                <div
                  className="font-display font-bold text-2xl mb-1"
                  style={{ color: '#b8976a', letterSpacing: '-0.01em' }}
                >
                  {s.val}
                </div>
                <div
                  className="text-[0.6rem] uppercase tracking-[0.2em]"
                  style={{ color: 'rgba(245,243,239,0.35)' }}
                >
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#services"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-colors duration-300"
        style={{ color: 'rgba(245,243,239,0.2)' }}
        aria-label="Scroll to services"
      >
        <span className="text-[0.55rem] uppercase tracking-[0.25em]">Scroll</span>
        <ChevronDown size={14} className="animate-bounce" />
      </a>
    </section>
  )
}

// ─────────────────────────────────────────────
// SERVICES
// ─────────────────────────────────────────────
function Services() {
  const { ref, visible } = useFadeIn()

  return (
    <section id="services" className="py-32 px-8 lg:px-16" style={{ backgroundColor: '#0c0c0c' }}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div
          ref={ref}
          className={`mb-20 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          <div className="divider-gold mb-6" />
          <h2 className="section-title text-4xl sm:text-5xl mb-5">Our Services</h2>
          <p className="text-sm leading-relaxed max-w-lg" style={{ color: 'rgba(245,243,239,0.4)' }}>
            Every assignment is executed with military precision, complete professionalism, and absolute discretion.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px" style={{ backgroundColor: '#1a1a1a' }}>
          {SERVICES.map((svc, i) => {
            const Icon = svc.icon
            return (
              <div
                key={svc.id}
                id={`service-${svc.id}`}
                className="service-card"
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? 'translateY(0)' : 'translateY(20px)',
                  transition: `opacity 0.7s ease ${i * 90}ms, transform 0.7s ease ${i * 90}ms`,
                }}
              >
                <div className="relative z-10">
                  <Icon size={28} className="service-icon mb-7" />
                  <h3
                    className="font-display font-bold text-sm uppercase mb-3"
                    style={{ letterSpacing: '0.12em', color: '#f5f3ef' }}
                  >
                    {svc.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'rgba(245,243,239,0.4)', fontWeight: 300 }}>
                    {svc.description}
                  </p>
                  <a
                    href="#contact"
                    className="mt-8 flex items-center gap-2 text-[0.6rem] uppercase tracking-[0.18em] transition-all duration-300"
                    style={{ color: 'rgba(184,151,106,0.5)', textDecoration: 'none' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = '#b8976a'}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(184,151,106,0.5)'}
                  >
                    <span>Enquire</span>
                    <ArrowRight size={10} />
                  </a>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

// ─────────────────────────────────────────────
// ABOUT
// ─────────────────────────────────────────────
function About() {
  const { ref, visible } = useFadeIn()

  const points = [
    'Veteran & Law Enforcement Trained Personnel',
    'Licensed & Insured in All Operating States',
    'Customized Threat Assessments & Security Plans',
    'Absolute Discretion — Your Privacy Protected',
  ]

  return (
    <section id="about" className="py-32 px-8 lg:px-16 relative overflow-hidden" style={{ backgroundColor: '#0f0f0f' }}>
      {/* Subtle gold glow — far corner, not intrusive */}
      <div
        className="absolute -bottom-40 -right-40 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(184,151,106,0.05) 0%, transparent 70%)' }}
      />

      <div
        ref={ref}
        className={`max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center transition-all duration-800 ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        {/* Left */}
        <div>
          <div className="divider-gold mb-6" />
          <h2 className="section-title text-4xl sm:text-5xl mb-8 leading-tight">
            Trusted to Protect<br />
            <span style={{ color: '#b8976a', fontWeight: 300, fontStyle: 'italic' }}>What Matters Most</span>
          </h2>
          <p className="text-sm leading-relaxed mb-6" style={{ color: 'rgba(245,243,239,0.5)', fontWeight: 300 }}>
            Powerson Protection was founded on a single principle:{' '}
            <em className="not-italic" style={{ color: 'rgba(245,243,239,0.85)' }}>Safety is Paramount.</em>{' '}
            Our team comprises former law enforcement officers, military veterans, and certified security
            professionals with decades of combined experience at the highest levels of executive protection
            and risk management.
          </p>
          <p className="text-sm leading-relaxed mb-12" style={{ color: 'rgba(245,243,239,0.5)', fontWeight: 300 }}>
            We serve clients across New York, New Jersey, Pennsylvania, Connecticut, Florida, and
            internationally — delivering bespoke security solutions that adapt to your unique environment
            and risk profile.
          </p>
          <ul className="space-y-5">
            {points.map((pt) => (
              <li key={pt} className="flex items-start gap-4 text-sm" style={{ color: 'rgba(245,243,239,0.55)' }}>
                <CheckCircle size={15} style={{ color: '#b8976a', flexShrink: 0, marginTop: '2px' }} />
                <span style={{ fontWeight: 300 }}>{pt}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right — understated quote card */}
        <div
          className="p-12 relative overflow-hidden"
          style={{ backgroundColor: '#111111', border: '1px solid #1e1e1e' }}
        >
          <div
            className="absolute top-0 right-0 w-48 h-48 rounded-full pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(184,151,106,0.07) 0%, transparent 70%)' }}
          />
          <div className="relative z-10">
            {/* Gold line accent */}
            <div className="w-8 h-px mb-10" style={{ backgroundColor: '#b8976a' }} />
            <p
              className="font-display font-semibold text-xl leading-snug mb-8"
              style={{ color: '#f5f3ef', letterSpacing: '-0.01em' }}
            >
              "Excellence in Protection.<br />
              <span style={{ color: '#b8976a', fontWeight: 300, fontStyle: 'italic' }}>Discretion by Design.</span>"
            </p>
            <p className="text-sm leading-relaxed mb-10" style={{ color: 'rgba(245,243,239,0.4)', fontWeight: 300 }}>
              Every client receives a personalized consultation, a comprehensive threat assessment, and a
              dedicated security detail matched precisely to their needs. We don't believe in one-size-fits-all
              security — because your life is not one-size-fits-all.
            </p>
            <div className="flex items-center gap-4 pt-8" style={{ borderTop: '1px solid #1e1e1e' }}>
              <div className="w-10 h-10 flex items-center justify-center" style={{ border: '1px solid rgba(184,151,106,0.3)' }}>
                <Shield size={14} style={{ color: '#b8976a' }} />
              </div>
              <div>
                <div className="font-display font-bold text-[0.65rem] uppercase tracking-[0.2em]" style={{ color: '#f5f3ef' }}>
                  Powerson Protection
                </div>
                <div className="flex items-center gap-1 mt-0.5" style={{ color: 'rgba(245,243,239,0.3)', fontSize: '0.6rem' }}>
                  <MapPin size={9} /> NY · NJ · PA · CT · FL · Worldwide
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─────────────────────────────────────────────
// INSTAGRAM CTA
// ─────────────────────────────────────────────
function InstagramCTA() {
  const { ref, visible } = useFadeIn()

  return (
    <section
      id="social"
      className="py-24 px-8 lg:px-16 relative overflow-hidden"
      style={{ backgroundColor: '#0c0c0c', borderTop: '1px solid #1a1a1a', borderBottom: '1px solid #1a1a1a' }}
    >
      <div
        ref={ref}
        className={`max-w-2xl mx-auto text-center relative z-10 transition-all duration-700 ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}
      >
        {/* Icon */}
        <div
          className="inline-flex items-center justify-center w-12 h-12 mb-8 mx-auto"
          style={{ border: '1px solid rgba(184,151,106,0.3)' }}
        >
          <Instagram size={18} style={{ color: '#b8976a' }} />
        </div>

        <h2 className="section-title text-2xl sm:text-3xl mb-4">Follow Our Operations</h2>
        <p className="text-sm leading-relaxed mb-10" style={{ color: 'rgba(245,243,239,0.4)', fontWeight: 300 }}>
          Follow our elite operations, team, and culture on Instagram.
        </p>
        <a
          id="instagram-follow-btn"
          href="https://www.instagram.com/powersonprotection/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary inline-flex"
        >
          <Instagram size={14} />
          @powersonprotection
          <ArrowRight size={13} />
        </a>
      </div>
    </section>
  )
}

// ─────────────────────────────────────────────
// CONTACT
// ─────────────────────────────────────────────
function Contact() {
  const { ref, visible } = useFadeIn()
  const [status, setStatus] = useState('idle')
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' })

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('https://formspree.io/f/maqlngav', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStatus('sent')
        setForm({ name: '', email: '', phone: '', service: '', message: '' })
      } else setStatus('error')
    } catch {
      setStatus('error')
    }
  }

  const inputStyle = {
    width: '100%',
    backgroundColor: '#0c0c0c',
    border: '1px solid #1e1e1e',
    color: '#f5f3ef',
    padding: '1rem 1.25rem',
    fontSize: '0.8rem',
    fontFamily: 'Inter, sans-serif',
    fontWeight: 300,
    outline: 'none',
    transition: 'border-color 0.3s ease',
  }

  const labelStyle = {
    display: 'block',
    fontSize: '0.6rem',
    fontWeight: 700,
    letterSpacing: '0.22em',
    textTransform: 'uppercase',
    color: 'rgba(245,243,239,0.35)',
    marginBottom: '0.5rem',
  }

  return (
    <section id="contact" className="py-32 px-8 lg:px-16 relative overflow-hidden" style={{ backgroundColor: '#0c0c0c' }}>
      <div
        className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(184,151,106,0.04) 0%, transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto relative z-10 grid lg:grid-cols-2 gap-20 items-start">
        {/* Left */}
        <div
          ref={ref}
          className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          <div className="divider-gold mb-6" />
          <h2 className="section-title text-4xl sm:text-5xl mb-6 leading-tight">
            Request<br />
            <span style={{ color: '#b8976a', fontWeight: 300, fontStyle: 'italic' }}>Protection</span>
          </h2>
          <p className="text-sm leading-relaxed mb-14" style={{ color: 'rgba(245,243,239,0.45)', fontWeight: 300 }}>
            All inquiries are handled with the utmost confidentiality. A senior security consultant
            will respond within 24 hours to discuss your requirements.
          </p>

          <div className="space-y-8">
            {[
              { icon: Mail,  label: 'Email',   value: 'powersonprotection@gmail.com', href: 'mailto:powersonprotection@gmail.com' },
              { icon: Phone, label: 'Phone',   value: '(570) 240-2361',               href: 'tel:+15702402361' },
              { icon: Phone, label: 'Phone',   value: '(347) 601-6979',               href: 'tel:+13476016979' },
              { icon: MapPin,label: 'Coverage',value: 'NY · NJ · PA · CT · FL · Worldwide', href: null },
            ].map(({ icon: Icon, label, value, href }, idx) => (
              <div key={idx} className="flex items-start gap-5">
                <div
                  className="w-10 h-10 flex items-center justify-center flex-shrink-0"
                  style={{ border: '1px solid #1e1e1e' }}
                >
                  <Icon size={14} style={{ color: '#b8976a' }} />
                </div>
                <div>
                  <div style={{ ...labelStyle, marginBottom: '0.25rem' }}>{label}</div>
                  {href ? (
                    <a href={href} className="text-sm transition-colors duration-300" style={{ color: 'rgba(245,243,239,0.65)', fontWeight: 300 }}>
                      {value}
                    </a>
                  ) : (
                    <span className="text-sm" style={{ color: 'rgba(245,243,239,0.65)', fontWeight: 300 }}>{value}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — Form */}
        <div className="p-10" style={{ backgroundColor: '#111111', border: '1px solid #1e1e1e' }}>
          {status === 'sent' ? (
            <div className="text-center py-14">
              <CheckCircle size={44} className="mx-auto mb-6" style={{ color: '#b8976a' }} />
              <h3 className="font-display font-bold text-lg uppercase tracking-widest mb-3" style={{ color: '#f5f3ef' }}>
                Message Received
              </h3>
              <p className="text-sm" style={{ color: 'rgba(245,243,239,0.4)', fontWeight: 300 }}>
                A security consultant will contact you within 24 hours.
              </p>
              <button onClick={() => setStatus('idle')} className="btn-ghost mt-10 text-xs">
                Send Another Enquiry
              </button>
            </div>
          ) : (
            <form id="contact-form" onSubmit={handleSubmit} className="space-y-7">
              <div>
                <label htmlFor="name" style={labelStyle}>
                  Full Name <span style={{ color: '#b8976a' }}>*</span>
                </label>
                <input
                  id="name" name="name" type="text" required
                  value={form.name} onChange={handleChange}
                  placeholder="John Smith"
                  style={{ ...inputStyle }}
                  onFocus={(e) => e.target.style.borderColor = 'rgba(184,151,106,0.5)'}
                  onBlur={(e) => e.target.style.borderColor = '#1e1e1e'}
                />
              </div>
              <div>
                <label htmlFor="email" style={labelStyle}>
                  Email Address <span style={{ color: '#b8976a' }}>*</span>
                </label>
                <input
                  id="email" name="email" type="email" required
                  value={form.email} onChange={handleChange}
                  placeholder="you@company.com"
                  style={{ ...inputStyle }}
                  onFocus={(e) => e.target.style.borderColor = 'rgba(184,151,106,0.5)'}
                  onBlur={(e) => e.target.style.borderColor = '#1e1e1e'}
                />
              </div>
              <div>
                <label htmlFor="phone" style={labelStyle}>
                  Cell Phone Number <span style={{ color: '#b8976a' }}>*</span>
                </label>
                <input
                  id="phone" name="phone" type="tel" required
                  value={form.phone} onChange={handleChange}
                  placeholder="(555) 000-0000"
                  style={{ ...inputStyle }}
                  onFocus={(e) => e.target.style.borderColor = 'rgba(184,151,106,0.5)'}
                  onBlur={(e) => e.target.style.borderColor = '#1e1e1e'}
                />
              </div>
              <div>
                <label htmlFor="service" style={labelStyle}>
                  Service Type <span style={{ color: '#b8976a' }}>*</span>
                </label>
                <select
                  id="service" name="service" required
                  value={form.service} onChange={handleChange}
                  style={{ ...inputStyle, cursor: 'pointer', appearance: 'none' }}
                  onFocus={(e) => e.target.style.borderColor = 'rgba(184,151,106,0.5)'}
                  onBlur={(e) => e.target.style.borderColor = '#1e1e1e'}
                >
                  <option value="" disabled style={{ backgroundColor: '#111' }}>Select a service...</option>
                  {SERVICES.map((s) => (
                    <option key={s.id} value={s.title} style={{ backgroundColor: '#111' }}>{s.title}</option>
                  ))}
                  <option value="Other" style={{ backgroundColor: '#111' }}>Other / General Inquiry</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" style={labelStyle}>
                  Message <span style={{ color: '#b8976a' }}>*</span>
                </label>
                <textarea
                  id="message" name="message" required rows={5}
                  value={form.message} onChange={handleChange}
                  placeholder="Briefly describe your security needs, location, and timeline..."
                  style={{ ...inputStyle, resize: 'none' }}
                  onFocus={(e) => e.target.style.borderColor = 'rgba(184,151,106,0.5)'}
                  onBlur={(e) => e.target.style.borderColor = '#1e1e1e'}
                />
              </div>

              {status === 'error' && (
                <p style={{ color: '#b8976a', fontSize: '0.75rem' }}>
                  Something went wrong. Please email us at powersonprotection@gmail.com or call (570) 240-2361.
                </p>
              )}

              <button
                id="submit-contact" type="submit"
                disabled={status === 'sending'}
                className="btn-primary w-full justify-center disabled:opacity-40 disabled:cursor-not-allowed"
              >
                {status === 'sending' ? 'Sending...' : <>Submit Request <ArrowRight size={13} /></>}
              </button>

              <p className="text-center" style={{ color: 'rgba(245,243,239,0.2)', fontSize: '0.65rem' }}>
                All communications are treated with strict confidentiality.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

// ─────────────────────────────────────────────
// FOOTER
// ─────────────────────────────────────────────
function Footer() {
  return (
    <footer
      className="py-12 px-8 lg:px-16"
      style={{ backgroundColor: '#0a0a0a', borderTop: '1px solid #1a1a1a' }}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 flex items-center justify-center" style={{ border: '1px solid rgba(184,151,106,0.4)' }}>
            <Shield size={12} style={{ color: '#b8976a' }} />
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-display font-black uppercase text-[9px] tracking-[0.28em]" style={{ color: '#f5f3ef' }}>POWERSON</span>
            <span className="font-display font-light uppercase text-[9px] tracking-[0.28em]" style={{ color: '#b8976a' }}>PROTECTION</span>
          </div>
        </div>

        {/* Nav */}
        <nav className="flex gap-8">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href} href={l.href}
              className="label-tag transition-colors duration-300 hover:text-warm-white"
              style={{ color: 'rgba(245,243,239,0.25)' }}
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* Right */}
        <div className="flex flex-col items-center md:items-end gap-2">
          <a
            href="https://www.instagram.com/powersonprotection/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 transition-colors duration-300"
            style={{ color: 'rgba(245,243,239,0.25)', fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase' }}
          >
            <Instagram size={11} /> @powersonprotection
          </a>
          <p style={{ color: 'rgba(245,243,239,0.15)', fontSize: '0.6rem' }}>
            © {new Date().getFullYear()} Powerson Protection. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

// ─────────────────────────────────────────────
// APP
// ─────────────────────────────────────────────
export default function App() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#0c0c0c', color: '#f5f3ef' }}>
      <Navbar />
      <Hero />
      <Services />
      <About />
      <InstagramCTA />
      <Contact />
      <Footer />
    </div>
  )
}
