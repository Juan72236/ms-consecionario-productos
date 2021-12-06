import {Entity, model, property, belongsTo} from '@loopback/repository';
import {Factura} from './factura.model';

@model({
  settings: {
    foreignKeys: {
      fk_Ventas_IdFactura: {
        name: 'fk_Ventas_IdFactura',
        entity: 'Factura',
        entityKey: 'id',
        foreignKey: 'IdFactura'
      },
    },
  },
})
export class Ventas extends Entity {
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
  Placa: string;

  @property({
    type: 'number',
    required: true,
  })
  IdVendedor: number;

  @property({
    type: 'number',
    required: true,
  })
  IdCliente: number;

  @property({
    type: 'number',
    required: true,
  })
  IdVehiculo: number;

  @belongsTo(() => Factura, {name: 'ventaLeCorrespondeUnaFactura'})
  IdFactura: number;

  constructor(data?: Partial<Ventas>) {
    super(data);
  }
}

export interface VentasRelations {
  // describe navigational properties here
}

export type VentasWithRelations = Ventas & VentasRelations;
