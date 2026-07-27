import React from 'react';
import { MessageSquare } from 'lucide-react';

export const FloatingWhatsApp = () => {
  const whatsappUrl = "https://wa.me/447466929441?text=Hi%2C%20I%27d%20like%20to%20know%20more%20about%20your%20staffing%20services.";

  return (
    <aside className="fixed bottom-6 right-6 z-50 flex items-center group">
      {/* Tooltip badge on hover */}
      <span className="hidden sm:inline-block mr-3 px-3 py-1.5 bg-brand-navy text-white text-xs font-semibold rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-200 translate-x-2 group-hover:translate-x-0">
        Chat with our recruitment team
      </span>

      {/* Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Legacy IT Solutions on WhatsApp"
        className="relative flex items-center justify-center w-14 h-14 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-emerald-300"
      >
        {/* Pulse ring background */}
        <span className="absolute inset-0 rounded-full bg-emerald-400 opacity-75 animate-ping -z-10"></span>
        <MessageSquare className="w-7 h-7 fill-white text-emerald-500" />
      </a>
    </aside>
  );
};

export default FloatingWhatsApp;
