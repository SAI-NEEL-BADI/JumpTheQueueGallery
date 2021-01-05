import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { compare, genSalt, hash } from 'bcrypt';
import { plainToClass } from 'class-transformer';
import { Repository } from 'typeorm';
import { LoginDTO } from '../../core/auth/model/login.dto';
import { Visitor } from '../model/entities/visitor.entity';

@Injectable()
export class VisitorCrudService extends TypeOrmCrudService<Visitor> {
  constructor(@InjectRepository(Visitor) repo: Repository<Visitor>) {
    super(repo);
  }
  async findVisitor(username: string): Promise<Visitor | undefined> {
    return this.repo.findOne({
      where: {
        username,
      },
    });
  }

  async login(user: LoginDTO): Promise<Visitor> {
    const visitor = await this.validateVisitor(user.username!, user.password!);

    if (!visitor) {
      throw new UnauthorizedException('Wrong username or password');
    }
    return visitor;
  }

  async validateVisitor(username: string, pass: string): Promise<Visitor | undefined> {
    const visitor = await this.findVisitor(username);
    if (visitor && (await compare(pass, visitor.password!))) {
      return visitor;
    }
    return undefined;
  }

  async registerVisitor(visitor: Visitor): Promise<Visitor> {
    const actualUser = await this.findVisitor(visitor.username!);

    if (actualUser) {
      throw new Error('User already exists');
    }
    const salt = await genSalt(12);
    const hashPass = await hash(visitor.password, salt);

    return plainToClass(
      Visitor,
      await this.repo.save({
        name: visitor.name,
        username: visitor.username,
        password: hashPass,
        phoneNumber: visitor.phoneNumber,
        acceptedCommercials: visitor.acceptedCommercials,
        acceptedTerms: visitor.acceptedTerms,
        userType: visitor.userType,
      }),
    );
  }
}
