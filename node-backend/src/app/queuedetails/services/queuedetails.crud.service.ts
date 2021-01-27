import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Repository } from 'typeorm';
import { Event } from '../../event/model/entities/event.entity';
import { Visitor } from '../../visitor/model/entities/visitor.entity';
import { Queuedetails } from '../model/entities/queuedetails.entity';
import { JoinDto } from '../model/entities/queuedetails.joinDto';
import { EventCriteria } from '../model/queuedetails.eventCriteria';
import { VisitorCriteria } from '../model/queuedetails.visitorCriteria';

@Injectable()
export class QueuedetailsCrudService extends TypeOrmCrudService<Queuedetails> {
  async getAllQueueDetails(): Promise<any> {
    const list = await this.repo.query('select * from queuedetails');
    return list;
  }
  async getQueueDetailsByVisitorId(criteria: VisitorCriteria): Promise<any> {
    const list = await this.repo.find({
      where: {
        idVisitor: criteria.idVisitor,
      },
    });
    return list;
  }
  queueDetail: any;

  constructor(
    @InjectRepository(Queuedetails) repo: Repository<Queuedetails>,
    @InjectRepository(Event) private readonly eventRepository: Repository<Event>,
    @InjectRepository(Visitor) private readonly visitorRepository: Repository<Visitor>,
  ) {
    super(repo);
  }
  async getQueuesByEventId(criteria: EventCriteria): Promise<any[]> {
    const list = await this.repo.find({
      where: {
        idEvent: criteria.idEvent,
      },
    });
    return list;
  }

  async joinQueue(joinCriteria: JoinDto): Promise<any> {
    const idVisitor = joinCriteria.idVisitor;
    const idEvent = joinCriteria.idEvent;
    const event = await this.getEvent(idEvent);
    const visitor = await this.getVisitor(idVisitor);

    if (event != undefined && visitor != undefined) {
      const queuedetail = await this.repo.findOne({
        where: {
          idEvent: idEvent,
          idVisitor: idVisitor,
        },
      });

      if (queuedetail == undefined || queuedetail == null) {
        const token = await this.createQueueDetail(visitor, event);
        return token;
      }
      return queuedetail;
    }

    return 'no access!!!!!!!!!';
  }

  async createQueueDetail(visitor: Visitor, event: Event): Promise<any> {
    let time: number | any;
    if (event.attentionTime) {
      time = new Date().getTime() + event.attentionTime * 60;
    }
    const token = await this.repo.save({
      queueNumber: await this.createQueueNumber(event),
      creationTime: new Date(),
      startTime: event.startDate,
      endTime: event.endDate,
      attentionTime: new Date(time),
      estimatedTime: new Date(time),
      idVisitor: visitor.id,
      idEvent: event.id,
    });
    await this.setEstimatedTime(event);
    const queue = await this.repo.findOne(token.id);
    return queue;
  }

  async setEstimatedTime(event: Event) {
    let time: number | any;
    time = new Date().getTime();
    if (event.attentionTime) {
      const list = await this.getQueuesByEventId({ idEvent: event.id });
      let count = 0;
      for (let queue of list) {
        if (count == 0) {
          queue.estimatedTime = new Date();
          time = queue.attentionTime.getTime();
        } else {
          queue.estimatedTime = new Date(time + (event.attentionTime * 60 * count - 1));
          queue.attentionTime = new Date(time + event.attentionTime * 60 * count);
        }
        await this.repo.save(queue);
        count++;
      }
    }
  }

  async getEvent(id: number): Promise<Event | undefined> {
    return await this.eventRepository.findOne({
      where: {
        id: id,
      },
    });
  }
  async getVisitor(id: number): Promise<Visitor | undefined> {
    return await this.visitorRepository.findOne({
      where: {
        id: id,
      },
    });
  }

  async createQueueNumber(event: Event): Promise<any> {
    const list = await this.getQueuesByEventId({ idEvent: event.id });
    if (list.length == 0) {
      return 'Q' + event.id + '01';
    } else {
      const queueNumber = list[list.length - 1].queueNumber;
      const finalNumber = parseInt(queueNumber.replace(/\D/g, '')) + 1;
      return 'Q' + finalNumber;
    }
  }
}
