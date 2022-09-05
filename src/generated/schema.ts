import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Decimal: any;
  Upload: any;
};

export type CategoriaDelete = {
  __typename?: 'CategoriaDelete';
  eliminacionEfectuada?: Maybe<Scalars['Boolean']>;
};

export type CategoriaInsumoDelete = {
  __typename?: 'CategoriaInsumoDelete';
  eliminacionEfectuada?: Maybe<Scalars['Boolean']>;
};

export type CategoriaInsumoMutation = {
  __typename?: 'CategoriaInsumoMutation';
  categoriaInsumo?: Maybe<CategoriaInsumoType>;
};

export type CategoriaInsumoType = {
  __typename?: 'CategoriaInsumoType';
  id: Scalars['ID'];
  insumoSet: Array<InsumoType>;
  nombre: Scalars['String'];
};

export type CategoriaInsumoUpdate = {
  __typename?: 'CategoriaInsumoUpdate';
  categoriaInsumo?: Maybe<CategoriaInsumoType>;
};

export type CategoriaMutation = {
  __typename?: 'CategoriaMutation';
  categoria?: Maybe<CategoriaType>;
};

export type CategoriaType = {
  __typename?: 'CategoriaType';
  categoriaPrincipal?: Maybe<CategoriaType>;
  categoriaSet: Array<CategoriaType>;
  descripcion: Scalars['String'];
  id: Scalars['ID'];
  imagen?: Maybe<Scalars['String']>;
  nombre: Scalars['String'];
  productoSet: Array<ProductoType>;
};

export type CategoriaUpdate = {
  __typename?: 'CategoriaUpdate';
  categoria?: Maybe<CategoriaType>;
};

export type InsumoDelete = {
  __typename?: 'InsumoDelete';
  eliminacionEfectuada?: Maybe<Scalars['Boolean']>;
};

export type InsumoMutation = {
  __typename?: 'InsumoMutation';
  insumo?: Maybe<InsumoType>;
};

export type InsumoType = {
  __typename?: 'InsumoType';
  alto?: Maybe<Scalars['Decimal']>;
  categoria: CategoriaInsumoType;
  costoUnidad: Scalars['Decimal'];
  id: Scalars['ID'];
  largo?: Maybe<Scalars['Decimal']>;
  nombre: Scalars['String'];
  peso?: Maybe<Scalars['Decimal']>;
  proveedor: ProveedorType;
  stock: Scalars['Int'];
  stockMinimo: Scalars['Int'];
  unidadMedida?: Maybe<Scalars['String']>;
  unidadPeso?: Maybe<Scalars['String']>;
  unidadesPaquete: Scalars['Int'];
};

export type InsumoUpdate = {
  __typename?: 'InsumoUpdate';
  insumo?: Maybe<InsumoType>;
};

export type Mutation = {
  __typename?: 'Mutation';
  actualizarCategoria?: Maybe<CategoriaUpdate>;
  actualizarCategoriaInsumo?: Maybe<CategoriaInsumoUpdate>;
  actualizarInsumo?: Maybe<InsumoUpdate>;
  actualizarProducto?: Maybe<ProductoUpdate>;
  actualizarProveedor?: Maybe<ProveedorUpdate>;
  eliminarCategoria?: Maybe<CategoriaDelete>;
  eliminarCategoriaInsumo?: Maybe<CategoriaInsumoDelete>;
  eliminarInsumo?: Maybe<InsumoDelete>;
  eliminarProducto?: Maybe<ProductoDelete>;
  eliminarProveedor?: Maybe<ProveedorDelete>;
  guardarCategoria?: Maybe<CategoriaMutation>;
  guardarCategoriaInsumo?: Maybe<CategoriaInsumoMutation>;
  guardarInsumo?: Maybe<InsumoMutation>;
  guardarProducto?: Maybe<ProductoMutation>;
  guardarProveedor?: Maybe<ProveedorMutation>;
  revokeToken?: Maybe<Revoke>;
  /** Obtain JSON Web Token mutation */
  tokenAuth?: Maybe<ObtainJsonWebToken>;
};


export type MutationActualizarCategoriaArgs = {
  categoriaPrincipal?: InputMaybe<Scalars['Int']>;
  descripcion?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  imagen?: InputMaybe<Scalars['Upload']>;
  nombre?: InputMaybe<Scalars['String']>;
};


export type MutationActualizarCategoriaInsumoArgs = {
  id?: InputMaybe<Scalars['ID']>;
  nombre: Scalars['String'];
};


export type MutationActualizarInsumoArgs = {
  alto?: InputMaybe<Scalars['Float']>;
  categoria?: InputMaybe<Scalars['Int']>;
  costoUnidad?: InputMaybe<Scalars['Float']>;
  id?: InputMaybe<Scalars['ID']>;
  largo?: InputMaybe<Scalars['Float']>;
  nombre?: InputMaybe<Scalars['String']>;
  peso?: InputMaybe<Scalars['Float']>;
  proveedor?: InputMaybe<Scalars['Int']>;
  stock?: InputMaybe<Scalars['Int']>;
  stockMinimo?: InputMaybe<Scalars['Int']>;
  unidadMedida?: InputMaybe<Scalars['String']>;
  unidadPeso?: InputMaybe<Scalars['String']>;
  unidadesPaquete?: InputMaybe<Scalars['Int']>;
};


export type MutationActualizarProductoArgs = {
  categoria?: InputMaybe<Scalars['Int']>;
  costoUnitario?: InputMaybe<Scalars['Float']>;
  descripcion?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  imagen1?: InputMaybe<Scalars['Upload']>;
  imagen2?: InputMaybe<Scalars['Upload']>;
  nombre?: InputMaybe<Scalars['String']>;
  precioUnitario?: InputMaybe<Scalars['Float']>;
  proveedor?: InputMaybe<Scalars['Int']>;
  stock?: InputMaybe<Scalars['Int']>;
  stockMinimo?: InputMaybe<Scalars['String']>;
};


export type MutationActualizarProveedorArgs = {
  id?: InputMaybe<Scalars['ID']>;
  nombre?: InputMaybe<Scalars['String']>;
  telefono?: InputMaybe<Scalars['String']>;
};


export type MutationEliminarCategoriaArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type MutationEliminarCategoriaInsumoArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type MutationEliminarInsumoArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type MutationEliminarProductoArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type MutationEliminarProveedorArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type MutationGuardarCategoriaArgs = {
  categoriaPrincipal?: InputMaybe<Scalars['Int']>;
  descripcion: Scalars['String'];
  imagen?: InputMaybe<Scalars['Upload']>;
  nombre: Scalars['String'];
};


export type MutationGuardarCategoriaInsumoArgs = {
  nombre: Scalars['String'];
};


export type MutationGuardarInsumoArgs = {
  alto?: InputMaybe<Scalars['Float']>;
  categoria: Scalars['Int'];
  costoUnidad: Scalars['Float'];
  largo?: InputMaybe<Scalars['Float']>;
  nombre: Scalars['String'];
  peso?: InputMaybe<Scalars['Float']>;
  proveedor: Scalars['Int'];
  stock: Scalars['Int'];
  stockMinimo: Scalars['Int'];
  unidadMedida?: InputMaybe<Scalars['String']>;
  unidadPeso?: InputMaybe<Scalars['String']>;
  unidadesPaquete: Scalars['Int'];
};


export type MutationGuardarProductoArgs = {
  categoria: Scalars['Int'];
  costoUnitario: Scalars['Float'];
  descripcion: Scalars['String'];
  imagen1: Scalars['Upload'];
  imagen2?: InputMaybe<Scalars['Upload']>;
  nombre: Scalars['String'];
  precioUnitario: Scalars['Float'];
  proveedor: Scalars['Int'];
  stock: Scalars['Int'];
  stockMinimo: Scalars['String'];
};


export type MutationGuardarProveedorArgs = {
  nombre: Scalars['String'];
  telefono: Scalars['String'];
};


export type MutationRevokeTokenArgs = {
  refreshToken: Scalars['String'];
};


export type MutationTokenAuthArgs = {
  password: Scalars['String'];
  username: Scalars['String'];
};

/** Obtain JSON Web Token mutation */
export type ObtainJsonWebToken = {
  __typename?: 'ObtainJSONWebToken';
  token?: Maybe<Scalars['String']>;
};

export type ProductoDelete = {
  __typename?: 'ProductoDelete';
  eliminacionEfectuada?: Maybe<Scalars['Boolean']>;
};

export type ProductoMutation = {
  __typename?: 'ProductoMutation';
  producto?: Maybe<ProductoType>;
};

export type ProductoType = {
  __typename?: 'ProductoType';
  categoria: CategoriaType;
  costoUnitario: Scalars['Decimal'];
  descripcion: Scalars['String'];
  id: Scalars['ID'];
  imagen1: Scalars['String'];
  imagen2?: Maybe<Scalars['String']>;
  nombre: Scalars['String'];
  precioUnitario: Scalars['Decimal'];
  proveedor: ProveedorType;
  stock: Scalars['Int'];
  stockMinimo: Scalars['Int'];
};

export type ProductoUpdate = {
  __typename?: 'ProductoUpdate';
  producto?: Maybe<ProductoType>;
};

export type ProveedorDelete = {
  __typename?: 'ProveedorDelete';
  eliminacionEfectuada?: Maybe<Scalars['Boolean']>;
};

export type ProveedorMutation = {
  __typename?: 'ProveedorMutation';
  proveedor?: Maybe<ProveedorType>;
};

export type ProveedorType = {
  __typename?: 'ProveedorType';
  id: Scalars['ID'];
  insumoSet: Array<InsumoType>;
  nombre: Scalars['String'];
  productoSet: Array<ProductoType>;
  telefono: Scalars['String'];
};

export type ProveedorUpdate = {
  __typename?: 'ProveedorUpdate';
  proveedor?: Maybe<ProveedorType>;
};

export type Query = {
  __typename?: 'Query';
  categoria?: Maybe<CategoriaType>;
  categoriaInsumo?: Maybe<CategoriaInsumoType>;
  categorias?: Maybe<Array<Maybe<CategoriaType>>>;
  categoriasInsumos?: Maybe<Array<Maybe<CategoriaInsumoType>>>;
  insumo?: Maybe<InsumoType>;
  insumos?: Maybe<Array<Maybe<InsumoType>>>;
  producto?: Maybe<ProductoType>;
  productos?: Maybe<Array<Maybe<ProductoType>>>;
  proveedor?: Maybe<ProveedorType>;
  proveedores?: Maybe<Array<Maybe<ProveedorType>>>;
};


export type QueryCategoriaArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryCategoriaInsumoArgs = {
  id: Scalars['ID'];
};


export type QueryInsumoArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryProductoArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryProveedorArgs = {
  id?: InputMaybe<Scalars['ID']>;
};

export type Revoke = {
  __typename?: 'Revoke';
  revoked?: Maybe<Scalars['Int']>;
};

export type LoginMutationVariables = Exact<{
  username: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = { __typename?: 'Mutation', tokenAuth?: { __typename?: 'ObtainJSONWebToken', token?: string | null } | null };

export type ObtenerProveedoresQueryVariables = Exact<{ [key: string]: never; }>;


export type ObtenerProveedoresQuery = { __typename?: 'Query', proveedores?: Array<{ __typename?: 'ProveedorType', id: string, nombre: string, telefono: string, insumoSet: Array<{ __typename?: 'InsumoType', id: string }>, productoSet: Array<{ __typename?: 'ProductoType', id: string }> } | null> | null };


export const LoginDocument = gql`
    mutation Login($username: String!, $password: String!) {
  tokenAuth(username: $username, password: $password) {
    token
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      username: // value for 'username'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const ObtenerProveedoresDocument = gql`
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

/**
 * __useObtenerProveedoresQuery__
 *
 * To run a query within a React component, call `useObtenerProveedoresQuery` and pass it any options that fit your needs.
 * When your component renders, `useObtenerProveedoresQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useObtenerProveedoresQuery({
 *   variables: {
 *   },
 * });
 */
export function useObtenerProveedoresQuery(baseOptions?: Apollo.QueryHookOptions<ObtenerProveedoresQuery, ObtenerProveedoresQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ObtenerProveedoresQuery, ObtenerProveedoresQueryVariables>(ObtenerProveedoresDocument, options);
      }
export function useObtenerProveedoresLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ObtenerProveedoresQuery, ObtenerProveedoresQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ObtenerProveedoresQuery, ObtenerProveedoresQueryVariables>(ObtenerProveedoresDocument, options);
        }
export type ObtenerProveedoresQueryHookResult = ReturnType<typeof useObtenerProveedoresQuery>;
export type ObtenerProveedoresLazyQueryHookResult = ReturnType<typeof useObtenerProveedoresLazyQuery>;
export type ObtenerProveedoresQueryResult = Apollo.QueryResult<ObtenerProveedoresQuery, ObtenerProveedoresQueryVariables>;