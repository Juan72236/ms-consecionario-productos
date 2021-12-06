import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  Ventas,
  Factura,
} from '../models';
import {VentasRepository} from '../repositories';

export class VentasFacturaController {
  constructor(
    @repository(VentasRepository)
    public ventasRepository: VentasRepository,
  ) { }

  @get('/ventas/{id}/factura', {
    responses: {
      '200': {
        description: 'Factura belonging to Ventas',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Factura)},
          },
        },
      },
    },
  })
  async getFactura(
    @param.path.number('id') id: typeof Ventas.prototype.id,
  ): Promise<Factura> {
    return this.ventasRepository.ventaLeCorrespondeUnaFactura(id);
  }
}
