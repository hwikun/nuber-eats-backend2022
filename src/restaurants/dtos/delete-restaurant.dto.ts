import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { IsNumber } from 'class-validator';
import { CoreOutput } from '../../common/dtos/output.dto';

@InputType()
export class DeleteRestaurantInput {
  @Field((type) => Number)
  @IsNumber()
  restaurantId: number;
}

@ObjectType()
export class DeleteRestaurantOutput extends CoreOutput {}
