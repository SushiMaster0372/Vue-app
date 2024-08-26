<template>
    <div class="app">
        <navigation-bar></navigation-bar>
        <router-view></router-view>
    </div>
</template>

<script>
import NavigationBar from './components/NavigationBar.vue'

export default {
    components: { NavigationBar }
}
</script>

<style>
.app {
    padding: 20px;
}
</style>
