import React, { Component } from 'react';
import { authContext } from './adalConfig';
import './App.css';

class App extends Component {
  render() {
    const userInfo = authContext._user;
    console.log('user',userInfo);
    return (
      <div>
      <div className="container">
          <div className="navbar-collapse collapse">
         { userInfo ? (
                <div>
                <h1>Logged In Successfully</h1>
                <h2>{ userInfo.profile.name }</h2>
                </div>
            ) :
                 <h1>Please Login</h1> 
          }
              <ul>
                  {
                      userInfo 
                          ? <li><a className="button" onClick={() => authContext.logOut()}>Logout</a></li>
                          : <li>
                              <a className="button"
                                  onClick={() => {
                                      localStorage.setItem('currentPage', window.location.href);
                                      authContext.clearCache();
                                      authContext.login(); 
                                  }}
                              >Login
                              </a>
                            </li>
                  }
              </ul>
          </div>
      </div>
  </div>
    );
  }
}

export default App;
