/// Your web app's Firebase configuration
import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyA41k8591FnWNJLm_GyDXcvG1VelDuo1WU",
    authDomain: "tech-up-skill-portfolio.firebaseapp.com",
    projectId: "tech-up-skill-portfolio",
    storageBucket: "tech-up-skill-portfolio.appspot.com",
    messagingSenderId: "307443913214",
    appId: "1:307443913214:web:e908c45ad97abc603530af"
  };


  let app;
  if(firebase.apps.length === 0){
    app = firebase.initializeApp(firebaseConfig);
  }else{
    app = firebase.app()
  }
  

const auth = firebase.auth()
export {auth};
