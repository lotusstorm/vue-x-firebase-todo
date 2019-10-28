<template>
    <div class="edit">
        <button
            type="button"
            @click="to"
            class="edit__button"
        >back</button>
        <div class="edit__wrapper">
            <label for="put"></label>
            <textarea
                    name="textarea"
                    v-model="value"
                    class="edit__textarea"
                    id="put"
                    placeholder="Edit new value..."
            >
        </textarea>
            <input
                    type="button"
                    value="save"
                    class="edit__button"
                    @click="save"
            >
        </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'

	export default {
		name: "Edit",
        data() {
            return {
                value: null,
            }
        },
        computed: {
            ...mapGetters([
                'getTodoData'
            ]),
        },
        methods: {
            save() {
                let data = {
                    content: this.value,
                    date: new Date().toISOString(),
                };

                this.$firebase.database().ref('todo').child(this.$route.params.id).update(data)
                    .catch(error => console.log(error));
            },
            to() {
                this.$router.push({name: 'items'})
            },
        }
	}
</script>

<style scoped lang="scss">
    .edit {
        height: 100%;
        width: 100%;

        &__wrapper {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-start;
            margin-bottom: 5px;
            width: 100%;
            height: 80%;
        }

        &__textarea {
            @include large-text;
            display: flex;
            height: 100px;
            border-radius: 5px;
            border: none;
            border-bottom: 2px solid $textarea-border-color;
            width: 100%;
            margin-bottom: 3px;
            text-align: left;
            font-size: 2rem;
            padding: 3px;

            &::placeholder {
                opacity: .5;
                text-align: left;
            }
        }

        &__button {
            @include large-text;
            display: flex;
            border-radius: 5px;
            align-items: center;
            justify-content: center;
            background-color: $btn-bg-color;
            border: none;
            border-bottom: 2px solid $btn-border-color;
            color: $btn-text-color;
            padding: 5px;
        }
    }
</style>
