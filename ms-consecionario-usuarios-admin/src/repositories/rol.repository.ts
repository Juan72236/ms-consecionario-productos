import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {MongoDbDataSource} from '../datasources';
import {Rol, RolRelations, Usuario} from '../models';
import {UsuarioRepository} from './usuario.repository';

export class RolRepository extends DefaultCrudRepository<
  Rol,
  typeof Rol.prototype.id,
  RolRelations
> {

  public readonly rolEstaAsociadoAmuchosUsuarios: HasManyRepositoryFactory<Usuario, typeof Rol.prototype.id>;

  constructor(
    @inject('datasources.mongoDB') dataSource: MongoDbDataSource, @repository.getter('UsuarioRepository') protected usuarioRepositoryGetter: Getter<UsuarioRepository>,
  ) {
    super(Rol, dataSource);
    this.rolEstaAsociadoAmuchosUsuarios = this.createHasManyRepositoryFactoryFor('rolEstaAsociadoAmuchosUsuarios', usuarioRepositoryGetter,);
    this.registerInclusionResolver('rolEstaAsociadoAmuchosUsuarios', this.rolEstaAsociadoAmuchosUsuarios.inclusionResolver);
  }
}
