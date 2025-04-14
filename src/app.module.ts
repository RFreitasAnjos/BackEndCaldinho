import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuarioModule } from './modules/usuario/usuario.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServiceService } from './modules/produto/service/produto.service';
import { ControllerController } from './modules/produto/controller/produto.controller';
import { ProdutoModule } from './modules/produto/produto.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'caldinho_iranir',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
      autoLoadEntities: true,
    }),
    UsuarioModule,
    ProdutoModule],
  controllers: [AppController, ControllerController],
  providers: [AppService, ServiceService],
})
export class AppModule {}
