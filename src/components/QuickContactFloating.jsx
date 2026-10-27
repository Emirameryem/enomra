import React, { useState } from 'react';
import { MessageSquare, Phone, X, Sparkles } from 'lucide-react';
import { companyInfo } from '../data/companyData';

export default function QuickContactFloating({ onOpenQuoteModal }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 select-none">
      
      {/* Expanded quick actions bubble */}
      {isOpen && (
        <div className="p-4 rounded-2xl bg-slateDark-900/95 border border-brand-500/30 backdrop-blur-xl shadow-2xl space-y-2.5 w-64 animate-in slide-in-from-bottom duration-200">
          <div className="flex items-center justify-between pb-2 border-b border-white/10">
            <span className="text-xs font-bold text-white flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-brand-400" />
              Hızlı İletişim
            </span>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <a
            href={`https://wa.me/${companyInfo.phoneRaw.replace('+', '')}?text=${encodeURIComponent('Merhaba Azat Bey, web sitenizden ulaşıyorum. Hizmetleriniz hakkında görüşmek istiyorum.')}`}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2.5 p-2.5 rounded-xl bg-emerald-600/20 hover:bg-emerald-600/30 border border-emerald-500/30 text-emerald-400 text-xs font-semibold transition-all"
          >
            <div className="w-7 h-7 rounded-lg bg-emerald-500 text-slateDark-950 flex items-center justify-center font-bold">
              <MessageSquare className="w-4 h-4 fill-current" />
            </div>
            <div>
              <span className="block text-white">WhatsApp Canlı Hat</span>
              <span className="text-[10px] text-emerald-400">Anında Yanıt</span>
            </div>
          </a>

          <a
            href={`tel:${companyInfo.phoneRaw}`}
            className="flex items-center gap-2.5 p-2.5 rounded-xl bg-brand-500/20 hover:bg-brand-500/30 border border-brand-500/30 text-brand-300 text-xs font-semibold transition-all"
          >
            <div className="w-7 h-7 rounded-lg bg-brand-500 text-slateDark-950 flex items-center justify-center font-bold">
              <Phone className="w-4 h-4" />
            </div>
            <div>
              <span className="block text-white">Doğrudan Ara</span>
              <span className="text-[10px] text-brand-400">{companyInfo.phone}</span>
            </div>
          </a>

          <button
            onClick={() => {
              setIsOpen(false);
              onOpenQuoteModal();
            }}
            className="w-full py-2 px-3 rounded-xl bg-slateDark-800 hover:bg-slateDark-750 text-slate-200 border border-white/10 text-xs font-semibold text-center transition-all"
          >
            Ücretsiz Keşif Formu
          </button>
        </div>
      )}

      {/* Main Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative group p-3.5 sm:p-4 rounded-2xl bg-gradient-to-tr from-brand-500 via-brand-400 to-amber-300 text-slateDark-950 font-bold shadow-2xl shadow-brand-500/40 hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-2"
        aria-label="Hızlı İletişim Menüsü"
      >
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500"></span>
        </span>
        
        {isOpen ? (
          <X className="w-6 h-6 stroke-[2.5]" />
        ) : (
          <div className="flex items-center gap-2">
            <MessageSquare className="w-5 h-5 fill-current" />
            <span className="hidden sm:inline text-xs font-extrabold tracking-wide">
              Bize Ulaşın
            </span>
          </div>
        )}
      </button>

    </div>
  );
}
