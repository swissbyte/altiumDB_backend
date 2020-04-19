import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Attribute } from "./Attribute";

@Entity("schemalibpath", { schema: "component" })
export class Schemalibpath {
  @PrimaryGeneratedColumn({ type: "int", name: "ID" })
  id: number;

  @Column("varchar", { name: "schemalibPath", length: 255 })
  schemalibPath: string;

  @OneToMany(() => Attribute, (attribute) => attribute.libraryPath)
  attributes: Attribute[];
}
