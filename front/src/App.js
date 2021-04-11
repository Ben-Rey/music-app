import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoute from "./routes/PrivateRoute";
import { AuthProvider } from "./contexts/AuthContext";
import { IoProvider } from "./contexts/ioContext";

import Layout from "./modules/Layout/Layout";
import Login from "./modules/Auth/Login";

import { ThemeProvider } from "styled-components";
import { defaultTheme, darkTheme, GlobalStyle } from "./utils";
import store from "./app/store";

import connect from "./socket-api";

connect("http://localhost:3001", store);

function App() {
  const [useDarkTheme] = useState(false);

  return (
    <Router>
      <ThemeProvider theme={useDarkTheme ? darkTheme : defaultTheme}>
        <AuthProvider>
          <IoProvider>
            <div className="App">
              <Switch>
                <PrivateRoute exact path="/" comp={Layout} />
                <Route path="/login">
                  <Login />
                </Route>
                <Route path="/register">Register</Route>
              </Switch>
            </div>
          </IoProvider>
        </AuthProvider>
      </ThemeProvider>
      <GlobalStyle />
    </Router>
  );
}

export default App;
