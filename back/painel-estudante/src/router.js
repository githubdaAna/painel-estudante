const express = require('express');
const { addUser, loginUser, updateUser, viewUser, viewTeacher, addTeacher } = require('./controllers/users');
const { viewSubject, addSubject, updateSubject, deleteSubject } = require('./controllers/subjects')
const checkUserAuth = require('./middleware/authentication');
const router = express();

//rotas não protegidas
router.post("/user", addUser);
router.post("/login", loginUser);

router.use(checkUserAuth);

//rotas protegidas
router.get("user", viewUser);
router.put("/user", updateUser);
router.get("user/teacher", viewTeacher);
router.post("/user/teacher", addTeacher);
router.get("/subject", viewSubject);
router.post("/subject", addSubject);
router.put("/subject", updateSubject);
router.delete("/subject", deleteSubject);

module.exports = router;