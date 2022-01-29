import { CommentEntity } from './comment.entity';

export const commentProvider = {
  provide: 'COMMENT_REPOSITORY',
  useValue: CommentEntity,
};
