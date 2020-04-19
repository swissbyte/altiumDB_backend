import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Attribute } from "./Attribute";

@Entity("footprintpath", { schema: "component" })
export class Footprintpath {
  @PrimaryGeneratedColumn({ type: "int", name: "ID" })
  id: number | undefined;

  @Column("varchar", { name: "footprintPath", length: 255 })
  footprintPath: string | undefined;

}
