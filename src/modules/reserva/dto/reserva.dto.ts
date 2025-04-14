import { IsNotEmpty } from "class-validator";
import { Usuario } from "src/modules/usuario/usuario.entity";

export class CriarReservaDto{
    @IsNotEmpty()
    usuario: Usuario;
    
    @IsNotEmpty()
    QuantidadeDePessoas: number;

    @IsNotEmpty()
    dataAgendada: Date;
}