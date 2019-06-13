import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
        apiKey: "AIzaSyCtoR0pHJldVvXmBwNOfgg98ibQomuFzY8",
        authDomain: "catch-of-the-day-tripp-delcore.firebaseapp.com",
        databaseURL: "https://catch-of-the-day-tripp-delcore.firebaseio.com"
      });

      const base = Rebase.createClass(firebaseApp.database());

      // This is a named export
      export { firebaseApp };

      //This is a default export
      export default base;