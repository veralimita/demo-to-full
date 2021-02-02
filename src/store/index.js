import Vue from 'vue'
import Vuex from 'vuex'
import queue from 'async/queue';
import axios from "axios";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    queue: queue(async (task, callback) => {
      axios.get(task).then(r => callback(null, r)).catch(callback)
    }, 1),
    highlights: null,
    latests: null,
    list: null,
    games: [],
    gamesCurrentPage: 0,
    errors: []
  },
  mutations: {
    ADD_ERROR(state, message) {
      state.errors.push(message);
    },
    SET_HIGHLIGHTS(state, highlights) {
      state.highlights = highlights;
    },
    SET_LATESTS(state, latests) {
      state.latests = latests;
    },
    SET_LIST(state, list) {
      state.list = list;
    },
    SET_GAMES(state, games) {
      state.games = state.games.concat(games);
      state.gamesCurrentPage = state.gamesCurrentPage + 1;
    },
    SET_GAMESPAGE(state, page) {
      state.gamesCurrentPage = page;
    },
  },
  actions: {
    addError({ commit }, message) {
      commit('ADD_ERROR', message)
    },
    fetchHighlights({ commit, state }) {
      // const getList = axios.get("http://api.steamdemo.club/demo");
      const call = "http://api.steamdemo.club/demo";
      return new Promise((resolve, reject) => {
        state.queue.push(call, (error, r) => {
          if (error) return reject(error);
          commit('SET_HIGHLIGHTS', r.data.result);
        });
      })
    },
    fetchLatests({ commit, state }) {
      const call = "http://api.steamdemo.club/demo";
      return new Promise((resolve, reject) => {
        state.queue.push(call, (error, r) => {
          if (error) return reject(error);
          commit('SET_LATESTS', r.data.result);
        });
      })
    },
    fetchList({ commit, state }) {
      const call = "http://api.steamdemo.club/demo";
      return new Promise((resolve, reject) => {
        state.queue.push(call, (error, r) => {
          if (error) return reject(error);
          commit('SET_LIST', r.data.result);
        });
      })
    },
    fetchGames({ commit, state }) {
      const call = "http://api.steamdemo.club/demo?page=" + state.gamesCurrentPage;
      return new Promise((resolve, reject) => {
        state.queue.push(call, (error, r) => {
          if (error) return reject(error);
          commit('SET_GAMES', r.data.result);
        });
      })
    },
    changePage({ commit }, page) {
      commit('SET_GAMESPAGE', page);
    }
  },
  modules: {
  }
})
