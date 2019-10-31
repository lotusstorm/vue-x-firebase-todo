<template>
	<div class="items">
		<app-add-panel></app-add-panel>
		<div class="items__content">
			<app-item
					v-for="(item, index) in items"
					:key="index"
					:content="item.content"
					:index="index"
					:check="item.check"
			>
				<app-checkbox
						slot="before"
						:check="item.check"
						@event="check"
						:id="item.id"
				></app-checkbox>
				<app-controller
						slot="after"
						:value="'r'"
						@event="to(item.id)"
						:id="item.id"
				></app-controller>
				<app-controller
						slot="after"
						:value="'x'"
						:id="item.id"
						@event="deleteFromData"
				></app-controller>
			</app-item>
		</div>
		<app-pagination></app-pagination>
	</div>
</template>

<script>
	import Item from '@/components/AppItem.vue'
	import AppController from '@/components/AppController.vue'
	import AppCheckbox from '@/components/AppCheckbox.vue'
	import Pagination from '@/components/Pagination.vue'
	import AddPanel from '@/components/AddPanel.vue'
	import { mapGetters, mapActions } from 'vuex'

	export default {
		name: "Items",
		components: {
			'app-item': Item,
			'app-checkbox': AppCheckbox,
			'app-controller': AppController,
			'app-pagination': Pagination,
			'app-add-panel': AddPanel
		},
		computed: {
			...mapGetters([
				'getTodoData',
				'getCurrentPage',
				'getItemsOnPage',
			]),
			/**
			 * Формирует список соответствующий текущей странице
			 * */
			items() {
				if (this.getTodoData.length > 0) {

					const countOfPages = this.arrayToMatrix(this.getTodoData, this.getItemsOnPage);
					if (!countOfPages[this.getCurrentPage] && this.getCurrentPage > 0) {
						this.actionCurrentPage(this.getCurrentPage-1);
					}
					return countOfPages[this.getCurrentPage]
				} else {
					return this.getTodoData
				}
			}
		},
		methods: {
			...mapActions([
				'actionCurrentPage'
			]),
			/**
			 * Преврацает массив в многомерную матрицу
			 * */
			arrayToMatrix(arr, step) {

				let newArr = [];
				let start = 0;
				let end = step;

				for (let i=0; i<arr.length/step; i++) {
					if (start <= arr.length) {
						newArr.push(arr.slice(start, end));
						start += step;
						end += step;
					}
				}
				return newArr
			},
			/**
			 * Удаляет элемент из БД
			 * */
			deleteFromData(e) {
				this.$firebase.database().ref('todo').child(e.target.id).remove()
					.catch(error => console.log(error))
			},
			/**
			 * Ставит и снимает отметку о выполнении
			 * */
			check(e) {
				this.$firebase.database().ref('todo').child(e.target.id).update({check: e.target.checked})
					.catch(error => console.log(error))
			},
			/**
			 * Переход между страницами
			 * */
			to(id) {
				this.$router.push({name: 'edit', params: {id}})
			},
		}
	}
</script>

<style scoped lang="scss">
	.items {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 100%;
		height: 100%;

		&__content {
			display: flex;
			flex-direction: column;
			align-items: center;
			flex-grow: 2;
			width: 100%;
			overflow: auto;
			margin-bottom: 2px;
		}
	}
</style>
