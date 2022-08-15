import React, { useContext } from 'react';
import { Form } from 'react-bootstrap';
import { contextStateProps } from '../../../ContextStateWrapper';

const InsumosStock = () => {
  const { stockInsumo, stockMinimoInsumo, handleInputs } = useContext(contextStateProps);
  return (
    <div className='mt-3'>
      <Form.Group className='mb-3' controlId='formGridAddress2'>
        <Form.Label>Stock del insumo</Form.Label>
        <Form.Control
          type='text'
          placeholder='Escriba el stock del insumo'
          name='stockInsumo'
          defaultValue={stockInsumo}
          onChange={handleInputs}
        />
      </Form.Group>
      <Form.Group className='mb-3' controlId='formGridAddress2'>
        <Form.Label>Stock minimo del insumo</Form.Label>
        <Form.Control
          type='text'
          placeholder='Escriba el stock mínimo que se debe tener del insumo'
          name='stockMinimoInsumo'
          defaultValue={stockMinimoInsumo}
          onChange={handleInputs}
        />
      </Form.Group>
    </div>
  );
};

export default InsumosStock;
