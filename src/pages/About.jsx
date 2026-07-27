import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Users, Target, Shield, HeartHandshake, Zap, ArrowRight, Award, CheckCircle } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import AnimatedCard from '../components/AnimatedCard';

export const About = () => {
  const values = [
    {
      title: 'Integrity & Transparency',
      desc: 'We operate with absolute honesty in candidate representations, compensation benchmarks, and recruitment timelines. Clear communication at every step.',
      icon: Shield,
    },
    {
      title: 'Precision Sourcing',
      desc: 'We don’t send hundreds of unqualified resumes. We deliver targeted, pre-screened professionals who meet every technical and cultural requirement.',
      icon: Target,
    },
    {
      title: 'Candidate Care',
      desc: 'Candidates are not numbers to us. We mentor, prepare, and champion every candidate we work with, creating positive recruitment experiences.',
      icon: HeartHandshake,
    },
    {
      title: 'Agility & Execution',
      desc: 'In today’s fast-moving talent market, speed matters. Our streamlined sourcing engine delivers shortlists in days, not weeks.',
      icon: Zap,
    },
  ];

  return (
    <div className="space-y-20 pb-16">

      {/* PAGE HEADER */}
      <section className="bg-hero-glow pt-12 pb-16 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="About Legacy IT Solutions"
            title="Your Strategic Recruitment & Staffing Partner"
            subtitle="Bridging top-tier talent with ambitious organizations across the UK and globally with boutique executive-search precision."
          />
        </div>
      </section>

      {/* COMPANY STORY & MISSION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-semibold uppercase tracking-wider text-brand-blue bg-brand-blue/10 px-3 py-1 rounded-full">
              Our Journey & Purpose
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-serif text-brand-navy leading-tight">
              Building Enduring Legacies Through Exceptional Talent.
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              Founded in Luton, UK, Legacy IT Solutions was established with a singular objective: to elevate staffing from a transactional process into an empowering strategic asset for businesses.
            </p>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              Over the years, we have expanded our reach across the United Kingdom and internationally, developing deep specialization in IT, Engineering, Healthcare, Finance, Administration, and Customer Support sectors.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-white border border-slate-100 shadow-soft-sm">
                <p className="text-2xl font-bold font-serif text-brand-navy">UK HQ</p>
                <p className="text-xs text-slate-500">Luton, Bedfordshire</p>
              </div>
              <div className="p-4 rounded-xl bg-white border border-slate-100 shadow-soft-sm">
                <p className="text-2xl font-bold font-serif text-brand-navy">Global Delivery</p>
                <p className="text-xs text-slate-500">Offshore & Nearshore Sourcing</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-soft-lg border border-slate-100 relative space-y-6">
              <div className="w-12 h-12 rounded-2xl bg-brand-blue/10 text-brand-blue flex items-center justify-center">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold font-serif text-brand-navy">Our Mission</h3>
              <p className="text-slate-600 text-base leading-relaxed">
                "To empower businesses by supplying high-performing human capital while providing professionals with transformative career opportunities. We measure our success by the long-term legacy created by the teams we build."
              </p>
              <div className="pt-4 border-t border-slate-100 space-y-2 text-xs font-semibold text-slate-700">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600" />
                  <span>Rigorous technical & compliance screening</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600" />
                  <span>Transparent communication & fee structures</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600" />
                  <span>Post-placement onboarding & retention support</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* THE "EXTENDED TEAM" POSITIONING */}
      <section className="bg-white py-16 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

            <div className="lg:col-span-5">
              <div className="bg-brand-navy text-white rounded-3xl p-8 sm:p-10 shadow-soft-lg space-y-6 relative overflow-hidden">
                <div className="w-12 h-12 rounded-2xl bg-brand-blue/20 text-brand-blue-glow flex items-center justify-center">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold font-serif text-white">
                  The Extended Team Model
                </h3>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  We don't view ourselves as an external vendor. We function as a seamless extension of your internal talent acquisition department.
                </p>
                <div className="pt-2 text-xs text-brand-blue-glow font-semibold tracking-widest uppercase">
                  Dedicated Sourcing & Screening Experts
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-semibold uppercase tracking-wider text-brand-blue bg-brand-blue/10 px-3 py-1 rounded-full">
                Partnership Approach
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold font-serif text-brand-navy leading-tight">
                Dedicated Sourcing Experts Working Solely for Your Growth
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                Our model pairs your hiring managers with dedicated sourcing and screening specialists who thoroughly understand your company culture, technical requirements, and business goals.
              </p>
              <ul className="space-y-3 text-slate-700 text-sm font-medium">
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-brand-blue/10 text-brand-blue flex items-center justify-center shrink-0 mt-0.5">
                    ✓
                  </div>
                  <span><strong>Dedicated Recruiters:</strong> Sourcing specialists who represent your brand to top candidates with professional pride.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-brand-blue/10 text-brand-blue flex items-center justify-center shrink-0 mt-0.5">
                    ✓
                  </div>
                  <span><strong>Candidate Promotion:</strong> Active advocacy for top candidates to ensure higher interview conversion rates.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-brand-blue/10 text-brand-blue flex items-center justify-center shrink-0 mt-0.5">
                    ✓
                  </div>
                  <span><strong>Custom Pipelines:</strong> Building dedicated talent benches ready to deploy as your project demand expands.</span>
                </li>
              </ul>
            </div>

          </div>

        </div>
      </section>

      {/* VISUAL STATEMENT TAGLINE BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-gradient-to-r from-brand-navy via-[#102A56] to-brand-navy rounded-3xl p-12 sm:p-16 text-center text-white shadow-soft-lg space-y-6 overflow-hidden">

          <span className="text-xs font-semibold uppercase tracking-widest text-brand-blue-glow bg-slate-800/80 px-4 py-1.5 rounded-full border border-slate-700">
            Brand Identity
          </span>

          <h2 className="text-4xl sm:text-6xl font-serif font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-brand-blue-glow tracking-tight">
            "People. Solutions. Legacy."
          </h2>

          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto font-sans leading-relaxed">
            Putting people first. Crafting tailored hiring solutions. Building a legacy of excellence for clients and candidates alike.
          </p>

          {/* Decorative orb */}
          <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-brand-blue/20 rounded-full blur-3xl pointer-events-none"></div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <SectionHeader
          badge="Guiding Principles"
          title="Our Core Values"
          subtitle="The standard of excellence that shapes how we screen candidates, partner with clients, and conduct our agency."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {values.map((val, idx) => {
            const IconComponent = val.icon;
            return (
              <AnimatedCard key={idx} delay={idx * 0.1}>
                <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-soft-sm hover:shadow-soft-md transition-all duration-300 flex items-start gap-5">
                  <div className="w-12 h-12 rounded-2xl bg-brand-blue/10 text-brand-blue flex items-center justify-center shrink-0">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold font-serif text-brand-navy">{val.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{val.desc}</p>
                  </div>
                </div>
              </AnimatedCard>
            );
          })}
        </div>
      </section>

      {/* ABOUT CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 pt-6">
        <h3 className="text-2xl sm:text-3xl font-serif font-bold text-brand-navy">
          Ready to Experience the Legacy Difference?
        </h3>
        <div className="flex items-center justify-center gap-4">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 text-base font-semibold text-white bg-brand-blue hover:bg-brand-blue-hover rounded-full shadow-soft-md transition-all"
          >
            <span>Partner With Us</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

    </div>
  );
};

export default About;
