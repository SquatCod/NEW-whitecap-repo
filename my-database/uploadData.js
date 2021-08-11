const firestoreService = require("firestore-export-import");
const serviceAccount = require("./serviceAccountKey.json");
const admin = require("firebase-admin")

databaseURL = "https://wc-firebase-default-rtdb.firebaseio.com/"

firestoreService.initializeApp(serviceAccount, databaseURL);

firestoreService.restore("data.json");
