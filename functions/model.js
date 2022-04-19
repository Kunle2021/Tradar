const admin = require("firebase-admin");
const { initializeApp } = require("firebase/app");
const functions = require("firebase-functions");
const {
  getAuth,
  signInWithEmailAndPassword,
  connectAuthEmulator,
} = require("firebase/auth");

console.log(functions.config().firebase);
admin.initializeApp(functions.config().firebase);

const app = initializeApp({
  apiKey: "AIzaSyAFCHNh2PCaKrvUKvk17Vre0-zkWElCPtw",
  authDomain: "tradar-f2246.firebaseapp.com",
  projectId: "tradar-f2246",
  storageBucket: "tradar-f2246.appspot.com",
  messagingSenderId: "143960673812",
  appId: "1:143960673812:web:ed6a47e3a25e5954946101",
  measurementId: "G-JV026VM74J",
});
const auth = getAuth(app);

const db = admin.firestore();

const { collectionName } = require("./config");

const addDoc = {
  tasks: (doc, newItem) => {
    newItem.id = ++doc.data.index;
    doc.data.list.push(newItem);
    return setFirebaseDoc(doc);
  },
  days: (doc, newItem) => {
    doc.data = Object.assign({}, doc.data, newItem);
    return setFirebaseDoc(doc);
  },
  users: (doc, newItem) => {
    if (!doc.data.list) {
      doc.data.list = [];
    }
    doc.data.list.push(newItem);
    return setFirebaseDoc(doc);
  },
};

const updateDoc = {
  tasks: (doc, updatedItem, id) => {
    delete updatedItem.id;
    doc.data.list = doc.data.list.map((task) =>
      task.id == id ? Object.assign({}, task, updatedItem) : task
    );
    return setFirebaseDoc(doc);
  },
  days: (doc, updatedItem, id) => {
    doc.data[id] = updatedItem;
    return setFirebaseDoc(doc);
  },
};

const deleteDoc = {
  tasks: (doc, id) => {
    doc.data.list = doc.data.list.filter((task) => task.id != id);
    return setFirebaseDoc(doc);
  },
  days: (doc, id) => {
    delete doc.data[id];
    return setFirebaseDoc(doc);
  },
};

exports.checkLogin = async (email, pwd) => {
  try {
    const { user } = await signInWithEmailAndPassword(auth, email, pwd);
    const customToken = await admin.auth().createCustomToken(user.uid);
    return customToken;
  } catch (error) {
    throw error;
  }
};

exports.getDocNames = () => getAllFirebaseDocsIds();

exports.getDoc = (docName) => getFirebaseDoc(docName);

exports.createDoc = (doc, newItem) => addDoc[doc.id](doc, newItem);

exports.updateDoc = (doc, updatedItem, id) =>
  updateDoc[doc.id](doc, updatedItem, id);

exports.deleteDoc = (doc, id) => deleteDoc[doc.id](doc, id);

exports.getAllDocs = () => getAllFirebaseDocs();

async function getAllFirebaseDocsIds() {
  let ids = [];
  let snapshot = await db.collection(collectionName).get();
  snapshot.forEach((doc) => ids.push(doc.id));
  return ids;
}

async function getFirebaseDoc(docName) {
  try {
    let res = {};
    let snapshot = await db.collection(collectionName).get();
    snapshot.forEach((doc) => {
      if (doc.id == docName) {
        res = {
          id: doc.id,
          ...doc.data(),
        };
      }
    });
    return res;
  } catch (err) {
    throw err;
  }
}

async function getAllFirebaseDocs() {
  try {
    const snapshot = await db.collection(collectionName).get();
    return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  } catch (err) {
    throw err;
  }
}

async function setFirebaseDoc(updatedDoc) {
  try {
    let docRef = db.collection("quotes").doc(updatedDoc.id);
    await docRef.set(updatedDoc.data);
    return updatedDoc;
  } catch (err) {
    throw err;
  }
}
