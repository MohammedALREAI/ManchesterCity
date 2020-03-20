import React from "react";
import { render } from "react-dom";
import "./Resources/css/app.css";
import "./firebase";
import Layout from "./HOC/Layout";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import { SignIn, Home, Dashboard, PrivateRoute} from "./AllComponnt";
import { firebase } from "./firebase";
// import Routes from './routes';

const App = (props) => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
                      <PrivateRoute {...props} path="dashboard"exact  component={Dashboard}   />
          <Route exact component={Home} path="/" />
          <Route exact component={SignIn} path="/sign_in" />
        </Switch>
      </Layout>{" "}
    </BrowserRouter>
  );
};

firebase.auth().onAuthStateChanged((user) => {
     render(<App user={user} />, document.getElementById('root'));
})

