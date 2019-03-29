// @flow

import Home from './home/Home';
import { Route, Switch } from 'react-router';
import React from 'react';
import About from './about/About';
import Work from './work/Work';
import Contact from './contact/Contact';
import Post from './post/Post';
import Skills from './skills/Skills';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import './animation.css';

const PageFade = props => (
  <CSSTransition
    {...props}
    classNames="fadeTranslate"
    timeout={500}
    mountOnEnter={true}
    unmountOnExit={true}
  />
);

const Routes = props => (
  <TransitionGroup className={'grid-area__main'}>
    <PageFade key={props.location.pathname}>
      <Switch location={props.location}>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/skills" component={Skills} />
        <Route exact path="/work" component={Work} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/post/:id" component={Post} />
      </Switch>
    </PageFade>
  </TransitionGroup>
);

export default Routes;
