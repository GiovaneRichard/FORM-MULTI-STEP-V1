import { Link } from "react-router-dom";
import { Containe } from "./styled";

export const Home = () => {
    return (
        <Containe>
            <h1>Tela de Boas Vindas!</h1>
            <Link to={'/step1'}>Iniciar Cadastro</Link>
        </Containe>
    );
}