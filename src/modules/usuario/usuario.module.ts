import { Module } from '@nestjs/common';
import { UsuarioController } from './controller/usuario.controller';
import { UsuarioService } from './services/usuario.service';
import { UsuarioRepository } from './repositories/usuario.repository';

@Module({
  controllers: [UsuarioController],
  providers: [UsuarioService,UsuarioRepository]
})
export class UsuarioModule {}
