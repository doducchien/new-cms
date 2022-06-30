import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';
import Login from './page/authen/Login';
import Home from './page/home/Home';
import { loginSuccess } from './redux/action/authen-action';
import { LOGIN_SUCCESS } from './redux/type/authen-type';
import { localStorageUtil } from './util/local-storage-util';

function App() {
  const dispatch = useDispatch()
  useEffect(()=>{
    const user = JSON.parse(localStorage.getItem("user"));  
    if(user){
      dispatch(loginSuccess(user.username))

    }                
  }, [])            
  return (
    <div className="">
      <Switch>
        <Route path='/authen/login'>
          {localStorage.getItem("user") ? <Redirect to='/' /> : <Login/>}
        </Route>
        <Route path='/' >
          {!localStorage.getItem("user") ? <Redirect to='/authen/login' />: <Home/>}
        </Route>
      </Switch>
    </div>
  );
}

export default App;
