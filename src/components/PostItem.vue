<template>
    <div class="post">
        <div>
            <div><strong>Название: </strong>{{ post.title }}</div>
            <div><strong>Описание: </strong>{{ post.body }}</div>
        </div>
        <custom-button @click="goToPost(post.id)">Открыть</custom-button>
        <custom-button @click="$emit('removePost', post.id)">Удалить</custom-button>
    </div>
</template>

<script>
import { POSTS_PAGE_URL } from '@/router/routes'
export default {
    props: {
        post: {
            type: Object,
            required: true
        }
    },
    methods: {
        goToPost(postId) {
            this.$router.push(`${POSTS_PAGE_URL}/${postId}`)
        }
    }
}
</script>

<style scoped>
.post {
    padding: 15px;
    border: 2px solid teal;
    margin-top: 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 5px;
}
</style>
