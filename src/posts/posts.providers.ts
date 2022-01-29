import { PostsEntity } from './posts.entity';

export const postsProvider = {
  provide: 'POSTS_REPOSITORY',
  useValue: PostsEntity,
};
