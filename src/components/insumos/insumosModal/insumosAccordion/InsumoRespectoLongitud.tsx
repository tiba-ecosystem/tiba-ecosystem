import { Accordion, Col, Form, Row } from "react-bootstrap"
import InsumoCantidades from "./InsumoCantidades";

export interface IInsumosRespectoLongitudes {
  cantidades: string,
  costoInsumo: string,
  costoUnidad: string,
  largoInsumo: string,
  altoInsumo: string,
  handleInputs: (event: React.ChangeEvent<HTMLInputElement>) => void,
  handleDropdowns: (event: React.ChangeEvent<HTMLSelectElement>) => void
}

const InsumoRespectoLongitud = ({...props}: IInsumosRespectoLongitudes) => {
  const {
    largoInsumo, 
    altoInsumo, 
    cantidades, 
    costoInsumo, 
    costoUnidad, 
    handleInputs,
    handleDropdowns
  } = props;

  return (
    <Accordion.Item eventKey="2">
      <Accordion.Header>Agregar insumo con respecto a su longitud</Accordion.Header>
      <Accordion.Body>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Largo del insumo</Form.Label>
            <Form.Control 
              type="text" 
              placeholder="Largo del insumo" 
              name="largoInsumo"
              defaultValue={largoInsumo} 
              onChange={handleInputs} 
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Unidad de medida</Form.Label>
            <Form.Select 
              aria-label="Unidad de medida" 
              id="unidadMedidaLargo" 
              onChange={handleDropdowns}
            >
              <option value="pulgadas">pulgadas</option>
              <option value="milimetros">milímetros</option>
              <option value="centimetros">centímetros</option>
              <option value="metros">metros</option>
            </Form.Select>
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Alto del insumo</Form.Label>
            <Form.Control
              type="text" 
              placeholder="Alto del insumo" 
              name="altoInsumo"
              defaultValue={altoInsumo} 
              onChange={handleInputs} 
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Unidad de medida</Form.Label>
            <Form.Select 
              aria-label="Unidad de medida"
              id="unidadMedidaAlto" 
              onChange={handleDropdowns}
            >
              <option value="pulgadas">pulgadas</option>
              <option value="milimetros">milímetros</option>
              <option value="centimetros">centímetros</option>
              <option value="metros">metros</option>
            </Form.Select>
          </Form.Group>
        </Row>
        
        <InsumoCantidades {...{
          cantidades,
          costoInsumo,
          costoUnidad,
          handleInputs
        }} />
      </Accordion.Body>
    </Accordion.Item>
  )
}

export default InsumoRespectoLongitud