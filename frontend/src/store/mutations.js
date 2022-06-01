export const GET_PRODUCTS = (state, products) => {
    state.products = products;
}

export const GET_PRODUCT = (state, product) => {
    state.product = product;
}

export const ADD_PRODUCT_TO_CART = (state, { product, quantity }) => {
    let productInCart = state.cart.find(item => {
        return item.product.id === product.id;
    })
    if (productInCart) {
        return productInCart.quantity += quantity;
    }
    state.cart.push({ product, quantity });
}

export const GET_CART_ITEMS = (state, cart) => {
    state.cart = cart;
}

export const REMOVE_PRODUCT_FROM_CART = (state, product) => {
    state.cart = state.cart.filter(item => {
        return item.product.id != product.id;
    })

}

export const CLEAR_PRODUCT_FROM_CART = (state) => {
    state.cart = []
}