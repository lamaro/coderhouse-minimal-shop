import placeholder from '../../assets/images/placeholder.png'

const dummyProducts = [
    {
        id: 1,
        title: 'Sable laser',
        price: 45.99,
        description: 'This is the product description',
        pictureUrl: placeholder,
        catId: 1
    },
    {
        id: 2,
        title: 'Wokie blaster',
        price: 60.99,
        description: 'This is the product description',
        pictureUrl: placeholder,
        catId: 1
    },
    {
        id: 3,
        title: 'Imperial destroyer',
        price: 10.30,
        description: 'This is the product description',
        pictureUrl: placeholder,
        catId: 2
    },
    {
        id: 1,
        title: `Leia's shootgun`,
        price: 60,
        description: `She's a bitch, you know it Luke`,
        pictureUrl: placeholder,
        catId: 1
    },
    {
        id: 2,
        title: 'Wokie blaster',
        price: 60.99,
        description: 'This is the product description',
        pictureUrl: placeholder,
        catId: 3
    },
    {
        id: 3,
        title: 'Imperial conquister',
        price: 10.30,
        description: 'This is the product description',
        pictureUrl: placeholder,
        catId: 4
    }
]

const getProductByCatId = catId => {
    return new Promise((resolve, reject) => {
        let dummyProductsCat = [];
        if (catId) {
            dummyProductsCat = dummyProducts.filter(product => product.catId === parseInt(catId))
        } else {
            dummyProductsCat = dummyProducts;
        }
        setTimeout(() => {
            dummyProductsCat ? resolve(dummyProductsCat) : reject('No products')
        }, 2000);
    })
}

const getProductById = id => {
    return new Promise((resolve, reject) => {
        const dummyProduct = dummyProducts.find(product => product.id === parseInt(id))
        setTimeout(() => {
            dummyProduct ? resolve(dummyProduct) : reject('No product')
        }, 2000);
    })
}

export { getProductById, getProductByCatId };