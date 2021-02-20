import firebase from 'firebase/app';
import 'firebase/firebase-firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyC997PFPIWdrt9Wr9YVFJh7D81xTCD-t8g",
    authDomain: "crwn-db-7a0b8.firebaseapp.com",
    databaseURL: "https://crwn-db-7a0b8-default-rtdb.firebaseio.com",
    projectId: "crwn-db-7a0b8",
    storageBucket: "crwn-db-7a0b8.appspot.com",
    messagingSenderId: "1001118588082",
    appId: "1:1001118588082:web:de0b0f03aa4340c0a83dab",
    measurementId: "G-92LN0765V0"
};

export const createUserProfileDocument = async (userAuth, additionnalData) => {
  if (!userAuth) return;
  const userRef=firestore.doc(`users/${userAuth.uid}`);
  const snapShot= await userRef.get();
  
  if (!snapShot.exists) {
    const {displayName, email} = userAuth;
    const creatAt = new Date();
    
    try {
      await userRef.set({
        displayName,
        email,
        creatAt,
        ...additionnalData
      })

    } catch (error) { console.log('error creating user', error.message);}
  }
  return userRef;
};


export const convertCollectionsSnapshotToMap= collectionsSnapshot => {
  const transformedCollection = collectionsSnapshot.docs.map(docSnapshot => {
    const {title, items} = docSnapshot.data();
    return {
      title,
      items,
      routeName: encodeURI(title.toLowerCase()),
      id: docSnapshot.id
    };
  });

  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
} 


export const addCollectionsAndDocuments = async (collectionKey, objectsToAdd) => {
  const collectionRef = firestore.collection(collectionKey);
  const batch = firestore.batch();
  objectsToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef,obj);
  });
  await batch.commit();
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore= firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;