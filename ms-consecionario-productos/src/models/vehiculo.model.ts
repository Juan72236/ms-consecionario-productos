import {belongsTo, Entity, model, property, hasMany} from '@loopback/repository';
import {Marca} from './marca.model';
import {Foto} from './foto.model';
import {Proveedor} from './proveedor.model';
import {Categoria} from './categoria.model';
import {CategoriaVehiculo} from './categoria-vehiculo.model';

//modelo de la entidad vehiculo

@model({
  //llave foranea IDMarca
  settings: {
    foreignKeys: {
      fk_vehiculo_idMarca: {
        name: 'fk_vehiculo_idMarca',
        entity: 'Marca',
        entityKey: 'id',
        foreignKey: 'idMarca' 
      },
      //llave foranea IDProveedor
      fk_vehiculo_IdProveedor: {
        name: 'fk_vehiculo_IdProveedor',
        entity: 'Proveedor',
        entityKey: 'id',
        foreignKey: 'IdProveedor'
      },
    },
  },
})
export class Vehiculo extends Entity {
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
  color: string;

  @property({
    type: 'string',
    required: true,
  })
  modelo: string;

  @property({
    type: 'string',
    required: true,
  })
  SerieChasis: string;

  @property({
    type: 'string',
    required: true,
  })
  SerieMotor: string;

  @property({
    type: 'number',
    required: true,
  })
  precio: number;

  @property({
    type: 'number',
    required: true,
  })
  descuento: number;

  @property({
    type: 'number',
    required: true,
  })
  existencia: number;

  @belongsTo(() => Marca, {name: 'UnVehiculoPerteneceAUnaMarca'})
  idMarca: number;

  @hasMany(() => Foto, {keyTo: 'IdVehiculo'})
  vehiculoTieneMuchasFotos: Foto[];

  @belongsTo(() => Proveedor, {name: 'VehiculoPerteneceAUnProveedor'})
  IdProveedor: number;

  @hasMany(() => Categoria, {through: {model: () => CategoriaVehiculo, keyFrom: 'IdVehiculo'}})
  categorias: Categoria[];

  constructor(data?: Partial<Vehiculo>) {
    super(data);
  }
}

export interface VehiculoRelations {
  // describe navigational properties here
}

export type VehiculoWithRelations = Vehiculo & VehiculoRelations;
