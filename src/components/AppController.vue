<template>
    <div class="controller">
        <input
                type="button"
                :value="value"
                :id="id"
                class="controller__button"
                @click="Event"
        >
    </div>
</template>

<script>
	export default {
		name: "AppController",
        props: {
			value: [String, Number],
            id: [String, Number]
        },
        methods: {
			Event(e) {
				this.$emit('event', e)
            }
        }
	}
</script>

<style scoped lang="scss">
	.controller {
		margin: 2px;

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
	}
</style>
