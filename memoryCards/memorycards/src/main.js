import Vue from 'vue'
import App from './App.vue'

import { store } from './store/store';
require('file-loader?name=[name].[ext]!../index.html');

export const eventBus = new Vue();

new Vue({
  el: '#memoryCards',
  store: store,
  render: h => h(App)
})
