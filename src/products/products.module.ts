import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { envs, PRODUCT_SERVICE } from 'src/common';
import { ProductsController } from './products.controller';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: PRODUCT_SERVICE,
        transport: Transport.TCP,
        options: {
          host: envs.productMicroserviceHost,
          port: envs.productMicroservicePort,
        },
      },
    ]),
  ],
  controllers: [ProductsController],
  providers: [],
})
export class ProductsModule {}