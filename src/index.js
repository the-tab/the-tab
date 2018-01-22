import Packager from './core/Packager';
import Renderer from './core/Renderer';

import testModule from './modules/test';

Packager.registerPackage(testModule);
Renderer.render(document.querySelector('#root'));
