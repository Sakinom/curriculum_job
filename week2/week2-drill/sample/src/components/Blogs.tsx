import { FC } from "react"
import { Blog } from "../types/blog"

type Props = {
  blogs: Blog[]
}

const Blogs: FC<Props> = ({blogs}) => {
  return (
    <div>
      {blogs.map(blog => (
        <div key={blog.id}>
          <h2>{blog.title}</h2>
          <p>{blog.content}</p>
          <p>{blog.author}</p>
          <p>{blog.likes}</p>
        </div>
      ))}
    </div>
  )
}

export default Blogs
