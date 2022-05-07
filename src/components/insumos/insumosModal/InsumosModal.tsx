import { Button, Col, Form, Modal, Row } from "react-bootstrap";
import InsumosAccordion from "./InsumosAccordion";

interface IModal {
  showModal: boolean,
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>
}

const InsumosModal = ({ showModal, setShowModal }: IModal) => {
  return (
    <>
      <Modal show={showModal} onHide={() => setShowModal(false)} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Agregar Insumo</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Nombre Proveedor</Form.Label>
                <Form.Control type="text" placeholder="Escriba el nombre del proveedor" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Telefono</Form.Label>
                <Form.Control type="text" placeholder="Escriba el telefono del proveedor" />
              </Form.Group>
            </Row>

            <Form.Group className="mb-3" controlId="formGridAddress1">
              <Form.Label>Nombre del insumo</Form.Label>
              <Form.Control placeholder="Escriba el nombre del insumo" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGridAddress2">
              <Form.Label>Categoría del insumo</Form.Label>
              <Form.Control placeholder="Escriba la categoría" />
            </Form.Group>

            <InsumosAccordion />
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="primary" onClick={() => setShowModal(true)}>
            Agregar insumo
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default InsumosModal;