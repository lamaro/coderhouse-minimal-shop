import dummyProducts from '../assets/dummy/products'

const getProductByCatId = catId => {
    return new Promise((resolve, reject) => {
        let dummyProductsCat = [];
        if (catId) {
            dummyProductsCat = dummyProducts.filter(product => product.catId === parseInt(catId))
        } else {
            dummyProductsCat = dummyProducts;
        }
        setTimeout(() => {
            dummyProductsCat.length > 0 ? resolve(dummyProductsCat) : reject('No products')
        }, 500);
    })
}

const getProductById = id => {
    return new Promise((resolve, reject) => {
        const dummyProduct = dummyProducts.find(product => product.id === parseInt(id))
        setTimeout(() => {
            dummyProduct ? resolve(dummyProduct) : reject('No product')
        }, 500);
    })
}

export { getProductById, getProductByCatId };