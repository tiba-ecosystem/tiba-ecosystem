import { Accordion, Button, Col, Form, Row } from 'react-bootstrap'

const InsumoRespectoPesoForm = () => {
  return (
    <Accordion.Item eventKey="1">
      <Accordion.Header>Agregar insumo con respecto a su peso</Accordion.Header>
      <Accordion.Body>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Peso del insumo</Form.Label>
            <Form.Control type="text" placeholder="Peso del insumo" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Unidad de peso</Form.Label>
            <Form.Select aria-label="Unidad de peso">
              <option value="libras">libras</option>
              <option value="onzas">onzas</option>
              <option value="gramos">gramos</option>
              <option value="kilogramos">kilogramos</option>
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
      
        <div className="d-grid gap-2">
          <Button variant="primary" type="submit">
            Agregar Insumo
          </Button>
        </div>
      </Accordion.Body>
    </Accordion.Item>
  )
}

export default InsumoRespectoPesoForm