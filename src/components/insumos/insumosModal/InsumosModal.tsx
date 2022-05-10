import { useState } from "react";
import { Col, Form, Modal, Row } from "react-bootstrap";
import InsumosAccordion from "./insumosAccordion/InsumosAccordion";

interface IModal {
  showModal: boolean,
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>
}

const InsumosModal = ({ showModal, setShowModal }: IModal) => {

  const [nombreProveedor, setNombreProveedor] = useState<string>("");
  const [telefono, setTelefono] = useState<string>("");
  const [nombreInsumo, setNombreInsumo] = useState<string>("");
  const [categoriaInsumo, setCategoriaInsumo] = useState<string>("");

  const handleInputs = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;

    switch (event.target.name) {
      case "nombreProveedor": setNombreProveedor(inputValue); 
        break;
      case "telefono": setTelefono(inputValue); 
        break;
      case "nombreInsumo": setNombreInsumo(inputValue); 
        break;
      case "categoriaInsumo": setCategoriaInsumo(inputValue); 
        break;
      default: throw Error("Input doesn't exist");
    }
  }

  const props = {
    setShowModal, 
    nombreProveedor,
    telefono,
    nombreInsumo, 
    categoriaInsumo
  }

  return (
    <Modal show={showModal} onHide={() => setShowModal(false)} >
      <Modal.Header closeButton>
        <Modal.Title>Agregar Insumo</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Nombre Proveedor</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="Escriba el nombre del proveedor"
                name="nombreProveedor"
                defaultValue={nombreProveedor} 
                onChange={handleInputs} 
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Telefono</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="Escriba el telefono del proveedor" 
                name="telefono"
                defaultValue={telefono} 
                onChange={handleInputs} 
              />
            </Form.Group>
          </Row>

          <Form.Group className="mb-3" controlId="formGridAddress1">
            <Form.Label>Nombre del insumo</Form.Label>
            <Form.Control 
              type="text" 
              placeholder="Escriba el nombre del insumo" 
              name="nombreInsumo"
              defaultValue={nombreInsumo} 
              onChange={handleInputs} 
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formGridAddress2">
            <Form.Label>Categoría del insumo</Form.Label>
            <Form.Control 
              type="text" 
              placeholder="Escriba la categoría" 
              name="categoriaInsumo"
              defaultValue={categoriaInsumo} 
              onChange={handleInputs} 
            />
          </Form.Group>
          <InsumosAccordion {...props}/>
        </Form>
      </Modal.Body>
    </Modal>
  )
}

export default InsumosModal;