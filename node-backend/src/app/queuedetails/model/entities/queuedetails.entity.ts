import { ApiPropertyOptional } from '@nestjs/swagger';
import { CrudValidationGroups } from '@nestjsx/crud';
import { IsDefined, IsOptional } from 'class-validator';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { BaseEntity } from '../../../shared/model/entities/base-entity.entity';
import { Event } from '../../../event/model/entities/event.entity';
import { Visitor } from '../../../visitor/model/entities/visitor.entity';

@Entity()
export class Queuedetails extends BaseEntity {
  @ApiPropertyOptional()
  @IsDefined({ groups: [CrudValidationGroups.CREATE] })
  @IsOptional({ groups: [CrudValidationGroups.UPDATE] })
  @Column('varchar', { nullable: true })
  queueNumber?: string;

  @ApiPropertyOptional()
  @IsDefined({ groups: [CrudValidationGroups.CREATE] })
  @IsOptional({ groups: [CrudValidationGroups.UPDATE] })
  @Column('datetime', { nullable: true })
  creationTime?: Date;

  @ApiPropertyOptional()
  @IsDefined({ groups: [CrudValidationGroups.CREATE] })
  @IsOptional({ groups: [CrudValidationGroups.UPDATE] })
  @Column('datetime', { nullable: true })
  startTime?: Date;

  @ApiPropertyOptional()
  @IsDefined({ groups: [CrudValidationGroups.CREATE] })
  @IsOptional({ groups: [CrudValidationGroups.UPDATE] })
  @Column('datetime', { nullable: true })
  endTime?: Date;

  @ApiPropertyOptional()
  @IsDefined({ groups: [CrudValidationGroups.CREATE] })
  @IsOptional({ groups: [CrudValidationGroups.UPDATE] })
  @Column('datetime', { nullable: true })
  estimatedTime?: Date;

  @ApiPropertyOptional()
  @IsDefined({ groups: [CrudValidationGroups.CREATE] })
  @IsOptional({ groups: [CrudValidationGroups.UPDATE] })
  @Column('datetime', { nullable: true })
  attentionTime?: Date;

  @ApiPropertyOptional()
  @IsDefined({ groups: [CrudValidationGroups.CREATE] })
  @IsOptional({ groups: [CrudValidationGroups.UPDATE] })
  @ManyToOne(() => Visitor, { eager: true })
  @JoinColumn({ name: 'idVisitor', referencedColumnName: 'id' })
  idVisitor?: number;

  @ApiPropertyOptional()
  @IsDefined({ groups: [CrudValidationGroups.CREATE] })
  @IsOptional({ groups: [CrudValidationGroups.UPDATE] })
  @ManyToOne(() => Event, { eager: true })
  @JoinColumn({ name: 'idEvent', referencedColumnName: 'id' })
  idEvent?: number;
}
