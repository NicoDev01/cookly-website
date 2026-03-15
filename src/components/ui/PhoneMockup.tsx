import { ReactNode } from 'react';

export function PhoneMockup({ children, className = '' }: { children: ReactNode, className?: string }) {
  return (
    <div className={`relative w-[320px] h-[650px] bg-slate-900 rounded-[3rem] border-[10px] border-slate-900 shadow-2xl overflow-hidden shrink-0 ${className}`}>
      {/* Screen Content */}
      <div className="w-full h-full bg-white overflow-hidden relative rounded-[2.25rem]">
        {children}
      </div>
      
      {/* Glare/Reflection */}
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/20 pointer-events-none z-40"></div>
    </div>
  );
}
