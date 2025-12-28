'use client';

import { useState } from "react";

type CopyButtonProps = {
  text: string;
};

export function CopyButton({ text }: CopyButtonProps) {
  const [status, setStatus] = useState<"idle" | "copied" | "error">("idle");

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setStatus("copied");
      setTimeout(() => setStatus("idle"), 2500);
    } catch (error) {
      console.error("Unable to copy poem", error);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 2500);
    }
  };

  const label =
    status === "copied"
      ? "कॉपी हो गया ✨"
      : status === "error"
        ? "फिर कोशिश करें"
        : "पूरी शायरी कॉपी करें";

  return (
    <button
      onClick={copy}
      className="rounded-full border border-white/40 bg-white/10 px-6 py-2 text-sm font-medium text-white shadow-lg shadow-rose-500/20 backdrop-blur transition hover:bg-white/20 hover:shadow-rose-500/30"
    >
      {label}
    </button>
  );
}
