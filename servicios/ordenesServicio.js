const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
const { getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore');
const serviceAccount = require("./../files/orden-buenavida-firebase-adminsdk-bxt99-a8dc7e1915.json");
initializeApp({
  credential:cert(serviceAccount)
});
const db = getFirestore();
const docRef = db.collection('users').doc('Jamaica');
async function docaa(){
    await docRef.set({
        first: 'Hola',
        last: 'Alberto',
        born: 2450
      });
}
 
class OrdenesService{
    constructor(){
        this.ordenes=[1,4,5]
    }
    listar(){
        return (this.ordenes)
    }
    crear(a){
        this.ordenes.push(a)
    }
}
module.exports=OrdenesService;