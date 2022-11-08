import { collection, getDocs, doc, getDoc,  updateDoc, query, where, onSnapshot } from 'firebase/firestore';
import database from "../config/firebase";

export const getItems = async () => {
    const collectionRef = collection(database, "items");
    const query = await getDocs(collectionRef)
    const tidyData = query.docs.map((rawDocument) => {
        const id = rawDocument.id;
        const restOfData = rawDocument.data();
        return {id, ...restOfData}
    })

    return tidyData
}

export const getItemById = async(id) => {
    const docRef = doc(database, "items", id);

    const querySnapshot = await getDoc(docRef);
    console.log(querySnapshot.exists())

    if(!querySnapshot.exists()){
        throw new Error(`Item with id ${id} doesn't exist`)
    }
    return {id: querySnapshot.id, ...querySnapshot.data()}

};

export const favouriteItem = async (id, isFavourite) => {
    // Take in an id
    // Find a specific document
    const docRef = doc(database, 'items', id);
    //use updateDoc...
    await updateDoc(docRef, {favourite: isFavourite});
    
    return true;
}

// export const getFeatured = async(id) => {
//     const q = query(collection(database, "items"), where("featured", "==", "true"))

//     const querySnapshot = await getDocs(q)
//     querySnapshot.forEach((doc) => {
//         console.log(doc.id, " => ", doc.data())
//     })
// }
export const getFeatured = () => {
    const docRef = doc(database, "items", "i10")

    onSnapshot(docRef, (doc) => {
        console.log(doc.data(), doc.id)
    })
}


export const tryGetFeatured = () => {
    const docRef = doc(database, "items", "i10")

    getDoc(docRef).then((doc) => {
        return doc.data(), doc.id
        console.log(doc.data(), doc.id)
    })
}



// export const getFeatured = async() => {
//     const featuredRef =  collection(database, "items")
//     const q = query(featuredRef, where("featured", "==", "true"))
//     return q;
// }

// const getanItem = async (id) => {
//     const docRef = doc(database, "items", id)
//     const querySnapshot = await getDoc(docRef)
//     return
// }



