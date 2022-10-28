import styled, { css } from "styled-components";

export const ModalContainer = styled.div`

  position: absolute;
  
  top: 0;
  bottom: 0;

  left: 0;
  right: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  ${({theme}) => css`
    background: ${theme["gray-900-transparent"]};
  `}
`;

export const ModalCard = styled.div`

  padding: 1rem;
  
  ${({theme}) => css`
    background: ${theme["white"]};
    border-radius: 4px;
    color: ${theme["gray-900"]};
  `}

  ul {
    list-style: none;

    li + li {
      margin-top: 0.5rem;
    }


    li {

      display: flex;
      align-items: center;
      
      label {
        display: inline-block;
        width: 120px;
      }

      input {
        ${({theme}) => css`
          border: 1px solid ${theme["gray-900"]};
        `}
        border-radius: 4px;
        padding: 0.4rem;
        width: 20rem;
      }

      select {
        ${({theme}) => css`
          border: 1px solid ${theme["gray-900"]};
        `}
        border-radius: 4px;
        padding: 0.4rem;
        width: 20rem;
      }
    }
  }

  footer {
    margin-top: 1rem;

    width: 100%;
    display: flex;
    justify-content: flex-end;
    gap: 0.5rem;
  }
  
`

const STATUS_COLORS = {
  yellow: "yellow-500",
  green: "green-500",
  red: "red-500",
} as const;

type StatusProps = {
  // uso o keyof typeof para dizer que meu status color
  // pode ter como opção as chaves do objeto STATUS_COLORS
  statusColor: keyof typeof STATUS_COLORS;
};

export const Button = styled.button<StatusProps>`

  padding: 4px 6px;
  border: none;
  border-radius: 4px;

  ${({theme}) => css`
    color: ${theme.white};
  `}

  background: ${({ theme, statusColor }) =>
    theme[STATUS_COLORS[statusColor]]
  };

  cursor: pointer;

`;