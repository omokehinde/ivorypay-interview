# API Documentation: Restaurants Finder
Base URL
```
  localhost:3000/v1/restaurants
```
## 1. Get Restaurants
Get a list of restaurants within a city based on the user's location and desired distance.

### Request
- <b>Method:</b> GET
- <b>URL:</b> /
- <b>Query Parameters:</b>
  - <b>city</b> (string, required): The name of the city.
  - <b>latitude</b> (number, required): User's current latitude.
  - <b>longitude</b> (number, required): User's current longitude.
  - <b>distance</b> (number, required): Maximum distance in meters from the user's location to the restaurant.
### Example Request
```
  GET /v1/restaurants?city=New%20York&latitude=40.7128&longitude=-74.0060&distance=1000
```
### Example Response
```
  {
    "restaurants": [
      {
        "name": "Cafe Delight",
        "address": "123 Main St, New York, NY",
        "latitude": 40.7112,
        "longitude": -74.0055
      },
      {
        "name": "Pasta Paradise",
        "address": "456 Elm St, New York, NY",
        "latitude": 40.7145,
        "longitude": -74.0082
      }
    ]
  }
```
### Error Responses
- 400 Bad Request: Invalid or missing parameters.
- 404 Not Found: City not found or not supported.
## 2. Get Restaurant by ID
Get details of a restaurant by its ID.

### Request
- <b>Method:</b> GET
- <b>URL:</b> /:id
- <b>URL Parameters:</b>
  - <b>id</b> (number, required): ID of the restaurant.

### Example Request
```
  GET /v1/restaurants/1
```
### Example Response
```
  {
    "name": "Cafe Delight",
    "address": "123 Main St, New York, NY",
    "latitude": 40.7112,
    "longitude": -74.0055
  }
```
### Error Responses
- 404 Not Found: Restaurant not found.

## 3. Add a New Restaurant
Add a new restaurant.

### Request
- <b>Method:</b> POST
- <b>URL:</b> /
- <b>Body Parameters:</b>
  - <b>name</b> (string, required): Name of the restaurant.
  - <b>address</b> (string, required): Address of the restaurant.
  - <b>latitude</b> (number, required): Latitude of the restaurant location.
  - <b>longitude</b> (number, required): Longitude of the restaurant location.
### Example Request
```
  POST /v1/restaurants
  Content-Type: application/json

  {
    "name": "New Restaurant",
    "address": "789 Elm St, New York, NY",
    "latitude": 40.7189,
    "longitude": -74.0021
  }
```
### Example Response
```
  {
    "name": "New Restaurant",
    "address": "789 Elm St, New York, NY",
    "latitude": 40.7189,
    "longitude": -74.0021
  }
```
## 4. Update Restaurant
Update details of an existing restaurant.

### Request
- <b>Method:</b> PATCH
- <b>URL:</b> /:id
- <b>URL Parameters:</b>
  - <b>id</b> (number, required): ID of the restaurant.
- <b>Body Parameters:</b>
  - <b>name</b> (string, optional): Updated name of the restaurant.
  - <b>address</b> (string, optional): Updated address of the restaurant.
  - <b>latitude</b> (number, optional): Updated latitude of the restaurant location.
  - <b>longitude</b> (number, optional): Updated longitude of the restaurant location.
### Example Request
```
  PATCH /v1/restaurants/1
  Content-Type: application/json

  {
    "name": "Updated Restaurant Name"
  }
```
Example Response
```
  {
    "name": "Updated Restaurant Name",
    "address": "123 Main St, New York, NY",
    "latitude": 40.7112,
    "longitude": -74.0055
  }
```
### Error Responses
- 404 Not Found: Restaurant not found.

## 5. Delete Restaurant
Delete an existing restaurant by its ID.

### Request
- <b>Method:</b> DELETE
- <b>URL:</b> /:id
- <b>URL Parameters:</b>
  - <b>id</b> (number, required): ID of the restaurant to delete.
### Example Request
```
  DELETE /v1/restaurants/1
```
### Example Response
```
   {
    "name": "Deleted Restaurant",
    "address": "789 Elm St, New York, NY",
    "latitude": 40.7189,
    "longitude": -74.0021
  }
```
### Error Responses
- 404 Not Found: Restaurant not found.

## Description

Clone this project and follow the guide below the insall, run, and test it.

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
