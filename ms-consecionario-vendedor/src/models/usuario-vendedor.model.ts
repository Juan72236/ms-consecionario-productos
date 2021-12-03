import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {
    foreignKeys: {
      fk_usuario_vendedor_IdVendedor: {
        name: 'fk_usuario_vendedor_IdVendedor',
        entity: 'Vendedor',
        entityKey: 'id',
        foreignKey: 'IdVendedor'
      },
    },
  },
})
export class UsuarioVendedor extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  Usuario: string;

  @property({
    type: 'string',
    required: true,
  })
  Clave: string;

  @property({
    type: 'number',
  })
  IdVendedor?: number;

  constructor(data?: Partial<UsuarioVendedor>) {
    super(data);
  }
}

export interface UsuarioVendedorRelations {
  // describe navigational properties here
}

export type UsuarioVendedorWithRelations = UsuarioVendedor & UsuarioVendedorRelations;
