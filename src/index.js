import Packager from './core/Packager';
import Renderer from './core/Renderer';

import testModule from '../../the-tab-module-bookmarks';

Packager.registerPackage(testModule);
Renderer.render(document.querySelector('#root'));
