const router = require("express").Router();
const musicData = require("./musicData");

// userData routes
console.log("musicData: ", musicData);
router.use("/musicData", musicData);

module.exports = router;