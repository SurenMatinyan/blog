import { Sequelize } from 'sequelize-typescript';
import { CommentEntity } from 'src/comment/comment.entity';
import { LikeEntity } from 'src/like/like.entity';
import { PostsEntity } from 'src/posts/posts.entity';
import { UserEntity } from 'src/user/user.entity';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: '',
        database: 'blog',
        logging: false,
      });
      sequelize.addModels([CommentEntity, PostsEntity, LikeEntity, UserEntity]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
