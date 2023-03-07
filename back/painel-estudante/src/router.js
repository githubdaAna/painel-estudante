const express = require('express');
const { addUser, loginUser, updateUser, viewUser } = require('./controllers/users');
const checkUserAuth = require('./middleware/authentication');
const router = express();

//rotas não protegidas
router.post("/user", addUser);
router.post("/login", loginUser);

router.use(checkUserAuth);

//rotas protegidas
router.get("user", viewUser);
router.put("/user", updateUser);

module.exports = router;