import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Component } from "./Component";

@Entity("author", { schema: "component" })
export class Author {
  @PrimaryGeneratedColumn({ type: "int", name: "ID" })
  id: number;

  @Column("varchar", { name: "Name", length: 255 })
  name: string;

  @OneToMany(() => Component, (component) => component.author)
  components: Component[];
}
