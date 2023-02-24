import { ChangeEvent, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Theme } from "../../components/Theme";
import { FormActions, useForm } from "../../contexts/FormContext";
import { Container } from "./styled";
import { toast } from 'react-toastify';

export const FormStep1 = () => {

    const navigate = useNavigate();
    const { state, dispatch } = useForm();

    useEffect(() => {
        dispatch({
            type: FormActions.setCurrentStep,
            payload: 1,
        });
    }, []);

    const handleNextStep = () => {
        if (state.name !== '') {
            navigate("/step2");
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

    return (
        <Theme>
            <Container>
                <p>Passo {state.currentStep}/3</p>
                <h1>Vamos começar com seu nome</h1>
                <p>Preencha o campo abaixo com seu nome completo.</p>
                <hr />

                <label htmlFor="name">Seu nome completo</label>
                <input type="text" autoFocus id="name" value={state.name}
                    onChange={handleNameChange}
                />

                <button onClick={handleNextStep}>Proximo</button>
            </Container>
        </Theme>
    );
}