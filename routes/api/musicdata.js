const router = require("express").Router();
const topmusicController = require("../../controllers/topmusicController");


router.route("/")
  .get(topmusicController.findAll)
  .post( topmusicController.create);


router.route("/scrapped")
  .get(topmusicController.getScrapped)




  module.exports = router;
