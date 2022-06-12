import { ChangeEvent } from "react";
import { Col, Form, Row } from "react-bootstrap"

export interface IInsumosRespectoVolumen {
  volumenInsumo: string,
  handleInputs: (event: React.ChangeEvent<HTMLInputElement>) => void,
  handleDropdowns: (event: React.ChangeEvent<HTMLSelectElement>) => void
}

const InsumoRespectoVolumen = ({...props}: IInsumosRespectoVolumen) => {
  const {
    volumenInsumo,
    handleInputs,
    handleDropdowns
  } = props;

  const handleNumericInputs = (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    if (/^([1-9][0-9]*)$/.test(inputValue) || inputValue === "") handleInputs(event)
  }

  return (
    <Row className="mb-3">
      <Form.Group as={Col} controlId="formGridEmail">
        <Form.Label>Volumen del insumo</Form.Label>
        <Form.Control 
          type="text" 
          name="volumenInsumo"
          value={volumenInsumo}
          onChange={handleNumericInputs}
        />
      </Form.Group>

      <Form.Group as={Col} controlId="formGridPassword">
        <Form.Label>Unidad de volumen</Form.Label>
        <Form.Select 
          aria-label="Unidad de volumen"
          id="unidadDeVolumen" 
          onChange={handleDropdowns}
        >
          <option value="milímetro cúbico">milímetro cúbico</option>
          <option value="centímetro cúbico">centímetro cúbico</option>
          <option value="metro cúbico">metro cúbico</option>
        </Form.Select>
      </Form.Group>
    </Row>
  )
}

export default InsumoRespectoVolumen