import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { getStorage } from 'firebase/storage'
import { doc, getFirestore, setDoc } from 'firebase/firestore'

const firebaseConfig = () => {
  if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
    return {
      apiKey: 'AIzaSyBvATR1mJbLNuGJnsnwfPN3LrUvygf0CMk',
      authDomain: 'nullbr-portfolio-dev.firebaseapp.com',
      projectId: 'nullbr-portfolio-dev',
      storageBucket: 'nullbr-portfolio-dev.appspot.com',
      messagingSenderId: '430830271750',
      appId: '1:430830271750:web:d9bd5af0d0f92123b4b287',
    }
  } else {
    return {
      apiKey: 'AIzaSyD1y2pUih_wW26DVy8Adw64nAI4cbbEg0E',
      authDomain: 'nullbr-portfolio.firebaseapp.com',
      projectId: 'nullbr-portfolio',
      storageBucket: 'nullbr-portfolio.appspot.com',
      messagingSenderId: '335638362053',
      appId: '1:335638362053:web:3187f973f232a988e8fdac',
      measurementId: 'G-F0RXS6T56G',
    }
  }
}

const app = initializeApp(firebaseConfig())
export const auth = getAuth()
const provider = new GoogleAuthProvider()
export const db = getFirestore(app)
export const storage = getStorage(app)

export const signInWithGoogle = () => signInWithPopup(auth, provider)

export const createProject = async (portfolio) => {
  try {
    await setDoc(doc(db, 'portfolio', portfolio.name), portfolio)
    alert('Successfully added to portfolio')
    return true
  } catch (error) {
    console.log(error)
    alert('Failed to add portfolio')
    return false
  }
}
