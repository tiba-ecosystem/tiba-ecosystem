import React from "react";
import { Accordion } from "react-bootstrap"
import InsumoRespectoCantidades from "./InsumoRespectoCantidades";
import InsumoRespectoLongitud from "./InsumoRespectoLongitud";
import InsumoRespectoPesoForm from "./InsumoRespectoPeso";
import InsumoRespectoVolumen from "./InsumoRespectoVolumen";

export interface IInsumosAccordion {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>
  nombreProveedor: string, 
  telefono: string, 
  nombreInsumo: string, 
  categoriaInsumo: string,
  cantidades: string,
  costoInsumo: string,
  costoUnidad: string,
  largoInsumo: string,
  altoInsumo: string,
  handleInputs: (event: React.ChangeEvent<HTMLInputElement>) => void,
  handleDropdowns: (event: React.ChangeEvent<HTMLSelectElement>) => void, 
}

const InsumosAccordion = ({...props}: IInsumosAccordion) => {
  const {
    cantidades,
    costoInsumo,
    costoUnidad,
    altoInsumo,
    largoInsumo,
    handleInputs,
    handleDropdowns
  } = props;

  return (
    <Accordion defaultActiveKey="0">
      <InsumoRespectoCantidades {...{
        cantidades,
        costoInsumo,
        costoUnidad,
        handleInputs
      }}/>
      <InsumoRespectoPesoForm />
      <InsumoRespectoLongitud {...{
        cantidades,
        costoInsumo,
        costoUnidad,
        altoInsumo,
        largoInsumo,
        handleInputs,
        handleDropdowns
      }} />
      <InsumoRespectoVolumen />
    </Accordion>
  )
}

export default InsumosAccordion;