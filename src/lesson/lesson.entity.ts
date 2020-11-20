import { Column, Entity, ObjectIdColumn, PrimaryColumn } from 'typeorm';

@Entity()
export class Lesson {
  @ObjectIdColumn()
  _id: string; // internal mongodb id, so no need to expose guid, for security purposes

  @PrimaryColumn()
  id: string; // uuid type v4, what we see publicly

  @Column()
  name: string;

  @Column()
  startDate: string;

  @Column()
  endDate: string;
}