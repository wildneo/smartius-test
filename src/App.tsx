import React from 'react';

import { Switch, Route } from 'react-router-dom';

import AppBar from './components/AppBar';
import Container from './components/Container';
import Toolbar from './components/Toolbar';
import Home from './pages/Home';
import Note from './pages/Note';

const App = () => {
  return (
    <>
      <AppBar elevation={2} color="inherit">
        <Toolbar />
      </AppBar>
      <Container>
        <Toolbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/notes/:id" component={Note} />
        </Switch>
      </Container>
    </>
  );
};

export default React.memo(App);
