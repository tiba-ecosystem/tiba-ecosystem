export interface IInsumo {
  nombre: string,
  categoria: string,
  // costoUnitario: string,
  stock: string,
  costoPaquete: string,
  stockMinimo: string
}

export const insumosDB: IInsumo[] = [
  {
    nombre: "Atun marimar",
    categoria: "no perecederos",
    // costoUnitario: "950",
    stock: "2000",
    costoPaquete: "2000",
    stockMinimo: "100"
  },
  {
    nombre: "Atun el salado",
    categoria: "no perecederos",
    // costoUnitario: "1000",
    stock: "3000",
    costoPaquete: "2500",
    stockMinimo: "50"
  }
];