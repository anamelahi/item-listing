import { useState, useEffect} from 'react'
import './App.css'
import Header from './components/Header/Header'
import List from './components/List/List'
import Loading from './components/Loading'
import Error from './components/Error'

function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        setPosts(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError(true);
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div>
    <Header />
      {loading && <Loading />}
      {error && <Error />}
      {!loading && !error && <List posts={posts} />}
    </div>
  )
}

export default App
