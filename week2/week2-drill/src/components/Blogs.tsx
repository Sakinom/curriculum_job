import React from 'react';

type BlogProps = {
  blogs: Blog[];
}

const Blogs: React.FC<BlogProps> = ({ blogs }) => {
  return (
    <div>
      {blogs.map((blog: Blog) => (
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
// const Blogs = ({ blogs }: any) => {
//   return (
//     <div>
//       {blogs.map((blog: Blog) => (
//         <div key={blog.id}>
//           <h2>{blog.title}</h2>
//           <p>{blog.content}</p>
//           <p>{blog.author}</p>
//           <p>{blog.likes}</p>
//         </div>
//       ))}
//     </div>
//   )
// }

// export default Blogs
