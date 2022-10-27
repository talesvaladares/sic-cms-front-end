import { createContext, ReactNode, useContext, useEffect, useState } from "react";

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

type MenuPai = {
  id: number;
  title: string;
}

type Action = {
  action: 'create' | 'update'
}

type MenuModalContextType = {
  closeModal: () => void;
  openModal: () => void;
  menuCurrent: Menu;
  action: Action;
  setAction: (action: Action) => void;
  modalIsVisible: boolean;
  setMenuCurrent: (menu: Menu) => void;

  menusPai: MenuPai[];
  setMenusPai: (menusPai: MenuPai[]) => void
}

type MenuModalContextProviderProps = {
  children: ReactNode;
}

export const MenuModalContext = createContext({} as MenuModalContextType);


export function MenuModalProvider({children} : MenuModalContextProviderProps ) {

  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [action, setAction] = useState<Action>({action : 'update'});
  const [menuCurrent, setMenuCurrent] = useState({} as Menu);
  const [menusPai, setMenusPai] = useState<MenuPai[]>([]);

  function openModal() {
    setModalIsVisible(true);
  }

  function closeModal() {
    setMenuCurrent({} as Menu);
    setModalIsVisible(false);
  }

 return (
  <MenuModalContext.Provider
    value={{
      action,
      closeModal,
      menuCurrent,
      openModal,
      setAction,
      setMenuCurrent,
      modalIsVisible,
      menusPai,
      setMenusPai
    }}
  >
    {children}

  </MenuModalContext.Provider>
 );

}

export function useMenuModal() {
  const context = useContext(MenuModalContext);

  return context;
}

