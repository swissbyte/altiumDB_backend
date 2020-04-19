import {Column, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Component} from './Component'
import {Class} from './Class'


@Index("componentsubclass_componentclass_ID_fk", ["componentclassId",], {})
@Entity("subclass", {schema: "component"})
export class Subclass {

    @PrimaryGeneratedColumn({type: "int", name: "ID"})
    id: number | undefined;

    @Column("varchar", {name: "Subclassname", nullable: true, length: 255})
    subclassname: string | null | undefined;

    @Column("int", {name: "ComponentclassID"})
    componentclassId: number | undefined;

}
