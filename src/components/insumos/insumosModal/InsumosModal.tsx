import React, { useState } from 'react';
import { Button, Col, Form, Modal, Row } from 'react-bootstrap';
import DatalistInput from 'react-datalist-input';
import { insumosDB, proveedoresDB } from '../DB';
import InsumoCantidades from './insumosMedidas/InsumoCantidades';
import InsumoRespectoLongitud from './insumosMedidas/InsumoRespectoLongitud';
import InsumoRespectoPesoForm from './insumosMedidas/InsumoRespectoPeso';
import InsumoRespectoVolumen from './insumosMedidas/InsumoRespectoVolumen';
import InsumosStock from './InsumosStock';

interface IModal {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const InsumosModal = ({ showModal, setShowModal }: IModal) => {
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

  const getComponentInsumosRespecto = (unidadMedida: string) => {
    let componentToReturn;
    if (unidadMedida === 'peso') {
      componentToReturn = (
        <InsumoRespectoPesoForm
          {...{
            unidadDePeso,
            pesoInsumo,
            handleInputs,
            handleDropdowns,
          }}
        />
      );
    } else if (unidadMedida === 'longitud') {
      componentToReturn = (
        <InsumoRespectoLongitud
          {...{
            unidadDeLongitud,
            altoInsumo,
            largoInsumo,
            handleInputs,
            handleDropdowns,
          }}
        />
      );
    } else if (unidadMedida === 'volumen') {
      componentToReturn = (
        <InsumoRespectoVolumen
          {...{
            unidadDeVolumen,
            volumenInsumo,
            handleInputs,
            handleDropdowns,
          }}
        />
      );
    } else {
      componentToReturn = null;
    }
    return componentToReturn;
  };

  const [value, setValue] = useState('');

  return (
    <Modal show={showModal} onHide={() => setShowModal(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Agregar Insumo</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form>
          <DatalistInput
            label={<p style={{ marginBottom: '0.5rem' }}>Busque su proveedor</p>}
            value={value}
            setValue={setValue}
            items={proveedoresDB.map((i) => {
              return {
                id: `${i.nombreProveedor}-${i.telefono}`,
                value: i.nombreProveedor,
              };
            })}
            onSelect={(item) => {
              const [nombreProveedor1, telefono1] = item.id.split('-');
              setNombreProveedor(nombreProveedor1);
              setTelefono(telefono1);
            }}
            className='mb-3'
          />
          <Row className='mb-3'>
            <Form.Group as={Col} controlId='formGridEmail'>
              <Form.Label>Nombre Proveedor</Form.Label>
              <Form.Control
                disabled
                type='text'
                placeholder='ej. Pedro Pérez'
                name='nombreProveedor'
                defaultValue={nombreProveedor}
                onChange={handleInputs}
              />
            </Form.Group>

            <Form.Group as={Col} controlId='formGridPassword'>
              <Form.Label>Telefono</Form.Label>
              <Form.Control
                disabled
                type='text'
                placeholder='ej. 3120987654'
                name='telefono'
                defaultValue={telefono}
                onChange={handleInputs}
              />
            </Form.Group>
          </Row>

          <Form.Group className='mb-3' controlId='formGridAddress1'>
            <Form.Label>Nombre del insumo</Form.Label>
            <Form.Control
              type='text'
              placeholder='ej. Atún Marimar'
              name='nombreInsumo'
              defaultValue={nombreInsumo}
              onChange={handleInputs}
            />
          </Form.Group>

          <Form.Group className='mb-3' controlId='formGridAddress2'>
            <Form.Label>Categoría del insumo</Form.Label>
            <Form.Control
              type='text'
              placeholder='ej. no perecederos'
              name='categoriaInsumo'
              defaultValue={categoriaInsumo}
              onChange={handleInputs}
            />
          </Form.Group>

          <hr style={{ marginTop: '30px' }} />

          <Form.Group as={Col} controlId='formGridPassword'>
            <Form.Label>Agregar insumo respecto a</Form.Label>
            <Form.Select
              aria-label='insumo respecto a'
              id='insumoRespecto'
              onChange={handleDropdowns}
            >
              <option value='peso'>peso</option>
              <option value='longitud'>longitud</option>
              <option value='volumen'>volumen</option>
            </Form.Select>
          </Form.Group>
          <br />
          {getComponentInsumosRespecto(insumoRespecto)}

          <hr style={{ marginTop: '30px' }} />

          <InsumoCantidades {...{ unidadesPorPaquete, costoPaquete, handleInputs }} />

          <hr style={{ marginTop: '30px' }} />

          <InsumosStock
            {...{
              stockInsumo,
              stockMinimoInsumo,
              handleInputs,
            }}
          />

          <div className='d-grid gap-2'>
            <Button
              variant='primary'
              onClick={() => {
                insumosDB.push({
                  nombreInsumo: nombreInsumo,
                  categoria: categoriaInsumo,
                  stock: stockInsumo,
                  costoPaquete: costoPaquete,
                  stockMinimo: stockMinimoInsumo,
                });
                setNombreProveedor('');
                setTelefono('');
                setNombreInsumo('');
                setCategoriaInsumo('');
                setUnidadesPorPaquete('');
                setCostoPaquete('');
                setStockInsumo('');
                setStockMinimoInsumo('');
                setUnidadDeLongitud('');
                setShowModal(false);
              }}
            >
              Agregar Insumo
            </Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default InsumosModal;
