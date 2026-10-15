# Pokemon Explorer

A responsive Pokemon Explorer web app built with Next.js, TypeScript, and Tailwind CSS, using data from [PokeAPI](https://pokeapi.co/).

## Live Demo

https://pokemonexplore-kappa.vercel.app/

## Features

- **Homepage** — displays a list of Pokemon fetched from PokeAPI
- **Search bar** — filters Pokemon by name in real time
- **Pagination** — loads 10 Pokemon at a time with a "Load More" button
- **Detail page** — dynamic route (`/pokemon/[id]`) showing:
  - Image
  - Type
  - Abilities
  - Stats (with visual bars)
  - Moves
  - Height and weight
- Fully responsive layout (mobile, tablet, desktop)

## Tech Stack

- **Framework:** Next.js (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Icons:** lucide-react
- **Data Source:** [PokeAPI](https://pokeapi.co/api/v2/)

## Getting Started

1. **Clone the repository**
```bash
   git clone https://github.com/AJAy2023/pokemonexplore.git
   cd pokemonexplore
```

2. **Install dependencies**
```bash
   npm install
```

3. **Run the development server**
```bash
   npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.
