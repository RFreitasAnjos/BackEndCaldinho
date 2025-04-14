import { Body, Controller, Get, Post } from '@nestjs/common';
import { ReservaService } from '../services/reserva.service';
import { CriarReservaDto } from '../dto/reserva.dto';

@Controller('reserva')
export class ReservaController {
    constructor(private readonly reservaService: ReservaService){}

    @Post()
    criarReserva(@Body() dto: CriarReservaDto){
        return this.reservaService.criarReserva(dto);
    }

    @Get()
    listarReservas(){
        return this.reservaService.listarReservas();
    }
}
