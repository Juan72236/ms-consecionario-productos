import {Entity, model, property, hasOne} from '@loopback/repository';
import {UsuarioVendedor} from './usuario-vendedor.model';

@model()
export class Vendedor extends Entity {
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

  @hasOne(() => UsuarioVendedor, {keyTo: 'IdVendedor'})
  vendedorTieneUnUsuario: UsuarioVendedor;

  constructor(data?: Partial<Vendedor>) {
    super(data);
  }
}

export interface VendedorRelations {
  // describe navigational properties here
}

export type VendedorWithRelations = Vendedor & VendedorRelations;
