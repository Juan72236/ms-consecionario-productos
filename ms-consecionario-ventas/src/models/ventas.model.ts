import {Entity, model, property} from '@loopback/repository';

@model()
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

  @property({
    type: 'number',
    required: true,
  })
  IdFactura: number;


  constructor(data?: Partial<Ventas>) {
    super(data);
  }
}

export interface VentasRelations {
  // describe navigational properties here
}

export type VentasWithRelations = Ventas & VentasRelations;
