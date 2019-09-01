// @flow

import Home from './home/Home';
import { Route, Switch } from 'react-router';
import React from 'react';
import About from './about/About';
import Work from './work/Work';
import Contact from './contact/Contact';
import Post from './post/Post';
import Skills from './skills/Skills';
// import { TransitionGroup, CSSTransition } from 'react-transition-group';

import './animation.css';
import { Router } from './router/router';

// const PageFade = props => (
//   <CSSTransition
//     {...props}
//     classNames="fadeTranslate"
//     timeout={500}
//     mountOnEnter={true}
//     unmountOnExit={true}
//   />
// );

const router = new Router();
const routes = [
  {
    name: '/',
    component: Home,
    data: {}
  },
  {
    name: '/about',
    component: About,
    data: {}
  },
  {
    name: '/skills',
    component: Skills,
    data: {}
  },
  {
    name: '/work',
    component: Work,
    data: {}
  },
  {
    name: '/contact',
    component: Contact,
    data: {}
  }
  // {
  //   name: '/post/:id',
  //   component: Post,
  //   data: {}
  // },
];
router.addAll(routes);
router.navigate(routes[0]);

// const Routes = props => (
{
  /*<div className={'grid-area__main'}>*/
}
{
  /*<TransitionGroup className={'grid-area__main'}>*/
}
{
  /*  <PageFade key={props.location.pathname}>*/
}
{
  /*    <Switch location={props.location}>*/
}
{
  /*      <Route exact path="/" component={Home} />*/
}
{
  /*      <Route exact path="/about" component={About} />*/
}
{
  /*      <Route exact path="/skills" component={Skills} />*/
}
{
  /*      <Route exact path="/work" component={Work} />*/
}
{
  /*      <Route exact path="/contact" component={Contact} />*/
}
{
  /*      <Route exact path="/post/:id" component={Post} />*/
}
{
  /*    </Switch>*/
}
{
  /*</PageFade>*/
}
{
  /* </TransitionGroup>*/
}
// </div>
// );

// export default Routes;
