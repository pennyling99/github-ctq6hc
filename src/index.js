import _ from 'lodash';
import Vue from 'vue';
import App from './App.vue';

const vm = new Vue({
  el: '#app',
  template: `<div id="app>{{message}}</div>`,
  data: {
    message: 'Hello Vue',
  },
  render: (h) => h(App),
});
