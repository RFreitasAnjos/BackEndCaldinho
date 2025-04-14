import { Injectable } from "@nestjs/common";
import { CriarUsuarioDto } from "../dto/usuario.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Usuario } from "../usuario.entity";
import { Repository } from "typeorm";

@Injectable()
export class UsuarioRepository{

    constructor(
        @InjectRepository(Usuario)
        private readonly repo: Repository<Usuario>,
    ){}

    async salvar(dto: CriarUsuarioDto): Promise<Usuario> {
        const novo = this.repo.create(dto);
        return this.repo.save(novo);
    }
    async buscarTodos(): Promise<Usuario[]>{
        return this.repo.find()
    }

    async buscarPorEmail(email: string): Promise<Usuario | null> {
        return this.repo.findOne({where: { email }});
    }
}