import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Attribute } from "./Attribute";

@Entity("rohs", { schema: "component" })
export class Rohs {
  @PrimaryGeneratedColumn({ type: "int", name: "ID" })
  id: number | undefined;

  @Column("varchar", { name: "State", nullable: true, length: 255 })
  state: string | null | undefined;

}
