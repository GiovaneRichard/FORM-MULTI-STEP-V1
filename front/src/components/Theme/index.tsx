import { Header } from "../Header";
import { SidebarItem } from "../SidebarItem";
import { Container } from "./styled";
import { useForm } from "../../contexts/FormContext";

export const Theme = ({ children }: { children: JSX.Element }) => {

    const { state } = useForm();

    return (
        <Container>
            <div className="area">
                {/* HEADER */}
                <Header />
                <div className="steps">
                    <div className="sidebar">
                        <SidebarItem
                            title="Pessoal"
                            description="Se identifique"
                            icon="profile"
                            path="/step1"
                            active={state.currentStep === 1}
                        />

                        <SidebarItem
                            title="Profissional"
                            description="Seu nível"
                            icon="book"
                            path="/step2"
                            active={state.currentStep === 2}
                        />

                        <SidebarItem
                            title="Contatos"
                            description="Como te achar"
                            icon="mail"
                            path="/step3"
                            active={state.currentStep === 3}
                        />

                    </div>
                    <main>{children}</main>
                </div>
            </div>
        </Container>
    );
}