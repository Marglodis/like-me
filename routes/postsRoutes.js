const express = require("express");
const router = express.Router();
const controller = require("../controllers/postsControllers");

router.use(express.static("views"));

router.get("/", controller.index);

router.get("/posts", controller.get);

router.post("/posts", controller.post);

router.put("/posts/like/:id", controller.update);

router.delete("/posts/:id", controller.delete);

module.exports = router;
