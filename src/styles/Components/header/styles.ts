import styled, { css } from "styled-components";

export const HeaderContainer = styled.header`

  ${({theme}) => css`
    background: ${theme["green-700"]};
    height: 60px;

    padding: 0 0.5rem;

    display: flex;
    align-items: center;
    justify-content: flex-start;
  `}

`;

export const Button = styled.button`

  ${({theme}) => css`
    background: ${theme["gray-100"]};
    border-radius: 4px;
    border: none;

    padding: 0.5rem;

    cursor: pointer;
  `}

`;