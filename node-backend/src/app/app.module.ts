import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoreModule } from './core/core.module';
import { VisitorModule } from './visitor/visitor.module';
import { EventModule } from './event/event.module';
import { QueuedetailsModule } from './queuedetails/queuedetails.module';

@Module({
  imports: [CoreModule, VisitorModule, EventModule, QueuedetailsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
