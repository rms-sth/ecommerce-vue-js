<template>
    <div class="row mt-3">
        <div class="col-4">
            <img class="w-100" :src="product.image" :alt="product.title">
        </div>
        <div class="col-8">
            <h1>{{ product.title }}</h1>
            <h3>${{ product.price }}</h3>
            <input type="text" class="text-center col-1 mr-2 p-1">
            <button class="btn btn-primary">Add to Cart</button>
            <p class="mt-4">{{ product.description }}</p>
        </div>
    </div>
</template>

<script>
export default {
    props: ['id'],
    components: {},
    mounted() {
        this.$store.dispatch('getProduct', this.id)
    },
    computed: {
        product() {
            return this.$store.state.product;
        }
    }
}
</script>

<style lang="scss" scoped>
</style>