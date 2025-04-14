import { Injectable } from '@nestjs/common';
import { UsuarioRepository } from '../repositories/usuario.repository';
import { CriarUsuarioDto } from '../dto/usuario.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Usuario } from '../usuario.entity';

@Injectable()
export class UsuarioService {
    constructor(
        @InjectRepository(Usuario)
        private readonly usuarioRepo: UsuarioRepository){}

    criarUsuario(dto: CriarUsuarioDto){
        return this.usuarioRepo.salvar(dto);
    }

    listar() {
        return this.usuarioRepo.buscarTodos();
    }
}
