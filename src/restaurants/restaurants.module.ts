import { Module } from '@nestjs/common';
import { RestaurantsResolver } from './restaurants.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Restaurant } from './entities/restaurant.entity';
import { RestaurantService } from './restaurants.service';
import { CategoryRepository } from './repositories/category.repository';
import { provideCustomRepository } from '../common/utils/costom-repository.util';
import { Category } from './entities/category.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Restaurant])],
  providers: [
    RestaurantsResolver,
    RestaurantService,
    provideCustomRepository(Category, CategoryRepository),
  ],
})
export class RestaurantsModule {}
