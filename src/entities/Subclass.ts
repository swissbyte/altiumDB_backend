import {Column,Entity,Index,JoinColumn,ManyToOne,OneToMany,PrimaryGeneratedColumn} from "typeorm";
import {Component} from './Component'
import {Class} from './Class'


@Index("componentsubclass_componentclass_ID_fk",["componentclassId",],{  })
@Entity("subclass" ,{schema:"component" } )
export  class Subclass {

@PrimaryGeneratedColumn({ type:"int", name:"ID" })
id:number;

@Column("varchar",{ name:"Subclassname",nullable:true,length:255 })
subclassname:string | null;

@Column("int",{ name:"ComponentclassID" })
componentclassId:number;

@OneToMany(()=>Component,component=>component.componentClass)


components:Component[];

@ManyToOne(()=>Class,class=>class.subclasses,{ onDelete:"RESTRICT",onUpdate:"RESTRICT" })
@JoinColumn([{ name: "ComponentclassID", referencedColumnName: "id" },
])

componentclass:Class;

}
