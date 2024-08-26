<template>
    <div class="navbar">
        <custom-button @click="$router.push(HOME_PAGE_URL)">Главная</custom-button>
        <div class="nav__buttons">
            <custom-button @click="$router.push(POSTS_PAGE_URL)">Посты</custom-button>
            <custom-button>О нас</custom-button>
            <CustomButton @click="increment">{{ counter }}</CustomButton>
        </div>
    </div>
</template>

<script setup lang="jsx">
import { HOME_PAGE_URL, POSTS_PAGE_URL } from '@/router/routes'
import CustomButton from './UI/CustomButton.vue'
import { ref } from 'vue'
const counter = ref(0)
const increment = () => (counter.value += 1)
</script>

<style scoped>
.navbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
}
.nav__buttons {
    display: flex;
    align-items: center;
    gap: 30px;
}
</style>
