import {Entity, model, property, belongsTo} from '@loopback/repository';
import {Ventas} from './ventas.model';

@model({
  settings: {
    foreignKeys: {
      fk_Factura_IdVenta: {
        name: 'fk_Factura_IdVenta',
        entity: 'Ventas',
        entityKey: 'id',
        foreignKey: 'IdVenta'
      },
    },
  },
})
export class Factura extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;
  @property({
    type: 'number',
    required: true,
  })
  Cosecutivo: number;

  @property({
    type: 'date',
    required: true,
  })
  Fecha: string;

  @property({
    type: 'number',
    required: true,
  })
  PrecioVenta: number;

  @belongsTo(() => Ventas, {name: 'unaFacturaPerteneceAUnaventa'})
  IdVenta: number;

  constructor(data?: Partial<Factura>) {
    super(data);
  }
}

export interface FacturaRelations {
  // describe navigational properties here
}

export type FacturaWithRelations = Factura & FacturaRelations;
