import { UUIDV4 } from 'sequelize';
import { Column, DataType, Table, Model } from 'sequelize-typescript';

interface ICreate {
  title: string;
  description: string;
  image: string;
}

@Table({ tableName: 'posts' })
export class PostsEntity extends Model<PostsEntity, ICreate> {
  @Column({
    type: DataType.UUID,
    defaultValue: UUIDV4,
    primaryKey: true,
  })
  id: string;

  @Column({ type: DataType.STRING })
  title: string;

  @Column({ type: DataType.STRING })
  description: string;

  @Column({ type: DataType.STRING })
  image: string;
}
