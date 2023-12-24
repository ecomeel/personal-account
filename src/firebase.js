// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// import { collection, addDoc } from "firebase/firestore"; 
import { doc, setDoc } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAPjnDDsX9G7mD8ADdm5shhYIOht5XyzB8",
    authDomain: "auth-4fb1f.firebaseapp.com",
    projectId: "auth-4fb1f",
    storageBucket: "auth-4fb1f.appspot.com",
    messagingSenderId: "391508463836",
    appId: "1:391508463836:web:1ebc6f2a3d89c524b7a419",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export async function addUserToDatabase(user) {
    try {
        // const docRef = await addDoc(collection(db, "users"), user);

        // console.log("Document written with ID: ", docRef.id);
        await setDoc(doc(db, "users", user.id), {
          name: user.name,
          surname: user.surname,
          phone: user.phone,
          email: user.email,
        });

    } catch (e) {
        console.error("Error adding user: ", e);
    }
}
