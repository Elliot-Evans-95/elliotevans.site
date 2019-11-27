import Home from './home/Home';
import './animation.css';
import { Router } from './router/router';

const router = new Router();
const routes = [
  {
    name: '/',
    component: Home,
    data: {}
  }
];

router.addAll(routes);
router.navigate(routes[0]);
