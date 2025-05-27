const Title = ({ titulo }) => {
    return (
        <h1 className="text-4xl mb-12">Sessão de <span className="font-bold text-(--primary-color">{titulo}</span></h1>
    );
}

export default Title;