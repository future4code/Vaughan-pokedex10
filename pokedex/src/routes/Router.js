import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/homePage/HomePage.js";
import PokedexPage from "../pages/pokedexPage/PokedexPage.js";
import PokemonDetailsPage from "../pages/pokemonDetailsPage/PokemonDetailsPage.js"
import ErrorPage from "../pages/errorPage/ErrorPage.js"

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
		        <Route path="/pokedex" element={<PokedexPage />} />
		        <Route path="/pokemon/:id" element={<PokemonDetailsPage/>} />
		        <Route path="*" element={<ErrorPage />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;