import React, { createContext, useState } from 'react';
import Categorias from './Categorias';

export interface ContextProps {
  showAgregarCategoriaModal: boolean;
  setShowAgregarCategoriaModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export const categoriasContext = createContext<ContextProps>({} as ContextProps);

const CategoriasContext = () => {
  const [showAgregarCategoriaModal, setShowAgregarCategoriaModal] = useState(false);

  return (
    <categoriasContext.Provider
      value={{
        showAgregarCategoriaModal,
        setShowAgregarCategoriaModal,
      }}
    >
      <Categorias />
    </categoriasContext.Provider>
  );
};

export default CategoriasContext;
