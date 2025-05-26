import logo from "/src/assets/logo.png"
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <header className="flex gap-12 items-center py-10 px-14 justify-between bg-(--tertiary-color)/50">
                <img
                src={logo}
                alt="Logo da Null Streaming"
                className="w-32 rounded-full"
                />
                <ul className="flex gap-12 text-3x1">
                    <NavLink className="[&.active]:font-bold [&.active]:text-(--secondary-color)" to="/">Home</NavLink>
                    <NavLink className="[&.active]:font-bold [&.active]:text-(--secondary-color)" to="/filmes-series">Filmes e Séries</NavLink>
                    <NavLink className="[&.active]:font-bold [&.active]:text-(--secondary-color)" to="/musicas">Músicas</NavLink>
                </ul>
        </header>
    );
}

export default Header;