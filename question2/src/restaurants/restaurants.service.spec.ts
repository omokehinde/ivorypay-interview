import { Test, TestingModule } from '@nestjs/testing';
import { RestaurantsService } from './restaurants.service';
import { BadRequestException } from '@nestjs/common';

describe('RestaurantsService', () => {
  let service: RestaurantsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RestaurantsService],
    }).compile();

    service = module.get<RestaurantsService>(RestaurantsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('findAll', () => {
    it('should throw BadRequestException if city is not provided', () => {
      expect(() => service.findAll(null, 40.7128, -74.0060, 1000)).toThrow(new BadRequestException('Provide a city name'));
    });
  });
});
