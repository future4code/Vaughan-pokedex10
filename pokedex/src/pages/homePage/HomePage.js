import React, { useEffect, useState } from "react";
import { URL_BASE } from "../../constants/url";
import PokemonInf from "./Pokemon";
import "./style.css";
import { goToPokedexPage } from "../../routes/coordinator";


export default function HomePage() {

  

  const [allPokemons, setAllPokemons] = useState([])
  const [loadMore, setLoadMore] = useState(`${URL_BASE}`)

  const getAllPokemons = async () => {
    const res = await fetch(loadMore)
    const data = await res.json()

    setLoadMore(data.next)

    function createPokemonObject(result) {
      result.forEach(async (pokemon) => {
        const res = await fetch(`${URL_BASE}/${pokemon.name}`)
        const data = await res.json()

        setAllPokemons(currentList => [...currentList, data])
      })
    }
    
    createPokemonObject(data.results)
  }

  useEffect(() => { getAllPokemons() }, [])

  return (
    
    <header>
      <h3>Pokemon</h3>
      <div className="button-pokedex">
      <button  onClick={()=> goToPokedexPage(navigator)}>Pokedex </button>
      </div>
    <div className="app-container">
      <div className="pokemon-container">

        <div className="all-containers">
          {allPokemons
          .sort((currentPokemon, nextPokemon) => {
            return currentPokemon.id - nextPokemon.id
          })
          .map((pokemon, index) =>
            <PokemonInf
              id={pokemon.id}
              name={pokemon.name}
              image={pokemon.sprites.other.dream_world.front_default}
              type={pokemon.types[0].type.name}
              key={index}
            />
          )}
        </div>

       
      </div>
      
    </div>
    </header>
  )
}