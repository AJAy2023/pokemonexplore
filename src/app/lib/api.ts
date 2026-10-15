import { PokemonListResponse, PokemonDetail } from "../types/pokemon";

export async function getPokemonList(): Promise<PokemonListResponse> {
  
  const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
  if (!res.ok) throw new Error("Failed to fetch Pokemon list");
  return res.json();
}

export async function getPokemonDetail(id: string): Promise<PokemonDetail> {
 
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  if (!res.ok) throw new Error("Failed to fetch Pokemon detail");
  return res.json();
}