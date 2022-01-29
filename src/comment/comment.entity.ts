import { UUIDV4 } from 'sequelize';
import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Table,
  Model,
} from 'sequelize-typescript';
import { PostsEntity } from 'src/posts/posts.entity';
import { UserEntity } from 'src/user/user.entity';

interface ICreate {
  text: string;
  user_id: string;
  post_id: string;
}

@Table({ tableName: 'comment' })
export class CommentEntity extends Model<CommentEntity, ICreate> {
  @Column({
    type: DataType.UUID,
    defaultValue: UUIDV4,
    primaryKey: true,
  })
  id: string;

  @Column({ type: DataType.STRING })
  text: string;

  @BelongsTo(() => PostsEntity)
  post: PostsEntity;

  @ForeignKey(() => PostsEntity)
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  post_id: string;

  @BelongsTo(() => UserEntity)
  user: UserEntity;

  @ForeignKey(() => UserEntity)
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  user_id: UserEntity;
}
