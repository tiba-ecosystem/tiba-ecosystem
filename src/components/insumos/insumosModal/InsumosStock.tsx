import { useState } from "react";
import { Form } from "react-bootstrap"

const InsumosStock = () => {
  const [stockInsumo, setStockInsumo] = useState<string>("");
  const [stockMinimoInsumo, setStockMinimoInsumo] = useState<string>("");

  const handleInputs = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;

    switch (event.target.name) {
      case "stockInsumo": setStockInsumo(inputValue); 
        break;
      case "stockMinimoInsumo": setStockMinimoInsumo(inputValue); 
        break;
      default: throw Error("Input doesn't exist");
    }
  }

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