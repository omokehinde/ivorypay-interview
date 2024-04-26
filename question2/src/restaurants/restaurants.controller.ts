import { Body, Controller, Delete, Get, Param, Patch, Post, Query, ParseIntPipe } from '@nestjs/common';

import { RestaurantsService } from './restaurants.service';
import { CreateRestaurantDto } from './dto/create-restaurant.dto';
import { UpdateRestaurantDto } from './dto/update-restaurant.dto';

@Controller('v1/restaurants')
export class RestaurantsController {

    constructor(private readonly restaurantsService: RestaurantsService) {}

    @Get() //GET /v1/restaurants 
    findAll(@Query("city") city: string, @Query("latitude") latitude: number, @Query("longitude") longitude: number, @Query("distance") distance: number) {
        /*
        Finds all resturants within a city, close to the distance, and with longitude
         and latitude provided
        */
        return this.restaurantsService.findAll(city, latitude, longitude, distance);
    }

    @Get(":id") // GET /v1/restaurants/:id
    findOne(@Param("id", ParseIntPipe) id: number) {
        return this.restaurantsService.findOne(id);
    }

    @Post() // POST /v1/restaurants
    create(@Body() resturant: CreateRestaurantDto) {
        return this.restaurantsService.create(resturant);
    }

    @Patch(":id") // PATCH /v1/restaurants/:id
    update(@Param("id", ParseIntPipe) id: number, @Body() resturantUpdate: UpdateRestaurantDto) {
        return this.restaurantsService.update(id, resturantUpdate);
    }

    @Delete(":id") // DELETE /v1/restaurants/:id
    delete(@Param("id", ParseIntPipe) id: number) {
        return this.restaurantsService.delete(id);
    }
}
