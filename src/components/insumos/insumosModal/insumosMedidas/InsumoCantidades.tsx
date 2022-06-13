import { ChangeEvent } from "react";
import { Col, Form, Row } from "react-bootstrap";

export interface IInsumosRespectoCantidades {
  unidadesPorPaquete: string,
  costoPaquete: string,
  handleInputs: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const InsumoCantidades = ({...props}: IInsumosRespectoCantidades) => {
  const {unidadesPorPaquete, costoPaquete, /* costoUnidad, */ handleInputs} = props;
  
  const costoPorUnidad = Number(costoPaquete) / Number(unidadesPorPaquete);

  const handleNumericInputs = (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    if (/^([1-9][0-9]*)$/.test(inputValue) || inputValue === "") handleInputs(event)
  }

  var formatter = new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
  });

  var formatterNumber = new Intl.NumberFormat('es-CO');
  
  return (
    <div className="mt-3">
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Unidades por paquete (u/p)</Form.Label>
          <Form.Control 
            type="text" 
            name="unidadesPorPaquete"
            value={unidadesPorPaquete}
            onChange={handleNumericInputs}
            // pattern="^[0-9]+$" 
          />
          {/* {
            unidadesPorPaquete && ( */}
            {/* )
          } */}
        </Form.Group>
        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label><br /></Form.Label>
          <Form.Control 
            type="text" 
            value={`${formatterNumber.format(Number(unidadesPorPaquete))} u/p`}
            disabled 
          />
        </Form.Group>

        {/* <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Costo por paquete</Form.Label>
          <Form.Control 
            type="text" 
            name="costoPaquete"
            value={costoPaquete} 
            onChange={handleNumericInputs}  
          />
          {
            unidadesPorPaquete && (
              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label><br /></Form.Label>
                <Form.Control 
                  type="text" 
                  value={formatter.format(Number(costoPaquete))}
                  disabled 
                />
              </Form.Group>
            )
          }
        </Form.Group> */}
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Costo por paquete (pesos)</Form.Label>
          <Form.Control 
            type="text" 
            name="costoPaquete"
            value={costoPaquete} 
            onChange={handleNumericInputs}  
          />
          {/* {
            unidadesPorPaquete && ( */}
            {/* )
          } */}
        </Form.Group>
        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label><br /></Form.Label>
          <Form.Control 
            type="text" 
            value={formatter.format(Number(costoPaquete))}
            disabled 
          />
        </Form.Group>
      </Row>
      {
        costoPorUnidad && costoPorUnidad !== Infinity ? (
          <Form.Group className="mb-3" controlId="formGridAddress1">
            <Form.Label>Costo por unidad</Form.Label>
            <Form.Control 
              type="text" 
              name="costoUnidad"
              value={`$${costoPorUnidad.toFixed(2)}`} 
              disabled
            />
          </Form.Group>
        ) : null
      }
    </div>
  )
}

export default InsumoCantidades;