export const state = () => ({
  user: null,
  prompted: false
});

export const getters = {
  username: state => state.user && state.user.displayName,
  shouldPrompt: state => !state.prompted && !state.user
};

export const mutations = {
  login (state, user) {
    state.user = user;
  },
  logout (state) {
    state.user = null;
  },
  prompted (state) {
    state.prompted = true;
  }
};
