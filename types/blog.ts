export type PostAuthor = {
  name: string;
  role: string;
  photo?: string;
};

export type PostMetadata = {
  title: string;
  excerpt: string;
  date: string;
  tags: string[];
  readingTime?: string;
  // Base path of a photo in public/images, without the size suffix.
  image?: string;
  // [OWNER TO CONFIRM] Real author name, role and photo for each post.
  // Posts without one are credited to the company.
  author?: PostAuthor;
};
