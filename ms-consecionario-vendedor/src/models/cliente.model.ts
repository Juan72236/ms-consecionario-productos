import {Entity, model, property, belongsTo} from '@loopback/repository';
import {Vendedor} from './vendedor.model';

@model({
  settings: {
    foreignKeys: {
      fk_Cliente_IdVendedor: {
        name: 'fk_Cliente_IdVendedor',
        entity: 'Vendedor',
        entityKey: 'id',
        foreignKey: 'IdVendedor'
      },
    },
  },
})
export class Cliente extends Entity {
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
  Nombre: string;

  @property({
    type: 'string',
    required: true,
  })
  Documento: string;

  @property({
    type: 'string',
    required: true,
  })
  Celular: string;

  @property({
    type: 'string',
    required: true,
  })
  Correo: string;

  @belongsTo(() => Vendedor, {name: 'clientePerteneceAUnVendedor'})
  IdVendedor: number;

  constructor(data?: Partial<Cliente>) {
    super(data);
  }
}

export interface ClienteRelations {
  // describe navigational properties here
}

export type ClienteWithRelations = Cliente & ClienteRelations;
