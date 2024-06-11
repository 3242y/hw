import { BaseEntity, Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Area extends BaseEntity {
      //ID自增
      @PrimaryGeneratedColumn()
      id: number;

      @Column()
      area_code: string;

      @Column()
      area_name: string;

      @Column()
      level: number;

      @Column()
      city_code: string;

      @Column()
      center: string;

      @Column()
      parent_id: number;

      @Column()
      create_at: string;

      @Column()
      update_at: string;

      @Column()
      is_del: number;


}