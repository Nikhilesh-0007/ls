import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Users,
  Search,
  ShieldCheck,
  UserCheck,
  FileCheck,
  Briefcase,
  Award,
  ArrowRight,
  Cpu,
  Wrench,
  Stethoscope,
  Coins,
  Building2,
  Headphones,
  Sparkles,
  CheckCircle2
} from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import AnimatedCard from '../components/AnimatedCard';
import MagneticButton from '../components/MagneticButton';

export const Services = () => {
  // 2 Service Tracks
  const tracks = [
    {
      title: 'Long-term & Permanent Staffing',
      subtitle: 'Building core talent benches for sustained business growth',
      badge: 'Core Workforce Solutions',
      description: 'Ideal for scaling departments, filling crucial core roles, and establishing permanent organizational capability. We manage the full lifecycle from talent attraction to retention guarantees.',
      features: [
        'Custom candidate benchmarking and market compensation analysis',
        'End-to-end recruitment process management (RPO capability)',
        'Culture-fit and long-term retention assessment guarantee',
        'Transparent fee structure with milestone guarantees',
        'Thorough background checks and qualifications verification'
      ],
      icon: Users,
    },
    {
      title: 'Specialist & Senior-Level Placements',
      subtitle: 'Executive Search & Niche Domain Headhunting',
      badge: 'Executive & Expert Search',
      description: 'Designed for mission-critical senior roles, technical architects, engineering managers, and executive leadership where precision match and discrete headhunting are vital.',
      features: [
        'Discrete targeted headhunting of active & passive leaders',
        'Deep technical skill evaluations by domain specialists',
        'Custom behavioral and leadership capability profiling',
        'Cross-border international talent relocation support',
        'Fast-track confidential candidate introductions'
      ],
      icon: Award,
    },
  ];

  // Visual Process Strip (4 Steps)
  const processSteps = [
    {
      step: '01',
      title: 'Sourcing',
      desc: 'Targeted headhunting across proprietary UK databases & passive talent networks.',
      icon: Search
    },
    {
      step: '02',
      title: 'CV Screening',
      desc: 'In-depth resume audits, career trajectory checks, and compliance verification.',
      icon: ShieldCheck
    },
    {
      step: '03',
      title: 'Assessment',
      desc: 'Behavioral profiling, technical evaluations, and culture-fit assessments.',
      icon: UserCheck
    },
    {
      step: '04',
      title: 'Shortlisting',
      desc: 'Top 3-5 pre-screened profiles presented with comprehensive recruiter summaries.',
      icon: FileCheck
    },
  ];

  // 7 Industry Grids
  const industries = [
    
    {
      name: 'Engineering',
      icon: Wrench,
      roles: ['Mechanical & Electrical Engineers', 'Systems & Automation Specialists', 'Project Managers', 'CAD Designers', 'Quality Assurance Engineers']
    },
    {
      name: 'Healthcare',
      icon: Stethoscope,
      roles: ['Clinical & Non-Clinical Admins', 'Medical Records Managers', 'Allied Health Professionals', 'Healthcare Compliance Specialists', 'Operations Staff']
    },
    {
      name: 'Finance & Accounting',
      icon: Coins,
      roles: ['Financial Controllers & Analysts', 'Senior Management Accountants', 'Audit & Tax Specialists', 'Payroll Administrators', 'Billing Officers']
    },
    {
      name: 'Administration',
      icon: Building2,
      roles: ['Executive Assistants & VPs', 'Office & Operations Managers', 'HR & People Operations', 'Document Controllers', 'Reception Specialists']
    },
    {
      name: 'Customer Service',
      icon: Headphones,
      roles: ['Customer Success Managers', 'Call Center & Helpdesk Leads', 'Client Relationship Leads', 'Technical Support Specialists', 'After-Sales Coordinators']
    },
    {
      name: 'Other Specialist Roles',
      icon: Sparkles,
      roles: ['Supply Chain & Logistics Leads', 'Procurement Officers', 'Legal & Compliance Specialists', 'Marketing & Communications', 'Tailored Custom Staffing']
    },
    {
      name: 'IT & Technology',
      icon: Cpu,
      roles: [
  'Software Engineers & Developers',
  'SAP Consultants & Developers',
  'Oracle ERP & Cloud Consultants',
  'Data Engineers',
  'Data Analysts',
  'Business Analysts',
  'Cloud & DevOps Engineers',
  'Cybersecurity Specialists',
  'AI & Machine Learning Engineers',
  'Full Stack Developers',
  'Frontend & Backend Developers',
  'Database Administrators (SQL/Oracle)',
  'IT Support & Systems Admins',
  'Network & Infrastructure Engineers'
]
    },
  ];

  return (
    <div className="space-y-20 pb-16">

      {/* PAGE HEADER */}
      <section className="bg-hero-glow pt-12 pb-16 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Staffing Tracks & Domain Focus"
            title="Services & Industries"
            subtitle="Tailored staffing tracks and deep industry expertise designed to meet your precise talent requirements."
          />
        </div>
      </section>

      {/* TWO SERVICE TRACKS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <SectionHeader
          badge="Specialized Engagement Models"
          title="Our Recruitment Tracks"
          subtitle="Choose the engagement model that best aligns with your organizational timelines and hiring complexity."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {tracks.map((track, idx) => {
            const IconComponent = track.icon;
            return (
                <AnimatedCard key={idx} delay={idx * 0.15}>
                <div className="card-hover-glow relative bg-white rounded-3xl p-8 sm:p-10 border border-slate-100 shadow-soft-md h-full flex flex-col justify-between space-y-8 overflow-hidden">
                  <div className="tilt-shine" />

                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div className="w-14 h-14 rounded-2xl bg-brand-blue/10 text-brand-blue flex items-center justify-center">
                        <IconComponent className="w-7 h-7" />
                      </div>
                      <span className="px-3 py-1 bg-brand-bg text-brand-navy border border-slate-200 text-xs font-semibold rounded-full">
                        {track.badge}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-2xl sm:text-3xl font-bold font-serif text-brand-navy">{track.title}</h3>
                      <p className="text-sm font-semibold text-brand-blue mt-1">{track.subtitle}</p>
                    </div>

                    <p className="text-slate-600 text-base leading-relaxed">{track.description}</p>

                    <div className="space-y-3 pt-2">
                      <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Key Deliverables & Benefits</p>
                      {track.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-3 text-sm text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 border-t border-slate-100">
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-brand-blue hover:text-brand-blue-hover transition-colors"
                    >
                      <span>Discuss Your Staffing Requirement</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>

                </div>
              </AnimatedCard>
            );
          })}
        </div>
      </section>

      {/* VISUAL PROCESS STRIP */}
      <section className="bg-brand-navy text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-brand-blue/20 text-brand-blue-glow border border-brand-blue/30">
              Quality Assurance Protocol
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white">
              Visual Sourcing & Selection Process
            </h2>
            <p className="text-slate-300 text-sm sm:text-base">
              Every candidate submitted to your hiring managers passes through our structured 4-point verification pipeline.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((pStep, idx) => {
              const StepIcon = pStep.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 36, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.55, delay: idx * 0.12, ease: [0.22, 1, 0.36, 1] }}
                  className="card-hover-dark bg-slate-900/60 rounded-2xl p-6 border border-slate-800 space-y-4 relative group"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-serif font-bold text-brand-blue-glow">{pStep.step}</span>
                    <div className="w-10 h-10 rounded-xl bg-slate-800 text-white flex items-center justify-center">
                      <StepIcon className="w-5 h-5 icon-bounce" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold font-serif text-white">{pStep.title}</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">{pStep.desc}</p>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* INDUSTRY GRID WITH ICONS (7 SECTORS) */}
      <section id="industries-we-serve" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <SectionHeader
          badge="Sector Expertise"
          title="Industries We Serve"
          subtitle="Our recruitment specialists have deep market knowledge across seven key domain verticals."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((ind, idx) => {
            const IconComp = ind.icon;
            return (
                <AnimatedCard key={idx} delay={idx * 0.08}>
                <div className="card-hover-glow relative bg-white rounded-2xl p-7 border border-slate-100 shadow-soft-sm h-full flex flex-col justify-between space-y-4 overflow-hidden">
                  <div className="tilt-shine" />
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-brand-blue/10 text-brand-blue flex items-center justify-center shrink-0">
                        <IconComp className="w-6 h-6" />
                      </div>
                      <h3 className="text-xl font-bold font-serif text-brand-navy">{ind.name}</h3>
                    </div>

                    <div className="space-y-2 pt-2">
                      <p className="text-xs font-semibold text-slate-400 uppercase">Key Roles Covered</p>
                      <ul className="space-y-1.5 text-xs text-slate-600">
                        {ind.roles.map((r, rIdx) => (
                          <li key={rIdx} className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-brand-blue"></span>
                            <span>{r}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100">
                    <Link to="/contact" className="text-xs font-semibold text-brand-blue hover:underline inline-flex items-center gap-1">
                      <span>Request Talent in {ind.name}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </AnimatedCard>
            );
          })}
        </div>
      </section>

      {/* SERVICES BOTTOM BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <div className="bg-white rounded-3xl p-10 shadow-soft-md border border-slate-100 space-y-4">
          <h3 className="text-2xl sm:text-3xl font-serif font-bold text-brand-navy">
            Require Custom Staffing or Bulk Team Assembly?
          </h3>
          <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto">
            We build bespoke recruitment pipelines tailored to your specific SLAs and budget targets.
          </p>
          <div className="pt-2">
          <MagneticButton strength={12}>
            <Link
              to="/contact"
              className="btn-shimmer inline-flex items-center gap-2 px-7 py-3.5 text-base font-semibold text-white bg-brand-blue hover:bg-brand-blue-hover hover:scale-[1.03] active:scale-[0.98] rounded-full shadow-soft-md transition-all"
            >
              <span>Contact Senior Recruiter</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </MagneticButton>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Services;
