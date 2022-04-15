export type typeOfBlogCommentMeta = {
  createdAt: string;
  title: string;
  description: string;
  updatedAt: string;
  id: string;
  postId: string;
};

export type typeOfBlogAuthorData = {
  createdAt: string;
  name: string;
  avatar: string;
  updatedAt: string;
  id: string;
  postId: string;
};

export type typeOfBlogData = {
  title: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  id: string;
  authors: typeOfBlogAuthorData[];

  comments: typeOfBlogCommentMeta[];
};
