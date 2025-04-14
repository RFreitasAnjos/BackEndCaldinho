import { Module } from '@nestjs/common';
import { ReservaService } from './services/reserva.service';
import { ReservaController } from './controller/reserva.controller';

@Module({
  providers: [ReservaService],
  controllers: [ReservaController]
})
export class ReservaModule {}
