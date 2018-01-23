import 'normalize.css';
import './core/styles';

import Renderer from './core/Renderer';
// import Packager from './core/Packager';

(async () => {
  // await Packager.install('https://firebasestorage.googleapis.com/v0/b/crossbook-service.appspot.com/o/module%2Fthe-tab-core-bookmarks.js?alt=media&token=4423d866-8602-46f6-8c2d-86be4b0b5036');
  Renderer.render(document.querySelector('#root'));
})();
