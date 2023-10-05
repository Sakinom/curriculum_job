type Blog = {
  id: number;
  title: string;
  content: string;
  author: string;
  likes: number;
  tags: string[];
  meta: {
    votes: number;
    favs: number;
  }
}