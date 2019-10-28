<template>
    <div class="pagination">
        <app-controller
                v-for="(item, index) in items"
                :key="index"
                :value="item"
                @event="swap"
        ></app-controller>
    </div>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex'
    import AppController from '@/components/AppController.vue'

    export default {
		name: "Pagination",
        components: {
            'app-controller': AppController,
        },
        computed: {
            ...mapGetters([
                'getTodoData',
                'getItemsOnPage',
            ]),
            items() {
                return Math.ceil(this.getTodoData.length/this.getItemsOnPage)
            }
        },
        methods: {
            ...mapActions([
                'actionCurrentPage'
            ]),
            swap(e) {
                this.actionCurrentPage(e.target.value - 1);
            }
        }
	}
</script>

<style scoped lang="scss">
    .pagination {
        display: flex;
        flex-flow: row;
        justify-content: center;
        align-self: center;
        width: 100%;
    }
</style>
