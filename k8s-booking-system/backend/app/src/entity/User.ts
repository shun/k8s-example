import {Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, Column, OneToMany} from "typeorm";
import {Bookinginfo} from "./Bookinginfo";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: "varchar",
    length: 20,
    nullable: false,
    comment: ""
  })
  firstname: string;

  @Column({
    type: "varchar",
    length: 20,
    nullable: false,
    comment: ""
  })
  lastname: string;

  @Column({
    type: "boolean",
    nullable: false,
    default: "0",
    comment: ""
  })
  delflg: boolean;

  @Column({
    type: "date",
    nullable: false,
    default: () => "CURDATE()",
    comment: ""
  })
  created_at: Date;

  @Column({
    type: "date",
    nullable: false,
    default: () => "CURDATE()",
    comment: ""
  })
  updated_at: Date;

  @OneToMany(
    type => Bookinginfo,
    bookinginfo => bookinginfo.user
  )
  bookinginfolist: Bookinginfo[];
}
