<template>
    <div class="checkbox">
		<label
				:for="id"
		>
			<input
				type="checkbox"
				:id="id"
				:checked="check"
				@change="Event"
			>
        </label>
    </div>
</template>

<script>
	export default {
		name: "AppCheckbox",
        props: {
			check: {
				type: Boolean,
                default: false
			},
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

</style>
