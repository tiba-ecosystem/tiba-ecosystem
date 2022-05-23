import React from "react";
import { Accordion } from "react-bootstrap"
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
    handleInputs,
    handleDropdowns
  } = props;

  return (
    <Accordion defaultActiveKey="0">
      <InsumoRespectoPesoForm {...{
        pesoInsumo,
        handleInputs,
        handleDropdowns
      }}/>
      <InsumoRespectoLongitud {...{
        unidadDeMedida,
        altoInsumo,
        largoInsumo,
        handleInputs,
        handleDropdowns
      }} />
      <InsumoRespectoVolumen {...{
        volumenInsumo,
        handleInputs,
        handleDropdowns
      }}/>
    </Accordion>
  )
}

export default InsumosAccordion;