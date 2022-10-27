import styled, { css } from 'styled-components';

export const Container = styled.div`

  ${({ theme }) => css`
    background: ${theme['gray-700']};
    border-radius: 5px;

    padding: 0.5rem;
  `}

  display: flex;
  flex-direction: column;
  align-items: center;

  max-width: 800px;

  header {
    width: 100%;
    display: flex;
    align-items: center; 
  }

  footer {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    gap: 1rem;
  }


`;

const BaseBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  gap: 2px;
`;

export const BoxLeft = styled(BaseBox)`
  /* display: flex;
  flex-direction: column;

  width: 50%;

  gap: 2px; */

`;
export const BoxRight = styled(BaseBox)`
  /* display: flex;
  flex-direction: column;

  width: 50%;

  gap: 2px; */
`;

export const Button = styled.button`

  padding: 4px 6px;

`;