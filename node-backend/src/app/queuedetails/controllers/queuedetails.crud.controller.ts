import { Controller, Body, Post, Get, Param } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { CrudType } from '@devon4node/common/serializer';
import { Queuedetails } from '../model/entities/queuedetails.entity';
import { QueuedetailsCrudService } from '../services/queuedetails.crud.service';
import { ApiTags } from '@nestjs/swagger';

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

  @Get('getQueuesByEventId/:idEvent')
  async getQueueDetailsByEventId(@Param('idEvent') idEvent: number): Promise<Queuedetails[]> {
    return await this.service.getQueuesByEventId(idEvent);
  }

  @Post('joinQueue')
  async joinQueue(@Body() joinCriteria: JoinDto): Promise<Queuedetails | string> {
    return await this.service.joinQueue(joinCriteria);
  }

  @Get('getQueueDetailsByVisitorId/:idVisitor')
  async getQueueDetailsByVisitorId(@Param('idVisitor') idVisitor: number): Promise<Queuedetails[]> {
    return await this.service.getQueueDetailsByVisitorId(idVisitor);
  }

  @Get('getAllQueueDetails')
  async getAllQueueDetails(): Promise<Queuedetails[]> {
    return await this.service.getAllQueueDetails();
  }
}
