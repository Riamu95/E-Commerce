// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase//compat/firestore';
import 'firebase/compat/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const config = {
  apiKey: "AIzaSyCaYbVR5sTfcAw8uQDEfdsv7t1gpScw0Iw",
  authDomain: "crwndb-52b60.firebaseapp.com",
  projectId: "crwndb-52b60",
  storageBucket: "crwndb-52b60.appspot.com",
  messagingSenderId: "604385462031",
  appId: "1:604385462031:web:1554f8652d3b87d643a07a"
};

export const createUserProfileDocument = async (userAuth, aditionalData) => {
   
    if(!userAuth)
        return;
      
    const userRef = firestore.doc(`/users/${userAuth.uid}`);
    const snapshot = await userRef.get();
    if(!snapshot.exists)
    {
      const { displayName, email } = userAuth;
      const createdAt = new Date();
      
      try
      {
          await userRef.set({
            displayName,
            email,
            createdAt,
            ...aditionalData
          });
      }
      catch (error) {
        console.log('error creating user' , error);
      }
    }
    return userRef;
}

export const addCollectionAndDocuments = async (collectionID, dataToAdd) => 
{
    const collectionRef = firestore.collection(collectionID);
    const batch = firestore.batch();

    
    dataToAdd.forEach( collection => {
      const newDocRef = collectionRef.doc();
        batch.set(newDocRef,collection)
    });
    

    return await batch.commit();
};

export const convertCollectionsSnapshotToMap = ( collections ) => {

    const transformedCollection =   collections.docs.map( doc => {
    
    const { title, items } = doc.data();
    
    return {
      routName : encodeURI(title.toLowerCase()),
      id : doc.id,
      title,
      items,
    };
  
  });

  return transformedCollection.reduce((acuumulator, collection) => {
    acuumulator[collection.title.toLowerCase()] = collection;
    return acuumulator;
  }, {});

};


export const convertCollectionTypeSnapshotToMap = ( collections ) => {

  const transformedCollection = collections.docs.map( doc => {
  
  const { id, imageUrl, linkUrl, size, title, url } = doc.data();
  
  return {
    id : id,
    title : title,
    size: size,
    imageUrl : imageUrl,
    linkUrl : linkUrl,
    url : url
  };
});

transformedCollection.sort((a,b) => a.id > b.id ? 1 : -1);

return transformedCollection.reduce((acuumulator, collection) => {
  acuumulator[collection.title.toLowerCase()] = collection;
  return acuumulator;
}, {});

};


// Initialize Firebase
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;