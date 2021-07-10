import dummyCategories from '../assets/dummy/categories'

const getCategories = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            dummyCategories.length > 0 ? resolve(dummyCategories) : reject('No product')
        }, 100);
    })
}

const getCategoryById = id => {
    return new Promise((resolve, reject) => {
        let category = {};
        if (id) {
            category = dummyCategories.find(category => category.id === parseInt(id))
        } else {
            category = {name:"Welcome to the machine", description: "Minimal selection of gadgets and NFTs"}
        }
        setTimeout(() => {
            category ? resolve(category) : reject('Category not found')
        }, 100);
    })
}

export { getCategories, getCategoryById };