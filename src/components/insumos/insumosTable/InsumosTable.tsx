import { Button, Table } from 'react-bootstrap'
import { IInsumo, insumosDB } from '../insumosDB'

const InsumosTable = () => {
  return (
    <div className='mt-4'>
      <h2>Lista de insumos</h2>
      <input type="text" placeholder="filtrar" />
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
            {
              insumosDB.map((insumo: IInsumo) => {
                const {nombre, categoria, /* costoUnitario, */ stock, costoPaquete: costoInsumo, stockMinimo} = insumo;
                return (
                  <tr key={nombre}>
                    <td>{nombre}</td>
                    <td>{categoria}</td>
                    <td>{/* {costoUnitario} */}</td>
                    <td>{stock}</td>
                    <td>{costoInsumo}</td>
                    <td>{stockMinimo}</td>
                    <td>
                      <Button>Eliminar</Button>
                      <Button>Editar</Button>
                      <Button>Llamar</Button>
                    </td>
                  </tr>)
              })
            }
          </tbody>
        </Table>
        {/* <Button>Todos</Button>
        <Button>1</Button>
        <Button>2</Button>
        <Button>3</Button>
        <Button>4</Button>
        <Button>Siguiente</Button> */}
    </div>
  )
}

export default InsumosTable