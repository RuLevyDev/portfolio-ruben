import React from "react";

export function Badge({ text }: { text: string }) {
  return (
    <span
      className="inline-flex items-center rounded-full
                 border px-3 py-1 text-sm font-medium
                 border-gray-200 bg-gray-100 text-gray-800
                 hover:bg-gray-200
                 dark:border-white/10 dark:bg-white/10 dark:text-gray-100 dark:hover:bg-white/15"
    >
      {text}
    </span>
  );
}

export default Badge;