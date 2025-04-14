import { Injectable } from '@nestjs/common';
import { UsuarioRepository } from '../repositories/usuario.repository';
import { CriarUsuarioDto } from '../dto/usuario.dto';

@Injectable()
export class UsuarioService {
    constructor(private readonly usuarioRepo: UsuarioRepository){}

    criarUsuario(dto: CriarUsuarioDto){
        return this.usuarioRepo.salvar(dto);
    }

    listar() {
        return this.usuarioRepo.buscarTodos();
    }
}
