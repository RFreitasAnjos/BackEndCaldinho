import { IsNotEmpty } from "class-validator";

export class CriarProdutoDto{
    @IsNotEmpty()
    nome: string;

    @IsNotEmpty()
    valor: number;
}