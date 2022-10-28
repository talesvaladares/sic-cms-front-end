import styled from "styled-components";

export const LayoutContainer = styled.div`
  
  height: calc(100vh);
  background: ${({ theme }) => theme["gray-800"]};
  display: flex;
  flex-direction: column;
`;