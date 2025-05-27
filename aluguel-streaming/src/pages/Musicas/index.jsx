import Button from "../../components/Button";
import Catalogo from "../../components/Catalogo";
import Main from "../../components/Main";
import Title from "../../components/Title";
import { API } from "/src/services/api.js"
import { useEffect, useState } from "react";

const Musicas = () => {
    const [listaMusicas, setListaMusicas] = useState([]);

    useEffect(() {
        API.get("/jogos").then(res => setListaMusicas(res.data))
    }, [])

    const deleteMusicas = async (id) => {
        await API.delete(`/jogos/$(id)`)
        setListaMusicas(prev => prev.filter(item => item.id !== id))
    }

    return (
        <Main>
        <div className="flex justify-between">
        <Title titulo=" jogos" />
        <Button />
        </div>
        <Catalogo
        lista={listaMusicas}
        onDelete={deleteMusicas}
        />
        </Main>
    );
}

export default Musicas;