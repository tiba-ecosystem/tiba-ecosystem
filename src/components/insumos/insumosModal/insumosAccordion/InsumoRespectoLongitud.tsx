import { Accordion, Col, Form, Row } from "react-bootstrap"

const InsumoRespectoLongitud = () => {
  return (
    <Accordion.Item eventKey="2">
      <Accordion.Header>Agregar insumo con respecto a su longitud</Accordion.Header>
      <Accordion.Body>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Largo del insumo</Form.Label>
            <Form.Control type="text" placeholder="Longitud del insumo" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Unidad de medida</Form.Label>
            <Form.Select aria-label="Unidad de medida">
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
            <Form.Control type="text" placeholder="Longitud del insumo" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Unidad de medida</Form.Label>
            <Form.Select aria-label="Unidad de medida">
              <option value="pulgadas">pulgadas</option>
              <option value="milimetros">milímetros</option>
              <option value="centimetros">centímetros</option>
              <option value="metros">metros</option>
            </Form.Select>
          </Form.Group>
        </Row>
        
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Cantidades</Form.Label>
            <Form.Control type="text" placeholder="Cantidades del insumo" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridEmail">
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

export default InsumoRespectoLongitud