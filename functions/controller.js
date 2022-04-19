const jwt = require("jsonwebtoken");
const {
  checkLogin,
  getDocNames,
  getDoc,
  createDoc,
  updateDoc,
  deleteDoc,
  getAllDocs,
} = require("./model");
const { jwtSecret } = require("./config");

exports.ctrlLogin = (req, res, next) => {
  login(req)
    .then((logged) => {
      if (!logged) {
        res.data = {
          success: false,
          message: "Authentication failed",
        };
      } else {
        res.data = {
          success: true,
          token: jwt.sign({ logged: true }, jwtSecret),
        };
      }
      next();
    })
    .catch((err) => {
      next(new Error(err));
    });
};

exports.ctrlRead = (req, res, next) => {
  getData(req)
    .then((data) => {
      res.data = data;
      next();
    })
    .catch((err) => {
      next(new Error(err));
    });
};

exports.ctrlAllRead = (req, res, next) => {
  getAllData()
    .then((data) => {
      res.data = data;
      next();
    })
    .catch((err) => {
      next(new Error(err));
    });
};

exports.ctrlCreate = (req, res, next) => {
  addData(req)
    .then((data) => {
      res.data = data;
      next();
    })
    .catch((err) => {
      next(new Error(err));
    });
};
exports.ctrlUpdate = (req, res, next) => {
  updateData(req)
    .then((data) => {
      res.data = data;
      next();
    })
    .catch((err) => {
      next(new Error(err));
    });
};
exports.ctrlDelete = (req, res, next) => {
  deleteData(req)
    .then((data) => {
      res.data = data;
      next();
    })
    .catch((err) => {
      next(new Error(err));
    });
};

async function deleteData(req) {
  const id = req.params.id;
  var doc = await getData(req);
  return await deleteDoc(doc, id);
}

async function updateData(req) {
  const updatedItem = req.body;
  const id = req.params.id;
  var doc = await getData(req);
  return await updateDoc(doc, updatedItem, id);
}

async function addData(req) {
  const newItem = req.body;
  var doc = await getData(req);
  return await createDoc(doc, newItem);
}

async function getData(req) {
  try {
    let docName = req.params.doc;
    await isValidDocName(docName);
    return await getDoc(docName);
  } catch (err) {
    throw err;
  }
}

async function getAllData() {
  try {
    return await getAllDocs();
  } catch (err) {
    throw err;
  }
}

async function login(req) {
  try {
    let email = req.body.email;
    let pwd = req.body.pwd;

    return await checkLogin(email, pwd);
  } catch (err) {
    throw err;
  }
}

async function isValidDocName(docName) {
  try {
    const docNames = await getDocNames();
    if (!docNames.includes(docName)) {
      throw `${docName} is not a valid document name`;
    }
    return docName;
  } catch (err) {
    throw err;
  }
}
