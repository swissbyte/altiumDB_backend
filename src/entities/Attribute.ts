import {Column,Entity,Index,JoinColumn,ManyToOne,OneToMany,PrimaryGeneratedColumn} from "typeorm";
import {Case} from './Case'
import {Footprintpath} from './Footprintpath'
import {Rohs} from './Rohs'
import {Schemalibpath} from './Schemalibpath'
import {Supplier} from './Supplier'
import {Component} from './Component'


@Index("attribute_footprintpath_ID_fk",["footprintPathId",],{  })
@Index("attribute_schemalibpath_ID_fk",["libraryPathId",],{  })
@Index("attribute_componentcase_ID_fk",["caseId",],{  })
@Index("attribute_supplier_ID_fk",["mpn2Supplier1Id",],{  })
@Index("attribute_supplier_ID_fk_2",["mpn2Supplier2Id",],{  })
@Index("attribute_supplier_ID_fk_3",["mpn1Supplier1Id",],{  })
@Index("attribute_supplier_ID_fk_4",["mpn1Supplier2Id",],{  })
@Index("attribute_rohs_ID_fk",["rohsId",],{  })
@Entity("attribute" ,{schema:"component" } )
export  class Attribute {

@PrimaryGeneratedColumn({ type:"int", name:"ID" })
id:number;

@Column("int",{ name:"LibraryPathID" })
libraryPathId:number;

@Column("varchar",{ name:"Library Ref",nullable:true,length:255 })
libraryRef:string | null;

@Column("varchar",{ name:"Comment",nullable:true,length:255 })
comment:string | null;

@Column("varchar",{ name:"Footprint",nullable:true,length:255 })
footprint:string | null;

@Column("varchar",{ name:"Pin Count",nullable:true,length:255 })
pinCount:string | null;

@Column("int",{ name:"CaseID" })
caseId:number;

@Column("int",{ name:"FootprintPathID" })
footprintPathId:number;

@Column("varchar",{ name:"Footprint Ref",nullable:true,length:255 })
footprintRef:string | null;

@Column("varchar",{ name:"PackageDescription",nullable:true,length:255 })
packageDescription:string | null;

@Column("varchar",{ name:"SMD",nullable:true,length:255 })
smd:string | null;

@Column("varchar",{ name:"Color",nullable:true,length:255 })
color:string | null;

@Column("varchar",{ name:"Part Description",nullable:true,length:255 })
partDescription:string | null;

@Column("varchar",{ name:"Manufacturer1",nullable:true,length:255 })
manufacturer1:string | null;

@Column("varchar",{ name:"Manufacturer1 MPN",nullable:true,length:255 })
manufacturer1Mpn:string | null;

@Column("varchar",{ name:"Manufacturer1 ComponentHeight",nullable:true,length:255 })
manufacturer1ComponentHeight:string | null;

@Column("varchar",{ name:"Manufacturer2",nullable:true,length:255 })
manufacturer2:string | null;

@Column("varchar",{ name:"Manufacturer2 MPN",nullable:true,length:255 })
manufacturer2Mpn:string | null;

@Column("varchar",{ name:"Manufacturer2 ComponentHeight",nullable:true,length:255 })
manufacturer2ComponentHeight:string | null;

@Column("varchar",{ name:"HelpURL",nullable:true,length:255 })
helpUrl:string | null;

@Column("varchar",{ name:"ComponentLink1URL",nullable:true,length:255 })
componentLink1Url:string | null;

@Column("varchar",{ name:"ComponentLink1Description",nullable:true,length:255 })
componentLink1Description:string | null;

@Column("varchar",{ name:"ComponentLink2URL",nullable:true,length:255 })
componentLink2Url:string | null;

@Column("varchar",{ name:"ComponentLink2Description",nullable:true,length:255 })
componentLink2Description:string | null;

@Column("varchar",{ name:"Resistance",nullable:true,length:255 })
resistance:string | null;

@Column("varchar",{ name:"Value",nullable:true,length:255 })
value:string | null;

@Column("varchar",{ name:"TC",nullable:true,length:255 })
tc:string | null;

@Column("varchar",{ name:"Power",nullable:true,length:255 })
power:string | null;

@Column("varchar",{ name:"Tolerance",nullable:true,length:255 })
tolerance:string | null;

@Column("varchar",{ name:"Voltage",nullable:true,length:255 })
voltage:string | null;

@Column("int",{ name:"MPN1Supplier1ID" })
mpn1Supplier1Id:number;

@Column("varchar",{ name:"MPN1Supplier1OrderingCode",nullable:true,length:255 })
mpn1Supplier1OrderingCode:string | null;

@Column("int",{ name:"MPN1Supplier2ID" })
mpn1Supplier2Id:number;

@Column("varchar",{ name:"MPN1Supplier2OrderingCode",nullable:true,length:255 })
mpn1Supplier2OrderingCode:string | null;

@Column("int",{ name:"MPN2Supplier1ID" })
mpn2Supplier1Id:number;

@Column("varchar",{ name:"MPN2Supplier1OrderingCode",nullable:true,length:255 })
mpn2Supplier1OrderingCode:string | null;

@Column("int",{ name:"MPN2Supplier2ID" })
mpn2Supplier2Id:number;

@Column("varchar",{ name:"MPN2Supplier2OrderingCode",nullable:true,length:255 })
mpn2Supplier2OrderingCode:string | null;

@Column("int",{ name:"rohsID" })
rohsId:number;

@ManyToOne(()=>Case,case=>case.attributes,{ onDelete:"RESTRICT",onUpdate:"RESTRICT" })
@JoinColumn([{ name: "CaseID", referencedColumnName: "id" },
])

case:Case;

@ManyToOne(()=>Footprintpath,footprintpath=>footprintpath.attributes,{ onDelete:"RESTRICT",onUpdate:"RESTRICT" })
@JoinColumn([{ name: "FootprintPathID", referencedColumnName: "id" },
])

footprintPath:Footprintpath;

@ManyToOne(()=>Rohs,rohs=>rohs.attributes,{ onDelete:"RESTRICT",onUpdate:"RESTRICT" })
@JoinColumn([{ name: "rohsID", referencedColumnName: "id" },
])

rohs:Rohs;

@ManyToOne(()=>Schemalibpath,schemalibpath=>schemalibpath.attributes,{ onDelete:"RESTRICT",onUpdate:"RESTRICT" })
@JoinColumn([{ name: "LibraryPathID", referencedColumnName: "id" },
])

libraryPath:Schemalibpath;

@ManyToOne(()=>Supplier,supplier=>supplier.attributes,{ onDelete:"RESTRICT",onUpdate:"RESTRICT" })
@JoinColumn([{ name: "MPN2Supplier1ID", referencedColumnName: "id" },
])

mpn2Supplier:Supplier;

@ManyToOne(()=>Supplier,supplier=>supplier.attributes2,{ onDelete:"RESTRICT",onUpdate:"RESTRICT" })
@JoinColumn([{ name: "MPN2Supplier2ID", referencedColumnName: "id" },
])

mpn2Supplier2:Supplier;

@ManyToOne(()=>Supplier,supplier=>supplier.attributes3,{ onDelete:"RESTRICT",onUpdate:"RESTRICT" })
@JoinColumn([{ name: "MPN1Supplier1ID", referencedColumnName: "id" },
])

mpn1Supplier:Supplier;

@ManyToOne(()=>Supplier,supplier=>supplier.attributes4,{ onDelete:"RESTRICT",onUpdate:"RESTRICT" })
@JoinColumn([{ name: "MPN1Supplier2ID", referencedColumnName: "id" },
])

mpn1Supplier2:Supplier;

@OneToMany(()=>Component,component=>component.attribute)


components:Component[];

}
