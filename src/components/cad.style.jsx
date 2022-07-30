import styled from "styled-components";

export const Body = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--fundo1);
  color: var(--texto1);
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
  overflow-y: hidden;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: linear-gradient(0deg, var(--fundo2) 0%, var(--fundo3) 100%);
  width: 325px;
  height: 350px;
  padding: 40px;
  border-radius: 16px;
  margin: 0px;
  @media (max-width: 800px) {
    width: 100vw;
    max-width: 325px;
    height: 100vh;
    justify-content: space-around;
  }
`;
