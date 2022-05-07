import { useState } from "react";
import { Button, Table } from "react-bootstrap";
import InsumosModal from "./insumosModal/InsumosModal";

const Insumos = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <h1>Insumos</h1>
      <Button onClick={() => setShowModal(true)}>Agregar insumos</Button>
      <InsumosModal showModal={showModal} setShowModal={setShowModal}/>
      <br />
      <br />
      <h2>Lista de insumos</h2>
      <input type="text" placeholder="filtrar" />
      <br />
      <br />
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Categoria</th>
            <th>Coste unitario del insumo</th>
            <th>Stock del insumo (unidades)</th>
            <th>Coste total del insumo</th>
            <th>Stock minimo de inventario (unidades)</th>
            <th>Opciones</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Atún marimar</td>
            <td></td>
            <td>$950</td>
            <td>2000</td>
            <td></td>
            <td>100</td>
            <td>
              <Button>Remove</Button>
              <Button>Edit</Button>
              <Button>Call</Button>
            </td>
          </tr>
          <tr>
            <td>Atún marimar</td>
            <td></td>
            <td>$950</td>
            <td>2000</td>
            <td></td>
            <td>100</td>
            <td>
              <Button>Remove</Button>
              <Button>Edit</Button>
              <Button>Call</Button>
            </td>
          </tr>
        </tbody>
      </Table>
      <Button>Todos</Button>
      <Button>1</Button>
      <Button>2</Button>
      <Button>3</Button>
      <Button>4</Button>
      <Button>Siguiente</Button>
    </div>
  )
}

export default Insumos;