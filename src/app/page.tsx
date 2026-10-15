import Banner from "./components/Banner";
import PokemonList from "./components/PokemonList";
import { getPokemonList } from "./lib/api";

export default async function Home() {
  const data = await getPokemonList();

  return (
    <main className="min-h-screen bg-black p-6">
      <Banner />
      <PokemonList pokemons={data.results} />
    </main>
  );
}