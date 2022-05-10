import { useState } from 'react';
import { Accordion, Button, Col, Form, Row } from 'react-bootstrap';
import { insumosDB } from '../../insumosDB';
import { IModal } from './InsumosAccordion';

const InsumoRespectoCantidatesForm = ({...props}: IModal) => {
  const [cantidades, setCantidades] = useState<string>("");
  const [costoInsumo, setCostoInsumo] = useState<string>("");
  const [costoUnidad, setCostoUnidad] = useState<string>("");

  const {setShowModal, categoriaInsumo, nombreInsumo} = props;

  const handleInputs = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;

    switch (event.target.name) {
      case "cantidades": setCantidades(inputValue); 
        break;
      case "costoInsumo": setCostoInsumo(inputValue); 
        break;
      case "costoUnidad": setCostoUnidad(inputValue); 
        break;
      default: throw Error("Input doesn't exist");
    }
  }

  return (
    <Accordion.Item eventKey="0">
      <Accordion.Header>Agregar insumo con respecto a cantidades</Accordion.Header>
      <Accordion.Body>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Cantidades</Form.Label>
            <Form.Control 
              type="text" 
              placeholder="Cantidades del insumo" 
              name="cantidades"
              defaultValue={cantidades} 
              onChange={handleInputs} 
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Costo del insumo</Form.Label>
            <Form.Control 
              type="text" 
              placeholder="Costo del insumo total" 
              name="costoInsumo"
              defaultValue={costoInsumo} 
              onChange={handleInputs}  
            />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label>Costo por unidad</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Costo por unidad"
            name="costoUnidad"
            defaultValue={costoUnidad} 
            onChange={handleInputs}
          />
        </Form.Group>
      
        <div className="d-grid gap-2">
          <Button variant="primary" onClick={() => {
            insumosDB.push({
              nombre: nombreInsumo,
              categoria: categoriaInsumo,
              costoUnitario: costoUnidad,
              stock: "2000",
              costoInsumo: costoInsumo,
              stockMinimo: "100"
            },)
            setShowModal(false)}
          }>
            Agregar Insumo
          </Button>
        </div>
      </Accordion.Body>
    </Accordion.Item>
  )
}

export default InsumoRespectoCantidatesForm