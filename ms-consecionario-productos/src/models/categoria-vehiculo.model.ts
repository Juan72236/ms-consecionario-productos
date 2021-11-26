import {Entity, model, property} from '@loopback/repository';

@model()
export class CategoriaVehiculo extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'number',
  })
  IdVehiculo?: number;

  @property({
    type: 'number',
  })
  categoriaId?: number;

  constructor(data?: Partial<CategoriaVehiculo>) {
    super(data);
  }
}

export interface CategoriaVehiculoRelations {
  // describe navigational properties here
}

export type CategoriaVehiculoWithRelations = CategoriaVehiculo & CategoriaVehiculoRelations;
