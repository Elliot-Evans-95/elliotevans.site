'use strict';

// import {helloComponent, helloPage} from './hello.component';

// export default angular
// 		.module('helloModule', [])
// 		.component(helloPage, helloComponent);

import helloService from 'components/hello/hello.service.js';
import helloPage from 'components/hello/hello.component.js';

angular.module('app')
    .service('helloService', helloService)
    .component('helloPage', helloPage);