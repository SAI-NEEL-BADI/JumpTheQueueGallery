import { Controller, Body, Post, Get } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { CrudType } from '@devon4node/common/serializer';
import { Queuedetails } from '../model/entities/queuedetails.entity';
import { QueuedetailsCrudService } from '../services/queuedetails.crud.service';
import { ApiTags } from '@nestjs/swagger';
import { JoinDto } from '../model/entities/queuedetails.joinDto';
import { VisitorCriteria } from '../model/queuedetails.visitorCriteria';
import { EventCriteria } from '../model/queuedetails.eventCriteria';

@Crud({
  model: {
    type: Queuedetails,
  },
})
@ApiTags('queuedetails')
@CrudType(Queuedetails)
@Controller('queuedetails/queuedetails')
export class QueuedetailsCrudController {
  constructor(public service: QueuedetailsCrudService) {}

  @Post('QueuesByEventId')
  async getQueueDetailsByEventId(@Body() eventCriteria: EventCriteria): Promise<Queuedetails[]> {
    return await this.service.getQueuesByEventId(eventCriteria);
  }

  @Post('joinQueue')
  async joinQueue(@Body() joinCriteria: JoinDto): Promise<Queuedetails | string> {
    return await this.service.joinQueue(joinCriteria);
  }

  @Post('queueDetailsByVisitorId')
  async getQueueDetailsByVisitorId(@Body() criteria: VisitorCriteria): Promise<Queuedetails[]> {
    return await this.service.getQueueDetailsByVisitorId(criteria);
  }

  @Get('getAllQueueDetails')
  async getAllQueueDetails(): Promise<Queuedetails[]> {
    return await this.service.getAllQueueDetails();
  }
}
