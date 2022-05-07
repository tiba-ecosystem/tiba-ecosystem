import { Accordion, Col, Form, Row } from "react-bootstrap"

const InsumosAccordion = () => {
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Agregar insumo con respecto a cantidades</Accordion.Header>
        <Accordion.Body>
          <Form>
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
          </Form>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="1">
        <Accordion.Header>Agregar insumo con respecto a su peso</Accordion.Header>
        <Accordion.Body>
          <Form>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Peso del insumo</Form.Label>
                <Form.Control type="text" placeholder="Peso del insumo" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Unidad de peso</Form.Label>
                <Form.Select aria-label="Unidad de peso">
                  {/* <option>Open this select menu</option> */}
                  <option value="libras">libras</option>
                  <option value="onzas">onzas</option>
                  <option value="gramos">gramos</option>
                  <option value="kilogramos">kilogramos</option>
                </Form.Select>
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Cantidades del insumo</Form.Label>
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
          </Form>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="2">
        <Accordion.Header>Agregar insumo con respecto a su longitud</Accordion.Header>
        <Accordion.Body>
          <Form>
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
          </Form>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="3">
        <Accordion.Header>Agregar insumo con respecto a su volumen</Accordion.Header>
        <Accordion.Body>
          <Form>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Volumen del insumo</Form.Label>
                <Form.Control type="text" placeholder="Volumen del insumo" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Unidad de volumen</Form.Label>
                <Form.Select aria-label="Unidad de peso">
                  {/* <option>Open this select menu</option> */}
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
          </Form>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  )
}

export default InsumosAccordion;