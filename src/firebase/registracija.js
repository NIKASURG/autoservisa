import { getAuth, createUserWithEmailAndPassword ,updateProfile} from "firebase/auth";
import {auth} from './config'
const user = auth.currentUsesr;

export function register(vardas,pavarde,email,slaptazodis){
const auth = getAuth();
if(vardas === null){
    return('Ivaskite varda')
}
if(pavarde === null){
    return('Ivaskite pavarde')
}
createUserWithEmailAndPassword(auth, email, slaptazodis)
  .then((userCredential) => {
    // Signed up 
    console.log(vardas,pavarde)
        const user = userCredential.user;
        updateProfile(auth.currentUser, {
            displayName: vardas + ' ' + pavarde
          }).then(() => {
            // Profile updated!
            // ...
          }).catch((error) => {
            // An error occurred
            // ...
          });
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
}