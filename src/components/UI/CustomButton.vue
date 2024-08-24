<template>
    <button class="btn">
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: 'custom-button'
}
</script>

<style scoped>
.btn {
    padding: 10px 15px;
    border: 2px solid teal;
    background: transparent;
    width: fit-content;
    cursor: pointer;
    transition: 0.3s ease-in-out;
    border-radius: 5px;
}

.btn:hover {
    background-color: teal;
    color: white;
}

.filled {
    background-color: teal;
    color: white;
}
</style>
