import { useState, useEffect } from 'react';
import { api } from '../../api/api';
import { Modal } from './Components/Modal'
import {Container, Button, TdButtonsContainer,} from './styles';
import { useResourceModal } from '../../context/recourseModalContext'

export type Resource = {
  codigo: string;
  nome: string;
  ativo: boolean;
}

type HandleShowModalProps = {
  resource?: Resource;
  action: 'create' | 'update'
}

export function Resources() {

  const [resources, setResources] = useState<Resource[]>([]);
  const { 
    openModal, 
    modalIsVisible, 
    setAction, setResourceCurrent,
  } = useResourceModal();

  useEffect(() => {
    loadMenu(); 
  },[])

  async function  loadMenu() {
    const response = await api.get<Resource[]>("/recurso");
    const { data } = response;
    
    setResources(data);
  }

  function handleShowModal({ resource, action}: HandleShowModalProps) {    
    

    if(action === 'update' && resource) {
      setResourceCurrent(resource);
      setAction({action: 'update'})
    }

    openModal();
  }

  async function handleDeleteResource(codigo : string) {

    const ok = window.confirm("Tem certeza que deseja apagar este recurso?");

    if (ok) {
      await api.delete(`/recurso/${codigo}`);
    }

    return;

  }

  return (
    <Container>

      <table>
          <thead>
            <tr>
              <th>Código</th>
              <th>Nome</th>
              <th>Ativo</th> 
              <th>Ações</th> 
            </tr>
          </thead>
          <tbody>
            {
              resources.map(r => {
                return (
                  <tr key={r.codigo}>
                    <td>{r.codigo}</td>
                    <td>{r.nome}</td>
                    <td>{r.ativo ? "Ativo" : "Inativo"}</td>
                    <td>
                      <TdButtonsContainer>
                        <Button 
                          statusColor="green" 
                          onClick={() => handleShowModal({resource: r, action: 'update'})}
                        >
                          Editar
                        </Button>
                        <Button 
                          statusColor="red"
                          onClick={() => handleDeleteResource(r.codigo)}
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