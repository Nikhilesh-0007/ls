import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, ArrowUpRight, Linkedin, Twitter, Facebook, Globe } from 'lucide-react';
import Logo from './Logo';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-navy text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-slate-800">
          
          {/* Column 1: Brand Info & Tagline (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <Link to="/" className="inline-block">
              <Logo className="h-12" variant="light-text" />
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Connecting businesses with exceptional talent. Premier UK staffing & global executive search agency serving IT, Engineering, Healthcare, Finance, and Enterprise Operations.
            </p>
            
            {/* Visual Statement Tagline */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800/80 border border-slate-700 text-xs font-semibold text-brand-blue-glow">
              <span className="w-2 h-2 rounded-full bg-brand-blue animate-pulse"></span>
              <span>People. Solutions. Legacy.</span>
            </div>

            {/* Social Links Placeholder */}
            <div className="flex items-center space-x-3 pt-2">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-slate-800 text-slate-300 hover:text-white hover:bg-brand-blue transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-slate-800 text-slate-300 hover:text-white hover:bg-brand-blue transition-colors" aria-label="Twitter">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-slate-800 text-slate-300 hover:text-white hover:bg-brand-blue transition-colors" aria-label="Facebook">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="mailto:Legacyitsoulutions@outlook.com" className="p-2 rounded-full bg-slate-800 text-slate-300 hover:text-white hover:bg-brand-blue transition-colors" aria-label="Email">
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Links (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider">Navigation</h4>
            <ul className="space-y-2.5 text-sm">
              {['Home', 'About Us', 'Services & Industries', 'Careers / Submit CV', 'Contact'].map((name, idx) => {
                const paths = ['/', '/about', '/services', '/careers', '/contact'];
                return (
                  <li key={idx}>
                    <Link to={paths[idx]} className="hover:text-white hover:translate-x-1 inline-block transition-transform duration-200">
                      {name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Column 3: UK & India Offices (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider">Our Offices</h4>
            
            {/* UK Office */}
            <div className="space-y-1 text-sm">
              <p className="text-white font-medium flex items-center gap-1.5">
                <Globe className="w-4 h-4 text-brand-blue-glow shrink-0" />
                <span>United Kingdom (HQ)</span>
              </p>
              <p className="text-slate-400 pl-5 text-xs">
                70 Arthur Street, Luton, LU1 3SG
              </p>
            </div>

            {/* India Office */}
            <div className="space-y-1 text-sm pt-2">
              <p className="text-white font-medium flex items-center gap-1.5">
                <Globe className="w-4 h-4 text-brand-blue-glow shrink-0" />
                <span>India Office</span>
              </p>
              <p className="text-slate-400 pl-5 text-xs">
                Manikanta Nilayam, Bustand Backside, Nandivelugu Road, Guntur – 522001
              </p>
            </div>
          </div>

          {/* Column 4: Contact & Operating Hours (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider">Contact & Hours</h4>
            
            <div className="space-y-3 text-sm">
              <a href="tel:+447466929441" className="flex items-center gap-2.5 text-slate-300 hover:text-white transition-colors group">
                <Phone className="w-4 h-4 text-brand-blue-glow shrink-0" />
                <span>+44 7466 929441</span>
              </a>

              <a href="mailto:Legacyitsoulutions@outlook.com" className="flex items-center gap-2.5 text-slate-300 hover:text-white transition-colors group">
                <Mail className="w-4 h-4 text-brand-blue-glow shrink-0" />
                <span className="text-xs break-all">Legacyitsoulutions@outlook.com</span>
              </a>

              <div className="flex items-start gap-2.5 text-xs text-slate-400 pt-1">
                <Clock className="w-4 h-4 text-brand-blue-glow shrink-0 mt-0.5" />
                <div>
                  <p className="text-slate-200 font-medium">Mon – Fri: 9:00 AM – 6:00 PM BST</p>
                  <p className="text-slate-400">Sat – Sun: Closed</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Disclaimer */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {currentYear} Legacy IT Solutions. All rights reserved. Registered Staffing & Recruitment Agency in the UK.</p>
          <div className="flex items-center space-x-6">
            <Link to="/contact" className="hover:text-slate-400 transition-colors">Privacy Policy</Link>
            <Link to="/contact" className="hover:text-slate-400 transition-colors">Terms of Business</Link>
            <Link to="/careers" className="hover:text-slate-400 transition-colors">Candidate Terms</Link>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
