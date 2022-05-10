import React from "react";
import { Accordion } from "react-bootstrap"
import InsumoRespectoCantidadesForm from "./InsumoRespectoCantidadesForm";
import InsumoRespectoLongitud from "./InsumoRespectoLongitud";
import InsumoRespectoPesoForm from "./InsumoRespectoPeso";
import InsumoRespectoVolumen from "./InsumoRespectoVolumen";

export interface IModal {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>
  nombreProveedor: string, 
  telefono: string, 
  nombreInsumo: string, 
  categoriaInsumo: string
}

const InsumosAccordion = ({ ...props }: IModal) => {
  return (
    <Accordion defaultActiveKey="0">
      <InsumoRespectoCantidadesForm {...props}/>
      <InsumoRespectoPesoForm />
      <InsumoRespectoLongitud />
      <InsumoRespectoVolumen />
    </Accordion>
  )
}

export default InsumosAccordion;