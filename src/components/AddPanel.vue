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
                class="input-error"
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
    // import { database } from '@/firebase'

	export default {
		name: "AppAddPanel",
        data() {
            return {
                value: '',
                isError: false,
                errorValue: '',
            }
        },
        methods: {
            addToData() {

                if (this.value) {
                    let data = {
                        content: this.value,
                        date: new Date().toISOString(),
                        check: false
                    };
                    this.$firebase.database().ref('todo').push(data)
                            .catch(error => console.log(error));

                    this.value = '';
                } else {
                    this.isError = !this.isError;
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
    }

    .input-error {
        width: 100%;
        border-radius: 5px;
        background-color: crimson;
        border: 2px solid red;
        @include large-text;
        font-size: 1rem;
        color: $btn-text-color;
        padding: 5px;
    }
</style>
