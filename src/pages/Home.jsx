import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Users,
  Search,
  ShieldCheck,
  UserCheck,
  CheckCircle2,
  ArrowRight,
  MessageSquare,
  Building2,
  Briefcase,
  Award,
  Clock,
  TrendingUp,
  Cpu,
  Wrench,
  Stethoscope,
  Coins,
  Headphones,
  FileCheck
} from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import AnimatedCard from '../components/AnimatedCard';

export const Home = () => {
  const whatsappUrl = "https://wa.me/447466929441?text=Hi%2C%20I%27d%20like%20to%20know%20more%20about%20your%20staffing%20services.";

  // Sectors covered
  const sectors = [
    { name: 'IT & Technology', icon: Cpu, desc: 'Software, Cloud, DevOps, Infrastructure & Cybersecurity' },
    { name: 'Engineering', icon: Wrench, desc: 'Mechanical, Systems, Electrical & Industrial Specialist Talent' },
    { name: 'Healthcare', icon: Stethoscope, desc: 'Clinical, Admin, Allied Health & Medical Personnel' },
    { name: 'Finance & Accounting', icon: Coins, desc: 'Controllers, Analysts, Audit & Financial Managers' },
    { name: 'Administration', icon: Building2, desc: 'Executive Assistants, Office Operations & HR Support' },
    { name: 'Customer Service', icon: Headphones, desc: 'Client Relations, Call Center & Helpdesk Operations' },
  ];

  // How We Work - 4 Steps
  const steps = [
    {
      number: '01',
      title: 'Source',
      subtitle: 'Targeted Headhunting & Network Mapping',
      description: 'We leverage proprietary UK databases, passive talent networks, and international talent pools to pinpoint high-calibre candidates tailored to your specific role requirements.',
      icon: Search,
      badge: 'Active & Passive Sourcing'
    },
    {
      number: '02',
      title: 'Screen',
      subtitle: 'Rigorous Verification & CV Audit',
      description: 'Our domain recruiters perform initial interviews, qualifications auditing, right-to-work checks, and career progression verification before candidates enter your pipeline.',
      icon: ShieldCheck,
      badge: 'Comprehensive Vetting'
    },
    {
      number: '03',
      title: 'Assess',
      subtitle: 'Technical & Culture-Fit Evaluation',
      description: 'We evaluate candidates against both hard skill prerequisites and your organization’s core values, leadership dynamics, and long-term retention potential.',
      icon: UserCheck,
      badge: 'In-Depth Evaluation'
    },
    {
      number: '04',
      title: 'Shortlist',
      subtitle: 'Curated 3-5 Elite Profiles',
      description: 'You receive a refined selection of the top candidates accompanied by detailed consultant appraisal notes, interview availability, and salary benchmark guidance.',
      icon: FileCheck,
      badge: 'Fast-Track Placement'
    },
  ];

  return (
    <div className="space-y-20 pb-16">

      {/* HERO SECTION */}
<section className="relative overflow-hidden pt-12 lg:pt-20 pb-20 lg:pb-28 min-h-[92vh] flex items-center">

  {/* Background Image */}{/* Background Image */}
<div className="absolute inset-0 z-0">
  <img
    src="/hero_img.jpg"
    alt="London Tower Bridge"
    className="w-full h-full object-cover object-right"
  />
</div>

{/* Premium Overlay */}
<div
  className="absolute inset-0 z-[1]"
  style={{
    background: `
      linear-gradient(
        90deg,
        rgba(255,255,255,0.98) 0%,
        rgba(255,255,255,0.95) 22%,
        rgba(255,255,255,0.82) 40%,
        rgba(255,255,255,0.45) 55%,
        rgba(255,255,255,0.12) 72%,
        rgba(255,255,255,0.02) 88%,
        rgba(255,255,255,0) 100%
      )
    `,
  }}
></div>

{/* Blue Light */}
<div
  className="absolute inset-0 z-[2]"
  style={{
    background: `
      radial-gradient(
        circle at top left,
        rgba(37,99,235,0.10),
        transparent 45%
      )
    `,
  }}
></div>

<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

      {/* Left Content Column */}
      <div className="lg:col-span-7 space-y-6">

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-blue/10 border border-brand-blue/20 text-brand-navy text-xs font-semibold backdrop-blur-md"
        >
          <span className="w-2 h-2 rounded-full bg-brand-blue animate-pulse"></span>
          <span>UK & Global Staffing & Executive Search Agency</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-brand-navy leading-[1.1] tracking-tight"
        >
          Connecting Businesses with the{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-navy via-brand-blue to-brand-blue-glow">
            Right Talent
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg sm:text-xl text-slate-700 leading-relaxed max-w-2xl"
        >
          Legacy IT Solutions provides tailored staffing solutions across{" "}
          <strong className="text-brand-navy">
            IT, Engineering, Healthcare, Finance, Administration, and Customer
            Service
          </strong>
          . We act as your dedicated sourcing partner, delivering
          precision-matched professionals who drive long-term business growth.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="text-sm font-semibold text-brand-silver-muted tracking-widest uppercase flex items-center gap-3"
        >
          <span className="w-8 h-px bg-brand-blue/40"></span>
          <span>People. Solutions. Legacy.</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 pt-3"
        >
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-brand-blue text-white font-semibold hover:bg-brand-blue-hover transition-all shadow-xl"
          >
            Request Staffing / Hire Talent
            <ArrowRight className="w-5 h-5" />
          </Link>

          <Link
            to="/careers"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white border border-slate-200 font-semibold text-brand-navy hover:bg-slate-50 transition-all shadow-lg"
          >
            <Briefcase className="w-5 h-5 text-brand-blue" />
            Submit Your CV
          </Link>
        </motion.div>

      </div>

      {/* KEEP YOUR EXISTING RIGHT CARD HERE WITHOUT CHANGING ANYTHING */}

    </div>
  </div>

</section>
      {/* TRUST INDICATORS STRIP */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-soft-md border border-slate-100/90 grid grid-cols-2 md:grid-cols-4 gap-8">

          <div className="space-y-1 text-center md:text-left border-r border-slate-100 last:border-0 pr-4">
            <p className="text-3xl sm:text-4xl font-bold font-serif text-brand-navy">500+</p>
            <p className="text-sm font-semibold text-brand-blue">Placements Completed</p>
            <p className="text-xs text-slate-500">Across UK & International Markets</p>
          </div>

          <div className="space-y-1 text-center md:text-left border-r border-slate-100 last:border-0 pr-4">
            <p className="text-3xl sm:text-4xl font-bold font-serif text-brand-navy">98%</p>
            <p className="text-sm font-semibold text-brand-blue">Client Satisfaction</p>
            <p className="text-xs text-slate-500">Repeat recruitment partnership rate</p>
          </div>

          <div className="space-y-1 text-center md:text-left border-r border-slate-100 last:border-0 pr-4">
            <p className="text-3xl sm:text-4xl font-bold font-serif text-brand-navy">24-48h</p>
            <p className="text-sm font-semibold text-brand-blue">Turnaround Time</p>
            <p className="text-xs text-slate-500">Curated candidate shortlists</p>
          </div>

          <div className="space-y-1 text-center md:text-left">
            <p className="text-3xl sm:text-4xl font-bold font-serif text-brand-navy">6 Key</p>
            <p className="text-sm font-semibold text-brand-blue">Industry Tracks</p>
            <p className="text-xs text-slate-500">Deep domain headhunting specialists</p>
          </div>

        </div>
      </section>

      {/* SECTORS & INDUSTRIES OVERVIEW */}
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
                <AnimatedCard delay={idx * 0.1}>
                  <div className="h-full bg-white rounded-2xl p-7 border border-slate-100 shadow-soft-sm hover:shadow-soft-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group">
                    <div className="space-y-4">
                      <div className="w-12 h-12 rounded-xl bg-brand-bg group-hover:bg-brand-blue/10 text-brand-navy group-hover:text-brand-blue flex items-center justify-center transition-colors">
                        <IconComp className="w-6 h-6" />
                      </div>
                      <h3 className="text-xl font-bold font-serif text-brand-navy group-hover:text-brand-blue transition-colors">
                        {sec.name}
                      </h3>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        {sec.desc}
                      </p>
                    </div>

                    <div className="pt-6 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-brand-blue">
                      <span>View Specialized Roles</span>
                      <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </AnimatedCard>
              </Link>
            );
          })}
        </div>

      </section>

      {/* "HOW WE WORK" — 4 STEPS */}
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
                <AnimatedCard key={idx} delay={idx * 0.12}>
                  <div className="relative bg-[#FAFBFC] rounded-2xl p-7 border border-slate-200/80 hover:border-brand-blue/40 shadow-soft-sm hover:shadow-soft-md transition-all duration-300 h-full flex flex-col justify-between space-y-6 group">

                    <div className="space-y-4">
                      {/* Step Header */}
                      <div className="flex items-center justify-between">
                        <span className="text-3xl font-serif font-bold text-brand-blue/30 group-hover:text-brand-blue transition-colors">
                          {step.number}
                        </span>
                        <div className="w-10 h-10 rounded-xl bg-white shadow-sm border border-slate-100 flex items-center justify-center text-brand-navy group-hover:text-brand-blue">
                          <IconComponent className="w-5 h-5" />
                        </div>
                      </div>

                      {/* Step Titles */}
                      <div>
                        <span className="inline-block px-2.5 py-0.5 rounded text-[11px] font-semibold text-brand-navy bg-slate-200/60 mb-2">
                          {step.badge}
                        </span>
                        <h3 className="text-2xl font-bold font-serif text-brand-navy">
                          {step.title}
                        </h3>
                        <p className="text-xs font-semibold text-brand-blue mt-0.5">
                          {step.subtitle}
                        </p>
                      </div>

                      {/* Description */}
                      <p className="text-sm text-slate-600 leading-relaxed">
                        {step.description}
                      </p>
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

      {/* BOTTOM CTA BANNER DRIVING TO CONTACT & WHATSAPP */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden bg-brand-navy text-white rounded-3xl p-10 sm:p-14 shadow-soft-lg space-y-8">

          <div className="relative z-10 max-w-3xl space-y-4">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-blue/20 text-brand-blue-glow text-xs font-semibold border border-brand-blue/30">
              <Award className="w-3.5 h-3.5" />
              <span>Ready to Scale Your Team?</span>
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white leading-tight">
              Let’s Build Your Legacy Team Today.
            </h2>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Whether you need permanent specialist hires or rapid long-term contract staffing, Legacy IT Solutions provides tailored recruitment expertise backed by deep domain insight.
            </p>
          </div>

          <div className="relative z-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-base font-semibold text-brand-navy bg-white hover:bg-slate-100 rounded-full shadow-md transition-all duration-200"
            >
              <span>Contact Recruitment Team</span>
              <ArrowRight className="w-5 h-5" />
            </Link>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-base font-semibold text-emerald-300 bg-emerald-950/80 hover:bg-emerald-900 border border-emerald-500/50 rounded-full transition-all duration-200"
            >
              <MessageSquare className="w-5 h-5 text-emerald-400" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>

          {/* Subtle Graphic Accents */}
          <div className="absolute top-0 right-0 transform translate-x-12 -translate-y-12 w-96 h-96 bg-brand-blue/20 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-12 w-72 h-72 bg-brand-blue-glow/10 rounded-full blur-2xl pointer-events-none"></div>
        </div>
      </section>

    </div>
  );
};

export default Home;
