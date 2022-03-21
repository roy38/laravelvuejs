// require('./bootstrap');
// import Vue from 'vue';
// import App from './vue/app';

// const app = new Vue({
//     el: '#app',
//     components: { App }
// });

import { createApp } from 'vue';
import App from './vue/app';
import axios from 'axios';
import VueAxios from 'vue-axios';
// import '@/axios';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faPlusSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faPlusSquare, faTrash);

// Vue.component('font-awesome-icon', FontAwesomeIcon);
// App.prototype.$axios = axios;

var app = createApp(App);
    app.component("font-awesome-icon", FontAwesomeIcon);
    app.use(VueAxios, axios);
    app.provide('axios', app.config.globalProperties.axios);
    app.mount("#app");

// const instance = axios.create({
//     baseURL: 'https://example.com/',
// });

// app.config.globalProperties.axios = instance;