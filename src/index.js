import Modules from './core/Modules';
import Renderer from './core/Renderer';

import testModule from './modules/test';

Modules.installModule(testModule);
Renderer.render(document.querySelector('#root'));
