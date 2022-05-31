<template>
    <div class="d-flex align-items-stretch flex-wrap">
        <product-card v-for="product in products" :key="product.id" :product="product"></product-card>
    </div>
</template>

<script>
import ProductCard from './ProductCard';

export default {
    components: { ProductCard },
    mounted() {
        this.$store.dispatch('getProducts');
    },
    computed: {
        products() {
            return this.$store.state.products;
        }
    }
}

</script>

<style lang="scss" scoped>
</style>