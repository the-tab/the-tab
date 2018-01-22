import 'normalize.css';
import './core/styles';

import Packager from './core/Packager';
import Renderer from './core/Renderer';

import TheBookmarks from 'the-tab-module-bookmarks';

Packager.registerPackage(TheBookmarks);
Renderer.render(document.querySelector('#root'));
