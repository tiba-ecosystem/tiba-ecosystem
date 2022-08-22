import React, { useContext, useEffect, useState } from 'react';
import { Button, Col, Form, Modal, Row } from 'react-bootstrap';
import DatalistInput from 'react-datalist-input';
import { insumosDB, proveedoresDB } from '../DB';
import { insumosContext } from '../InsumosContext';
import InsumoCantidades from './insumosMedidas/InsumoCantidades';
import InsumoRespectoLongitud from './insumosMedidas/InsumoRespectoLongitud';
import InsumoRespectoPesoForm from './insumosMedidas/InsumoRespectoPeso';
import InsumoRespectoVolumen from './insumosMedidas/InsumoRespectoVolumen';
import InsumosStock from './InsumosStock';

const InsumosModal = () => {
  const [value, setValue] = useState('');
  const [medidaComponent, setMedidaComponent] = useState(<InsumoRespectoPesoForm />);

  const {
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
    setUnidadesPorPaquete,
    costoPaquete,
    setCostoPaquete,
    stockInsumo,
    setStockInsumo,
    stockMinimoInsumo,
    setStockMinimoInsumo,
    setUnidadDeLongitud,
    insumoRespecto,
    handleInputs,
    handleDropdowns,
  } = useContext(insumosContext);

  useEffect(() => {
    const yay: { [key: string]: JSX.Element } = {
      peso: <InsumoRespectoPesoForm />,
      longitud: <InsumoRespectoLongitud />,
      volumen: <InsumoRespectoVolumen />,
    };
    setMedidaComponent(yay[insumoRespecto]);
  }, [insumoRespecto]);

  return (
    <Modal show={showAgregarInsumoModal} onHide={() => setShowAgregarInsumoModal(false)}>
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

          {medidaComponent}

          <hr style={{ marginTop: '30px' }} />

          <InsumoCantidades />

          <hr style={{ marginTop: '30px' }} />

          <InsumosStock />

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
                setShowAgregarInsumoModal(false);
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
