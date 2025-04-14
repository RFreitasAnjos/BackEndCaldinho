import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('usuarios')
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

    @Column({ default: true})
    ativo: boolean;
}