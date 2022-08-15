import { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { contextStateProps } from '../../ContextStateWrapper';
import InsumosModal from './insumosModal/InsumosModal';
import InsumosTable from './insumosTable/InsumosTable';

const Insumos = () => {
  const { setShowModal } = useContext(contextStateProps);

  return (
    <>
      <h1>Insumos</h1>
      <Button onClick={() => setShowModal(true)}>Agregar insumos</Button>
      <InsumosModal />
      <InsumosTable />
    </>
  );
};

export default Insumos;
