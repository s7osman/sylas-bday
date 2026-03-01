// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDkZFX7g12uOTLEgN5K5A-XQ_vfhIApHks',
  authDomain: 'sylas-bday.firebaseapp.com',
  projectId: 'sylas-bday',
  storageBucket: 'sylas-bday.firebasestorage.app',
  messagingSenderId: '258607998843',
  appId: '1:258607998843:web:39a52199e229571344ffde',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
