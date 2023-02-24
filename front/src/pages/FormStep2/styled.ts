import { Header } from "../../components/Header/index";
import styled from "styled-components";

export const Container = styled.div`
  p {
    font-size: 13px;
    color: #b8b8d4;
    margin: 0.5rem 0;
  }

  hr {
    height: 1px;
    border: 0;
    background: #16195c;
    margin: 2rem 0;
  }

  label {
    font-size: 13px;
  }

  input {
    display: block;
    margin-top: 7px;
    width: 100%;
    height: 55px;
    padding: 0.7rem 1rem;
    font-size: 1.1rem;
    border: 2px solid #25cd89;
    border-radius: 0.5rem;
    color: #fff;
    outline: none;
    background: #02044a;
    margin-bottom: 2rem;
  }

  button {
    background: #25cd89;
    color: #fff;
    font-size: 14px;
    font-weight: bold;
    padding: 20px 40px;
    border-radius: 30px;
    border: 0;
    cursor: pointer;
  }

  .btn-back {
    font-size: 16px;
    text-decoration: none;
    padding: 20px 40px;
    color: #b8b8d4;
    margin-right: 3rem;

    &:hover {
      background: #191a59;
      border-radius: 30px;
    }
  }
`;
