import { observable } from 'mobx';

import defaultTheme from '../themes/default.json';

export default class ThemeStore {
  @observable theme = {};
  fontLinksClassName = 'the-tab-dynamic-font-link';

  constructor() {
    this.applyTheme(defaultTheme);
  }

  applyTheme = (theme) => {
    Object.keys(theme).forEach((key) => {
      if (['font-family-primary-url', 'font-family-secondary-url'].includes(key)) {
        this.loadFonts(theme[key]);
      }

      document.documentElement.style.setProperty(`--${key}`, theme[key]);
    });

    this.theme = theme;
  }

  loadFonts = (url) => {
    const link = document.createElement('link');

    Object.assign(link, {
      href: url,
      type: 'text/css',
      rel: 'stylesheet',
    });

    document.getElementsByTagName('head')[0].appendChild(link);
  }

  unloadFonts = () => {

  }
}
