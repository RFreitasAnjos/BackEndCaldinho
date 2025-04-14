import { Injectable } from '@nestjs/common';
import { ReservaRepository } from '../repository/reserva.repository';
import { CriarReservaDto } from '../dto/reserva.dto';

@Injectable()
export class ReservaService {
    constructor(private readonly reservaRepo: ReservaRepository){}

    criarReserva(dto: CriarReservaDto){
        return this.reservaRepo.salvar(dto);
    }

    listarReservas(){
        return this.reservaRepo.buscarTodos();
    }
}
