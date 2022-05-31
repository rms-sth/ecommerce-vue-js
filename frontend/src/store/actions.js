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