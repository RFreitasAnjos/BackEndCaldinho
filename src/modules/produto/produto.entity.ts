import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Avaliacao } from "../avaliacao/avaliacao.entity";

@Entity('produto')
export class Produto{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nome: string;

    @Column()
    descricao: string;

    @Column()
    valor: number;

    @Column()
    avaliacao: Avaliacao;

    @Column({ default: false })
    promocao: boolean;

    @Column({ default: true })
    disponivel: boolean;
}