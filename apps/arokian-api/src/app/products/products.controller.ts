import { Controller, Get, Param } from '@nestjs/common'
import { ProductsService } from './products.service'

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}
  @Get()
  findAllProducts() {
    return this.productsService.findAll()
  }

  @Get(':code')
  async findOneProduct(@Param('code') id: string) {
    return await this.productsService.findOne(+id)
  }
}
