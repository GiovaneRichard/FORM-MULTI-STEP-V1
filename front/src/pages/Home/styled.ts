import styled from "styled-components";

export const Containe = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #02044a;

  h1 {
    color: #fff;
    margin-bottom: 3rem;
  }

  a {
    text-decoration: none;
    color: #fff;
    padding: 1rem 2rem;
    background: #25cd89;
    font-size: 1.5rem;
    font-weight: 700;
    border-radius: 30px;

    &:hover {
      background: #5abc99;
    }
  }
`;
