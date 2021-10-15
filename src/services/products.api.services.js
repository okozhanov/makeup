
export const getProducts = () => {
    return fetch('http://makeup-api.herokuapp.com/api/v1/products.json').then(value => value.json())
}