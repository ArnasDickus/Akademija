import firebase from "firebase/app";

export type firebaseUserInterface = {
    currentUser: firebase.User | null;
} 