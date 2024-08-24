<template>
    <div class="app">
        <h1>Страница с постами</h1>
        <custom-input v-model="searchValue" placeholder="Поиск" type="text" />
        <div class="app-buttons">
            <custom-button @click="isModalVisible = true">Создать пост</custom-button>
            <custom-select v-model="selectedSort" :options="options" />
        </div>
        <custom-modal v-model:isOpen="isModalVisible">
            <post-form @createPost="createPost" />
        </custom-modal>
        <div v-if="isPostsLoading">Loading</div>
        <posts-list v-else :posts="sortedAndFilteredPosts" @removePost="removePost" />
        <div class="pagination">
            <custom-button
                v-for="page of pagination.totalPages"
                :key="page"
                :class="{ filled: page === pagination.page }"
                @click="changePage(page)"
            >
                {{ page }}
            </custom-button>
        </div>
    </div>
</template>

<script>
import PostForm from './components/PostForm.vue'
import PostsList from './components/PostsList.vue'
import apiService from '@/service'

export default {
    components: { PostForm, PostsList },
    data() {
        return {
            posts: [],
            isModalVisible: false,
            isPostsLoading: false,
            selectedSort: '',
            options: [
                { value: 'title', name: 'По названию' },
                { value: 'body', name: 'По описанию' }
            ],
            searchValue: '',
            pagination: { page: 1, limit: 10, totalPages: 0 }
        }
    },
    methods: {
        createPost(post) {
            this.posts.push(post)
            this.isModalVisible = false
        },
        removePost(postId) {
            this.posts = this.posts.filter((post) => post.id !== postId)
        },
        async fetchPostsData() {
            try {
                this.isPostsLoading = true
                const { data, totalItems } = await apiService.fetchPosts({
                    page: this.pagination.page,
                    limit: this.pagination.limit
                })
                this.posts = data
                this.pagination.totalPages = Math.ceil(+totalItems / this.pagination.limit)
            } catch (e) {
                console.log(e)
            } finally {
                this.isPostsLoading = false
            }
        },
        changePage(page) {
            this.pagination.page = page
        }
    },
    mounted() {
        this.fetchPostsData()
    },
    updated() {},
    computed: {
        sortedPosts() {
            return [...this.posts].sort((post1, post2) =>
                post1[this.selectedSort]?.localeCompare(post2[this.selectedSort])
            )
        },
        sortedAndFilteredPosts() {
            return this.sortedPosts.filter(
                (post) =>
                    post.title?.toLowerCase()?.includes(this.searchValue) ||
                    post.body?.toLowerCase()?.includes(this.searchValue)
            )
        }
    },
    watch: {
        'pagination.page'() {
            this.fetchPostsData()
        }
    }
}
</script>

<style>
.app {
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 15px;
}

.app-buttons {
    display: flex;
    justify-content: space-between;
}

.pagination {
    display: flex;
    gap: 10px;
}
</style>
