import { Accordion } from 'react-bootstrap';
import InsumoCantidades, { IInsumosRespectoCantidades } from './InsumoCantidades';

const InsumoRespectoCantidatesForm = ({...props}: IInsumosRespectoCantidades) => {
  return (
    <Accordion.Item eventKey="0">
      <Accordion.Header>Agregar insumo con respecto a cantidades</Accordion.Header>
      <Accordion.Body>
        <InsumoCantidades {...{...props}} />
      </Accordion.Body>
    </Accordion.Item>
  )
}

export default InsumoRespectoCantidatesForm