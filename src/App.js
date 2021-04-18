import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoute from "./routes/PrivateRoute";
import { AuthProvider } from "./contexts/AuthContext";
import { MouseProvider } from "./contexts/MouseContext";
import { IoProvider } from "./contexts/ioContext";

import Layout from "./modules/Layout/Layout";
import Login from "./modules/Auth/Login";

import { ThemeProvider } from "styled-components";
import { defaultTheme, darkTheme, GlobalStyle } from "./utils";

function App() {
  const [useDarkTheme] = useState(false);

  return (
    <Router>
      <ThemeProvider theme={useDarkTheme ? darkTheme : defaultTheme}>
        <AuthProvider>
          <IoProvider>
            <MouseProvider>
              <div className="App">
                <Switch>
                  <PrivateRoute exact path="/" comp={Layout} />
                  <Route path="/login">
                    <Login />
                  </Route>
                  <Route path="/register">Register</Route>
                </Switch>
              </div>
            </MouseProvider>
          </IoProvider>
        </AuthProvider>
      </ThemeProvider>
      <GlobalStyle />
    </Router>
  );
}

export default App;
