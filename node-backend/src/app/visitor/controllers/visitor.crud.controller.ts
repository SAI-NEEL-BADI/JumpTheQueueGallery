import { Body, Controller, Post } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { CrudType } from '@devon4node/common/serializer';
import { Visitor } from '../model/entities/visitor.entity';
import { VisitorCrudService } from '../services/visitor.crud.service';
import { ApiTags } from '@nestjs/swagger';
import { LoginDTO } from '../../core/auth/model/login.dto';

@Crud({
  model: {
    type: Visitor,
  },
})
@ApiTags('visitor')
@CrudType(Visitor)
@Controller('visitor/visitors')
export class VisitorCrudController {
  constructor(public service: VisitorCrudService) {}

  @Post('login')
  async login(@Body() login: LoginDTO): Promise<Visitor> {
    const token = await this.service.login(login);
    return token;
  }

  @Post('register')
  async register(@Body() visitor: Visitor): Promise<Visitor> {   
    const token = await this.service.registerVisitor(visitor);
    return token;
  }
}
