import { Link } from "react-router-dom";
import { Container } from "./styled";
import { ReactComponent as ProfileIcon } from '../../assets/profile.svg';
import { ReactComponent as BookIcon } from '../../assets/book.svg';
import { ReactComponent as MailIcon } from '../../assets/mail.svg';

type Props = {
    title: string;
    description: string;
    icon: string;
    path: string;
    active: boolean;
}

export const SidebarItem = ({ title, description, icon, path, active }: Props) => {
    return (
        <Container active={active}>
            <Link to={path}>
                <div className="info">
                    <div className="title">{title}</div>
                    <div className="description">{description}</div>
                </div>

                <div className="icon-area">
                    {icon === 'profile' && <ProfileIcon fill="#fff" width={24} height={24} />}
                    {icon === 'book' && <BookIcon fill="#fff" width={24} height={24} />}
                    {icon === 'mail' && <MailIcon fill="#fff" width={24} height={24} />}
                </div>
                <div className="point"></div>
            </Link>

        </Container>
    );
}