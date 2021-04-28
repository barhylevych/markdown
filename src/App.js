import React from 'react'
import { HeadContent, Footer } from './components'
import { Route, Redirect, Switch, withRouter } from 'react-router';
import { Main, Types } from './pages/Main';
import { routes } from './constants';

const Head = withRouter(HeadContent)

function App() {
  return (
    <>
      <Head/>
      <main>
        <Switch>
          <Route path={routes.parts} component={Main}/>
          {Types.map(({ Component, path }) => <Route path={path} component={Component} key={path}/> )}
          <Redirect to={routes.parts} />
        </Switch>
      </main>
      <Footer/>
    </>
  );
}

export default App;
