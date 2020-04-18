import {Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, Column, JoinColumn, ManyToOne} from "typeorm";
import {User} from "./User";
import {Facility} from "./Facility";

@Entity()
export class Bookinginfo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: "varchar",
    length: 20,
    nullable: false,
    comment: ""
  })
  title: string;

  @Column({
    type: "datetime",
    nullable: false,
    comment: ""
  })
  start_datetime: Date;

  @Column({
    type: "datetime",
    nullable: false,
    comment: ""
  })
  end_datetime: Date;

  @Column({
    type: "boolean",
    nullable: false,
    default: "0",
    comment: ""
  })
  delflg: boolean;

  @Column({
    nullable: false,
    default: () => "CURDATE()",
    comment: ""
  })
  created_at: Date;

  @Column({
    nullable: false,
    default: () => "CURDATE()",
    comment: ""
  })
  updated_at: Date;

  @ManyToOne(
    type => User,
    user => user.bookinginfolist
  )
  @JoinColumn()
  user: User;

  @ManyToOne(
    type => Facility
  )

  @JoinColumn()
  facility: Facility;
}
