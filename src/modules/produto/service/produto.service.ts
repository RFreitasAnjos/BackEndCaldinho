import { Injectable } from '@nestjs/common';
import { CriarProdutoDto } from '../dto/produto.dto';
import { ProdutoRepository } from '../repositories/produto.repository';

@Injectable()
export class produtoService {
    constructor(private readonly produtoRepo: ProdutoRepository){}

    criarProduto(dto: CriarProdutoDto){
        return this.produtoRepo.salvar(dto);
    }

    listarProdutos(){
        return this.produtoRepo.buscarTodos();
    }
}
