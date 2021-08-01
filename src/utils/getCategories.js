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

export { getCategories };