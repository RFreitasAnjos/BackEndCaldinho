import { Injectable } from '@nestjs/common';
import { CriarProdutoDto } from '../dto/produto.dto';
import { ProdutoRepository } from '../repositories/produto.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Produto } from '../produto.entity';

@Injectable()
export class produtoService {
    constructor(
        @InjectRepository(Produto)
        private readonly produtoRepo: ProdutoRepository){}

    criarProduto(dto: CriarProdutoDto){
        return this.produtoRepo.salvar(dto);
    }

    listarProdutos(){
        return this.produtoRepo.buscarTodos();
    }
}
