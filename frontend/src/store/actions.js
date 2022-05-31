import axios from 'axios'

export const getProducts = ({ commit }) => {
    axios.get('http://127.0.0.1:8000/api/products').then(response => {
        commit('GET_PRODUCTS', response.data)
    })
}

export const getProduct = ({ commit }, productId) => {
    axios.get(`http://127.0.0.1:8000/api/products/${productId}`).then(response => {
        commit('GET_PRODUCT', response.data)
    })
}

export const addProductToCart = ({ commit }, { product, quantity }) => {
    commit('ADD_PRODUCT_TO_CART', { product, quantity });
    axios.post(`http://127.0.0.1:8000/api/cart/`, {
        product_id: product.id,
        quantity: quantity
    });
}

export const getCartItems = ({ commit }) => {
    axios.get('http://127.0.0.1:8000/api/cart/').then(response => {
        commit('GET_CART_ITEMS', response.data)
    })
}