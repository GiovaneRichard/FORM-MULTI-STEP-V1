import { Containe, Icon, Info, Title, Description } from "./styled";

type Props = {
    title: string;
    description: string;
    icon: string;
    selected: boolean;
    onClick: () => void;
}

export const SelectOption = ({ title, description, icon, selected, onClick }: Props) => {
    return (
        <Containe onClick={onClick} selected={selected}>
            <Icon>{icon}</Icon>
            <Info>
                <Title>{title}</Title>
                <Description>{description}</Description>
            </Info>
        </Containe>
    );
}