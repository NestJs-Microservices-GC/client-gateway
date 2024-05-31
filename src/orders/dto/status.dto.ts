import { IsEnum, IsOptional } from 'class-validator';
import { OrderStatus, OrderStatusList } from '../interfaces/order.enum';

export class StatusDto {
  @IsOptional()
  @IsEnum(OrderStatusList, {
    message: `Valids status list ${OrderStatus}`,
  })
  status: OrderStatus;
}
