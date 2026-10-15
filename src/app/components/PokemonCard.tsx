import Image from "next/image";
import Link from "next/link";

interface Props {
  name: string;
  id: number;
}

export default function PokemonCard({ name, id }: Props) {
  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;

  return (
    <Link
      href={`/pokemon/${id}`}
      className="flex flex-col items-center bg-neutral-900 border border-neutral-700 rounded-xl shadow-md p-4 hover:scale-105 hover:border-yellow-400 transition-all"
    >
      <Image src={imageUrl} alt={name} width={120} height={120} />
      <p className="mt-2 capitalize font-semibold text-white">
        #{id} {name}
      </p>
      <span className="mt-2 text-xs text-yellow-400">
        View Details →
      </span>
    </Link>
  );
} 