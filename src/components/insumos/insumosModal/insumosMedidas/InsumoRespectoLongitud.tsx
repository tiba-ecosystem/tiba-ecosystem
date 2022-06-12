import { ChangeEvent } from "react";
import { Col, Form, Row } from "react-bootstrap"

export interface IInsumosRespectoLongitudes {
  largoInsumo: string,
  altoInsumo: string,
  unidadDeMedida: string,
  handleInputs: (event: React.ChangeEvent<HTMLInputElement>) => void,
  handleDropdowns: (event: React.ChangeEvent<HTMLSelectElement>) => void
}

const InsumoRespectoLongitud = ({...props}: IInsumosRespectoLongitudes) => {
  const {
    largoInsumo, 
    altoInsumo, 
    unidadDeMedida,
    handleInputs,
    handleDropdowns
  } = props;

  const handleNumericInputs = (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    if (/^([1-9][0-9]*)$/.test(inputValue) || inputValue === "") handleInputs(event)
  }

  return (
    <>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Unidad de medida</Form.Label>
          <Form.Select 
            aria-label="Unidad de medida" 
            id="unidadDeMedida" 
            onChange={handleDropdowns}
          >
            <option value="milímetro">milímetros</option>
            <option value="centímetro">centímetros</option>
            <option value="metro">metros</option>
            <option value="pulgada">pulgadas</option>
          </Form.Select>
        </Form.Group>
      </Row>
      
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Largo del insumo</Form.Label>
          <Form.Control 
            type="text" 
            name="largoInsumo"
            value={largoInsumo} 
            onChange={handleNumericInputs} 
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label><br /></Form.Label>
          <Form.Control 
            type="text" 
            value={largoInsumo && `${largoInsumo} ${unidadDeMedida}${Number(largoInsumo) > 1 ? "s" : ""}`}
            disabled 
          />
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Alto del insumo</Form.Label>
          <Form.Control
            type="text" 
            name="altoInsumo"
            value={altoInsumo} 
            onChange={handleNumericInputs} 
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label><br /></Form.Label>
          <Form.Control 
            type="text" 
            value={altoInsumo && `${altoInsumo} ${unidadDeMedida}${Number(altoInsumo) > 1 ? "s" : ""}`}
            disabled 
          />
        </Form.Group>
      </Row>
    </>
  )
}

export default InsumoRespectoLongitud