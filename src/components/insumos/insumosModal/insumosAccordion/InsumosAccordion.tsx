import React from "react";
import { Accordion } from "react-bootstrap"
import InsumoRespectoCantidadesForm from "./InsumoRespectoCantidadesForm";
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
  handleInputs: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const InsumosAccordion = ({...props}: IInsumosAccordion) => {
  const {cantidades, costoInsumo, costoUnidad, handleInputs} = props;
  return (
    <Accordion defaultActiveKey="0">
      <InsumoRespectoCantidadesForm {...{
        cantidades,
        costoInsumo,
        costoUnidad,
        handleInputs
      }}/>
      <InsumoRespectoPesoForm />
      <InsumoRespectoLongitud />
      <InsumoRespectoVolumen />
    </Accordion>
  )
}

export default InsumosAccordion;