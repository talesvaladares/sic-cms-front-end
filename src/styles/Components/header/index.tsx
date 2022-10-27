import { HeaderContainer, Button } from './styles';
import { useMenuModal } from '../../../context/menuModalContext';

export function Header() {

  const {openModal, setAction, setMenuCurrent} = useMenuModal();

  function handleShowModal() {
    setAction({action: 'create'});
    openModal();
  }

  return (
    <HeaderContainer>
      <Button type='button' onClick={handleShowModal}>Novo Menu</Button>
    </HeaderContainer>    
  )
}