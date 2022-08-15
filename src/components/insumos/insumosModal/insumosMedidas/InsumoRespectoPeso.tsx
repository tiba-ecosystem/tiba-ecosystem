import React, { ChangeEvent, useContext } from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import { contextStateProps } from '../../../../ContextStateWrapper';

export interface IInsumosRespectoPeso {
  unidadDePeso: string;
  pesoInsumo: string;
  handleInputs: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleDropdowns: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const InsumoRespectoPesoForm = () => {
  const { unidadDePeso, pesoInsumo, handleInputs, handleDropdowns } = useContext(contextStateProps);

  const handleNumericInputs = (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    if (/^([1-9][0-9]*)$/.test(inputValue) || inputValue === '') handleInputs(event);
  };

  return (
    <>
      <Row className='mb-3'>
        <Form.Group as={Col} controlId='formGridPassword'>
          <Form.Label>Unidad de peso</Form.Label>
          <Form.Select aria-label='Unidad de peso' id='unidadDePeso' onChange={handleDropdowns}>
            <option value='gramo'>gramos</option>
            <option value='kilogramo'>kilogramos</option>
            <option value='libra'>libras</option>
            <option value='onza'>onzas</option>
          </Form.Select>
        </Form.Group>
      </Row>

      <Row className='mb-3'>
        <Form.Group as={Col} controlId='formGridEmail'>
          <Form.Label>Peso del insumo</Form.Label>
          <Form.Control
            type='text'
            name='pesoInsumo'
            value={pesoInsumo}
            onChange={handleNumericInputs}
          />
        </Form.Group>

        <Form.Group as={Col} controlId='formGridPassword'>
          <Form.Label>
            <br />
          </Form.Label>
          <Form.Control
            type='text'
            value={
              pesoInsumo && `${pesoInsumo} ${unidadDePeso}${Number(pesoInsumo) > 1 ? 's' : ''}`
            }
            disabled
          />
        </Form.Group>
      </Row>
    </>
  );
};

export default InsumoRespectoPesoForm;
