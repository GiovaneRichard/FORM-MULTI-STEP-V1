import styled from "styled-components";

type Props = {
  selected: boolean;
};

export const Containe = styled.div<Props>`
  display: flex;
  border: 2px solid ${(props) => (props.selected ? "#25cd89" : "#16195c")};
  border-radius: 0.5rem;
  padding: 1.3rem;
  margin-bottom: 2rem;
  cursor: pointer;
  &:hover {
    border: 2px solid #496459;
  }
`;

export const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: #191a59;
  font-size: 25px;
`;

export const Info = styled.div`
  /* flex: 1; */
  margin-left: 1rem;
`;

export const Title = styled.div`
  font-size: 17px;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

export const Description = styled.div`
  font-size: 14px;
  color: #b8b8d4;
`;
