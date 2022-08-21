import { Button, Table } from 'react-bootstrap';
import { IInsumo, insumosDB } from '../DB';

import { Trash, Pencil, Telephone } from 'react-bootstrap-icons';

const InsumosTable = () => {
  return (
    <div className='mt-4'>
      <h2>Lista de insumos</h2>
      <input type='text' placeholder='filtrar' />
      <Table striped bordered hover className='mt-4'>
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
          {insumosDB.map((insumo: IInsumo) => {
            const {
              nombreInsumo,
              categoria,
              /* costoUnitario, */ stock,
              costoPaquete: costoInsumo,
              stockMinimo,
            } = insumo;
            return (
              <tr key={nombreInsumo}>
                <td>{nombreInsumo}</td>
                <td>{categoria}</td>
                <td>{/* {costoUnitario} */}</td>
                <td>{stock}</td>
                <td>{costoInsumo}</td>
                <td>{stockMinimo}</td>
                <td style={{ width: '10rem' }}>
                  <div className='d-flex justify-content-between'>
                    <Button variant='secondary'>
                      <Pencil />
                    </Button>
                    <Button variant='secondary'>
                      <Trash />
                    </Button>
                    <Button variant='secondary'>
                      <Telephone />
                    </Button>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      {/* <Button>Todos</Button>
        <Button>1</Button>
        <Button>2</Button>
        <Button>3</Button>
        <Button>4</Button>
        <Button>Siguiente</Button> */}
    </div>
  );
};

export default InsumosTable;
