import { Module } from '@nestjs/common';
import { Visitor } from './model/entities/visitor.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VisitorCrudService } from './services/visitor.crud.service';
import { VisitorCrudController } from './controllers/visitor.crud.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Visitor])],
  providers: [VisitorCrudService],
  controllers: [VisitorCrudController],
})
export class VisitorModule {}
