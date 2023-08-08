import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAKDqSx93tV8uQQK-wpvjAKw4dDMDQrP9s",
  authDomain: "regxchange.firebaseapp.com",
  projectId: "regxchange",
  storageBucket: "regxchange.appspot.com",
  messagingSenderId: "34035784366",
  appId: "1:34035784366:web:8bdbd776ceca4ec0f9eb3f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const db = getFirestore(app);

export function useAuth() {
    const [currentAdmin, setCurrentAdmin] = useState();
  
    useEffect(() => {
      const unsub = onAuthStateChanged(auth, (admin) => {
        setCurrentAdmin(admin);
      });
      return unsub;
    }, []);
    return currentAdmin;
  }