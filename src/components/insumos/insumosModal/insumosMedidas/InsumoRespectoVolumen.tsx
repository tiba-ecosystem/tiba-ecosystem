import { ChangeEvent } from 'react';
import { Col, Form, Row } from 'react-bootstrap';

export interface IInsumosRespectoVolumen {
  unidadDeVolumen: string;
  volumenInsumo: string;
  handleInputs: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleDropdowns: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const InsumoRespectoVolumen = ({ ...props }: IInsumosRespectoVolumen) => {
  const { unidadDeVolumen, volumenInsumo, handleInputs, handleDropdowns } = props;

  const handleNumericInputs = (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    if (/^([1-9][0-9]*)$/.test(inputValue) || inputValue === '') handleInputs(event);
  };

  interface IUnidadDeVolumenPlural {
    [i: string]: string;
  }

  const unidadesDeVolumenPlural: IUnidadDeVolumenPlural = {
    'milímetro cúbico': 'milímetros cúbicos',
    'centímetro cúbico': 'centímetros cúbicos',
    'metro cúbico': 'metros cúbicos',
  };

  return (
    <>
      <Row className='mb-3'>
        <Form.Group as={Col} controlId='formGridPassword'>
          <Form.Label>Unidad de volumen</Form.Label>
          <Form.Select
            aria-label='Unidad de volumen'
            id='unidadDeVolumen'
            onChange={handleDropdowns}
          >
            <option value='milímetro cúbico'>milímetros cúbicos</option>
            <option value='centímetro cúbico'>centímetros cúbicos</option>
            <option value='metro cúbico'>metros cúbicos</option>
          </Form.Select>
        </Form.Group>
      </Row>
      <Row className='mb-3'>
        <Form.Group as={Col} controlId='formGridEmail'>
          <Form.Label>Volumen del insumo</Form.Label>
          <Form.Control
            type='text'
            name='volumenInsumo'
            value={volumenInsumo}
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
              volumenInsumo &&
              `${volumenInsumo} ${
                Number(volumenInsumo) > 1
                  ? unidadesDeVolumenPlural[unidadDeVolumen]
                  : unidadDeVolumen
              }`
            }
            disabled
          />
        </Form.Group>
      </Row>
    </>
  );
};

export default InsumoRespectoVolumen;
