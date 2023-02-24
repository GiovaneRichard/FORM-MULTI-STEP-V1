import { ChangeEvent, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Theme } from "../../components/Theme";
import { FormActions, useForm } from "../../contexts/FormContext";
import { Container } from "./styled";

export const FormStep3 = () => {

    const navigate = useNavigate();
    const { state, dispatch } = useForm();

    useEffect(() => {
        if (state.name === '') {
            navigate("/step1");

        } else {
            dispatch({
                type: FormActions.setCurrentStep,
                payload: 3,
            });
        }
    }, []);

    const handleFinalizarCadastro = () => {

        if (state.email !== '' && state.github !== '') {
            // enviar o state para api
            toast.success("Cadastro concluído com sucesso!");
            navigate("/");
        } else {
            toast.warning("Por favor preencha todos os campos.");
        }

    }

    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setEmail,
            payload: e.target.value,
        });
    }

    const handleGithubChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setGithub,
            payload: e.target.value,
        });
    }

    return (
        <Theme>
            <Container>
                <p>Passo {state.currentStep}/3</p>
                <h1>Legal {state.name}, onde te achamos?</h1>
                <p>Preencha com seu dados para conseguirmos entrar em contato.</p>
                <hr />

                <label htmlFor="email">Qual seu e-mail</label>
                <input
                    type="email" id="email"
                    value={state.email}
                    onChange={handleEmailChange}
                />

                <label htmlFor="github">Qual o se GitHub</label>
                <input
                    type="text" id="github"
                    value={state.github}
                    onChange={handleGithubChange}
                />

                <Link to={'/step2'} className="btn-back">Voltar</Link>
                <button onClick={handleFinalizarCadastro}>Finalizar Cadastro</button>
            </Container>
        </Theme >
    );
}