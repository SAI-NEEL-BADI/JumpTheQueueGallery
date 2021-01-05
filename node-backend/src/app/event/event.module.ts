import { Module } from '@nestjs/common';
import { Event } from './model/entities/event.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EventCrudService } from './services/event.crud.service';
import { EventCrudController } from './controllers/event.crud.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Event])],
  providers: [EventCrudService],
  controllers: [EventCrudController],
})
export class EventModule {}
