import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Venues {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  uuid: string;

  @Column()
  web_id: string;

  @Column()
  name: string;

  @Column('text')
  description: string;

  @Column()
  address: string;

  @Column('text')
  short_address: string;

  @Column()
  closest_metro: string;

  @Column()
  city_id: number;

  @Column()
  mock_status: number;

  @Column()
  is_non_bookable: boolean;

  @Column('decimal', { precision: 10, scale: 7, nullable: true })
  latitude: number;

  @Column('decimal', { precision: 10, scale: 7, nullable: true })
  longitude: number;

  @Column()
  available_time_period: number;

  @Column()
  payment_options: string;

  @Column('json', { nullable: true })
  online_payment_options: JSON;

  @Column('text')
  slug: string;

  @Column('decimal', { precision: 5, scale: 2 })
  tax: number;

  @Column()
  is_exclusive: boolean;

  @Column()
  company_id: number;

  @Column('json', { nullable: true })
  invoice_type: JSON;

  @Column()
  is_hudle_exclusive: boolean;

  @Column()
  cancellable_before: number;

  @Column()
  cancellable_after: number;

  @Column()
  partner_cancellable: boolean;

  @Column()
  consumer_cancellable: boolean;

  @Column('json', { nullable: true })
  share_url: JSON;

  @Column('json', { nullable: true })
  settings: JSON;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
  updated_at: Date;

  @Column({ type: 'timestamp', nullable: true })
  pushed_at: Date;

  @Column()
  is_approved: boolean;

  @Column()
  is_daily_view_enabled: boolean;

  @Column({ nullable: true })
  contact_person_id: number;

  @Column({ type: 'timestamp', nullable: true })
  plan_order: Date;

  @Column()
  type: number;

  @Column()
  mask_user_detail: boolean;

  @Column()
  company_branch_id: number;

  @Column('text', { nullable: true })
  tnc: string;

  @Column('decimal', { precision: 5, scale: 2 })
  commission_percentage: number;

  @Column()
  position: number;

  @Column({ type: 'datetime', nullable: true })
  elastic_updated_at: Date;

  @Column('decimal', { precision: 10, scale: 2 })
  points: number;

  @Column({ type: 'datetime', nullable: true })
  rank_expire_at: Date;

  @Column()
  invoice_series: string;

  @Column({ type: 'datetime', nullable: true })
  invoice_updated_at: Date;

  @Column({ nullable: true })
  sac_code: string;

  @Column()
  is_partner_daily_view_enabled: boolean;
}
