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
  useEffect(() => {
    axios
      .get('https://api.github.com/users/Miloszzz2')
      .then((response) => setData(response.data));
    axios
      .get('https://api.github.com/users/Miloszzz2/repos')
      .then((response) => {
        setRepos(response.data);
      });
  }, []);

  return (
    <UserContext.Provider value={{ user, repos }}>
      {user && (
        <>
          <div className='App'>
            <Top />
            <div className='container'>
              <Left />
              <Right />
            </div>
          </div>
        </>
      )}
    </UserContext.Provider>
  );
}

export default App;
