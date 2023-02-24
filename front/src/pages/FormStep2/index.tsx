import { ChangeEvent, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { SelectOption } from "../../components/SelectOption";
import { Theme } from "../../components/Theme";
import { FormActions, useForm } from "../../contexts/FormContext";
import { Container } from "./styled";

export const FormStep2 = () => {

    const navigate = useNavigate();
    const { state, dispatch } = useForm();

    useEffect(() => {
        if (state.name === '') {
            navigate("/step1");

        } else {
            dispatch({
                type: FormActions.setCurrentStep,
                payload: 2,
            });
        }
    }, []);

    const handleNextStep = () => {
        if (state.name !== '') {
            navigate("/step3");
        } else {
            alert("Por favor preencha todos os dados!");
        }

    }

    const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setName,
            payload: e.target.value,
        });
    }

    const setLevel = (level: number) => {
        dispatch({
            type: FormActions.setLevel,
            payload: level,
        });
    }

    return (
        <Theme>
            <Container>
                <p>Passo {state.currentStep}/3</p>
                <h1>{state.name}, O que melhor descreve você</h1>
                <p>Escolha a opção que condiz com seu estado atual, profissionalmente.</p>
                <hr />

                <SelectOption
                    title="Sou iniciante"
                    description="Comecei a programar há menos de 2 anos"
                    icon="🙂"
                    selected={state.level === 0}
                    onClick={() => setLevel(0)}
                />

                <SelectOption
                    title="Sou programador"
                    description="Já programo há 2 anos ou mais"
                    icon="😎"
                    selected={state.level === 1}
                    onClick={() => setLevel(1)}
                />

                <Link to={'/step1'} className="btn-back">Voltar</Link>
                <button onClick={handleNextStep}>Proximo</button>
            </Container>
        </Theme>
    );
}