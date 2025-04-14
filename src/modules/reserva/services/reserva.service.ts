import { Injectable } from '@nestjs/common';
import { ReservaRepository } from '../repository/reserva.repository';
import { CriarReservaDto } from '../dto/reserva.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Reserva } from '../reserva.entity';

@Injectable()
export class ReservaService {
    constructor(
        @InjectRepository(Reserva)
        private readonly reservaRepo: ReservaRepository){}

    criarReserva(dto: CriarReservaDto){
        return this.reservaRepo.salvar(dto);
    }

    listarReservas(){
        return this.reservaRepo.buscarTodos();
    }
}
