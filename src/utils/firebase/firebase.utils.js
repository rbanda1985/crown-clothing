import { initializeApp } from 'firebase/app';
import { 
  getAuth, 
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider
 } from 'firebase/auth';
 import {
    getFirestore,
    doc,
    getDoc,
    setDoc
 } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyC3ehncVa4ay1OczZ-SIK6A3vMqlrXlsaI",
  authDomain: "crown-clothing-db-93032.firebaseapp.com",
  projectId: "crown-clothing-db-93032",
  storageBucket: "crown-clothing-db-93032.appspot.com",
  messagingSenderId: "378747629837",
  appId: "1:378747629837:web:66c6df0fd763325a7e0044"
};


const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account"
})

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid);


  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);

  if(!userSnapshot.exists()){
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try{
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt
      });
    } catch(error){
      console.log('error creating user', error.message);
    }
  }

  return userDocRef;
}