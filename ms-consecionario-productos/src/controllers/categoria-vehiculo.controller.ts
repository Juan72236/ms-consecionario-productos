import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {CategoriaVehiculo} from '../models';
import {CategoriaVehiculoRepository} from '../repositories';

export class CategoriaVehiculoController {
  constructor(
    @repository(CategoriaVehiculoRepository)
    public categoriaVehiculoRepository : CategoriaVehiculoRepository,
  ) {}

  @post('/categoria-vehiculos')
  @response(200, {
    description: 'CategoriaVehiculo model instance',
    content: {'application/json': {schema: getModelSchemaRef(CategoriaVehiculo)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(CategoriaVehiculo, {
            title: 'NewCategoriaVehiculo',
            exclude: ['id'],
          }),
        },
      },
    })
    categoriaVehiculo: Omit<CategoriaVehiculo, 'id'>,
  ): Promise<CategoriaVehiculo> {
    return this.categoriaVehiculoRepository.create(categoriaVehiculo);
  }

  @get('/categoria-vehiculos/count')
  @response(200, {
    description: 'CategoriaVehiculo model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(CategoriaVehiculo) where?: Where<CategoriaVehiculo>,
  ): Promise<Count> {
    return this.categoriaVehiculoRepository.count(where);
  }

  @get('/categoria-vehiculos')
  @response(200, {
    description: 'Array of CategoriaVehiculo model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(CategoriaVehiculo, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(CategoriaVehiculo) filter?: Filter<CategoriaVehiculo>,
  ): Promise<CategoriaVehiculo[]> {
    return this.categoriaVehiculoRepository.find(filter);
  }

  @patch('/categoria-vehiculos')
  @response(200, {
    description: 'CategoriaVehiculo PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(CategoriaVehiculo, {partial: true}),
        },
      },
    })
    categoriaVehiculo: CategoriaVehiculo,
    @param.where(CategoriaVehiculo) where?: Where<CategoriaVehiculo>,
  ): Promise<Count> {
    return this.categoriaVehiculoRepository.updateAll(categoriaVehiculo, where);
  }

  @get('/categoria-vehiculos/{id}')
  @response(200, {
    description: 'CategoriaVehiculo model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(CategoriaVehiculo, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(CategoriaVehiculo, {exclude: 'where'}) filter?: FilterExcludingWhere<CategoriaVehiculo>
  ): Promise<CategoriaVehiculo> {
    return this.categoriaVehiculoRepository.findById(id, filter);
  }

  @patch('/categoria-vehiculos/{id}')
  @response(204, {
    description: 'CategoriaVehiculo PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(CategoriaVehiculo, {partial: true}),
        },
      },
    })
    categoriaVehiculo: CategoriaVehiculo,
  ): Promise<void> {
    await this.categoriaVehiculoRepository.updateById(id, categoriaVehiculo);
  }

  @put('/categoria-vehiculos/{id}')
  @response(204, {
    description: 'CategoriaVehiculo PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() categoriaVehiculo: CategoriaVehiculo,
  ): Promise<void> {
    await this.categoriaVehiculoRepository.replaceById(id, categoriaVehiculo);
  }

  @del('/categoria-vehiculos/{id}')
  @response(204, {
    description: 'CategoriaVehiculo DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.categoriaVehiculoRepository.deleteById(id);
  }
}
