import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Users, Search, ShieldCheck, UserCheck, CheckCircle2,
  ArrowRight, MessageSquare, Building2, Briefcase, Award,
  Cpu, Wrench, Stethoscope, Coins, Headphones, FileCheck
} from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import AnimatedCard from '../components/AnimatedCard';
import MagneticButton from '../components/MagneticButton';
import CountUp from '../components/CountUp';

/* ── Word-by-word reveal helper ── */
const WordReveal = ({ text, className = '', delay = 0 }) => {
  const words = text.split(' ');
  return (
    <span className={className}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden mr-[0.25em]">
          <motion.span
            className="inline-block"
            initial={{ y: '110%', opacity: 0 }}
            animate={{ y: '0%', opacity: 1 }}
            transition={{
              duration: 0.65,
              delay: delay + i * 0.07,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </span>
  );
};

export const Home = () => {
  const whatsappUrl =
    'https://wa.me/447466929441?text=Hi%2C%20I%27d%20like%20to%20know%20more%20about%20your%20staffing%20services.';

  const sectors = [
    { name: 'IT & Technology',      icon: Cpu,        desc: 'Software, Cloud, DevOps, Infrastructure & Cybersecurity' },
    { name: 'Engineering',          icon: Wrench,      desc: 'Mechanical, Systems, Electrical & Industrial Specialist Talent' },
    { name: 'Healthcare',           icon: Stethoscope, desc: 'Clinical, Admin, Allied Health & Medical Personnel' },
    { name: 'Finance & Accounting', icon: Coins,       desc: 'Controllers, Analysts, Audit & Financial Managers' },
    { name: 'Administration',       icon: Building2,   desc: 'Executive Assistants, Office Operations & HR Support' },
    { name: 'Customer Service',     icon: Headphones,  desc: 'Client Relations, Call Center & Helpdesk Operations' },
  ];

  const steps = [
    { number: '01', title: 'Source',    subtitle: 'Targeted Headhunting & Network Mapping',    description: 'We leverage proprietary UK databases, passive talent networks, and international talent pools to pinpoint high-calibre candidates tailored to your specific role requirements.', icon: Search,    badge: 'Active & Passive Sourcing' },
    { number: '02', title: 'Screen',    subtitle: 'Rigorous Verification & CV Audit',           description: 'Our domain recruiters perform initial interviews, qualifications auditing, right-to-work checks, and career progression verification before candidates enter your pipeline.', icon: ShieldCheck, badge: 'Comprehensive Vetting' },
    { number: '03', title: 'Assess',    subtitle: 'Technical & Culture-Fit Evaluation',         description: 'We evaluate candidates against both hard skill prerequisites and your organization\'s core values, leadership dynamics, and long-term retention potential.',                   icon: UserCheck,  badge: 'In-Depth Evaluation' },
    { number: '04', title: 'Shortlist', subtitle: 'Curated 3-5 Elite Profiles',                 description: 'You receive a refined selection of the top candidates accompanied by detailed consultant appraisal notes, interview availability, and salary benchmark guidance.',            icon: FileCheck,  badge: 'Fast-Track Placement' },
  ];

  const stats = [
    { value: '500+',  label: 'Placements Completed', sub: 'Across UK & International Markets' },
    { value: '98%',   label: 'Client Satisfaction',  sub: 'Repeat recruitment partnership rate' },
    { value: '48',    label: 'Hour Turnaround',       sub: 'Curated candidate shortlists' },
    { value: '6',     label: 'Industry Tracks',       sub: 'Deep domain headhunting specialists' },
  ];

  return (
    <div className="space-y-20 pb-16">

      {/* ═══════════════════════════════════════
          HERO
      ═══════════════════════════════════════ */}
      <section className="relative overflow-hidden pt-12 lg:pt-20 pb-20 lg:pb-28 min-h-[92vh] flex items-center">

        {/* Floating orbs */}
        <div className="orb orb-1 z-0" />
        <div className="orb orb-2 z-0" />
        <div className="orb orb-3 z-0" />

        {/* Background image with slow zoom */}
        <div className="absolute inset-0 z-0">
          <img
            src="/hero_img.jpg"
            alt="London Tower Bridge"
            className="w-full h-full object-cover object-right hero-img-scale"
          />
        </div>

        {/* Overlay */}
        <div
          className="absolute inset-0 z-[1]"
          style={{
            background: `linear-gradient(
              90deg,
              rgba(255,255,255,0.98) 0%,
              rgba(255,255,255,0.95) 22%,
              rgba(255,255,255,0.82) 40%,
              rgba(255,255,255,0.45) 55%,
              rgba(255,255,255,0.12) 72%,
              rgba(255,255,255,0.02) 88%,
              rgba(255,255,255,0) 100%
            )`,
          }}
        />
        <div
          className="absolute inset-0 z-[2]"
          style={{
            background: `radial-gradient(circle at top left, rgba(37,99,235,0.10), transparent 45%)`,
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            <div className="lg:col-span-7 space-y-6">

              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 16, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-blue/10 border border-brand-blue/20 text-brand-navy text-xs font-semibold backdrop-blur-md"
              >
                <span className="w-2 h-2 rounded-full bg-brand-blue pulse-ring" />
                <span>UK & Global Staffing & Executive Search Agency</span>
              </motion.div>

              {/* Headline — word-by-word reveal */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-brand-navy leading-[1.1] tracking-tight">
                <WordReveal text="Connecting Businesses with the" delay={0.1} />
                {' '}
                <span className="text-gradient-animate">
                  <WordReveal text="Right Talent" delay={0.55} />
                </span>
              </h1>

              {/* Sub-copy */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.75, ease: [0.22, 1, 0.36, 1] }}
                className="text-lg sm:text-xl text-slate-700 leading-relaxed max-w-2xl"
              >
                Legacy IT Solutions provides tailored staffing solutions across{' '}
                <strong className="text-brand-navy">
                  IT, Engineering, Healthcare, Finance, Administration, and Customer Service
                </strong>
                . We act as your dedicated sourcing partner, delivering precision-matched professionals who drive long-term business growth.
              </motion.p>

              {/* Tagline */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
                className="text-sm font-semibold text-brand-silver-muted tracking-widest uppercase flex items-center gap-3"
              >
                <motion.span
                  className="h-px bg-brand-blue/40"
                  initial={{ width: 0 }}
                  animate={{ width: 32 }}
                  transition={{ duration: 0.6, delay: 1.0 }}
                />
                <span>People. Solutions. Legacy.</span>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col sm:flex-row gap-4 pt-3"
              >
                <MagneticButton strength={14}>
                  <Link
                    to="/contact"
                    className="btn-shimmer inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-brand-blue text-white font-semibold hover:bg-brand-blue-hover hover:scale-[1.04] active:scale-[0.97] transition-all duration-200 shadow-xl"
                  >
                    Request Staffing / Hire Talent
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </MagneticButton>

                <MagneticButton strength={14}>
                  <Link
                    to="/careers"
                    className="btn-shimmer inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white border border-slate-200 font-semibold text-brand-navy hover:bg-slate-50 hover:scale-[1.04] active:scale-[0.97] transition-all duration-200 shadow-lg"
                  >
                    <Briefcase className="w-5 h-5 text-brand-blue" />
                    Submit Your CV
                  </Link>
                </MagneticButton>
              </motion.div>

            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          TRUST STRIP — CountUp stats
      ═══════════════════════════════════════ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 36, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="bg-white rounded-3xl p-8 sm:p-10 shadow-soft-md border border-slate-100/90 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className={`space-y-1 text-center md:text-left ${idx < 3 ? 'border-r border-slate-100' : ''} pr-4`}
            >
              <p className="text-3xl sm:text-4xl font-bold font-serif text-brand-navy">
                <CountUp value={stat.value} />
              </p>
              <p className="text-sm font-semibold text-brand-blue">{stat.label}</p>
              <p className="text-xs text-slate-500">{stat.sub}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════
          SECTORS — tilt cards
      ═══════════════════════════════════════ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <SectionHeader
          badge="Tailored Sourcing Tracks"
          title="Industries & Specializations"
          subtitle="We recruit qualified specialists and leadership talent across key enterprise domains with precision and speed."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sectors.map((sec, idx) => {
            const IconComp = sec.icon;
            return (
              <Link key={idx} to="/services#industries-we-serve" className="block">
                <AnimatedCard delay={idx * 0.09} tilt>
                  <div className="card-hover-glow relative h-full bg-white rounded-2xl p-7 border border-slate-100 shadow-soft-sm flex flex-col justify-between group overflow-hidden">
                    <div className="tilt-shine" />
                    <div className="space-y-4">
                      <div className="w-12 h-12 rounded-xl bg-brand-bg group-hover:bg-brand-blue/10 text-brand-navy group-hover:text-brand-blue flex items-center justify-center transition-colors duration-300">
                        <IconComp className="w-6 h-6 icon-bounce" />
                      </div>
                      <h3 className="text-xl font-bold font-serif text-brand-navy group-hover:text-brand-blue transition-colors duration-300">
                        {sec.name}
                      </h3>
                      <p className="text-slate-600 text-sm leading-relaxed">{sec.desc}</p>
                    </div>
                    <div className="pt-6 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-brand-blue">
                      <span>View Specialized Roles</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
                    </div>
                  </div>
                </AnimatedCard>
              </Link>
            );
          })}
        </div>
      </section>

      {/* ═══════════════════════════════════════
          HOW WE WORK — 4 steps
      ═══════════════════════════════════════ */}
      <section className="bg-white py-16 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          <SectionHeader
            badge="Our Staffing Methodology"
            title="How We Work"
            subtitle="A streamlined 4-stage recruitment workflow built to eliminate hiring friction, ensure compliance, and present candidates ready to excel."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {steps.map((step, idx) => {
              const IconComponent = step.icon;
              return (
                <AnimatedCard key={idx} delay={idx * 0.13} tilt>
                  <div className="card-hover-glow relative bg-[#FAFBFC] rounded-2xl p-7 border border-slate-200/80 h-full flex flex-col justify-between space-y-6 group overflow-hidden">
                    <div className="tilt-shine" />
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <motion.span
                          className="text-3xl font-serif font-bold text-brand-blue/25 group-hover:text-brand-blue transition-colors duration-400"
                        >
                          {step.number}
                        </motion.span>
                        <div className="w-10 h-10 rounded-xl bg-white shadow-sm border border-slate-100 flex items-center justify-center text-brand-navy group-hover:text-brand-blue group-hover:border-brand-blue/30 transition-all duration-300">
                          <IconComponent className="w-5 h-5 icon-bounce" />
                        </div>
                      </div>
                      <div>
                        <span className="inline-block px-2.5 py-0.5 rounded text-[11px] font-semibold text-brand-navy bg-slate-200/60 mb-2">
                          {step.badge}
                        </span>
                        <h3 className="text-2xl font-bold font-serif text-brand-navy">{step.title}</h3>
                        <p className="text-xs font-semibold text-brand-blue mt-0.5">{step.subtitle}</p>
                      </div>
                      <p className="text-sm text-slate-600 leading-relaxed">{step.description}</p>
                    </div>
                    <div className="pt-4 border-t border-slate-200/60 flex items-center gap-1.5 text-xs font-semibold text-brand-navy">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      <span>Quality Assured</span>
                    </div>
                  </div>
                </AnimatedCard>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          BOTTOM CTA BANNER
      ═══════════════════════════════════════ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="cta-sweep relative overflow-hidden bg-brand-navy text-white rounded-3xl p-10 sm:p-14 shadow-soft-lg space-y-8"
        >
          {/* Floating particles */}
          {[...Array(8)].map((_, i) => (
            <span
              key={i}
              className="particle"
              style={{
                width: `${4 + (i % 3) * 3}px`,
                height: `${4 + (i % 3) * 3}px`,
                background: `rgba(96,165,250,${0.15 + (i % 4) * 0.08})`,
                left: `${10 + i * 11}%`,
                bottom: `${8 + (i % 3) * 10}%`,
                animationDuration: `${4 + i * 0.8}s`,
                animationDelay: `${i * 0.5}s`,
              }}
            />
          ))}

          <div className="relative z-10 max-w-3xl space-y-4">
            <motion.span
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-blue/20 text-brand-blue-glow text-xs font-semibold border border-brand-blue/30"
            >
              <Award className="w-3.5 h-3.5" />
              <span>Ready to Scale Your Team?</span>
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
              className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white leading-tight"
            >
              Let's Build Your Legacy Team Today.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.28 }}
              className="text-slate-300 text-base sm:text-lg leading-relaxed"
            >
              Whether you need permanent specialist hires or rapid long-term contract staffing, Legacy IT Solutions provides tailored recruitment expertise backed by deep domain insight.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.38 }}
            className="relative z-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2"
          >
            <MagneticButton strength={12}>
              <Link
                to="/contact"
                className="btn-shimmer inline-flex items-center justify-center gap-2 px-7 py-3.5 text-base font-semibold text-brand-navy bg-white hover:bg-slate-100 hover:scale-[1.04] active:scale-[0.97] rounded-full shadow-md transition-all duration-200"
              >
                <span>Contact Recruitment Team</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </MagneticButton>

            <MagneticButton strength={12}>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-shimmer inline-flex items-center justify-center gap-2 px-7 py-3.5 text-base font-semibold text-emerald-300 bg-emerald-950/80 hover:bg-emerald-900 hover:scale-[1.04] active:scale-[0.97] border border-emerald-500/50 rounded-full transition-all duration-200"
              >
                <MessageSquare className="w-5 h-5 text-emerald-400" />
                <span>Chat on WhatsApp</span>
              </a>
            </MagneticButton>
          </motion.div>

          {/* Orb accents */}
          <div className="absolute top-0 right-0 translate-x-12 -translate-y-12 w-96 h-96 bg-brand-blue/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-12 w-72 h-72 bg-brand-blue-glow/10 rounded-full blur-2xl pointer-events-none" />
        </motion.div>
      </section>

    </div>
  );
};

export default Home;
