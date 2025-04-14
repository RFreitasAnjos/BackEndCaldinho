import { Body, Controller, Get, Post } from '@nestjs/common';
import { produtoService } from '../service/produto.service';
import { CriarProdutoDto } from '../dto/produto.dto';


@Controller('controller')
export class ControllerController {
    constructor(private readonly produtoService: produtoService){}

    @Post()
    criarProduto(@Body() dto: CriarProdutoDto){
        return this.produtoService.criarProduto(dto);
    }

    @Get()
    listarProdutos(){
        return this.produtoService.listarProdutos()
    }
}
