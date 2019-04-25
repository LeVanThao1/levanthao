const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const port = 3000;
const controllerUser = require('./controller/user.js');
const userMiddle = require('./middlewares/usersMiddlewares');
app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());

//    1. POST /api/v1/users
// Create new user to user.json file.

app.post('/api/v1/users', userMiddle.validateCreatUser, controllerUser.addUser);
// --------------------------------------------------------------------------------------//

//         4. DELETE /api/v1/users/:id
//  Delete one user by the given id in user.json file.

app.delete('/api/v1/users/:id', controllerUser.deleteUser);
//---------------------------------------------------------------------------------------//

//           2. GET /api/v1/users
//    Get list of user from user.json file.

app.get('/api/v1/users', controllerUser.getListUser);
//---------------------------------------------------------------------------------------//

//          5. GET /api/v1/users/:id
//     Get info of one user by the given id

app.get('/api/v1/users/:id', controllerUser.getUser);
//---------------------------------------------------------------------------------------
//            3. PUT /api/v1/users/:id
//   Update one user by the given id in user.json file.

app.put('/api/v1/users/:id', controllerUser.updateUser);

// --------------------------------------------------------------------------------------//
app.use(function (err, req, res, next) {
    return res.json({
        message: err.message
    });
})
//              Listen
app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);
});