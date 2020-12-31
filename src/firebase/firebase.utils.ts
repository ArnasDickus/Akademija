import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDL9nseVOq5i6blyMTVOJ06-3iGqHp14eM",
    authDomain: "akademija-61ecc.firebaseapp.com",
    databaseURL: "https://akademija-61ecc.firebaseio.com",
    projectId: "akademija-61ecc",
    storageBucket: "akademija-61ecc.appspot.com",
    messagingSenderId: "185097660752",
    appId: "1:185097660752:web:e2d4795e27ecb39434e455"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = (): Promise<firebase.auth.UserCredential> => auth.signInWithPopup(provider);

export const createUserProfileDocument = async (userAuth: firebase.User, additionalData: firebase.firestore.DocumentData): 
    Promise<firebase.firestore.DocumentReference<firebase.firestore.DocumentData> | undefined> => {
        if (!userAuth) return;

        const userRef = firestore.doc(`users/${userAuth.uid}`);
        const snapShot = await userRef.get();

        if (!snapShot.exists) {
            const { displayName, email } = userAuth;
            const createdAt = new Date();

            try {
                await userRef.set({
                    displayName,
                    email,
                    createdAt,
                    ...additionalData
                });
            } catch (error) {
                // TODO Implement Error handling if account failed to login.
                // eslint-disable-next-line no-console
                console.log('error creating user', error.message);
            }
        }

        return userRef;
};

export const sendEmailVerification = (): void => {
    const user = firebase.auth().currentUser;

    if(user === null) {
        return;
    }
    firebase.auth().languageCode = document.documentElement.lang;

    user.sendEmailVerification().then()
    .catch(function(error) {
        // TODO Implement Error handling if email verification failed.
        // eslint-disable-next-line no-console
        console.log('Something went wrong', error);
    })
}

export default firebase;

