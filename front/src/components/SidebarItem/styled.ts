import styled from "styled-components";

type Props = {
  active: boolean;
};

export const Container = styled.div<Props>`
  margin: 30px 0;
  cursor: pointer;

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
  }

  .info {
    flex: 1;
    margin-right: 20px;
  }

  .title {
    text-align: right;
    font-weight: bold;
    margin-bottom: 5px;
    font-size: 15px;
    color: #fff;
  }

  .description {
    text-align: right;
    font-size: 13px;
    color: #b8b8d4;
  }

  .icon-area {
    width: 50px;
    height: 50px;
    background: ${(props) => (props.active ? "#25cd89" : "#494a7c")};
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .point {
    width: 15px;
    height: 15px;
    border: 3px solid #494a7c;
    border-radius: 50%;
    margin-left: 30px;
    margin-right: -8px;
    background: ${(props) => (props.active ? "#25cd89" : "#02044a")};
  }
`;
