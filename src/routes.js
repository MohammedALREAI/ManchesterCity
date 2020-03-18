import React from 'react';
import Layout from "./HOC/Layout";
import { Switch, Route }  from 'react-router-dom';
import Home from'./Components/home/index'

const Routes = (props) => {
  return(
    <Layout>
        <Switch>
            <Route exact component={Home} path="/"/>
        </Switch>
    </Layout>
  )
}

export default Routes;
