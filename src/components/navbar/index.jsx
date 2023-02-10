import { useAuth } from 'contexts';
import './index.css';

export const Navbar = () => {
  const { setIsLoggedIn } = useAuth();
  const logoutHandler = () => setIsLoggedIn(false);
  return (
    <nav className='navbar'>
      <h1 className='logo'>FreJun Task</h1>
      <button onClick={logoutHandler} className='btn btn-logout'>
        Logout
      </button>
    </nav>
  );
};
