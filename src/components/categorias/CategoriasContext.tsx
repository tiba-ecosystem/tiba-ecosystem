import React, { createContext, useState } from 'react';

export interface ContextProps {
  showAgregarCategoriaModal: boolean;
  setShowAgregarCategoriaModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export const categoriasContext = createContext<ContextProps>({} as ContextProps);

const CategoriasContext = (props: any) => {
  const [showAgregarCategoriaModal, setShowAgregarCategoriaModal] = useState(false);

  return (
    <categoriasContext.Provider
      value={{
        showAgregarCategoriaModal,
        setShowAgregarCategoriaModal,
      }}
    >
      {props.children}
    </categoriasContext.Provider>
  );
};

export default CategoriasContext;
