import { getFirestore } from '../utils/firebase'

// const getProductByCatId = catId => {

//     return new Promise((resolve, reject) => {
//         let dummyProductsCat = [];
//         if (catId) {
//             dummyProductsCat = dummyProducts.filter(product => product.catId === catId)
//         } else {
//             dummyProductsCat = dummyProducts;
//         }
//         setTimeout(() => {
//             dummyProductsCat.length > 0 ? resolve(dummyProductsCat) : reject('No products')
//         }, 100);
//     })
// }

const getProductByCatId = catId => {
    const db = getFirestore();
    const itemsCollection = db.collection(`items`);
    return itemsCollection.where('categoryId', '==', catId).limit(20).get()
        .then(querySnapshot => querySnapshot.docs.map(
            doc => {
                return { id: doc.id, ...doc.data() }
            }
        )
        )
}

// const getProductById = id => {
//     return new Promise((resolve, reject) => {
//         const dummyProduct = dummyProducts.find(product => product.id === parseInt(id))
//         setTimeout(() => {
//             dummyProduct ? resolve(dummyProduct) : reject('No product')
//         }, 100);
//     })
// }
const getProductById = id => {
    const db = getFirestore();
    const itemsCollection = db.collection(`items`);
    const item = itemsCollection.doc(id)
    return item.get()
        .then(doc => {
            if (!doc.exists) {
                return { name: "Welcome to the machine", description: "Minimal selection of gadgets and NFTs" }
            }
            return { id: doc.id, ...doc.data() }
        }
        )
}

export { getProductById, getProductByCatId };