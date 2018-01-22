import UiStore from './UiStore';
import UserStore from './UserStore';

export default {
  ui: window.ui = new UiStore(),
  user: window.user = new UserStore(),
};
