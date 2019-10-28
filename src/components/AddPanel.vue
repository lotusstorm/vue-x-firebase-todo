<template>
    <div class="add-panel">

        <label for="add" ></label>
        <textarea
                name="textarea"
                id="add"
                class="add-panel__textarea"
                placeholder="Enter a title for this card..."
        >
        </textarea>

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
        methods: {
            ...mapActions([
                'actionData'
            ]),
            addToData() {
                let value = document.getElementById('add').value;

                let data = {
                    id: Math.ceil(Math.random()*1000000),
                    content: value,
                    date: new Date().toISOString(),
                    check: false
                };
                this.actionData(data);
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
</style>
