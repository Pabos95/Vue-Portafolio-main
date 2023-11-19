import BootstrapVue3 from 'bootstrap-vue-3';
import { createApp } from 'vue';
import { createStore } from 'vuex';
import * as mdb from 'mdb-vue-ui-kit';
import App from './App.vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css';
import 'mdb-vue-ui-kit/css/mdb.min.css';
import i18n from "./i18n";
import router from './router'
import VueSocialSharing from 'vue-social-sharing';
import createPersistedState from "vuex-persistedstate";
const store = createStore({
  namespaced: true,
    state () {
      return {
        articles: [],
      }
    },
    mutations: {
       SET_ARTICLE(state, article){
        if(!state.articles.find(element => element.id === article.id)){
        state.articles.push(article);
        }
       },
    },
    actions: {
      setArticle({commit}, newArticle){
        commit('SET_ARTICLE', newArticle);
      },
    },
     getters: {
      getArticlesById: (state) => (id) => state.articles.find(article => article.id === id)
     },
     plugins: [createPersistedState()],
  })
const app = createApp(App).use(router);
app.use(store);
app.use(VueSocialSharing);
app.use(BootstrapVue3);
app.use(i18n);
app.use(mdb);
app.mount('#app');
