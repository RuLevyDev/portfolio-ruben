import React from "react";

export function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-white/20 bg-white/60 p-6 shadow-[0_8px_30px_rgb(0,0,0,0.06)] backdrop-blur transition hover:shadow-lg dark:bg-white/5">
      {children}
    </div>
  );
}

export default Card;