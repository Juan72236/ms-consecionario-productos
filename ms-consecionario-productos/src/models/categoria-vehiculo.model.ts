import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {
    foreignKeys: {
      fk_categoria_vehiculo_IdVehiculo: {
        name: 'fk_categoria_vehiculo_IdVehiculo',
        entity: 'Vehiculo',
        entityKey: 'id',
        foreignKey: 'IdVehiculo'
      },
      fk_categoria_vehiculo_categoriaId: {
        name: 'fk_categoria_vehiculo_categoriaId',
        entity: 'Categoria',
        entityKey: 'id',
        foreignKey: 'categoriaId'
      },
    },
  },
})
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
