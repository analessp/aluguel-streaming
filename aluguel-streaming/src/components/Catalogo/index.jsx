import Card from "../Card";

const Catalogo = ({ lista, onDelete }) => {
    return (
        <ul className="flex gap-8">
            {lista.map(item => (
                <Card key={item.id} item={item} onDelete={onDelete} />
            ))}
        </ul>
    );
}

export default Catalogo;