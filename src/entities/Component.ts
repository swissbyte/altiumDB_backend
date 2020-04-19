import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Attribute } from "./Attribute";
import { Author } from "./Author";
import { Subclass } from "./Subclass";
import { State } from "./State";

@Index("component_Part Number_uindex", ["partNumber"], { unique: true })
@Index("component_attributes_ID_fk", ["attributeId"], {})
@Index("component_componentsubclass_ID_fk", ["componentClassId"], {})
@Index("component_author_ID_fk", ["authorId"], {})
@Index("component_state_ID_fk", ["stateId"], {})
@Entity("component", { schema: "component" })
export class Component {
  @PrimaryGeneratedColumn({ type: "int", name: "ID" })
  id: number;

  @Column("varchar", { name: "Part Number", unique: true, length: 255 })
  partNumber: string;

  @Column("int", { name: "AttributeID" })
  attributeId: number;

  @Column("int", { name: "ComponentClassID" })
  componentClassId: number;

  @Column("int", { name: "StateID" })
  stateId: number;

  @Column("int", { name: "AuthorID" })
  authorId: number;

  @Column("varchar", { name: "CreationDate", nullable: true, length: 255 })
  creationDate: string | null;

  @Column("varchar", {
    name: "LatestRevisionDate",
    nullable: true,
    length: 255,
  })
  latestRevisionDate: string | null;

  @ManyToOne(() => Attribute, (attribute) => attribute.components, {
    onDelete: "CASCADE",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "AttributeID", referencedColumnName: "id" }])
  attribute: Attribute;

  @ManyToOne(() => Author, (author) => author.components, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "AuthorID", referencedColumnName: "id" }])
  author: Author;

  @ManyToOne(() => Subclass, (subclass) => subclass.components, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "ComponentClassID", referencedColumnName: "id" }])
  componentClass: Subclass;

  @ManyToOne(() => State, (state) => state.components, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "StateID", referencedColumnName: "id" }])
  state: State;
}
