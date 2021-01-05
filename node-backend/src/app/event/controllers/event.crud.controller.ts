import { Controller } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { CrudType } from '@devon4node/common/serializer';
import { Event } from '../model/entities/event.entity';
import { EventCrudService } from '../services/event.crud.service';
import { ApiTags } from '@nestjs/swagger';

@Crud({
  model: {
    type: Event,
  },
})
@ApiTags('event')
@CrudType(Event)
@Controller('event/events')
export class EventCrudController {
  constructor(public service: EventCrudService) {}
}
