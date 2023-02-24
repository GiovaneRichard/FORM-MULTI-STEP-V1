import styled from "styled-components";

export const Container = styled.div`
  background: #02044a;
  color: #fff;
  min-height: 100vh;

  .area {
    margin: auto;
    max-width: 980px;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  .steps {
    flex: 1;
    display: flex;
  }

  .sidebar {
    width: 250px;
    border-right: 1px solid #16195c;
  }

  /* MAIN - CONTENT */
  main {
    background: green;
    flex: 1;
    padding-left: 40px;
    padding-top: 40px;
  }
`;
