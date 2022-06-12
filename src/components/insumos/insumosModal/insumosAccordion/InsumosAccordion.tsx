import React from "react";
import { Col, Form } from "react-bootstrap"
import InsumoRespectoLongitud from "./InsumoRespectoLongitud";
import InsumoRespectoPesoForm from "./InsumoRespectoPeso";
import InsumoRespectoVolumen from "./InsumoRespectoVolumen";

export interface IInsumosAccordion {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>
  nombreProveedor: string, 
  telefono: string, 
  nombreInsumo: string, 
  categoriaInsumo: string,
  pesoInsumo: string,
  volumenInsumo: string,
  unidadDeMedida: string,
  largoInsumo: string,
  altoInsumo: string,
  insumoRespecto: string,
  handleInputs: (event: React.ChangeEvent<HTMLInputElement>) => void,
  handleDropdowns: (event: React.ChangeEvent<HTMLSelectElement>) => void, 
}

const InsumosAccordion = ({...props}: IInsumosAccordion) => {
  const {
    altoInsumo,
    largoInsumo,
    pesoInsumo,
    volumenInsumo,
    unidadDeMedida,
    insumoRespecto,
    handleInputs,
    handleDropdowns
  } = props;

  return (
    <>
      <Form.Group as={Col} controlId="formGridPassword">
        <Form.Label>Agregar insumo respecto a</Form.Label>
        <Form.Select 
          aria-label="insumo respecto a"
          id="insumoRespecto" 
          onChange={handleDropdowns}
        >
          <option value="peso">peso</option>
          <option value="longitud">longitud</option>
          <option value="volumen">volumen</option>
        </Form.Select>
      </Form.Group>
      <br />
      {
        insumoRespecto === "peso" ? (
          <InsumoRespectoPesoForm {...{
            pesoInsumo,
            handleInputs,
            handleDropdowns
          }}/>  
        ) : insumoRespecto === "longitud" ? (
          <InsumoRespectoLongitud {...{
            unidadDeMedida,
            altoInsumo,
            largoInsumo,
            handleInputs,
            handleDropdowns
          }} />
        ) : insumoRespecto === "volumen" ? (
          <InsumoRespectoVolumen {...{
            volumenInsumo,
            handleInputs,
            handleDropdowns
          }}/>
        ) : null
      }
    </>
  )
}

export default InsumosAccordion;