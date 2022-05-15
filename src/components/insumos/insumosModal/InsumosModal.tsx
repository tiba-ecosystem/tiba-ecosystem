import { useState } from "react";
import { Button, Col, Form, Modal, Row } from "react-bootstrap";
import { insumosDB } from "../insumosDB";
import InsumosAccordion from "./insumosAccordion/InsumosAccordion";
import InsumosStock from "./InsumosStock";

interface IModal {
  showModal: boolean,
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>
}

const InsumosModal = ({ showModal, setShowModal }: IModal) => {
  const [nombreProveedor, setNombreProveedor] = useState<string>("");
  const [telefono, setTelefono] = useState<string>("");
  const [nombreInsumo, setNombreInsumo] = useState<string>("");
  const [categoriaInsumo, setCategoriaInsumo] = useState<string>("");
  const [cantidades, setCantidades] = useState<string>("");
  const [costoInsumo, setCostoInsumo] = useState<string>("");
  const [costoUnidad, setCostoUnidad] = useState<string>("");
  const [stockInsumo, setStockInsumo] = useState<string>("");
  const [stockMinimoInsumo, setStockMinimoInsumo] = useState<string>("");
  const [largoInsumo, setLargoInsumo] = useState<string>("");
  const [altoInsumo, setAltoInsumo] = useState<string>("");
  const [unidadMedidaLargo, setUnidadMedidaLargo] = useState<string>("");
  const [unidadMedidaAlto, setUnidadMedidaAlto] = useState<string>("");

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
      case "cantidades": setCantidades(inputValue); 
        break;
      case "costoInsumo": setCostoInsumo(inputValue); 
        break;
      case "costoUnidad": setCostoUnidad(inputValue); 
        break;
      case "stockInsumo": setStockInsumo(inputValue); 
        break;
      case "stockMinimoInsumo": setStockMinimoInsumo(inputValue); 
        break;
      case "largoInsumo": setLargoInsumo(inputValue); 
        break;
      case "altoInsumo": setAltoInsumo(inputValue); 
        break;
      default: throw Error("Input doesn't exist");
    }
  }

  const handleDropdowns = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const inputValue = event.target.value;

    switch (event.target.id) {
      case "unidadMedidaLargo": setUnidadMedidaLargo(inputValue); 
        break;
      case "unidadMedidaAlto": setUnidadMedidaAlto(inputValue); 
        break;
      default: throw Error("Input doesn't exist");
    }
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

          <InsumosAccordion {...{
            setShowModal, 
            nombreProveedor,
            telefono,
            nombreInsumo, 
            categoriaInsumo,
            cantidades,
            costoInsumo,
            costoUnidad,
            largoInsumo,
            altoInsumo,
            handleInputs,
            handleDropdowns
          }} />

          <InsumosStock {...{
            stockInsumo,
            stockMinimoInsumo,
            handleInputs
          }} />

          <div className="d-grid gap-2">
            <Button variant="primary" onClick={() => {
              insumosDB.push({
                nombre: nombreInsumo,
                categoria: categoriaInsumo,
                costoUnitario: costoUnidad,
                stock: stockInsumo,
                costoInsumo: costoInsumo,
                stockMinimo: stockMinimoInsumo
              })
              setNombreProveedor("");
              setTelefono("");
              setNombreInsumo("");
              setCategoriaInsumo("");
              setCantidades("");
              setCostoInsumo("");
              setCostoUnidad("");
              setStockInsumo("");
              setStockMinimoInsumo("");
              setUnidadMedidaAlto("");
              setUnidadMedidaLargo("");
              setShowModal(false)}
            }>
              Agregar Insumo
            </Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  )
}

export default InsumosModal;