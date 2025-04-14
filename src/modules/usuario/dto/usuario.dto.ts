import { IsEmail, IsNotEmpty, MinLength } from "class-validator";

export class CriarUsuarioDto{
    @IsNotEmpty()
    nome: string;

    @IsEmail()
    email: string;

    @IsNotEmpty()
    telefone: string;

    @IsNotEmpty()
    dataNascimento: string;

    @MinLength(6)
    senha: string;
}