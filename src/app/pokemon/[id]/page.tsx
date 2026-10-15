import Image from "next/image";
import Link from "next/link";
import { getPokemonDetail } from "../../lib/api";

export default async function PokemonDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const pokemon = await getPokemonDetail(id);

  return (
    <main className="min-h-screen bg-black p-6">
      <Link href="/" className="text-yellow-400 hover:underline">
        ← Back
      </Link>

      <div className="max-w-xl mx-auto bg-neutral-900 border border-neutral-700 rounded-xl shadow-md p-6 mt-4 text-center">
        <Image
          src={pokemon.sprites.other["official-artwork"].front_default}
          alt={pokemon.name}
          width={200}
          height={200}
          className="mx-auto"
        />
        <h1 className="text-2xl font-bold capitalize mt-2 text-white">
          #{pokemon.id} {pokemon.name}
        </h1>

        <div className="flex justify-center gap-2 mt-2">
          {pokemon.types.map((t) => (
            <span
              key={t.type.name}
              className="px-3 py-1 bg-yellow-400 text-black rounded-full text-sm capitalize font-semibold"
            >
              {t.type.name}
            </span>
          ))}
        </div>

        <div className="flex justify-center gap-8 mt-4 text-white">
          <div>
            <p className="text-sm text-neutral-400">Height</p>
            <p className="font-semibold">{pokemon.height / 10} m</p>
          </div>
          <div>
            <p className="text-sm text-neutral-400">Weight</p>
            <p className="font-semibold">{pokemon.weight / 10} kg</p>
          </div>
        </div>

        <h2 className="text-lg font-semibold mt-6 mb-2 text-white">Abilities</h2>
        <p className="capitalize text-neutral-300">
          {pokemon.abilities.map((a) => a.ability.name).join(", ")}
        </p>

        <h2 className="text-lg font-semibold mt-6 mb-2 text-white">Stats</h2>
        <div className="space-y-2 text-left">
          {pokemon.stats.map((s) => (
            <div key={s.stat.name}>
              <p className="capitalize text-sm text-neutral-300">
                {s.stat.name}: {s.base_stat}
              </p>
              <div className="w-full bg-neutral-700 rounded h-2">
                <div
                  className="bg-yellow-400 h-2 rounded"
                  style={{ width: `${Math.min(s.base_stat, 100)}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        <h2 className="text-lg font-semibold mt-6 mb-2 text-white">Moves</h2>
        <p className="capitalize text-sm text-neutral-400">
          {pokemon.moves.slice(0, 20).map((m) => m.move.name).join(", ")}
        </p>
      </div>
    </main>
  );
}