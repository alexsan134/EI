// FIREBASE
import firebase from 'firebase/app'

// EVITAR MAS DE UNA INSTANCIA
if (!firebase.apps.length)
	firebase.initializeApp({
		apiKey: process.env.REACT_APP_APIKEY,
		authDomain: process.env.REACT_APP_AUTHDOMAIN,
		databaseURL: process.env.REACT_APP_DATABASEURL,
		projectId: process.env.REACT_APP_PROJECTID,
		storageBucket: process.env.REACT_APP_STORAGEBUCKET,
		messagingSenderId: process.env.REACT_APP_SENDERID,
		appId: process.env.REACT_APP_APPID,
		measurementId: process.env.REACT_APP_MEASURE,
	})

// EXPORTAR
export default firebase