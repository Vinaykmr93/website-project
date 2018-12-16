import Vue from 'vue';
import VeeValidate from 'vee-validate';
import VueResource from "vue-resource";

import { store } from './_store';
import { router } from './_helpers';
import App from './app/App';

Vue.use(VeeValidate);
Vue.use(VueResource);

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
});