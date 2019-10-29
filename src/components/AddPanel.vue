<template>
    <div class="add-panel">
        <textarea
                name="textarea"
                id="add"
                class="add-panel__textarea"
                placeholder="Enter a title for this card..."
                v-model="value"
        >
        </textarea>
        <label
                for="add"
                class="add-panel__error"
                v-show="isError"
        > {{ errorValue }} </label>

        <input
                type="button"
                class="add-panel__button"
                value="Add Card"
                @click="addToData"
        >
    </div>
</template>

<script>
    import { mapActions } from 'vuex'

    export default {
		name: "AppAddPanel",
        data() {
            return {
                value: null,
                isError: false,
                errorValue: null,
            }
        },
        methods: {
            ...mapActions([
                'actionCurrentPage'
            ]),
            /**
             * Добавляет новый елемент в БД
             * */
            addToData() {
                if (this.value) {
                    let data = {
                        content: this.value,
                        date: new Date().toISOString(),
                        check: false
                    };
                    this.$firebase.database().ref('todo').push(data)
                            .catch(error => console.log(error));

                    this.value = null;
                    this.isError = false;
                    this.actionCurrentPage(0)
                } else {
                    this.isError = true;
                    this.errorValue = 'Invalid input'
                }
            }
        }
	}
</script>

<style scoped lang="scss">

    .add-panel {
        display: flex;
        justify-content: center;
        align-items: flex-start;
        flex-direction: column;
        margin-bottom: 5px;
        width: 100%;

        &__textarea {
            display: flex;
            height: 100px;
            border-radius: 5px;
            border: none;
            border-bottom: 2px solid $textarea-border-color;
            width: 100%;
            margin-bottom: 3px;
            @include large-text;
            text-align: left;
            font-size: 2rem;
            padding: 3px;
            box-sizing: border-box;

            &::placeholder {
                opacity: .5;
                text-align: left;
            }
        }

        &__button {
            display: flex;
            border-radius: 5px;
            align-items: center;
            justify-content: center;
            background-color: $btn-bg-color;
            border: none;
            border-bottom: 2px solid $btn-border-color;
            @include large-text;
            color: $btn-text-color;
            padding: 5px;
        }

        &__error {
            @include error;
        }
    }
</style>
