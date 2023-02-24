import { createContext, useContext, useReducer } from "react";

// Types 
type StateType = {
    currentStep: number;
    name: string;
    leve: 0 | 1;
    email: string;
    github: string;
}

type ActionType = {
    type: FormActions;
    payload: any;
}

type ContextType = {
    state: StateType;
    dispatch: (action: ActionType) => void;
}

// init values
const initialState: StateType = {
    currentStep: 0,
    name: '',
    leve: 0,
    email: '',
    github: '',
}

// Context
const FormContext = createContext<ContextType | undefined>(undefined);

// Reducer
export enum FormActions {
    setCurrentStep,
    setName,
    setLevel,
    setEmail,
    setGithub
}

const FormReducer = (state: StateType, action: ActionType) => {
    switch (action.type) {
        case FormActions.setCurrentStep:
            return { ...state, currentStep: action.payload };

        case FormActions.setName:
            return { ...state, name: action.payload };

        case FormActions.setLevel:
            return { ...state, level: action.payload };

        case FormActions.setEmail:
            return { ...state, email: action.payload };

        case FormActions.setGithub:
            return { ...state, github: action.payload };

        default:
            return state;
    }
}

// Provider
export const FormProvider = ({ children }: { children: JSX.Element }) => {
    const [state, dispatch] = useReducer(FormReducer, initialState);
    const value = { state, dispatch };

    return (
        <FormContext.Provider value={value}>
            {children}
        </FormContext.Provider>
    );
}

// Context Hook
export const useForm = () => {
    const context = useContext(FormContext);
    if (context === undefined) {
        throw new Error('useForm precisa ser usado dentro do FormProvider');
    }
    return context;
}