import { Col, Form, Row } from "react-bootstrap";

export interface IInsumosRespectoCantidades {
  cantidades: string,
  costoInsumo: string,
  costoUnidad: string,
  handleInputs: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const InsumoCantidades = ({...props}: IInsumosRespectoCantidades) => {
  const {cantidades, costoInsumo, costoUnidad, handleInputs} = props;
  return (
    <>
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
    </>
  )
}

export default InsumoCantidades;