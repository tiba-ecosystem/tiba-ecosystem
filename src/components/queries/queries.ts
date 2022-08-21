import { gql } from '@apollo/client';

export const PROVEEDORES = gql`
  query ObtenerProveedores {
    proveedores {
      id
      nombre
      telefono
      insumoSet {
        id
      }
      productoSet {
        id
      }
    }
  }
`;
