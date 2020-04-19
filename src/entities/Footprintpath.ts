import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Attribute } from "./Attribute";

@Entity("footprintpath", { schema: "component" })
export class Footprintpath {
  @PrimaryGeneratedColumn({ type: "int", name: "ID" })
  id: number;

  @Column("varchar", { name: "footprintPath", length: 255 })
  footprintPath: string;

  @OneToMany(() => Attribute, (attribute) => attribute.footprintPath)
  attributes: Attribute[];
}
