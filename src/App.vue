<template>
  <div id="app">
      <app-platform></app-platform>
  </div>
</template>

<script>
    import Platform from '@/views/Platform.vue'

    export default {
        components: {
            'app-platform': Platform
        }
    }
</script>

<style lang="scss">
    @import "assets/css/reset.css";

    html, body, #app {
        width: 100%;
        height: 100%;
    }

    #app {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        @include large-text;
        background-color: $main-bg-color;
    }
</style>
