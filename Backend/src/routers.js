const { Router } = require("express");

const router = Router();

const devsController = require("./controllers/devsController");
const niveisController = require("./controllers/niveisController");

router.post("/devs", devsController.create);
router.get("/devs", devsController.index);
router.delete("/dev/:id", devsController.delete);
router.put("/dev/:id", devsController.update);
router.get("/dev/:id", devsController.show);

router.post("/niveis", niveisController.create);
router.get("/niveis", niveisController.index);
router.delete("/nivel/:id", niveisController.delete);
router.put("/nivel/:id", niveisController.update);
router.get("/nivel/:id", niveisController.show);

module.exports = router;
