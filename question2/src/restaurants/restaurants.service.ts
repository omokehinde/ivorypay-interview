import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';

import { CreateRestaurantDto } from './dto/create-restaurant.dto';
import { UpdateRestaurantDto } from './dto/update-restaurant.dto';

@Injectable()
export class RestaurantsService {
    private restaurants = [
        {
            "id": 1,
            "name": "Cafe Delight",
            "address": "123 Main St, New York, NY",
            "latitude": 40.7112,
            "longitude": -74.0055
        },
        {
            "id": 2,
            "name": "Pasta Paradise",
            "address": "456 Elm St, New York, NY",
            "latitude": 40.7145,
            "longitude": -74.0082
        },
        {
            "id": 3,
            "name": "Eat n Fart",
            "address": "178 Elon Musk St, New York, NY",
            "latitude": 28.7841,
            "longitude": -77.2012
        },
        {
            "id": 4,
            "name": "Tasy Pasta",
            "address": "332 John Kenedy St, New York, NY",
            "latitude": 66.7145,
            "longitude": -55.1012
        },
        {
            "id": 5,
            "name": "Eat More",
            "address": "666 No Passing St, New York, NY",
            "latitude": 29.7145,
            "longitude": -72.3082
        },
        {
            "id": 6,
            "name": "Cocky Noodles",
            "address": "764 Fast St, New York, NY",
            "latitude": 36.7145,
            "longitude": -84.0082
        },
        {
            "id": 7,
            "name": "Bobbi Pizza",
            "address": "764 Fast St, Detroit, MI",
            "latitude": 66.7145,
            "longitude": -54.0082
        }
    ];

    private isValidCity(city: string): boolean {
        /*
            Checks if city is valid or supported
        */

        // Convert city name to lowercase for case-insensitive comparison
        const normalizedCity = city.toLowerCase();

        // Check if the normalized city matches any of the cities in the restaurants array
        const cityExists = this.restaurants.some(restaurant => {
            const restaurantCity = restaurant.address.split(',')[1].trim().toLowerCase();
            return restaurantCity === normalizedCity;
        });
        console.log(cityExists);
        return cityExists;
    }

    private findRestaurantsInACity(city: string)  {
        /*
            retuns list of all restaurants in a city
        */
       
        // Convert city name to lowercase for case-insensitive comparison
        const normalizedCity = city.toLowerCase();
        return this.restaurants.filter(restaurant =>restaurant.address.split(",")[1].trim().toLowerCase() === normalizedCity);
    }
    

    findAll(city: string, latitude: number, longitude: number, distance: number) {
        /*
            finds and returns list of all restaurants in a city
        */

        // Check if city is valid or supported
        if (!city) {
            throw new BadRequestException('Provide a city name');
        }

         // Check if city is valid or supported
        if (!this.isValidCity(city)) {
            throw new NotFoundException('City not found or not supported');
        }

        // Check if latitude and longitude are provided and valid
        if (!latitude || !longitude || isNaN(latitude) || isNaN(longitude)) {
            throw new BadRequestException('Invalid or missing user location coordinates');
        }
        
        // Check if latitude and longitude are provided and valid
        if (!latitude || !longitude || isNaN(latitude) || isNaN(longitude)) {
            throw new BadRequestException('Invalid or missing user location coordinates');
        }
        
        
        // Check if distance is provided and non-negative
        if (!distance || distance < 0) {
            throw new BadRequestException('Invalid or missing distance parameter');
        }
        return this.findRestaurantsInACity(city);
    }

    findOne(id: number) {
        /*
            Finds a restaurant with a particular id
        */
        const restaurant = this.restaurants.find(r => r.id === id);
        if (!restaurant) {
        throw new NotFoundException('Restaurant not found');
        }
        return restaurant;
    }

    create(restaurant: CreateRestaurantDto) {
        const restaurantsByHighestId = [...this.restaurants].sort((a,b)=> b.id - a.id);
        const newRestaurant = {
            id: restaurantsByHighestId[0].id + 1,
            ...restaurant
        };
        this.restaurants.push(newRestaurant);
        return newRestaurant;
    }

    update(id: number, updatedResturant: UpdateRestaurantDto) {
        this.restaurants = this.restaurants.map(restaurant => {
            if (restaurant.id === id) {
                return {...restaurant, ...updatedResturant}
            }
            return restaurant;
        });
        return this.findOne(id);
    }

    delete(id: number) {
        const removedRestaurant = this.findOne(id);
        this.restaurants = this.restaurants.filter(restaurant => restaurant.id !== id);
        return removedRestaurant;
    }
}
