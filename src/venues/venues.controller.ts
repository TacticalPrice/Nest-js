import { Controller, Get } from '@nestjs/common';
import { VenuesService } from './venues.service';

@Controller('venues')
export class VenuesController {
    constructor(private readonly venueService: VenuesService) { }

    @Get('average-commission')
    getAverageCommissionByType() {
        return this.venueService.getAverageCommissionByType();
    }

    @Get('count-by-type')
    getCountByType() {
        return this.venueService.getExclusiveVenueCountByType();
    }

    @Get('max-min-commission')
    getMaxMinCommissionByType() {
        return this.venueService.getMaxMinCommissionByType();
    }

    @Get('sum-of-points')
    getSumOfPointsByType() {
        return this.venueService.getSumOfPointsByType();
    }

    @Get('average-tax')
    getAverageTaxByType() {
        return this.venueService.getAverageTaxByType();
    }

    @Get('exclusive-venue-count')
    getExclusiveVenueCountByType() {
        return this.venueService.getExclusiveVenueCountByType();
    }

    @Get('latest-created-venue')
    getLatestCreatedVenueDateByType() {
        return this.venueService.getLatestCreatedVenueDateByType();
    }

    @Get('average-available-time-period')
    getAverageAvailableTimePeriodByType() {
        return this.venueService.getAverageAvailableTimePeriodByType();
    }

    @Get('average-points')
    getAveragePointsByType() {
        return this.venueService.getAveragePointsByType();
    }

}
