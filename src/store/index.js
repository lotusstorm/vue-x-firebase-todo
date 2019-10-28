import Vue from 'vue'
import Vuex from 'vuex'
import { firebaseApp } from '@/firebase';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		todoData: [],
		currentPage: 0,
		itemsOnPage: 10,
	},
	mutations: {
		setData(state, data) {
			state.todoData = data;
		},
		setCurrentPage(state, value) {
			state.currentPage = value
		}
	},
	actions: {
		loadData({commit}) {
			try {
				firebaseApp.database().ref('todo').on('value', function(snapshot) {
					const newData = [];
					const obj = snapshot.val();
					for (let key in obj) {
						newData.push({
							id: key,
							date: obj[key].date,
							content: obj[key].content,
							skip: obj[key].skip,
						})
					}
					const sortData = newData.reverse();
					commit('setData', sortData);
				});
			} catch (e) {
				console.log(e);
			}
		},
		actionCurrentPage({commit}, value) {
			commit('setCurrentPage', value)
		}
	},
	getters: {
		getTodoData: s => s.todoData,
		getCurrentPage: s => s.currentPage,
		getItemsOnPage: s => s.itemsOnPage,
	},
})
