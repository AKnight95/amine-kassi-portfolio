// src/app/loading.tsx

export default function Loading() {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-[#020506] text-white">
        <div className="flex flex-col items-center gap-5">
          <div className="relative h-14 w-14">
            <div className="absolute inset-0 rounded-full border border-[#00e6e6]/20" />
  
            <div className="absolute inset-0 animate-spin rounded-full border-2 border-transparent border-t-[#00e6e6] shadow-[0_0_20px_rgba(0,230,230,0.7)]" />
          </div>
  
          <p className="text-xs uppercase tracking-[0.25em] text-white/40">
            Chargement
          </p>
        </div>
      </div>
    );
  }