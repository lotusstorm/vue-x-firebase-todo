<template>
	<div class="edit">
		<button
				type="button"
				@click="to"
				class="edit__button"
		>back</button>
		<div class="edit__wrapper">
			<label
					for="put"
					class="edit__title"
			>Edit new value...</label>
			<textarea
					name="textarea"
					v-model="value"
					class="edit__textarea"
					id="put"
					:placeholder="currentValue"
			></textarea>
			<label
					for="put"
					class="edit__error"
					v-show="isError"
			> {{ errorValue }} </label>
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
				isError: false,
				errorValue: null,
			}
		},
		computed: {
			...mapGetters([
				'getTodoData'
			]),
			/**
			 *
			 * */
			currentValue() {
				if (this.getTodoData.length > 0) {
					const [currentEl] = this.getTodoData.filter(i => i.id === this.$route.params.id);
					return currentEl.content
				} else {
					return 'Empty value...'
				}
			},
		},
		methods: {
			/**
			 *
			 * */
			save() {
				let data = {
					content: this.value,
					date: new Date().toISOString(),
				};

				if (this.value) {
					this.$firebase.database().ref('todo').child(this.$route.params.id).update(data)
						.catch(error => console.log(error));
					this.value = null;
					this.isError = false;
				} else {
					this.isError = true;
					this.errorValue = 'Invalid input'
				}
			},
			/**
			 *
			 * */
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
			box-sizing: border-box;

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

		&__error {
			@include error;
		}

		&__title {
			opacity: .5;
			margin-bottom: 3px;
			font-size: 1rem;
		}
	}
</style>
