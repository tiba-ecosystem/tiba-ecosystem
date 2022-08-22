import { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { insumosContext } from './InsumosContext';
import InsumosModal from './insumosModal/InsumosModal';
import InsumosTable from './insumosTable/InsumosTable';

const Insumos = () => {
  const { setShowAgregarInsumoModal } = useContext(insumosContext);

  return (
    <>
      <h1>Insumos</h1>
      <Button onClick={() => setShowAgregarInsumoModal(true)}>Agregar insumos</Button>
      <InsumosModal />
      <InsumosTable />
    </>
  );
};

export default Insumos;
