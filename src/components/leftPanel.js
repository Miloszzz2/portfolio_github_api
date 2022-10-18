import { UserContext } from '../App';
import { useContext } from 'react';
import dateFormat from 'dateformat';
function Left() {
  const { user } = useContext(UserContext);
  const { repos } = useContext(UserContext);
  const createdDate = dateFormat(user.created_at, 'dd.mm.yyyy');

  return (
    <div className='left_panel'>
      <div className='user_info'>
        <h2>Hi Im {user.login}</h2>
        <p>Im beginner {user.bio} developer.</p>
        <h2>My README.md</h2>
        <ul>
          <li>👋 Hi, I’m @Miloszzz2</li>
          <li>🌱 I’m currently learning JavaScript, React, Flutter</li>
          <li>📫 How to reach me - coming soon...</li>
        </ul>
        <h2>My numbers:</h2>
        <ul>
          <li>Followers: {user.followers}</li>
          <li>Public repos: {user.public_repos}</li>
          <li>Hireable: {user.hireable ? 'No' : 'Yes'}</li>
          <li>Company: {user.company ? user.company : 'Looking for...'}</li>
          <li>Account created at: {createdDate}</li>
        </ul>
        <a href={user.html_url} target='blank'>
          <p>Go to my profile</p>
        </a>
      </div>
      <div className='repos'>
        {repos.map((item) => {
          return (
            <a
              className='repo'
              href={item.html_url}
              key={item.name}
              target='blank'
            >
              <div>
                <h1>{item.name}</h1>
                <p>👀 : {item.watchers}</p>
                <p>🍴: {item.forks}</p>
                <p>⭐: {item.stargazers_count}</p>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
}

export default Left;
