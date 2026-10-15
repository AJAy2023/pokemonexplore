"use client";

import { Search } from "lucide-react";

interface Props {
  value: string;
  onChange: (value: string) => void;
}

export default function SearchBar({ value, onChange }: Props) {
  return (
    <div className="flex items-center w-full max-w-md mx-auto bg-neutral-900 border border-neutral-700 rounded-full px-4 py-3 mb-6 focus-within:ring-2 focus-within:ring-yellow-400">
      <Search className="text-yellow-400 mr-3" size={20} />
      <input
        type="text"
        placeholder="Search Pokemon..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="bg-transparent outline-none text-white placeholder-neutral-500 w-full"
      />
    </div>
  );
}