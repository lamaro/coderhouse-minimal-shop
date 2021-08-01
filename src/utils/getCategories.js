import { getFirestore } from '../utils/firebase/index'

const getCategories = () => {
    const db = getFirestore();
    const categoriesCollection = db.collection(`categories`);
    return categoriesCollection.get()
        .then(querySnapshot => querySnapshot.docs.map(
            doc => {
                return { id: doc.id, ...doc.data() }
            }
        )
        )
}


const getCategoryById = id => {

    const db = getFirestore();
    const categoriesCollection = db.collection(`categories`);
    const category = categoriesCollection.doc(id)
    return category.get()
        .then(doc => {
            if (!doc.exists) {
                return { name: "Welcome to the machine", description: "Minimal selection of gadgets and NFTs" }
            }
            return { id: doc.id, ...doc.data() }
        }
        )
}

export { getCategories, getCategoryById };