import 'normalize.css';
import './core/styles';

import Packager from './core/Packager';
import Renderer from './core/Renderer';

import TheBookmarks from 'the-tab-core-bookmarks';

Packager.installModule(TheBookmarks);
Renderer.render(document.querySelector('#root'));
