import  * as firebase from 'firebase/app';
// import 'firebase/firestore';
// import 'firebase/auth';
// import 'firebase/storage';
// import 'firebase/firebase-app';
// import 'firebase/firebase-storage';
import 'firebase/firebase-database';


const firebaseApp = firebase.initializeApp({
	apiKey: 'AIzaSyDzMkLSQryt6VRiMzoderK6-zw9bouqxqU',
	authDomain: 'todo-vue-8a91d.firebaseio.com',
	databaseURL: 'https://todo-vue-8a91d.firebaseio.com',
	projectId: 'todo-vue-8a91d',
	storageBucket: '',
});

export const database = firebaseApp.database();

