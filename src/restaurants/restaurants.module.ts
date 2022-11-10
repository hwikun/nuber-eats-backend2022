import { Module } from '@nestjs/common';
import {
  CategoryResolver,
  RestaurantsResolver,
  DishResolver,
} from './restaurants.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Restaurant } from './entities/restaurant.entity';
import { RestaurantService } from './restaurants.service';
import { CategoryRepository } from './repositories/category.repository';
import { provideCustomRepository } from '../common/utils/costom-repository.util';
import { Category } from './entities/category.entity';
import { Dish } from './entities/dish.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Restaurant, Dish])],
  providers: [
    RestaurantsResolver,
    DishResolver,
    CategoryResolver,
    provideCustomRepository(Category, CategoryRepository),
    RestaurantService,
  ],
})
export class RestaurantsModule {}
