import { useState } from "react";
import { Button } from "react-bootstrap";
import InsumosModal from "./insumosModal/InsumosModal";
import InsumosTable from "./insumosTable/InsumosTable";

const Insumos = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <h1>Insumos</h1>
      <Button onClick={() => setShowModal(true)}>Agregar insumos</Button>
      <InsumosModal showModal={showModal} setShowModal={setShowModal}/>
      <InsumosTable />
    </>
  )
}

export default Insumos;