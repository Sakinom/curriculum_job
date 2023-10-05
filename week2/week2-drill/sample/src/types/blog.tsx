type Meta = {
  votes: number,
  favs: number
}

type Blog = {
  id: number,
  title: string,
  content: string,
  author: string,
  likes: number,
  tags: string[],
  meta: Meta
}

export type { Blog }
