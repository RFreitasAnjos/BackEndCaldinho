import { Module } from '@nestjs/common';
import { ReservaService } from './services/reserva.service';
import { ReservaController } from './controller/reserva.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Reserva } from './reserva.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Reserva])], // Adicione suas entidades aqui, se necessário 
  providers: [ReservaService],
  controllers: [ReservaController]
})
export class ReservaModule {}
