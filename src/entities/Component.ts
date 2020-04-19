import {
    Column,
    Entity,
    Index,
    PrimaryGeneratedColumn,
} from "typeorm";
import {Attribute} from "./Attribute";
import {Author} from "./Author";
import {Subclass} from "./Subclass";
import {State} from "./State";

@Index("component_Part Number_uindex", ["partNumber"], {unique: true})
@Index("component_attributes_ID_fk", ["attributeId"], {})
@Index("component_componentsubclass_ID_fk", ["componentClassId"], {})
@Index("component_author_ID_fk", ["authorId"], {})
@Index("component_state_ID_fk", ["stateId"], {})
@Entity("component", {schema: "component"})
export class Component {
    @PrimaryGeneratedColumn({type: "int", name: "ID"})
    id: number | undefined;

    @Column("varchar", {name: "Part Number", unique: true, length: 255})
    partNumber: string | undefined;

    @Column("int", {name: "AttributeID"})
    attributeId: number | undefined;

    @Column("int", {name: "ComponentClassID"})
    componentClassId: number | undefined;

    @Column("int", {name: "StateID"})
    stateId: number | undefined;

    @Column("int", {name: "AuthorID"})
    authorId: number | undefined;

    @Column("varchar", {name: "CreationDate", nullable: true, length: 255})
    creationDate: string | null | undefined;

    @Column("varchar", {
        name: "LatestRevisionDate",
        nullable: true,
        length: 255,
    })
    latestRevisionDate: string | null | undefined;
}
