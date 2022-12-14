import {
  collection,
  getDocs,
  doc,
  deleteDoc,
  addDoc,
} from "firebase/firestore";
import database from "../config/firebase";

export const getCartItems = async () => {
  const collectionRef = collection(database, "cart");
  const query = await getDocs(collectionRef);
  const tidyData = query.docs.map((rawDocument) => {
    const id = rawDocument.id;
    const restOfData = rawDocument.data();
    return { id, ...restOfData };
  });

  return tidyData;
};

export const deleteItemById = async (id) => {
  await deleteDoc(doc(database, "cart", id.id));
};

export const addItemToCart = async (id) => {
  const docRef = await addDoc(collection(database, "cart"), {
    name: id.name,
    image: id.image,
    price: id.price,
  });
};
