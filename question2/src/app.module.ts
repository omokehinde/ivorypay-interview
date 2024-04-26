// import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
// import { RestaurantsModule } from './restaurants/restaurants.module';

// @Module({
//   imports: [RestaurantsModule],
//   controllers: [AppController],
//   providers: [AppService],
// })
// export class AppModule {}

// rate limiting to prevent abuse of the API and ensure fair usage.
import { Module } from '@nestjs/common';
import { ThrottlerModule } from '@nestjs/throttler';
import { APP_GUARD } from '@nestjs/core';
import { ThrottlerGuard } from '@nestjs/throttler';
import { RestaurantsModule } from './restaurants/restaurants.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ThrottlerModule.forRoot([
      {
        ttl: 60000, // Time window in seconds
        limit: 35, // Maximum number of requests within the time window
      }
    ]),
    RestaurantsModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: ThrottlerGuard,
    },
  ],
})
export class AppModule {}
