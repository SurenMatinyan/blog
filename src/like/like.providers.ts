import { LikeEntity } from './like.entity';

export const likeProvider = {
  provide: 'LIKE_REPOSITORY',
  useValue: LikeEntity,
};
