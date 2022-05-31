<template>
    <div class="row mt-3" v-if="product">
        <div class="col-4">
            <img class="w-100" :src="product.image" :alt="product.title">
        </div>
        <div class="col-8">
            <h1>{{ product.title }}</h1>
            <h3>${{ product.price }}</h3>
            <input v-model.number="quantity" type="text" class="text-center col-1 mr-2 p-1">
            <button class="btn btn-primary" @click="addToCart()">Add to Cart</button>
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
    data() {
        return {
            quantity: 1
        }
    },
    computed: {
        product() {
            return this.$store.state.product;
        }
    },
    methods: {
        addToCart() {
            this.$store.dispatch('addProductToCart', {
                product: this.product,
                quantity: this.quantity
            })
        }
    }
}
</script>

<style lang="scss" scoped>
</style>