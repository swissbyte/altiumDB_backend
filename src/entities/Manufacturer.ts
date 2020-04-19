import {
    Column,
    Entity,
    Index,
    JoinColumn,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn,
} from "typeorm";
import {Attribute} from "./Attribute";
import {State} from "./State";

@Index("manufacturer_Name_uindex", ["name"], {unique: true})
@Entity("manufacturer", {schema: "component"})
export class Manufacturer {
    @PrimaryGeneratedColumn({type: "int", name: "ID"})
    id: number | undefined;

    @Column("varchar", {name: "Name", unique: true, length: 255})
    name: string | undefined;
}
