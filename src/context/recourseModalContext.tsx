import { createContext, ReactNode, useContext, useEffect, useState } from "react";

export type Resource = {
  codigo: string;
  nome: string;
  ativo: boolean;
}


type Action = {
  action: 'create' | 'update'
}

type ResourceModalContextType = {
  closeModal: () => void;
  openModal: () => void;
  resourceCurrent: Resource;
  action: Action;
  setAction: (action: Action) => void;
  modalIsVisible: boolean;
  setResourceCurrent: (resource: Resource) => void;

  // loadResources: () => Promise<void>;

}

type ResourceModalContextProviderProps = {
  children: ReactNode;
}

export const ResourceModalContext = createContext({} as ResourceModalContextType);


export function ResourceModalProvider({children} : ResourceModalContextProviderProps ) {

  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [action, setAction] = useState<Action>({action : 'update'});
  const [resourceCurrent, setResourceCurrent] = useState({} as Resource);
  

  function openModal() {
    setModalIsVisible(true);
  }

  function closeModal() {
    setResourceCurrent({} as Resource);
    setModalIsVisible(false);
  }

 return (
  <ResourceModalContext.Provider
    value={{
      action,
      closeModal,
      resourceCurrent,
      openModal,
      setAction,
      setResourceCurrent,
      modalIsVisible,

    }}
  >
    {children}

  </ResourceModalContext.Provider>
 );

}

export function useResourceModal() {
  const context = useContext(ResourceModalContext);

  return context;
}

