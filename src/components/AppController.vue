<template>
	<div class="controller">
		<input
				type="button"
				:value="value"
				:id="id"
				:class="['controller__button', {'active' : value-1 === getCurrentPage}]"
				@click="Event"
		>
	</div>
</template>

<script>
	import { mapGetters } from 'vuex'

	export default {
		name: "AppController",
		props: {
			value: [String, Number],
			id: [String, Number]
		},
		computed: {
			...mapGetters([
				'getCurrentPage',
			]),
		},
		methods: {
			/**
			 * Пробрасывет event в родительский компонент
			 * */
			Event(e) {
				this.$emit('event', e)
			}
		}
	}
</script>

<style scoped lang="scss">
	.controller {
		padding: 2px;

		&__button {
			display: flex;
			border-radius: 5px;
			align-items: center;
			justify-content: center;
			background-color: $btn-bg-color;
			border: none;
			border-bottom: 2px solid $btn-border-color;
			@include large-text;
			font-size: 1em;
			color: $btn-text-color;
		}

		.active {
			background-color: #ffffff;
			transition: background-color .5s;
			color: $text-color;
		}
	}
</style>
