<template>
    <form class="form" @submit.prevent="createPost">
        <custom-input
            v-model="post.title"
            @input="onInputChange"
            type="text"
            placeholder="Название поста"
        />
        <custom-input
            v-model="post.body"
            @input="onInputChange"
            type="text"
            placeholder="Описание поста"
        />
        <custom-button type="submit" class="submit-button">Создать</custom-button>
        <span v-show="showError" class="error-text">Вы не заполнили форму</span>
    </form>
</template>

<script>
export default {
    data() {
        return {
            post: { title: '', body: '' },
            showError: false
        }
    },
    methods: {
        createPost() {
            if (!this.post.title || !this.post.body) {
                this.showError = true
                return
            }
            this.post.id = Date.now()
            this.$emit('createPost', this.post)
            this.post = { title: '', body: '' }
        },
        onInputChange() {
            if (!this.showError) return
            this.showError = false
        }
    }
}
</script>

<style scoped>
.form {
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin-bottom: 15px;
}

.error-text {
    color: red;
}

.submit-button {
    align-self: flex-end;
}
</style>
