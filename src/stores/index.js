import UiStore from './UiStore';
import UserStore from './UserStore';

export default {
  ui: new UiStore(),
  user: new UserStore(),
};
