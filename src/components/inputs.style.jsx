import { Link } from "react-router-dom";
import styled from "styled-components";

export const ConfirmButton = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  height: 50px;
  border-radius: 40px;
  background-color: var(--acao);
  border: none;
  color: var(--texto1);
  cursor: pointer;
  &:active {
    background-color: var(--acao2);
  }
`;

export const ConfirmButtonDisabled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  height: 50px;
  border-radius: 40px;
  background-color: var(--botao);
  border: none;
  color: var(--texto2);
`;

export const NumberButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const NumberButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
  border-radius: 48px;
  border: none;
  background-color: ${(props) =>
    props.ativo ? "var(--acao)" : "var(--botao)"};
  color: ${(props) => (props.ativo ? "var(--texto1)" : "var(--texto2)")};
  cursor: pointer;
  &:hover {
    color: var(--texto1);
    background-color: ${(props) =>
      props.ativo ? "var(--acao)" : "var(--botaoFoco)"};
  }
`;
