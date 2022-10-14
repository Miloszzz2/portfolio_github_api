import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
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
    <div className='App'>
      {user && (
        <>
          <div className='user_card '>
            {<img src={user.avatar_url} alt='user_profile' />}
            <h1>{user.login}</h1>
            <p>{user.bio}</p>
            <p>Followers: {user.followers}</p>
            <p>Public repos : {user.public_repos}</p>
            <a href={user.html_url} target='blank'>
              Go to profile
            </a>
          </div>
        </>
      )}
      {repos && (
        <>
          <div className='repos_card'>
            <h1>Public Repositories:</h1>

            {repos.map((item) => {
              return (
                <div className='repo'>
                  <p>{item.name}</p>
                  <p>Created at: {item.created_at}</p>
                  <p>
                    Language:{' '}
                    {item.language != null ? item.language : 'Readme.md'}
                  </p>
                  <p>Watchers: {item.watchers}</p>
                  <a href={item.html_url}>Go to</a>
                </div>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}

export default App;
