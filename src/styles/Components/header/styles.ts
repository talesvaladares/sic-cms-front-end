import styled, { css } from "styled-components";

export const HeaderContainer = styled.header`

  ${({theme}) => css`
    background: ${theme["green-700"]};
    height: 60px;

    padding: 0 0.5rem;

    display: flex;
    align-items: center;
    justify-content: space-between;
  `}


  svg {
    cursor: pointer;
  }

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

export const Nav = styled.nav`
  position: relative;

  &:hover {
    .menu {
      display: flex;
    }
  }
`;

export const Menu = styled.div`
  position: absolute;

  display: none;
  flex-direction: column;

  width: 10rem;

  ${({theme}) => css`
    background: ${theme["white"]};
    
  `}

  font-size: 1.2rem;

  padding: 0.5rem;
  border-radius: 4px;
  
  ul {
    list-style: none;
   
    li {
      
      a {

        display: inline-block;
        width: 100%;
    
        ${({theme}) => css`
          color: ${theme["gray-900"]};
          text-decoration: none;
        `}
      }
      
      &:hover {
      
        a {
          ${({theme}) => css`
          color: ${theme["white"]};
          background: ${theme["green-700"]};
          color: ${theme["white"]};
          cursor: pointer;
          border-radius: 4px ;
        `}
        }
      }
    }

    li + li {
      margin-top: 0.5rem;
    }
  }
`;