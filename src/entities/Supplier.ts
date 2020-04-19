import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Attribute } from "./Attribute";
import { State } from "./State";

@Index("supplier_Name_uindex", ["name"], { unique: true })
@Index("supplier_state_ID_fk", ["stateId"], {})
@Entity("supplier", { schema: "component" })
export class Supplier {
  @PrimaryGeneratedColumn({ type: "int", name: "ID" })
  id: number;

  @Column("varchar", { name: "Name", unique: true, length: 255 })
  name: string;

  @Column("varchar", { name: "URL", nullable: true, length: 255 })
  url: string | null;

  @Column("int", { name: "StateID" })
  stateId: number;

  @OneToMany(() => Attribute, (attribute) => attribute.mpn2Supplier)
  attributes: Attribute[];

  @OneToMany(() => Attribute, (attribute) => attribute.mpn2Supplier2)
  attributes2: Attribute[];

  @OneToMany(() => Attribute, (attribute) => attribute.mpn1Supplier)
  attributes3: Attribute[];

  @OneToMany(() => Attribute, (attribute) => attribute.mpn1Supplier2)
  attributes4: Attribute[];

  @ManyToOne(() => State, (state) => state.suppliers, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "StateID", referencedColumnName: "id" }])
  state: State;
}
