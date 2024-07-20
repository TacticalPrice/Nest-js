import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Venues } from './venue.entity';

@Injectable()
export class VenuesService {
    constructor(@InjectRepository(Venues)
    private readonly venueRepository: Repository<Venues>,
    ) { }

    async getAverageCommissionByType() {
        const data = await  this.venueRepository
            .createQueryBuilder('venue')
            .select('venue.type', 'type')
            .addSelect('AVG(venue.commission_percentage)', 'avg_commission_percentage')
            .groupBy('venue.type')
            .orderBy('avg_commission_percentage')
            .getRawMany();
        return {data};

    }

    async getMaxMinCommissionByType() {
        const data = await this.venueRepository
            .createQueryBuilder('venue')
            .select('venue.type', 'type')
            .addSelect('MAX(venue.commission_percentage)', 'max_commission_percentage')
            .addSelect('MIN(venue.commission_percentage)', 'min_commission_percentage')
            .groupBy('venue.type')
            .orderBy('venue.type')
            .getRawMany();
        return {data};
    }

    async getSumOfPointsByType() {
        const data = await this.venueRepository
            .createQueryBuilder('venue')
            .select('venue.type', 'type')
            .addSelect('SUM(venue.points)', 'total_points')
            .groupBy('venue.type')
            .orderBy('total_points', 'DESC')
            .getRawMany();
        return {data};
    }

    async getAverageTaxByType() {
        const data = await this.venueRepository
            .createQueryBuilder('venue')
            .select('venue.type', 'type')
            .addSelect('AVG(venue.tax)', 'avg_tax')
            .groupBy('venue.type')
            .orderBy('avg_tax')
            .getRawMany();
        return {data};
    }

    async getExclusiveVenueCountByType() {
        const data = await this.venueRepository
            .createQueryBuilder('venue')
            .select('venue.type', 'type')
            .addSelect('COUNT(*)', 'exclusive_venue_count')
            .where('venue.is_exclusive = :isExclusive', { isExclusive: true })
            .groupBy('venue.type')
            .orderBy('exclusive_venue_count', 'DESC')
            .getRawMany();
        return {data};
    }

    async getLatestCreatedVenueDateByType() {
        const data = await this.venueRepository
            .createQueryBuilder('venue')
            .select('venue.type', 'type')
            .addSelect('MAX(venue.created_at)', 'latest_created_date')
            .groupBy('venue.type')
            .orderBy('latest_created_date', 'DESC')
            .getRawMany();
        return {data};
    }

    async getAverageAvailableTimePeriodByType() {
        return this.venueRepository
            .createQueryBuilder('venue')
            .select('venue.type', 'type')
            .addSelect('AVG(venue.available_time_period)', 'avg_available_time_period')
            .groupBy('venue.type')
            .orderBy('avg_available_time_period')
            .getRawMany();
    }

    async getAveragePointsByType() {
        return this.venueRepository
            .createQueryBuilder('venue')
            .select('venue.type', 'type')
            .addSelect('AVG(venue.points)', 'avg_points')
            .groupBy('venue.type')
            .orderBy('avg_points')
            .getRawMany();
    }

}
