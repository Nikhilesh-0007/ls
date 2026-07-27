import React, { useState } from 'react';
import {
  UploadCloud,
  CheckCircle,
  FileText,
  User,
  Mail,
  Phone,
  Briefcase,
  MessageSquare,
  Sparkles,
  ShieldCheck,
  Zap,
  ArrowRight,
  AlertCircle
} from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import AnimatedCard from '../components/AnimatedCard';

export const Careers = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    industry: 'IT & Technology',
    desiredRole: '',
    coverMessage: '',
  });

  const [selectedFile, setSelectedFile] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [dragOver, setDragOver] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragOver(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setSelectedFile(e.dataTransfer.files[0]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate backend endpoint submission / mailto action
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
    }, 1200);
  };

  const whyWorkWithUs = [
    {
      title: 'Personalized Career Mentorship',
      desc: 'We prepare you for interviews, optimize your CV representation, and match you with organizations aligned with your career growth ambitions.',
      icon: Sparkles
    },
    {
      title: 'Exclusive Unadvertised Roles',
      desc: 'Gain direct access to high-impact positions across the UK & internationally that are filled exclusively through Legacy IT Solutions.',
      icon: ShieldCheck
    },
    {
      title: 'Transparent Communication',
      desc: 'No ghosting. You receive prompt recruiter feedback at every stage, salary negotiation advice, and onboarding guidance.',
      icon: Zap
    }
  ];

  return (
    <div className="space-y-20 pb-16">

      {/* PAGE HEADER */}
      <section className="bg-hero-glow pt-12 pb-16 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Candidate Gateway"
            title="Careers & CV Submission"
            subtitle="Register your interest for active and upcoming roles with top employers across the UK and international markets."
          />
        </div>
      </section>

      {/* FORM & INTRO SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* Left Intro Column */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-semibold uppercase tracking-wider text-brand-blue bg-brand-blue/10 px-3 py-1 rounded-full">
              Join Our Talent Network
            </span>

            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-brand-navy leading-tight">
              Unlock Your Next Great Career Move
            </h2>

            <p className="text-slate-600 text-base leading-relaxed">
              Whether you are actively seeking a new role in <strong className="text-brand-navy font-semibold">IT, Engineering, Healthcare, Finance, Administration, or Customer Support</strong>, or exploring future executive opportunities, submitting your CV connects you directly to our lead recruitment consultants.
            </p>

            {/* Submissions routing note */}
            <div className="p-4 rounded-2xl bg-amber-50/80 border border-amber-200/80 text-amber-900 text-xs space-y-1">
              <p className="font-semibold flex items-center gap-1.5 text-amber-950">
                <AlertCircle className="w-4 h-4 text-amber-700 shrink-0" />
                <span>Direct Recruitment Team Routing</span>
              </p>
              <p className="text-amber-800 leading-relaxed">
                All submitted profiles are securely reviewed by our Luton UK recruitment team. Form responses route directly to <a href="mailto:Legacyitsoulutions@outlook.com" className="underline font-medium">Legacyitsoulutions@outlook.com</a>.
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-white border border-slate-100 shadow-soft-sm">
                <p className="text-xl font-serif font-bold text-brand-navy">Fast Response</p>
                <p className="text-xs text-slate-500">24-48h Recruiter Review</p>
              </div>
              <div className="p-4 rounded-xl bg-white border border-slate-100 shadow-soft-sm">
                <p className="text-xl font-serif font-bold text-brand-navy">100% Free</p>
                <p className="text-xs text-slate-500">Candidate Placement Services</p>
              </div>
            </div>

          </div>

          {/* Right Form Column */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-100 shadow-soft-lg">

              {submitSuccess ? (
                <div className="text-center py-12 space-y-4 animate-in fade-in zoom-in-95 duration-300">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold font-serif text-brand-navy">CV Submitted Successfully!</h3>
                  <p className="text-slate-600 text-sm max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-brand-navy">{formData.fullName}</strong>. Your profile has been queued for our senior recruitment team. We will review your qualifications and contact you shortly regarding matching opportunities.
                  </p>
                  <div className="pt-4">
                    <button
                      onClick={() => {
                        setSubmitSuccess(false);
                        setSelectedFile(null);
                        setFormData({
                          fullName: '',
                          email: '',
                          phone: '',
                          industry: 'IT & Technology',
                          desiredRole: '',
                          coverMessage: '',
                        });
                      }}
                      className="px-6 py-2.5 bg-brand-navy text-white text-xs font-semibold rounded-full hover:bg-slate-800 transition-colors"
                    >
                      Submit Another CV
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">

                  <div className="space-y-1 border-b border-slate-100 pb-4">
                    <h3 className="text-xl font-bold font-serif text-brand-navy">Submit Your CV</h3>
                    <p className="text-xs text-slate-500">Fill in your details below to register in our talent database.</p>
                  </div>

                  {/* Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-700 flex items-center gap-1">
                        <User className="w-3.5 h-3.5 text-brand-blue" />
                        <span>Full Name *</span>
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        required
                        value={formData.fullName}
                        onChange={handleInputChange}
                        placeholder="e.g. Sarah Jenkins"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue text-sm text-slate-800"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-700 flex items-center gap-1">
                        <Mail className="w-3.5 h-3.5 text-brand-blue" />
                        <span>Email Address *</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="sarah@example.com"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue text-sm text-slate-800"
                      />
                    </div>
                  </div>

                  {/* Phone & Industry */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-700 flex items-center gap-1">
                        <Phone className="w-3.5 h-3.5 text-brand-blue" />
                        <span>Phone Number *</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+44 7123 456789"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue text-sm text-slate-800"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-700 flex items-center gap-1">
                        <Briefcase className="w-3.5 h-3.5 text-brand-blue" />
                        <span>Desired Sector / Industry *</span>
                      </label>
                      <select
                        name="industry"
                        value={formData.industry}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue text-sm text-slate-800 bg-white"
                      >
                        <option value="IT & Technology">IT & Technology</option>
                        <option value="Engineering">Engineering</option>
                        <option value="Healthcare">Healthcare</option>
                        <option value="Finance & Accounting">Finance & Accounting</option>
                        <option value="Administration">Administration</option>
                        <option value="Customer Service">Customer Service</option>
                        <option value="Other Specialist Roles">Other Specialist Roles</option>
                      </select>
                    </div>
                  </div>

                  {/* Desired Role */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-700">
                      Target Job Title / Desired Role
                    </label>
                    <input
                      type="text"
                      name="desiredRole"
                      value={formData.desiredRole}
                      onChange={handleInputChange}
                      placeholder="e.g. Senior DevOps Engineer / HR Manager"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue text-sm text-slate-800"
                    />
                  </div>

                  {/* CV File Upload Dropzone */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-700 flex items-center gap-1">
                      <FileText className="w-3.5 h-3.5 text-brand-blue" />
                      <span>Upload CV Document (PDF, DOCX, DOC) *</span>
                    </label>

                    <div
                      onDragOver={(e) => {
                        e.preventDefault();
                        setDragOver(true);
                      }}
                      onDragLeave={() => setDragOver(false)}
                      onDrop={handleDrop}
                      className={`border-2 border-dashed rounded-2xl p-6 text-center transition-all cursor-pointer ${dragOver ? 'border-brand-blue bg-brand-blue/5' : 'border-slate-200 hover:border-brand-blue/50 bg-brand-bg'
                        }`}
                    >
                      <input
                        type="file"
                        id="cvUpload"
                        accept=".pdf,.docx,.doc"
                        onChange={handleFileChange}
                        className="hidden"
                      />
                      <label htmlFor="cvUpload" className="cursor-pointer space-y-2 block">
                        <UploadCloud className="w-8 h-8 text-brand-blue mx-auto" />
                        {selectedFile ? (
                          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-50 text-emerald-700 text-xs font-semibold border border-emerald-200">
                            <FileText className="w-4 h-4 text-emerald-600" />
                            <span>{selectedFile.name} ({(selectedFile.size / 1024).toFixed(1)} KB)</span>
                          </div>
                        ) : (
                          <div>
                            <p className="text-sm font-semibold text-brand-navy">Click to browse or drag & drop CV file here</p>
                            <p className="text-xs text-slate-400">PDF or Word documents up to 10MB</p>
                          </div>
                        )}
                      </label>
                    </div>
                  </div>

                  {/* Optional Cover Message */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-700 flex items-center gap-1">
                      <MessageSquare className="w-3.5 h-3.5 text-brand-blue" />
                      <span>Optional Cover Message / Career Summary</span>
                    </label>
                    <textarea
                      name="coverMessage"
                      rows={3}
                      value={formData.coverMessage}
                      onChange={handleInputChange}
                      placeholder="Briefly state your key skills, salary expectations, or notice period..."
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue text-sm text-slate-800"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 text-base font-semibold text-white bg-brand-blue hover:bg-brand-blue-hover rounded-xl shadow-soft-md hover:shadow-glow-blue transition-all duration-200 flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <span>Submitting CV...</span>
                    ) : (
                      <>
                        <span>Register & Submit CV</span>
                        <ArrowRight className="w-5 h-5" />
                      </>
                    )}
                  </button>

                </form>
              )}

            </div>
          </div>

        </div>
      </section>

      {/* WHY WORK WITH US */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <SectionHeader
          badge="Candidate Advantage"
          title="Why Candidate Partners Trust Us"
          subtitle="We provide transparent, supportive recruitment representation every step of your job search."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {whyWorkWithUs.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <AnimatedCard key={idx} delay={idx * 0.1}>
                <div className="bg-white rounded-2xl p-7 border border-slate-100 shadow-soft-sm space-y-4 h-full">
                  <div className="w-12 h-12 rounded-xl bg-brand-blue/10 text-brand-blue flex items-center justify-center">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold font-serif text-brand-navy">{item.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </AnimatedCard>
            );
          })}
        </div>
      </section>

    </div>
  );
};

export default Careers;
