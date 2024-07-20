import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VenuesService } from './venues.service';
import { VenuesController } from './venues.controller';
import { Venues } from './venue.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Venues])],
  providers: [VenuesService],
  controllers: [VenuesController],
})
export class VenuesModule {}

