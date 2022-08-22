import React, { createContext, useState } from 'react';
import Insumos from './Insumos';

export interface ContextProps {
  showAgregarInsumoModal: boolean;
  setShowAgregarInsumoModal: React.Dispatch<React.SetStateAction<boolean>>;
  nombreProveedor: string;
  setNombreProveedor: React.Dispatch<React.SetStateAction<string>>;
  telefono: string;
  setTelefono: React.Dispatch<React.SetStateAction<string>>;
  nombreInsumo: string;
  setNombreInsumo: React.Dispatch<React.SetStateAction<string>>;
  categoriaInsumo: string;
  setCategoriaInsumo: React.Dispatch<React.SetStateAction<string>>;
  unidadesPorPaquete: string;
  setUnidadesPorPaquete: React.Dispatch<React.SetStateAction<string>>;
  costoPaquete: string;
  setCostoPaquete: React.Dispatch<React.SetStateAction<string>>;
  stockInsumo: string;
  setStockInsumo: React.Dispatch<React.SetStateAction<string>>;
  stockMinimoInsumo: string;
  setStockMinimoInsumo: React.Dispatch<React.SetStateAction<string>>;
  largoInsumo: string;
  setLargoInsumo: React.Dispatch<React.SetStateAction<string>>;
  altoInsumo: string;
  setAltoInsumo: React.Dispatch<React.SetStateAction<string>>;
  unidadDeLongitud: string;
  setUnidadDeLongitud: React.Dispatch<React.SetStateAction<string>>;
  pesoInsumo: string;
  setPesoInsumo: React.Dispatch<React.SetStateAction<string>>;
  unidadDePeso: string;
  setUnidadDePeso: React.Dispatch<React.SetStateAction<string>>;
  unidadDeVolumen: string;
  setUnidadDeVolumen: React.Dispatch<React.SetStateAction<string>>;
  volumenInsumo: string;
  setVolumenInsumo: React.Dispatch<React.SetStateAction<string>>;
  insumoRespecto: string;
  setInsumoRespecto: React.Dispatch<React.SetStateAction<string>>;
  handleInputs: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleDropdowns: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const insumosContext = createContext<ContextProps>({} as ContextProps);

const InsumosContext = () => {
  const [showAgregarInsumoModal, setShowAgregarInsumoModal] = useState(false);
  const [nombreProveedor, setNombreProveedor] = useState<string>('');
  const [telefono, setTelefono] = useState<string>('');
  const [nombreInsumo, setNombreInsumo] = useState<string>('');
  const [categoriaInsumo, setCategoriaInsumo] = useState<string>('');
  const [unidadesPorPaquete, setUnidadesPorPaquete] = useState<string>('');
  const [costoPaquete, setCostoPaquete] = useState<string>('');
  const [stockInsumo, setStockInsumo] = useState<string>('');
  const [stockMinimoInsumo, setStockMinimoInsumo] = useState<string>('');
  const [largoInsumo, setLargoInsumo] = useState<string>('');
  const [altoInsumo, setAltoInsumo] = useState<string>('');
  const [unidadDeLongitud, setUnidadDeLongitud] = useState<string>('milímetro');
  const [pesoInsumo, setPesoInsumo] = useState<string>('');
  const [unidadDePeso, setUnidadDePeso] = useState<string>('gramo');
  const [unidadDeVolumen, setUnidadDeVolumen] = useState<string>('milímetro cúbico');
  const [volumenInsumo, setVolumenInsumo] = useState<string>('');
  const [insumoRespecto, setInsumoRespecto] = useState<string>('peso');

  const handleInputs = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value: inputValue, name: inputName } = event.target;

    const inputs: { [key: string]: StringStateSetter } = {
      nombreProveedor: setNombreProveedor,
      telefono: setTelefono,
      nombreInsumo: setNombreInsumo,
      categoriaInsumo: setCategoriaInsumo,
      unidadesPorPaquete: setUnidadesPorPaquete,
      costoPaquete: setCostoPaquete,
      pesoInsumo: setPesoInsumo,
      stockInsumo: setStockInsumo,
      stockMinimoInsumo: setStockMinimoInsumo,
      largoInsumo: setLargoInsumo,
      altoInsumo: setAltoInsumo,
      volumenInsumo: setVolumenInsumo,
    };

    inputs[inputName](inputValue);
  };

  const handleDropdowns = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { value: inputValue, id: inputId } = event.target;

    const dropdowns: { [key: string]: StringStateSetter } = {
      unidadDeLongitud: setUnidadDeLongitud,
      unidadDePeso: setUnidadDePeso,
      unidadDeVolumen: setUnidadDeVolumen,
      insumoRespecto: setInsumoRespecto,
    };

    dropdowns[inputId](inputValue);
  };

  return (
    <insumosContext.Provider
      value={{
        showAgregarInsumoModal,
        setShowAgregarInsumoModal,
        nombreProveedor,
        setNombreProveedor,
        telefono,
        setTelefono,
        nombreInsumo,
        setNombreInsumo,
        categoriaInsumo,
        setCategoriaInsumo,
        unidadesPorPaquete,
        setUnidadesPorPaquete,
        costoPaquete,
        setCostoPaquete,
        stockInsumo,
        setStockInsumo,
        stockMinimoInsumo,
        setStockMinimoInsumo,
        largoInsumo,
        setLargoInsumo,
        altoInsumo,
        setAltoInsumo,
        unidadDeLongitud,
        setUnidadDeLongitud,
        pesoInsumo,
        setPesoInsumo,
        unidadDePeso,
        setUnidadDePeso,
        unidadDeVolumen,
        setUnidadDeVolumen,
        volumenInsumo,
        setVolumenInsumo,
        insumoRespecto,
        setInsumoRespecto,
        handleInputs,
        handleDropdowns,
      }}
    >
      <Insumos />
    </insumosContext.Provider>
  );
};

export default InsumosContext;
