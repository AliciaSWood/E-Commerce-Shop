import { collection, getDocs, addDoc, doc, getDoc, deleteDoc, updateDoc, increment } from 'firebase/firestore';
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