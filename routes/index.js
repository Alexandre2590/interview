var express = require('express');
var router = express.Router();
// const auth = require('../middleware/auth');
const basicAuth = require('express-basic-auth')



function myAuthorizer(username, password) {
    const userMatches = basicAuth.safeCompare(username, 'alex')
    const passwordMatches = basicAuth.safeCompare(password, 'alex')
    return userMatches && passwordMatches
}




/* GET home page. */
router.get('/', (req, res, next) =>{
    res.render('index.html');
});
router.get('/login', (req, res, next) =>  {
    res.render('login.html');

});


router.post('/admin', (req, res) => {
    let username = req.body.username;    
    let password = req.body.password;
    
    if(myAuthorizer(username,password )){
    //I don't know why is not possible to redirect here with this path /admin, 
    // i can handle it with the module passport...
    // But i would like to know how to acces =>  res.redirect('/admin') when I not commetn line 43
        res.redirect('/admin');        
        
    }else{
        res.redirect('/');
    }
    
});

router.use(basicAuth({ authorizer: myAuthorizer }))

router.get('/admin', (req, res, next) =>  {
    res.render('admin.html');
});












module.exports = router;
