import { FormEvent, useEffect, useState } from 'react';
import { ModalContainer, ModalCard, Button } from './styles';
import { Menu } from '../../index';
import { api } from '../../../../api/api';
import { useMenuModal} from '../../../../context/menuModalContext';

export function Modal() {

  const [id, setId] = useState<number>();
  const [titulo, setTitulo] = useState('');
  const [faImage, setFaImage] = useState('');
  const [image, setImage] = useState('');
  const [codigoRecurso, setCodigoRecurso] = useState('');
  const [menuPaiId, setMenuPaiId] = useState<number>();
  const [rota, setRota] = useState('');
  const [sistema, setSistema] = useState('cq3');
  const [ordem, setOrdem] = useState<number>();

  const { menuCurrent, action, closeModal, menusPai } = useMenuModal();
  const { action : actionModal } = action;

  useEffect(() => {

    if (menuCurrent) {
      const {
        codigoRecurso,
        faImage,
        id,
        image,
        menuPaiId,
        ordem,
        rota,
        sistema,
        titulo
      } = menuCurrent;

      setId(id);
      setCodigoRecurso(codigoRecurso);
      setFaImage(faImage);
      setImage(image);
      setMenuPaiId(menuPaiId);
      setOrdem(ordem);
      setRota(rota);
      setSistema('cq3');
      setTitulo(titulo);
    }
   
  },[])

  function handleCloseModal() {
    closeModal();
  }

  async function handleSubmitForm(event: FormEvent) {
    event.preventDefault();
 
    if (actionModal === 'create') {
      await saveMenu();
    }

    if (actionModal === 'update') {
      await updateMenu();
    }
  }



  async function saveMenu() {

    const newMenu = {
      codigoRecurso,
      faImage,
      image,
      ordem,
      titulo,
      sistema,
      rota,
      menuPaiId,
    } as Menu;

    try {
      await api.post('/menu', newMenu);

      closeModal();

    }
    catch(err) {
      console.log(err)
    }

  }

  async function updateMenu() {

    const updatedMenu = {
      id,
      codigoRecurso,
      faImage,
      image,
      ordem,
      titulo,
      sistema,
      rota,
      menuPaiId
    } as Menu;

    try {
      await api.put('/menu', updatedMenu);
      closeModal();
    }
    catch(err) {
      console.log(err)
    }

  }


  return (
    <ModalContainer>
      <ModalCard>
      <form onSubmit={handleSubmitForm}>
          <ul>
              <li>
                <label>Id</label>
                <input type="number" value={id} onChange={(e) => setId(Number(e.target.value))}  disabled />
              </li>
              <li>
                <label>Título</label>
                <input type="text" value={titulo} onChange={(e) => setTitulo(e.target.value)}/>
              </li>
              <li>
                <label>Ordem</label>
                <input type="number" value={ordem} onChange={(e) => setOrdem(Number(e.target.value))}/>
              </li>
              <li>
                <label>Meu Pai</label>
                <select 
                  className="menuPai" 
                  value={menuPaiId}
                  onChange={(e) => setMenuPaiId(Number(e.target.value))} 
                >
                  {
                    menusPai.map(menuPai => {
                      return (
                        <option 
                          key={menuPai.id} 
                          value={menuPai.id}
                        >
                          {menuPai.title}
                        </option>
                      )
                    })
                  }
                </select>
              </li>
              <li>
                <label>Sistema</label>
                <input type="text" value={sistema} onChange={(e) => setSistema(e.target.value)}/>
              </li>
              <li>
                <label>Rota</label>
                <input type="text" value={rota} onChange={(e) => setRota(e.target.value)}/>
              </li>
              <li>
                <label>Imagem</label>
                <input type="text" value={image} onChange={(e) => setImage(e.target.value)}/>
              </li>
              <li>
                <label>Fa Imagem</label>
                <input type="text" value={faImage} onChange={(e) => setFaImage(e.target.value)}/>
              </li>
              <li>
                <label>Código Recurso</label>
                <input type="text" value={codigoRecurso} onChange={(e) => setCodigoRecurso(e.target.value)}/>
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