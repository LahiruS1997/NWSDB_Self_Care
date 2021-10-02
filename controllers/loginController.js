import Firebase from '../config'

export default function loginCtrl(email, password){
    //const user = {'email' : email, 'passoerd': password}

    Firebase.auth()
        .signInWithEmailAndPassword(email, password)
        .then(() => loginComplete())
        .catch((error) => console.log("error : ", error))

        console.log(email)
        console.log(password)
    
}