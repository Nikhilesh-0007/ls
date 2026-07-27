import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageSquare,
  Send,
  CheckCircle,
  Globe,
  User,
  Building,
  ArrowRight
} from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import AnimatedCard from '../components/AnimatedCard';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'Staffing Enquiry',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const whatsappUrl = "https://wa.me/447466929441?text=Hi%2C%20I%27d%20like%20to%20know%20more%20about%20your%20staffing%20services.";

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
    }, 1000);
  };

  return (
    <div className="space-y-20 pb-16">

      {/* PAGE HEADER */}
      <section className="bg-hero-glow pt-12 pb-16 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Get In Touch"
            title="Contact Legacy IT Solutions"
            subtitle="Connect with our staffing specialists for employer requirements, candidate inquiries, or global partnership discussions."
          />
        </div>
      </section>

      {/* CONTACT INFORMATION & FORM SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* Left Column: Office Details & Operating Hours */}
          <div className="lg:col-span-5 space-y-8">

            <div className="space-y-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-brand-blue bg-brand-blue/10 px-3 py-1 rounded-full">
                Global Operations
              </span>
              <h2 className="text-3xl font-serif font-bold text-brand-navy">
                Our Office Locations
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                Headquartered in Bedfordshire, UK, with dual delivery capabilities serving international clients and talent networks.
              </p>
            </div>

            {/* UK HQ Card */}
            <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-soft-sm space-y-3">
              <div className="flex items-center gap-2.5 text-brand-navy font-bold font-serif text-lg">
                <Globe className="w-5 h-5 text-brand-blue" />
                <span>United Kingdom Headquarters</span>
              </div>
              <div className="space-y-1.5 text-sm text-slate-600 pl-7">
                <p className="font-semibold text-slate-800">Arthur Street, Luton, LU1 3SG</p>
                <p>Bedfordshire, United Kingdom</p>
              </div>
            </div>

            {/* India Office Card */}
            <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-soft-sm space-y-3">
              <div className="flex items-center gap-2.5 text-brand-navy font-bold font-serif text-lg">
                <Globe className="w-5 h-5 text-brand-blue" />
                <span>India Delivery Center</span>
              </div>
              <div className="space-y-1.5 text-sm text-slate-600 pl-7">
                <p className="font-semibold text-slate-800">Manikanta Nilayam, Bustand Backside</p>
                <p>Nandivelugu Road, Guntur – 522001, Andhra Pradesh, India</p>
              </div>
            </div>

            {/* Contact Phone & Email */}
            <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-soft-sm space-y-4">
  <h4 className="font-semibold text-brand-navy text-sm uppercase tracking-wider">
    Direct Contacts
  </h4>

  {/* UK Phone */}
  <a
    href="tel:+447466929441"
    className="flex items-center gap-3 text-slate-700 hover:text-brand-blue transition-colors group"
  >
    <div className="w-10 h-10 rounded-xl bg-brand-bg group-hover:bg-brand-blue/10 text-brand-blue flex items-center justify-center">
      <Phone className="w-5 h-5" />
    </div>
    <div>
      <p className="text-xs text-slate-400 font-semibold">UK Phone / WhatsApp</p>
      <p className="text-base font-bold text-brand-navy">+44 7466 929441</p>
    </div>
  </a>

  {/* India Phone */}
  <a
    href="tel:+919052939313"
    className="flex items-center gap-3 text-slate-700 hover:text-brand-blue transition-colors group"
  >
    <div className="w-10 h-10 rounded-xl bg-brand-bg group-hover:bg-brand-blue/10 text-brand-blue flex items-center justify-center">
      <Phone className="w-5 h-5" />
    </div>
    <div>
      <p className="text-xs text-slate-400 font-semibold">India Phone / WhatsApp</p>
      <p className="text-base font-bold text-brand-navy">+91 90529 39313</p>
    </div>
  </a>

  {/* Email */}
  <a
    href="mailto:hr@legacyituk.in"
    className="flex items-center gap-3 text-slate-700 hover:text-brand-blue transition-colors group"
  >
    <div className="w-10 h-10 rounded-xl bg-brand-bg group-hover:bg-brand-blue/10 text-brand-blue flex items-center justify-center">
      <Mail className="w-5 h-5" />
    </div>
    <div>
      <p className="text-xs text-slate-400 font-semibold">Email</p>
      <p className="text-sm font-semibold text-brand-navy break-all">
        hr@legacyituk.in
      </p>
    </div>
  </a>
</div>

            {/* Business Hours */}
            <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-soft-sm space-y-3">
              <div className="flex items-center gap-2 text-brand-navy font-bold text-sm">
                <Clock className="w-4 h-4 text-brand-blue" />
                <span>Business Hours (BST)</span>
              </div>
              <div className="text-xs space-y-1 text-slate-600 pl-6">
                <div className="flex justify-between font-medium">
                  <span>Monday – Friday:</span>
                  <span className="text-slate-900 font-semibold">9:00 AM – 6:00 PM BST</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday – Sunday:</span>
                  <span className="text-rose-600 font-semibold">Closed</span>
                </div>
              </div>
            </div>

            {/* Quick WhatsApp Trigger */}
            <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900 space-y-3">
              <div className="flex items-center gap-2 font-bold text-sm text-emerald-950">
                <MessageSquare className="w-5 h-5 text-emerald-600" />
                <span>Instant Messenger Support</span>
              </div>
              <p className="text-xs text-emerald-800 leading-relaxed">
                Need immediate response regarding an urgent vacancy or candidate status? Chat directly with our consultants via WhatsApp.
              </p>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-full shadow-sm transition-colors"
              >
                <span>Chat on WhatsApp</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-100 shadow-soft-lg space-y-6">

              <div className="space-y-1 border-b border-slate-100 pb-4">
                <h3 className="text-2xl font-bold font-serif text-brand-navy">Send Us a Message</h3>
                <p className="text-xs text-slate-500">Complete the form below and a senior recruiter will respond within 24 business hours.</p>
              </div>

              {submitSuccess ? (
                <div className="text-center py-12 space-y-4 animate-in fade-in zoom-in-95 duration-300">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold font-serif text-brand-navy">Message Delivered!</h3>
                  <p className="text-slate-600 text-sm max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-brand-navy">{formData.name}</strong>. Your enquiry has been routed to our recruitment leadership team at <span className="text-brand-blue font-medium">Legacyitsoulutions@outlook.com</span>. We will reach out to you shortly.
                  </p>
                  <div className="pt-4">
                    <button
                      onClick={() => {
                        setSubmitSuccess(false);
                        setFormData({ name: '', email: '', phone: '', subject: 'Staffing Enquiry', message: '' });
                      }}
                      className="px-6 py-2.5 bg-brand-navy text-white text-xs font-semibold rounded-full hover:bg-slate-800 transition-colors"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-700 flex items-center gap-1">
                        <User className="w-3.5 h-3.5 text-brand-blue" />
                        <span>Your Name *</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="John Smith"
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
                        placeholder="john@company.com"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue text-sm text-slate-800"
                      />
                    </div>
                  </div>

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
                        placeholder="+44 7987 654321"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue text-sm text-slate-800"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-700 flex items-center gap-1">
                        <Building className="w-3.5 h-3.5 text-brand-blue" />
                        <span>Enquiry Type *</span>
                      </label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue text-sm text-slate-800 bg-white"
                      >
                        <option value="Staffing Enquiry">Employer Staffing Request</option>
                        <option value="Candidate Opportunities">Candidate Role Enquiry</option>
                        <option value="Executive Search">Senior Executive Placement</option>
                        <option value="General Partnership">Global Partnership / Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-700 flex items-center gap-1">
                      <MessageSquare className="w-3.5 h-3.5 text-brand-blue" />
                      <span>Message / Requirement Details *</span>
                    </label>
                    <textarea
                      name="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Please describe your staffing requirements, target start dates, or candidate inquiry..."
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue text-sm text-slate-800"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-shimmer w-full py-3.5 px-6 text-base font-semibold text-white bg-brand-blue hover:bg-brand-blue-hover hover:scale-[1.02] active:scale-[0.98] rounded-xl shadow-soft-md hover:shadow-glow-blue transition-all duration-200 flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <span>Sending Message...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>

                </form>
              )}

            </div>
          </div>

        </div>
      </section>

      {/* EMBEDDED MAP SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <SectionHeader
          badge="Headquarters Location"
          title="Find Us in Luton, UK"
          subtitle="Arthur Street, Luton, LU1 3SG, Bedfordshire"
        />

        <div className="rounded-3xl overflow-hidden shadow-soft-md border border-slate-200 h-[380px] sm:h-[450px] relative bg-slate-100">
          <iframe
            title="Legacy IT Solutions Office Location Map"
            src=https://maps.app.goo.gl/daxsd8FQcKrVeN1K7?g_st=aw
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full grayscale-[20%] contrast-[105%]"
          ></iframe>
        </div>
      </section>

    </div>
  );
};

export default Contact;
