import {Column, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Case} from './Case'
import {Footprintpath} from './Footprintpath'
import {Rohs} from './Rohs'
import {Schemalibpath} from './Schemalibpath'
import {Supplier} from './Supplier'
import {Component} from './Component'


@Index("attribute_footprintpath_ID_fk", ["footprintPathId",], {})
@Index("attribute_schemalibpath_ID_fk", ["libraryPathId",], {})
@Index("attribute_componentcase_ID_fk", ["caseId",], {})
@Index("attribute_supplier_ID_fk", ["mpn2Supplier1Id",], {})
@Index("attribute_supplier_ID_fk_2", ["mpn2Supplier2Id",], {})
@Index("attribute_supplier_ID_fk_3", ["mpn1Supplier1Id",], {})
@Index("attribute_supplier_ID_fk_4", ["mpn1Supplier2Id",], {})
@Index("attribute_rohs_ID_fk", ["rohsId",], {})
@Entity("attribute", {schema: "component"})
export class Attribute {

    @PrimaryGeneratedColumn({type: "int", name: "ID"})
    id: number | undefined;

    @Column("int", {name: "LibraryPathID"})
    libraryPathId: number | undefined;

    @Column("varchar", {name: "Library Ref", nullable: true, length: 255})
    libraryRef: string | null | undefined;

    @Column("varchar", {name: "Comment", nullable: true, length: 255})
    comment: string | null | undefined;

    @Column("varchar", {name: "Footprint", nullable: true, length: 255})
    footprint: string | null | undefined;

    @Column("varchar", {name: "Pin Count", nullable: true, length: 255})
    pinCount: string | null | undefined;

    @Column("int", {name: "CaseID"})
    caseId: number | undefined;

    @Column("int", {name: "FootprintPathID"})
    footprintPathId: number | undefined;

    @Column("varchar", {name: "Footprint Ref", nullable: true, length: 255})
    footprintRef: string | null | undefined;

    @Column("varchar", {name: "PackageDescription", nullable: true, length: 255})
    packageDescription: string | null | undefined;

    @Column("varchar", {name: "SMD", nullable: true, length: 255})
    smd: string | null | undefined;

    @Column("varchar", {name: "Color", nullable: true, length: 255})
    color: string | null | undefined;

    @Column("varchar", {name: "Part Description", nullable: true, length: 255})
    partDescription: string | null | undefined;

    @Column("varchar", {name: "Manufacturer1", nullable: true, length: 255})
    manufacturer1: string | null | undefined;

    @Column("varchar", {name: "Manufacturer1 MPN", nullable: true, length: 255})
    manufacturer1Mpn: string | null | undefined;

    @Column("varchar", {name: "Manufacturer1 ComponentHeight", nullable: true, length: 255})
    manufacturer1ComponentHeight: string | null | undefined;

    @Column("varchar", {name: "Manufacturer2", nullable: true, length: 255})
    manufacturer2: string | null | undefined;

    @Column("varchar", {name: "Manufacturer2 MPN", nullable: true, length: 255})
    manufacturer2Mpn: string | null | undefined;

    @Column("varchar", {name: "Manufacturer2 ComponentHeight", nullable: true, length: 255})
    manufacturer2ComponentHeight: string | null | undefined;

    @Column("varchar", {name: "HelpURL", nullable: true, length: 255})
    helpUrl: string | null | undefined;

    @Column("varchar", {name: "ComponentLink1URL", nullable: true, length: 255})
    componentLink1Url: string | null | undefined;

    @Column("varchar", {name: "ComponentLink1Description", nullable: true, length: 255})
    componentLink1Description: string | null | undefined;

    @Column("varchar", {name: "ComponentLink2URL", nullable: true, length: 255})
    componentLink2Url: string | null | undefined;

    @Column("varchar", {name: "ComponentLink2Description", nullable: true, length: 255})
    componentLink2Description: string | null | undefined;

    @Column("varchar", {name: "Resistance", nullable: true, length: 255})
    resistance: string | null | undefined;

    @Column("varchar", {name: "Value", nullable: true, length: 255})
    value: string | null | undefined;

    @Column("varchar", {name: "TC", nullable: true, length: 255})
    tc: string | null | undefined;

    @Column("varchar", {name: "Power", nullable: true, length: 255})
    power: string | null | undefined;

    @Column("varchar", {name: "Tolerance", nullable: true, length: 255})
    tolerance: string | null | undefined;

    @Column("varchar", {name: "Voltage", nullable: true, length: 255})
    voltage: string | null | undefined;

    @Column("int", {name: "MPN1Supplier1ID"})
    mpn1Supplier1Id: number | undefined;

    @Column("varchar", {name: "MPN1Supplier1OrderingCode", nullable: true, length: 255})
    mpn1Supplier1OrderingCode: string | null | undefined;

    @Column("int", {name: "MPN1Supplier2ID"})
    mpn1Supplier2Id: number | undefined;

    @Column("varchar", {name: "MPN1Supplier2OrderingCode", nullable: true, length: 255})
    mpn1Supplier2OrderingCode: string | null | undefined;

    @Column("int", {name: "MPN2Supplier1ID"})
    mpn2Supplier1Id: number | undefined;

    @Column("varchar", {name: "MPN2Supplier1OrderingCode", nullable: true, length: 255})
    mpn2Supplier1OrderingCode: string | null | undefined;

    @Column("int", {name: "MPN2Supplier2ID"})
    mpn2Supplier2Id: number | undefined;

    @Column("varchar", {name: "MPN2Supplier2OrderingCode", nullable: true, length: 255})
    mpn2Supplier2OrderingCode: string | null | undefined;

    @Column("int", {name: "rohsID"})
    rohsId: number | undefined;
}
