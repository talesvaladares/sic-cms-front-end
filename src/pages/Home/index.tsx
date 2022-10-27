import { useState, useEffect } from 'react';
import { api } from '../../api/api';
import { Modal } from './Components/Modal'
import {Container, Button, TdButtonsContainer,} from './styles';
import { useMenuModal } from '../../context/menuModalContext'

export type Menu = {
  id: number;
  titulo: string;
  faImage: string;
  image: string;
  codigoRecurso: string;
  menuPaiId: number;
  rota: string;
  sistema: string;
  ordem: number; 
}

type HandleShowModalProps = {
  menu?: Menu;
  action: 'create' | 'update'
}

export function Home() {

  const [menus, setMenus] = useState<Menu[]>([]);
  const { openModal, modalIsVisible, setAction, setMenuCurrent, setMenusPai} = useMenuModal();

  useEffect(() => {
    loadMenu();
  },[])

  async function  loadMenu() {
    const response = await api.get<Menu[]>("/menu");
    const { data } = response;
    
    setMenus(data);

    
    const menusPai = data.map(menu => ({
      id: menu.id,
      title: menu.titulo,
    }));

    setMenusPai(menusPai);
  }

  function handleShowModal({ menu, action}: HandleShowModalProps) {    
    

    if(action === 'update' && menu) {
      setMenuCurrent(menu);
      setAction({action: 'update'})
    }

    if (action === 'create') {
      setMenuCurrent({} as Menu);
      setAction({action : 'create'})
    }

    openModal();
  }

  async function handleDeleteMenu(id : number) {

    const ok = window.confirm("Tem certeza que deseja apagar este menu?");

    if (ok) {
      await api.delete(`/menu/${id}`);
    }

    return;

  }

  return (
    <Container>

      <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Título</th>
              <th>Ordem</th>
              <th>Menu Pai</th>
              <th>Sistema</th>
              <th>Rota</th>
              <th>Imagem</th>
              <th>Fa Imagem</th>
              <th>Recurso</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {
              menus.map(menu => {
                return (
                  <tr key={menu.id}>
                    <td>{menu.id}</td>
                    <td>{menu.titulo}</td>
                    <td>{menu.ordem}</td>
                    <td>{menu.menuPaiId}</td>
                    <td>{menu.sistema}</td>
                    <td>{menu.rota}</td>
                    <td>{menu.image}</td>
                    <td>{menu.faImage}</td>
                    <td>{menu.codigoRecurso}</td>
                    <td>
                      <TdButtonsContainer>
                        <Button 
                          statusColor="green" 
                          onClick={() => handleShowModal({menu: menu, action: 'update'})}
                        >
                          Editar
                        </Button>
                        <Button 
                          statusColor="red"
                          onClick={() => handleDeleteMenu(menu.id)}
                        >
                          Excluir
                        </Button>
                      </TdButtonsContainer>
                    </td>
                  </tr>
                )
              })
            }
          </tbody>
      </table>

      {
        modalIsVisible && (
          <Modal/> 
        )
      } 

    </Container>
  )
}