import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasOneRepositoryFactory} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {Vendedor, VendedorRelations, UsuarioVendedor} from '../models';
import {UsuarioVendedorRepository} from './usuario-vendedor.repository';

export class VendedorRepository extends DefaultCrudRepository<
  Vendedor,
  typeof Vendedor.prototype.id,
  VendedorRelations
> {

  public readonly vendedorTieneUnUsuario: HasOneRepositoryFactory<UsuarioVendedor, typeof Vendedor.prototype.id>;

  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource, @repository.getter('UsuarioVendedorRepository') protected usuarioVendedorRepositoryGetter: Getter<UsuarioVendedorRepository>,
  ) {
    super(Vendedor, dataSource);
    this.vendedorTieneUnUsuario = this.createHasOneRepositoryFactoryFor('vendedorTieneUnUsuario', usuarioVendedorRepositoryGetter);
    this.registerInclusionResolver('vendedorTieneUnUsuario', this.vendedorTieneUnUsuario.inclusionResolver);
  }
}
