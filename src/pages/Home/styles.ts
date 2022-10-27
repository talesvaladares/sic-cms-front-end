import styled, { css } from "styled-components";

export const Container = styled.div`
  
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 0.5rem;

  height: 100%;

  overflow-y: auto;


  table {
    width: 100%;
    border-collapse: collapse;
    min-width: 600px;

    th {
      background: ${({ theme }) => theme["gray-600"]};
      padding: 1rem;
      text-align: left;
      color: ${({ theme }) => theme["gray-100"]};
      font-size: 0.875rem;
      line-height: 1.6rem;
      
      &:first-child {
        border-top-left-radius: 8px;
        padding-left: 1.5rem;
      }
      &:last-child {
        border-top-right-radius: 8px;
        padding-right: 1.5rem;
      }
    }

    td {
      background: ${({ theme }) => theme["gray-700"]};
      border-top: 4px solid ${({ theme }) => theme["gray-800"]};
      padding: 1rem;
      font-size: 0.875rem;
      line-height: 1.6rem;
      &:first-child {
        /* width: 50%; */
        padding-left: 1.5rem;
      }
      &:last-child {
        padding-right: 1.5rem;
      }
    }
  }
`;

export const TdButtonsContainer = styled.div`
  display: flex;
  gap: 0.5rem;

`;

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