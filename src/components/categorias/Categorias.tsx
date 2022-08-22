import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { categoriasContext } from './CategoriasContext';
import CategoriasModal from './catetoriasModal/CategoriasModal';

const Categorias = () => {
  const { setShowAgregarCategoriaModal } = useContext(categoriasContext);
  return (
    <>
      <h1>Categorías</h1>
      <Button onClick={() => setShowAgregarCategoriaModal(true)}>Agregar categoría</Button>
      <CategoriasModal />
    </>
  );
};

export default Categorias;
