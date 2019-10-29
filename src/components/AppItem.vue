<template>
    <li :class="['item', {'item--complete' : check}]">
        <div class="item__before">
            <slot name="before"></slot>
        </div>
        <p
                :class="['item__content', modifier]"
                :title="content"
        >
			<span class="item__text">{{ index+1 }})  {{ content | validContent }}</span>
        </p>
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
            check: Boolean,
        },
		filters: {
			/**
			 * Обрезает строку если ее длина больше чем нужно
			 * */
			validContent(value) {
				return  value.length >= 5 ? `${value.slice(0, 5)}...` : value;
			}
		},
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
        margin-bottom: 8px;
        cursor: pointer;
		width: 100%;
		padding: 2px 0;

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

        &--complete {
            background-color: #7ca65c;
            transition: background-color .5s;
        }
    }
</style>
