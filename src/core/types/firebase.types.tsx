import firebase from "firebase/app";

export type FirebaseUserType = {
    currentUser: firebase.User | null;
} 