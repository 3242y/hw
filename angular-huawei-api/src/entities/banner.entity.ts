import { BaseEntity, Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Banner extends BaseEntity {
      //ID自增
      @PrimaryGeneratedColumn()
      id: number;

      @Column()
      name: string;

      @Column()
      picture: string;

      @Column()
      is_del: number;


}