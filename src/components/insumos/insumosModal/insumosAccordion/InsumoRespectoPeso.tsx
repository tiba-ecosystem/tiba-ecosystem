import { ChangeEvent } from 'react';
import { Accordion, Col, Form, Row } from 'react-bootstrap'

export interface IInsumosRespectoPeso {
  pesoInsumo: string,
  handleInputs: (event: React.ChangeEvent<HTMLInputElement>) => void,
  handleDropdowns: (event: React.ChangeEvent<HTMLSelectElement>) => void
}

const InsumoRespectoPesoForm = ({...props}: IInsumosRespectoPeso) => {
  const {
    pesoInsumo,
    handleInputs,
    handleDropdowns
  } = props;

  const handleNumericInputs = (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    if (/^([1-9][0-9]*)$/.test(inputValue) || inputValue === "") handleInputs(event)
  }

  return (
    <Accordion.Item eventKey="1">
      <Accordion.Header>Agregar insumo con respecto a su peso</Accordion.Header>
      <Accordion.Body>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Peso del insumo</Form.Label>
            <Form.Control 
              type="text" 
              name="pesoInsumo"
              value={pesoInsumo}
              onChange={handleNumericInputs}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Unidad de peso</Form.Label>
            <Form.Select 
              aria-label="Unidad de peso"
              id="unidadDePeso" 
              onChange={handleDropdowns}
            >
              <option value="gramos">gramos</option>
              <option value="kilogramos">kilogramos</option>
              <option value="libras">libras</option>
              <option value="onzas">onzas</option>
            </Form.Select>
          </Form.Group>
        </Row>
      </Accordion.Body>
    </Accordion.Item>
  )
}

export default InsumoRespectoPesoForm