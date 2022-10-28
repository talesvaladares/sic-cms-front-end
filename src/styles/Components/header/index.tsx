import { NavLink, useLocation } from 'react-router-dom';
import { HeaderContainer, Button, Nav, Menu } from './styles';
import { useMenuModal } from '../../../context/menuModalContext';
import { useResourceModal } from '../../../context/recourseModalContext';
import { List } from 'phosphor-react';

export function Header() {

  const {openModal, setAction} = useMenuModal();
  const {openModal : openResourceModal, setAction : setResourceAction} = useResourceModal();
  
  const { pathname } = useLocation()

  function handleShowModal() {
    setAction({action: 'create'});
    openModal();
  }

  function handleShowResourceModal() {
    setResourceAction({action: 'create'});
    openResourceModal();
  }


  return (
    <HeaderContainer>
      <Nav>
        <List size={32}/>
        <Menu className='menu'>
          <ul>
            <li>
                <NavLink to="/" title="Menus">Menus</NavLink>
            </li>
            <li>
                <NavLink to="/recursos" title="Recursos">Recursos</NavLink>
            </li>
          </ul>
        </Menu>
      </Nav>

      {
        pathname === '/' && (
          <Button 
            type='button' 
            onClick={handleShowModal}
          >
            Novo Menu
          </Button>
        )
      }

      {
         pathname === '/recursos' && (
          <Button 
            type='button' 
            onClick={handleShowResourceModal}
          >
            Novo Recurso
          </Button>
        )
      }

      
    </HeaderContainer>    
  )
}