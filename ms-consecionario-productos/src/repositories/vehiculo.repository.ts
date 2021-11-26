import {Getter, inject} from '@loopback/core';
import {BelongsToAccessor, DefaultCrudRepository, repository, HasManyRepositoryFactory, HasManyThroughRepositoryFactory} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {Marca, Vehiculo, VehiculoRelations, Foto, Proveedor, Categoria, CategoriaVehiculo} from '../models';
import {MarcaRepository} from './marca.repository';
import {FotoRepository} from './foto.repository';
import {ProveedorRepository} from './proveedor.repository';
import {CategoriaVehiculoRepository} from './categoria-vehiculo.repository';
import {CategoriaRepository} from './categoria.repository';

export class VehiculoRepository extends DefaultCrudRepository<
  Vehiculo,
  typeof Vehiculo.prototype.id,
  VehiculoRelations
> {

  public readonly UnVehiculoPerteneceAUnaMarca: BelongsToAccessor<Marca, typeof Vehiculo.prototype.id>;

  public readonly vehiculoTieneMuchasFotos: HasManyRepositoryFactory<Foto, typeof Vehiculo.prototype.id>;

  public readonly VehiculoPerteneceAUnProveedor: BelongsToAccessor<Proveedor, typeof Vehiculo.prototype.id>;

  public readonly categorias: HasManyThroughRepositoryFactory<Categoria, typeof Categoria.prototype.id,
          CategoriaVehiculo,
          typeof Vehiculo.prototype.id
        >;

  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource, @repository.getter('MarcaRepository') protected marcaRepositoryGetter: Getter<MarcaRepository>, @repository.getter('FotoRepository') protected fotoRepositoryGetter: Getter<FotoRepository>, @repository.getter('ProveedorRepository') protected proveedorRepositoryGetter: Getter<ProveedorRepository>, @repository.getter('CategoriaVehiculoRepository') protected categoriaVehiculoRepositoryGetter: Getter<CategoriaVehiculoRepository>, @repository.getter('CategoriaRepository') protected categoriaRepositoryGetter: Getter<CategoriaRepository>,
  ) {
    super(Vehiculo, dataSource);
    this.categorias = this.createHasManyThroughRepositoryFactoryFor('categorias', categoriaRepositoryGetter, categoriaVehiculoRepositoryGetter,);
    this.registerInclusionResolver('categorias', this.categorias.inclusionResolver);
    this.VehiculoPerteneceAUnProveedor = this.createBelongsToAccessorFor('VehiculoPerteneceAUnProveedor', proveedorRepositoryGetter,);
    this.registerInclusionResolver('VehiculoPerteneceAUnProveedor', this.VehiculoPerteneceAUnProveedor.inclusionResolver);
    this.vehiculoTieneMuchasFotos = this.createHasManyRepositoryFactoryFor('vehiculoTieneMuchasFotos', fotoRepositoryGetter,);
    this.registerInclusionResolver('vehiculoTieneMuchasFotos', this.vehiculoTieneMuchasFotos.inclusionResolver);
    this.UnVehiculoPerteneceAUnaMarca = this.createBelongsToAccessorFor('UnVehiculoPerteneceAUnaMarca', marcaRepositoryGetter,);
    this.registerInclusionResolver('UnVehiculoPerteneceAUnaMarca', this.UnVehiculoPerteneceAUnaMarca.inclusionResolver);
  }
}
