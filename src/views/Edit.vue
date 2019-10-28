<template>
    <div class="edit">
        <router-link to="/">Back</router-link>
        <label for="put"></label>
        <textarea
                name="textarea"
                class="edit__textarea"
                id="put">
        </textarea>

        <label for="date"></label>
        <input
                type="datetime-local"
                v-model="date"
                class="edit__date"
                id="date"
        >

        <input
                type="button"
                value="save"
                class="edit__button"
                @click="save"
        >
    </div>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex'

	export default {
		name: "Edit",
        data() {
            return {
                value: null,
                date: null
            }
        },
        computed: {
            ...mapGetters([
                'getTodoData'
            ]),
        },
        methods: {
            ...mapActions([
                'putInData'
            ]),
            save() {
                let data = {
                    id: this.$route.params.id,
                    content: this.value,
                    date: this.date,
                };
                this.putInData(data);
            }
        }
	}
</script>

<style scoped lang="scss">
    .edit {
        display: flex;
        flex-direction: column;

        &__textarea,
        &__button,
        &__date {
            width: 100%;
        }

        &__textarea {

        }

        &__button {

        }

        &__date {

        }
    }
</style>
