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

@Index("supplier_Name_uindex", ["name"], {unique: true})
@Index("supplier_state_ID_fk", ["stateId"], {})
@Entity("supplier", {schema: "component"})
export class Supplier {
    @PrimaryGeneratedColumn({type: "int", name: "ID"})
    id: number | undefined;

    @Column("varchar", {name: "Name", unique: true, length: 255})
    name: string | undefined;

    @Column("varchar", {name: "URL", nullable: true, length: 255})
    url: string | null | undefined;

    @Column("int", {name: "StateID"})
    stateId: number | undefined;

}
