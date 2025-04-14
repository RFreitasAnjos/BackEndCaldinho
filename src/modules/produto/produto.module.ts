import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Produto } from './produto.entity';
import { produtoService } from './service/produto.service';
import { produtoController } from './controller/produto.controller';

@Module({
    imports: [TypeOrmModule.forFeature([Produto])], // Adicione suas entidades aqui, se necessário
    providers: [produtoService],
    controllers: [produtoController],
})
export class ProdutoModule {}
