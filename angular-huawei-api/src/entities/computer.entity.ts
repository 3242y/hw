import { BaseEntity, Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Computer extends BaseEntity{      
      //ID自增
      @PrimaryGeneratedColumn()
      id: number;
      
      @Column()
      name: string;

      @Column()
      model: string;

      @Column()
      original: number;

      @Column()
      now: number;

      @Column()
      picture: string;

      @Column()
      review: number;

      @Column()
      is_del: number;
}

