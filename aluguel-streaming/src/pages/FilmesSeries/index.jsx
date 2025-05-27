import { useEffect, useState } from "react";
import Button from "../../components/Button";
import Catalogo from "../../components/Catalogo";
import Main from "../../components/Main";
import Title from "../../components/Title";
import { API } from "/src/services/api.js"



const FilmesSeries = () => {
    const [listaFilmesSeries, setListaFilmesSeries] = useState([]);

    const deleteFilmesSeries = async (id) => {
        await API.delete(`/filmes/&{id}`)
        setListaFilmesSeries(prev =>prev.filter(item => item.id !== id));
    }

    useEffect(() => {
        API.get("/filmesseries").then(res => setListaFilmesSeries(res.data))
    })
    
    return (
        <Main>
            <div className="flex justify-between">
                <Title titulo=" filmesseries" />
                <Button />
            </div>
            <Catalogo
            lista={listaFilmesSeries}
            onDelete={deleteFilmesSeries}
            />
        </Main>
    );
}

export default FilmesSeries;