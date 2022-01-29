import { UUIDV4 } from 'sequelize';
import { Column, DataType, Table, Model } from 'sequelize-typescript';

interface ICreate {
  name: string;
  email: string;
  password: string;
}

@Table({ tableName: 'user' })
export class UserEntity extends Model<UserEntity, ICreate> {
  @Column({
    type: DataType.UUID,
    defaultValue: UUIDV4,
    primaryKey: true,
  })
  id: string;

  @Column({ type: DataType.STRING })
  name: string;

  @Column({ type: DataType.STRING })
  email: string;

  @Column({ type: DataType.STRING })
  password: string;
}
