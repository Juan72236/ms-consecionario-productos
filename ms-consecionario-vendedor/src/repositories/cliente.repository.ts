import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {Cliente, ClienteRelations, Vendedor} from '../models';
import {VendedorRepository} from './vendedor.repository';

export class ClienteRepository extends DefaultCrudRepository<
  Cliente,
  typeof Cliente.prototype.id,
  ClienteRelations
> {

  public readonly clientePerteneceAUnVendedor: BelongsToAccessor<Vendedor, typeof Cliente.prototype.id>;

  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource, @repository.getter('VendedorRepository') protected vendedorRepositoryGetter: Getter<VendedorRepository>,
  ) {
    super(Cliente, dataSource);
    this.clientePerteneceAUnVendedor = this.createBelongsToAccessorFor('clientePerteneceAUnVendedor', vendedorRepositoryGetter,);
    this.registerInclusionResolver('clientePerteneceAUnVendedor', this.clientePerteneceAUnVendedor.inclusionResolver);
  }
}
