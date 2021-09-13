import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import Login from "./components/Login";
import "./styles.scss";
import BubblePage from "./components/BubblePage";

function App() {

  const logout = () => {
    localStorage.removeItem('token');
  }

  return (
    <Router>
      <div className="App">
        <header>
          Color Picker Sprint Challenge
          <a onClick={logout} data-testid="logoutButton" href="'http://localhost3000">logout</a>
        </header>
        <PrivateRoute exact path='/bubblepage' component={BubblePage} />
        <Route exact path='/' component={Login} />
      </div>
    </Router>
  );
}

export default App;
