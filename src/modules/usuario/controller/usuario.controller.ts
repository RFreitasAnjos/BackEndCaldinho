import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import { UsuarioService } from '../services/usuario.service';
import { CriarUsuarioDto } from '../dto/usuario.dto';

@Controller('usuario')
export class UsuarioController {
    constructor(private readonly usuarioService: UsuarioService){}

    @Post()
    criarUsuario(@Body() dto: CriarUsuarioDto){
        return this.usuarioService.criarUsuario(dto);
    }

    @Get()
    async listarUsuario(): Promise<any[]> {
        return this.usuarioService.listar();
    }
}
