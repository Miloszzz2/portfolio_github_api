import { UserContext } from '../App';
import { useContext } from 'react';
function Right() {
  const { user } = useContext(UserContext);
  return (
    <div className='right_panel'>
      <img src={user.avatar_url} alt='user profile' />
    </div>
  );
}

export default Right;
