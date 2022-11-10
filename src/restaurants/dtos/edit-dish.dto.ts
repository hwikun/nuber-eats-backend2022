import {
  InputType,
  PickType,
  PartialType,
  Field,
  Int,
  ObjectType,
} from '@nestjs/graphql';
import { Dish } from '../entities/dish.entity';
import { CoreOutput } from 'src/common/dtos/output.dto';

@InputType()
export class EditDishInput extends PartialType(
  PickType(Dish, ['name', 'description', 'price', 'options']),
) {
  @Field((type) => Int)
  dishId: number;
}

@ObjectType()
export class EditDishOutput extends CoreOutput {}
