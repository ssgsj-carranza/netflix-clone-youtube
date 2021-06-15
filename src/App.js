import React, {useEffect} from 'react';
import './App.css';
import HomeScreen from './components/HomeScreen/HomeScreen'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import LoginScreen from './components/LoginScreen/LoginScreen';
import { auth } from './firebase';
import { login, logout, selectUser } from './features/userSlice';
import {useDispatch, useSelector} from 'react-redux';
import ProfileScreen from './components/ProfileScreen/ProfileScreen';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        //logged in
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email,
        }))
      } else {
        //logged out
        dispatch(logout);
      }
    });
    return unsubscribe;
  },[]);

  return (
    <div className="app">
      <Router>
        {!user ? (
          <LoginScreen />
        ) : (
          <Switch>
            <Route path='/profile'>
              <ProfileScreen />
            </Route>
            <Route path='/'>
              <HomeScreen />
            </Route>
          </Switch>
        )}
     </Router>)
    </div>
  );
}

export default App;
