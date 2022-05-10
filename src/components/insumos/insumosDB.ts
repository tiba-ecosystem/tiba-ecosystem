export interface IInsumo {
  nombre: string,
  categoria: string,
  costoUnitario: string,
  stock: string,
  costoInsumo: string,
  stockMinimo: string
}

export const insumosDB: IInsumo[] = [
  {
    nombre: "Atun marimar",
    categoria: "no perecederos",
    costoUnitario: "950",
    stock: "2000",
    costoInsumo: "2000",
    stockMinimo: "100"
  },
  {
    nombre: "Atun el salado",
    categoria: "no perecederos",
    costoUnitario: "1000",
    stock: "3000",
    costoInsumo: "2500",
    stockMinimo: "50"
  }
];