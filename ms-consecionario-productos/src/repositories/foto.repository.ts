import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {Foto, FotoRelations} from '../models';
//import {VehiculoRepository} from './vehiculo.repository';

export class FotoRepository extends DefaultCrudRepository<
  Foto,
  typeof Foto.prototype.id,
  FotoRelations
> {

  //public readonly vehiculoTieneMuchasFotos: HasManyRepositoryFactory<Vehiculo, typeof Foto.prototype.id>;

  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource, //@repository.getter('VehiculoRepository') protected vehiculoRepositoryGetter: Getter<VehiculoRepository>,
  ) {
    super(Foto, dataSource);
    //this.vehiculoTieneMuchasFotos = this.createHasManyRepositoryFactoryFor('vehiculoTieneMuchasFotos', vehiculoRepositoryGetter,);
    //this.registerInclusionResolver('vehiculoTieneMuchasFotos', this.vehiculoTieneMuchasFotos.inclusionResolver);
  }
}
