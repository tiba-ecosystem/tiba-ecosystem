import { Accordion, Col, Form, Row } from "react-bootstrap"

const InsumoRespectoVolumen = () => {
  return (
    <Accordion.Item eventKey="3">
      <Accordion.Header>Agregar insumo con respecto a su volumen</Accordion.Header>
      <Accordion.Body>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Volumen del insumo</Form.Label>
            <Form.Control type="text" placeholder="Volumen del insumo" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Unidad de volumen</Form.Label>
            <Form.Select aria-label="Unidad de peso">
              <option value="milímetro cúbico">milímetro cúbico</option>
              <option value="centímetro cúbico">centímetro cúbico</option>
              <option value="metro cúbico">metro cúbico</option>
            </Form.Select>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Cantidades</Form.Label>
            <Form.Control type="text" placeholder="Cantidades del insumo" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Costo del insumo</Form.Label>
            <Form.Control type="text" placeholder="Costo del insumo total" />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label>Costo por unidad</Form.Label>
          <Form.Control placeholder="Costo por unidad" />
        </Form.Group>
      </Accordion.Body>
    </Accordion.Item>
  )
}

export default InsumoRespectoVolumen