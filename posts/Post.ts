import {Entity, PrimaryGeneratedColumn, Column} from 'typeorm';

@Entity('post', {schema: 'folioschema'})
export class Post {
  @PrimaryGeneratedColumn({
    name: 'id'
  })
  id: number | null;

  @Column({
    name: 'title',
    type: 'text',
    nullable: false
  })
  title: string;
  

  @Column({
    name: 'subtitle',
    type: 'text',
    nullable: false
  })
  subtitle: string;
  
  @Column({
    name: 'body',
    type: 'text',
    nullable: false
  })
  body: string;
  
  @Column({
    name: 'title',
    type: 'int',
    nullable: false
  })
  date: number;
}