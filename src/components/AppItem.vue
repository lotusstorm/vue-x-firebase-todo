<template>
    <li class="item">
        <div class="item__before">
            <slot name="before"></slot>
        </div>
        <p
                :class="['item__content', modifier]"
                :title="content"
        >{{ index+1 }})  {{ validContent }}</p>
        <div class="item__after">
            <slot name="after"></slot>
        </div>
    </li>
</template>

<script>
	export default {
		name: "AppItem",
        props: {
			content: String,
			index: Number,
			modifier: String,
        },
        filters: {

        },
		computed: {
			validContent() {
				console.log(this.content);
				return '1'
				// return  value.length >= 10 ? `${value.slice(0, 10)}...` : value;

			}
		}
	}
</script>

<style scoped lang="scss">
    .item {
        display: flex;
        flex-flow: row;
        background-color: $item-bg-color;
        border-radius: 5px;
        align-items: center;
        border-bottom: 2px solid $item-border-color;
        margin-bottom: 5px;
        cursor: pointer;
		width: 100%;

        &__before {
            display: flex;
			justify-content: flex-start;
            flex-flow: row;
			margin-right: 5px;
			height: 100%;
        }

        &__content {
			display: flex;
			flex-grow: 2;
			align-items: center;
			height: 100%;
        }

        &__after {
            display: flex;
            flex-flow: row;
			justify-content: flex-end;
			margin-left: 5px;
			height: 100%;
        }

		&:hover {
			background-color: $item-hover-color;
		}
    }
</style>
