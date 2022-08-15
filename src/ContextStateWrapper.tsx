import React, { createContext, useState } from 'react';

export interface ContextProps {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
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

export const contextStateProps = createContext<ContextProps>({} as ContextProps);

const ContextStateWrapper = (props: any) => {
  const [showModal, setShowModal] = useState(false);
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
    const inputValue = event.target.value;

    switch (event.target.name) {
      case 'nombreProveedor':
        setNombreProveedor(inputValue);
        break;
      case 'telefono':
        setTelefono(inputValue);
        break;
      case 'nombreInsumo':
        setNombreInsumo(inputValue);
        break;
      case 'categoriaInsumo':
        setCategoriaInsumo(inputValue);
        break;
      case 'unidadesPorPaquete':
        setUnidadesPorPaquete(inputValue);
        break;
      case 'costoPaquete':
        setCostoPaquete(inputValue);
        break;
      case 'pesoInsumo':
        setPesoInsumo(inputValue);
        break;
      case 'stockInsumo':
        setStockInsumo(inputValue);
        break;
      case 'stockMinimoInsumo':
        setStockMinimoInsumo(inputValue);
        break;
      case 'largoInsumo':
        setLargoInsumo(inputValue);
        break;
      case 'altoInsumo':
        setAltoInsumo(inputValue);
        break;
      case 'volumenInsumo':
        setVolumenInsumo(inputValue);
        break;
      default:
        throw Error('Input does not exist');
    }
  };

  const handleDropdowns = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const inputValue = event.target.value;

    switch (event.target.id) {
      case 'unidadDeLongitud':
        setUnidadDeLongitud(inputValue);
        break;
      case 'unidadDePeso':
        setUnidadDePeso(inputValue);
        break;
      case 'unidadDeVolumen':
        setUnidadDeVolumen(inputValue);
        break;
      case 'insumoRespecto':
        setInsumoRespecto(inputValue);
        break;
      default:
        throw Error('Input does not exist');
    }
  };

  return (
    <contextStateProps.Provider
      value={{
        showModal,
        setShowModal,
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
      {props.children}
    </contextStateProps.Provider>
  );
};

export default ContextStateWrapper;
