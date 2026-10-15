"use client";

import { useState } from "react";
import { PokemonListItem } from "../types/pokemon";
import PokemonCard from "./PokemonCard";
import SearchBar from "./SearchBar";

interface Props {
  pokemons: PokemonListItem[];
}

function getIdFromUrl(url: string): number {
  const parts = url.split("/").filter(Boolean);
  return Number(parts[parts.length - 1]);
}

const PAGE_SIZE = 10;

export default function PokemonList({ pokemons }: Props) {
  const [search, setSearch] = useState("");
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  const filtered = pokemons.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  const visible = filtered.slice(0, visibleCount);
  const hasMore = visibleCount < filtered.length;

  return (
    <div>
      <SearchBar
        value={search}
        onChange={(val) => {
          setSearch(val);
          setVisibleCount(PAGE_SIZE); // reset to 10 whenever search changes
        }}
      />

      {filtered.length === 0 ? (
        <p className="text-center text-gray-500">No Pokemon found.</p>
      ) : (
        <>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {visible.map((p) => (
              <PokemonCard key={p.name} name={p.name} id={getIdFromUrl(p.url)} />
            ))}
          </div>

          {hasMore && (
            <div className="flex justify-center mt-6">
              <button
                onClick={() => setVisibleCount((prev) => prev + PAGE_SIZE)}
                className="px-6 py-2 bg-yellow-400 text-black font-semibold rounded-full hover:bg-yellow-300 transition-colors"
              >
                Load More
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
}