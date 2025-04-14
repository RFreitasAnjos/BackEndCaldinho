import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Reserva } from "../reserva.entity";
import { CriarReservaDto } from "../dto/reserva.dto";

@Injectable()
export class ReservaRepository{
    constructor(
        @InjectRepository(Reserva)
        private readonly repo: Repository<Reserva>
    ){}

    async salvar(dto: CriarReservaDto): Promise<Reserva> {
        const novo = this.repo.create(dto);
        return this.repo.save(novo);
    }
    async buscarTodos(): Promise<Reserva[]>{
        return this.repo.find()
    }

    async buscarPorPessoa(usuario: string, id: number): Promise<Reserva | null> {
        return this.repo.findOne({where: { id }});
    }

}