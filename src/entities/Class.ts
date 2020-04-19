import {Column,Entity,OneToMany,PrimaryGeneratedColumn} from "typeorm";
import {Case} from './Case'
import {Subclass} from './Subclass'


@Entity("class" ,{schema:"component" } )
export  class Class {

@PrimaryGeneratedColumn({ type:"int", name:"ID" })
id:number;

@Column("varchar",{ name:"Classname",length:255 })
classname:string;

@OneToMany(()=>Case,case=>case.componentClass)


cases:Case[];

@OneToMany(()=>Subclass,subclass=>subclass.componentclass)


subclasses:Subclass[];

}
