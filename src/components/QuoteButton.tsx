"use client";

import { useState } from "react";
import QuoteModal from "./QuoteModal";

export default function QuoteButton({ className }: { className?: string }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className={`btn-quote bg-amber-400 hover:bg-amber-500 text-slate-900 font-bold py-3 px-8 rounded-full transition-all shadow-lg uppercase tracking-wider text-sm ${className ?? ""}`}
      >
        Get My Quote
      </button>
      {open && <QuoteModal onClose={() => setOpen(false)} />}
    </>
  );
}
