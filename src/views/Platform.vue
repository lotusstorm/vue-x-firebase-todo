<template>
    <div class="platform">
        <div class="platform__content">
            <router-view/>
        </div>
    </div>
</template>

<script>
	export default {
		name: "Platform",
	}
</script>

<style scoped lang="scss">

    .platform {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-color: $platform-bg-color;
        border-radius: 5px;

        height: 80%;
        max-height: 600px;
        width: 98%;
        max-width: 1000px;
        min-width: 320px;

        &__header,
        &__content,
        &__footer {
            width: 95%;
        }

        &__header {

        }

        &__content {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 98%;
        }
    }
</style>
