import { Link , useHistory} from 'react-router-dom';

import { useContext } from 'react';

import classes from './MainNavigation.module.css';
import AuthContext from '../../Context/auth-Context';

const MainNavigation = () => {

  const ctx = useContext(AuthContext)

  const history = useHistory()

  const isLoggedIn = ctx.isLoggedIn 

  const logOutButton = (e) => {
      e.preventDefault()
      ctx.logOut()
      history.replace('/auth')
  }

  return (
    <header className={classes.header}>
      <Link to='/'>
        <div className={classes.logo}>React Auth</div>
      </Link>
      <nav>
        <ul>
          {!isLoggedIn && 
            <li>
              <Link to='/auth'>Login</Link>
            </li>
          }

          
          {isLoggedIn &&
              <li>
              <Link to='/profile'>Profile</Link>
            </li>
          }

          {isLoggedIn &&
            <li>
              <button onClick={logOutButton}>Logout</button>
            </li>
          }
              
              
          
          
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
