import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Case} from './Case'
import {Subclass} from './Subclass'


@Entity("class", {schema: "component"})
export class Class {

    @PrimaryGeneratedColumn({type: "int", name: "ID"})
    id: number | undefined;

    @Column("varchar", {name: "Classname", length: 255})
    classname: string | undefined;


}
