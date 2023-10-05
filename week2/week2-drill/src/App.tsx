import './App.css';
import Blogs from './components/Blogs';

const blogs = [
  {
    id: 1,
    title: 'My awesome blog',
    content: 'Hello world',
    author: 'John Doe',
    likes: 5,
    tags: ['react', 'javascript', 'html', 'css'],
    meta: {
      votes: 5,
      favs: 10
    }
  },
  {
    id: 2,
    title: 'My second blog',
    content: 'Hello world again',
    author: 'John Doe',
    likes: 10,
    tags: ['react', 'javascript'],
    meta: {
      votes: 10,
      favs: 20
    }
  }
]

function App() {
  return (
    <div className="App">
      <h1>week2 drill</h1>
      <Blogs blogs={blogs} />
    </div>
  );
}

export default App;
