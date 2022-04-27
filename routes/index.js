var express = require("express");
var router = express.Router();
const basicAuth = require("express-basic-auth");

/* GET home page. */
router.get("/", (req, res, next) => {
  res.render("index.html");
});

router.use(basicAuth({
    users: { 'admin': '1234' },
    challenge: true,
    realm: 'Imb4T3st4pp',
}))


router.get("/admin", (req, res, next) => {
      res.render("admin.html");
    })


module.exports = router;
