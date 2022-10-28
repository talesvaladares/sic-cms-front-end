import { FormEvent, useEffect, useState } from 'react';
import { ModalContainer, ModalCard, Button } from './styles';
import { Resource } from '../../index';
import { api } from '../../../../api/api';
import { useResourceModal} from '../../../../context/recourseModalContext';
import Switch from "react-switch";

export function Modal() {

  const [codigo, setCodigo] = useState('');
  const [nome, setNome] = useState('');
  const [ativo, setAtivo] = useState(true);


  const { 
    resourceCurrent,
    action, 
    closeModal,  
  } = useResourceModal();
  
  const { action : actionModal } = action;

  useEffect(() => {

    if (resourceCurrent) {
      const {
       codigo,
       ativo,
       nome
      } = resourceCurrent;

      setCodigo(codigo);
      setNome(nome);
      setAtivo(ativo);
    }
   
  },[])

  function handleCloseModal() {
    closeModal();
  }

  async function handleSubmitForm(event: FormEvent) {
    event.preventDefault();
 
    if (actionModal === 'create') {
      await saveResource();
    }

    if (actionModal === 'update') {
      await updateResource();
    }
  }

  async function saveResource() {

    const newResource = {
      ativo ,
      codigo: codigo.toLocaleUpperCase(),
      nome,
    } as Resource;


    const response = await api.get(`/recurso/${newResource.codigo}`);

    const {data} =  response;

    if(data) {
      window.alert(`Já existe um recurso com este ${newResource.codigo}`);
      return;
    }

    try {
      await api.post('/recurso', newResource);
      closeModal();
    }
    catch(err) {
      console.log(err)
    }

  }

  async function updateResource() {

    const updatedResource = {
      ativo ,
      codigo: codigo.toLocaleUpperCase(),
      nome
    } as Resource;

    try {
      await api.put('/recurso', updatedResource);
      closeModal();
    }
    catch(err) {
      console.log(err)
    }

  }

  function handleChange(checked: boolean) {

    setAtivo(checked);
  }


  return (
    <ModalContainer>
      <ModalCard>
      <form onSubmit={handleSubmitForm}>
          <ul>
              <li>
                <label>Código</label>
                <input type="text" required value={codigo} onChange={(e) => setCodigo(e.target.value)} />
              </li>
              <li>
                <label>Nome</label>
                <input type="text" required value={nome} onChange={(e) => setNome(e.target.value)}/>
              </li>
              <li>
                <label>Ativo</label>
                <Switch 
                  onChange={() =>  handleChange(!ativo)}
                  checked={ativo} 
                  height={20} 
                  width={40}
                  offHandleColor="#1f231f"
                  onHandleColor="#144927"
                />    
              </li>
          </ul>
          <footer>
            <Button statusColor='green' type='submit'>Salvar</Button>
            <Button statusColor='red' onClick={handleCloseModal}>Fechar</Button>
          </footer>
        </form>
        
      </ModalCard>
    </ModalContainer>
  )
}