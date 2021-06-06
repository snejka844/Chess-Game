import firebase from 'firebase/app'
import "firebase/auth"

const app = firebase.initializeApp({
    apiKey: process.env.REACT_APP_FIREBARE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBARE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBARE_STRORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBARE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBARE_APP_ID
})

export const auth = app.auth()
export default app