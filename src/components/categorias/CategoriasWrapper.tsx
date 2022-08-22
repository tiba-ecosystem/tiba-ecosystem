import React from 'react';
import Categorias from './Categorias';
import CategoriasContext from './CategoriasContext';

const InsumosWrapper = () => {
  return (
    <CategoriasContext>
      <Categorias />
    </CategoriasContext>
  );
};

export default InsumosWrapper;
