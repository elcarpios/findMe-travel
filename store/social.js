export const state = () => ({
  user: {},
  prompted: false
});

export const getters = {
  username: state => state.user.displayName,
  shouldPrompt: state => !state.prompted && !state.user.displayName
};

export const mutations = {
  login (state, user) {
    state.user = user;
  },
  logout (state) {
    state.user = {};
  },
  prompted (state) {
    state.prompted = true;
  }
};
