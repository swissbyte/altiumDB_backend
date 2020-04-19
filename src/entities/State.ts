import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Component } from "./Component";
import { Supplier } from "./Supplier";

@Entity("state", { schema: "component" })
export class State {
  @PrimaryGeneratedColumn({type: "int", name: "ID"})
  id: number | undefined;

  @Column("varchar", {name: "Name", length: 255})
  name: string | undefined;

}
