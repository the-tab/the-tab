webpackHotUpdate(0,{

/***/ 619:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(7);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(248);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouterDom = __webpack_require__(159);

var _reactHotLoader = __webpack_require__(655);

var _mobxReact = __webpack_require__(263);

var _history = __webpack_require__(165);

var _stores = __webpack_require__(662);

var _stores2 = _interopRequireDefault(_stores);

var _App = __webpack_require__(179);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var history = (0, _history.createHashHistory)();

_reactDom2.default.render(_react2.default.createElement(
  _reactHotLoader.AppContainer,
  null,
  _react2.default.createElement(
    _reactRouterDom.Router,
    { history: history },
    _react2.default.createElement(
      _mobxReact.Provider,
      _stores2.default,
      _react2.default.createElement(_App2.default, null)
    )
  )
), document.getElementById('root'));

chrome.webRequest.onBeforeRequest.addListener(function (e) {
  var path = e.url.split('/').slice(-1)[0];
  var exclude = ['index.html', 'bundle.js', 'bundle.js.map'];

  if (!exclude.includes(path)) {
    return {
      redirectUrl: "chrome-extension://" + chrome.runtime.id + "/index.html"
    };
  }
}, {
  urls: ["chrome-extension://" + chrome.runtime.id + "/*"]
}, ["blocking"]);
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(history, 'history', '/Users/atamas1llya/Desktop/extension/src/index.js');
}();

;

/***/ })

})
//# sourceMappingURL=hot-update.js.map