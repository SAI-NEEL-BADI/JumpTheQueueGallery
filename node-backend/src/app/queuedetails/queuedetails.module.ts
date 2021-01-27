import { Module } from '@nestjs/common';
import { Queuedetails } from './model/entities/queuedetails.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QueuedetailsCrudService } from './services/queuedetails.crud.service';
import { QueuedetailsCrudController } from './controllers/queuedetails.crud.controller';
import { Visitor } from '../visitor/model/entities/visitor.entity';
import { Event } from '../event/model/entities/event.entity';
@Module({
  imports: [TypeOrmModule.forFeature([Queuedetails, Visitor, Event])],
  providers: [QueuedetailsCrudService],
  controllers: [QueuedetailsCrudController],
})
export class QueuedetailsModule {}
