<template>
    <div class="items">
        <app-add-panel></app-add-panel>
        <ul class="items__content">
            <app-item
                    v-for="(item, index) in items"
                    :key="index"
                    :content="item.content"
                    :index="index"
            >
                <app-checkbox
                        slot="before"
                        :check="item.check"
                        @event="check"
                        :id="item.id"
                ></app-checkbox>
                <app-controller
                        slot="after"
                        :value="'p'"
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
        </ul>
        <app-pagination></app-pagination>
    </div>
</template>

<script>
    import Item from '@/components/AppItem.vue'
    import AppController from '@/components/AppController.vue'
    import AppCheckbox from '@/components/AppCheckbox.vue'
    import Pagination from '@/components/Pagination.vue'
    import AddPanel from '@/components/AddPanel.vue'
    import { mapGetters } from 'vuex'

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
            items() {
                return this.getTodoData.length > 0 ? this.arrayToMatrix(this.getTodoData, this.getItemsOnPage)[this.getCurrentPage] : []
            }
        },
        methods: {
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
            deleteFromData(e) {
                this.$firebase.database().ref('todo').child(e.target.id).remove()
                        .catch(error => console.log(error))
            },
            check(e) {
                this.$firebase.database().ref('todo').child(e.target.id).update({check: e.target.checked})
                        .catch(error => console.log(error))
            },
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
