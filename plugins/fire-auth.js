import { auth } from '~/services/firebase.js';

export default ({ store }) =>
  new Promise((resolve) => {
    auth.onAuthStateChanged((user) => {
      user ? resolve(store.commit('social/login', {
        displayName: user.displayName,
        email: user.email
      })) : resolve();
    });
  });
