import Vue from 'vue'
import wcImg from './wcImg'

export default {
	install (Vue) {
		Vue.component('wcImg', Vue.extend(wcImg));
	}
}