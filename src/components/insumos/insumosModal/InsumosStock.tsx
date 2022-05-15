import { Form } from "react-bootstrap"

interface IInsumosStock {
  stockInsumo: string,
  stockMinimoInsumo: string,
  handleInputs: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const InsumosStock = ({...props}: IInsumosStock) => {
  const {stockInsumo, stockMinimoInsumo, handleInputs} = props;
  return (
    <div className="mt-3">
      <Form.Group className="mb-3" controlId="formGridAddress2">
        <Form.Label>Stock del insumo</Form.Label>
        <Form.Control 
          type="text" 
          placeholder="Escriba el stock del insumo" 
          name="stockInsumo"
          defaultValue={stockInsumo} 
          onChange={handleInputs} 
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGridAddress2">
        <Form.Label>Stock minimo del insumo</Form.Label>
        <Form.Control 
          type="text" 
          placeholder="Escriba el stock mínimo que se debe tener del insumo" 
          name="stockMinimoInsumo"
          defaultValue={stockMinimoInsumo} 
          onChange={handleInputs} 
        />
      </Form.Group>
    </div>
  )
}

export default InsumosStock;