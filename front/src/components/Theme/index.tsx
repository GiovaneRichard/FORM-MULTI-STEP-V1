import { Header } from "../Header";
import { Container } from "./styled";

export const Theme = ({ children }: { children: JSX.Element }) => {
    return (
        <Container>
            <div className="area">
                {/* HEADER */}
                <Header />
                <div className="steps">
                    <div className="sidebar">
                        sidebar
                    </div>
                    <main>{children}</main>
                </div>
            </div>
        </Container>
    );
}