<template>
    <div class="check">
		<label
				:for="id"
				class="check__wrapper"
		>
			<input
				type="checkbox"
				:id="id"
				:checked="check"
				@change="Event"
				class="check__box"
			>
		</label>
    </div>
</template>

<script>
	export default {
		name: "AppCheckbox",
        props: {
			check: Boolean,
            id: [String, Number]
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

	.check {
		display: flex;
		align-items: center;
		justify-content: center;

		&__box {
			width: 30px;
			height: 30px;
		}

		&__wrapper {
			display: flex;
			align-items: center;
			justify-content: center;
			height: 100%;
			width: 50px;
		}
	}

</style>
