import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('usuario')
export class Usuario{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nome: string;

    @Column()
    dataNascimento: string;

    @Column()
    criacao: Date;

    @Column({unique: true})
    email: string;

    @Column()
    telefone: string;

    @Column()
    senha: string;

    //Todo: Histórico

    @Column({ default: true})
    ativo: boolean;
}