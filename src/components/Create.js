import React from "react";
import { collection, getDocs, doc, setDoc } from "firebase/firestore";

import { db } from "../firebaseConfig";

function Create() {
  // Create a function to check if a collection exists and create it if it doesn't
  async function createCollectionIfNotExists(collectionName) {
    const collectionRef = collection(db, collectionName);
    const { size } = await getDocs(collectionRef);
    if (size === 0) {
      const docRef = doc(collectionRef);
      await setDoc(docRef, {});
      console.log(`Collection '${collectionName}' created.`);
    } else {
      console.log(`Collection '${collectionName}' already exists.`);
    }

    /**
     * @notice : adding data to a collection
     * @dev : snippet below allows adding data to collection
     */

    // try {
    //   const doc = await addDoc(collection(db, collectionName), {
    //     name: "",
    //     phone: "",
    //     role: "",
    //   });
    //   console.log("Document written with ID: ", doc.id);
    // } catch (error) {
    //   console.error("Error adding document: ", error);
    // }
  }

  return (
    <div>
      <button
        onClick={() => {
          createCollectionIfNotExists("users");
          createCollectionIfNotExists("accounts");
          createCollectionIfNotExists("categories");
          createCollectionIfNotExists("fees");
          createCollectionIfNotExists("settings");
          createCollectionIfNotExists("statuses");
          createCollectionIfNotExists("students");
          createCollectionIfNotExists("transactions");
        }}
      >
        Create Tables
      </button>
      {console.log(process.env.REACT_APP_APIKEY)}
    </div>
  );
}
export default Create;
