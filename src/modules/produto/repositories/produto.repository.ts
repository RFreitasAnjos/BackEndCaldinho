import { InjectRepository } from "@nestjs/typeorm";
import { Produto } from "../produto.entity";
import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { CriarProdutoDto } from "../dto/produto.dto";

@Injectable()
export class ProdutoRepository{
    constructor(
        @InjectRepository(Produto)
        private readonly repo: Repository<Produto>
    ){}

    async salvar(dto: CriarProdutoDto): Promise<Produto> {
        const novo = this.repo.create(dto);
        return this.repo.save(novo);
    }

    async buscarTodos(): Promise<Produto[]>{
        return this.repo.find()
    }

    async buscarPorNome(nome: string): Promise<Produto | null>{
        return this.repo.findOne({ where: { nome }})
    }
}