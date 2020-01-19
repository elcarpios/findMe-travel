export const state = () => ({
  user: {},
  prompted: false
});

export const getters = {
  isLogged: state => state.user.displayName
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
