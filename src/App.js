import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { createContext } from 'react';
import Top from './components/top';
import Left from './components/leftPanel';
import Right from './components/rightPanel';
export const UserContext = createContext();
function App() {
  const [user, setData] = useState();
  const [repos, setRepos] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    getUser();
    getRepos();
  }, []);
  const getUser = async () => {
    await axios
      .get('https://api.github.com/users/Miloszzz2')
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  const getRepos = async () => {
    await axios
      .get('https://api.github.com/users/Miloszzz2/repos')
      .then((response) => {
        setRepos(response.data);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  if (error) return <h1>Error</h1>;
  if (loading) return <h1>Loading...</h1>;
  return (
    user &&
    repos && (
      <UserContext.Provider value={{ user, repos }}>
        <>
          <div className='App'>
            <Top />
            <div className='container'>
              <Left />
              <Right />
            </div>
          </div>
        </>
      </UserContext.Provider>
    )
  );
}

export default App;
