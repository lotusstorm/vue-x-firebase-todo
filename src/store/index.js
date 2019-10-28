import Vue from 'vue'
import Vuex from 'vuex'
import { database } from '@/firebase';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		todoData: [],
		currentPage: 0,
		itemsOnPage: 10,
	},
	mutations: {
		addToData(state, data) {
			state.todoData.unshift(data);
		},
		setData(state, data) {
			state.todoData = data;
		},
		appToData(state, data) {
			state.todoData.forEach(i => {
				if (i.id === data.id) {
					i.content = data.content;
					i.date = data.date;
				}
			})
		},
		setCurrentPage(state, value) {
			state.currentPage = value
		}
	},
	actions: {
		actionData({commit}, data) {
			const item = {
				date: data.date,
				content: data.content,
				check: data.check
			};

			database.ref('todo').push(item)
				.then(data => {
					console.log(data.key);
					// commit('addToData', {...item, id: data.key});
					commit('addToData', {});
				})
				.catch(error => {
					console.log(error)
				});
		},
		loadData({commit}) {
			// database.ref('todo').once('value')
			// 	.then(data => {
			// 		console.log(data);
			// 		const newData = [];
			// 		const obj = data.val();
			// 		for (let key in obj) {
			// 			newData.push({
			// 				id: key,
			// 				date: obj[key].date,
			// 				content: obj[key].content,
			// 				skip: obj[key].skip,
			// 			})
			// 		}
			// 		// const sortData = newData.sort((a, b) => a.date - b.date);
			// 		commit('setData', newData);
			// 	})
			// 	.catch(error => {
			// 		console.log(error)
			// 	});

			const starCountRef = database.ref('todo');
			starCountRef.on('value', function(snapshot) {
				console.log(snapshot.val())
				// updateStarCount(postElement, snapshot.val());
			});
			commit('setData', {});
		},
		putInData({commit}, data) {
			commit('appToData', data)
		},
		actionCurrentPage({commit}, value) {
			commit('setCurrentPage', value)
		}
	},
	getters: {
		getTodoData: s => s.todoData.sort((a, b) => a.date - b.date),
		getCurrentPage: s => s.currentPage,
		getItemsOnPage: s => s.itemsOnPage,
	},
})
