import { Switch, Route , Redirect} from 'react-router-dom';

import Layout from './components/Layout/Layout';
import UserProfile from './components/Profile/UserProfile';
import AuthPage from './pages/AuthPage';
import HomePage from './pages/HomePage';
import { useContext } from 'react';
import AuthContext from './Context/auth-Context';

function App() {

  const ctx = useContext(AuthContext)
  return (
    <Layout>
      <Switch>
        <Route path='/' exact>
          <HomePage />
        </Route>
        {!ctx.isLoggedIn && <Route path='/auth'>
          <AuthPage />
        </Route>}
        {ctx.isLoggedIn && <Route path='/profile'>
          <UserProfile />
        </Route>
        }
        <Route path='*'>
           <Redirect to='/'></Redirect>
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
