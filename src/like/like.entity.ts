import { UUIDV4 } from 'sequelize';
import {
  Column,
  DataType,
  Table,
  Model,
  BelongsTo,
  ForeignKey,
} from 'sequelize-typescript';
import { PostsEntity } from 'src/posts/posts.entity';
import { UserEntity } from 'src/user/user.entity';

interface ICreate {
  user_id: string;
  post_id: string;
}

@Table({ tableName: 'like' })
export class LikeEntity extends Model<LikeEntity, ICreate> {
  @Column({
    type: DataType.UUID,
    defaultValue: UUIDV4,
    primaryKey: true,
  })
  id: string;

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
