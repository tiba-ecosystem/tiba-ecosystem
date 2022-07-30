export interface IInsumo {
  nombreInsumo: string,
  categoria: string,
  // costoUnitario: string,
  stock: string,
  costoPaquete: string,
  stockMinimo: string
}

export interface IProveedor {
  nombreProveedor: string,
  telefono: string,
}

export const insumosDB: IInsumo[] = [
  {
    nombreInsumo: "Atun marimar",
    categoria: "no perecederos",
    // costoUnitario: "950",
    stock: "2000",
    costoPaquete: "2000",
    stockMinimo: "100"
  },
  {
    nombreInsumo: "Atun el salado",
    categoria: "no perecederos",
    // costoUnitario: "1000",
    stock: "3000",
    costoPaquete: "2500",
    stockMinimo: "50"
  }
];

export const proveedoresDB: IProveedor[] = [
  {
    nombreProveedor: "Atunes exquisitos",
    telefono: "3214567743"   
  },
  {
    nombreProveedor: "Manjares deliciosos",
    telefono: "1234567890"
  }
];