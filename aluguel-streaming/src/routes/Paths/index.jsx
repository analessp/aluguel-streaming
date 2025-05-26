import { BrowserRouter, Route, Routes } from "react-router-dom";
import SiteLayout from "../../SiteLayout";
import Home from "../../pages/Home";
import NotFound from "../../pages/NotFound";
import FilmesSeries from "../../pages/FilmesSeries";
import Musicas from "../../pages/Musicas";

const Paths = () => {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<SiteLayout />}>
            <Route index element={<Home />} />
            <Route path="/filmesseries" element={<FilmesSeries />} />
            <Route path="/musicas" element={<Musicas />} />
            </Route>
            <Route path="*" element={<NotFound />} />
        </Routes>
        </BrowserRouter>
    );
}

export default Paths;