import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {Ventas, VentasRelations, Factura} from '../models';
import {FacturaRepository} from './factura.repository';

export class VentasRepository extends DefaultCrudRepository<
  Ventas,
  typeof Ventas.prototype.id,
  VentasRelations
> {

  public readonly ventaLeCorrespondeUnaFactura: BelongsToAccessor<Factura, typeof Ventas.prototype.id>;

  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource, @repository.getter('FacturaRepository') protected facturaRepositoryGetter: Getter<FacturaRepository>,
  ) {
    super(Ventas, dataSource);
    this.ventaLeCorrespondeUnaFactura = this.createBelongsToAccessorFor('ventaLeCorrespondeUnaFactura', facturaRepositoryGetter,);
    this.registerInclusionResolver('ventaLeCorrespondeUnaFactura', this.ventaLeCorrespondeUnaFactura.inclusionResolver);
  }
}
