import {Column,Entity,Index,JoinColumn,ManyToOne,OneToMany,PrimaryGeneratedColumn} from "typeorm";
import {Attribute} from './Attribute'
import {Class} from './Class'


@Index("componentcase_componentclass_ID_fk",["componentClassId",],{  })
@Entity("case" ,{schema:"component" } )
export  class Case {

@PrimaryGeneratedColumn({ type:"int", name:"ID" })
id:number;

@Column("varchar",{ name:"Casename",nullable:true,length:255 })
casename:string | null;

@Column("int",{ name:"ComponentClassID" })
componentClassId:number;

@OneToMany(()=>Attribute,attribute=>attribute.case)


attributes:Attribute[];

@ManyToOne(()=>Class,class=>class.cases,{ onDelete:"RESTRICT",onUpdate:"RESTRICT" })
@JoinColumn([{ name: "ComponentClassID", referencedColumnName: "id" },
])

componentClass:Class;

}
