import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Component } from "./Component";
import { Supplier } from "./Supplier";

@Entity("state", { schema: "component" })
export class State {
  @PrimaryGeneratedColumn({ type: "int", name: "ID" })
  id: number;

  @Column("varchar", { name: "Name", length: 255 })
  name: string;

  @OneToMany(() => Component, (component) => component.state)
  components: Component[];

  @OneToMany(() => Supplier, (supplier) => supplier.state)
  suppliers: Supplier[];
}
