import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Usuario } from "../usuario/usuario.entity";

@Entity('reserva')
export class Reserva{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    usuario: Usuario;
    
    @Column()
    QuantidadeDePessoas: number;

    @Column()
    descrição: string;

    @Column()
    dataAgendada:Date;
}