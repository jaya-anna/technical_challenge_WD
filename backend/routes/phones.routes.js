const router = require("express").Router();
const phoneData = require("../../data/phones.json");

router.get("/", (req, res) => {
  res.json(phoneData);
});

router.get("/:id", (req, res) => {
  const phoneId = req.params.id;
  const phone = phoneData.find((phone) => phone.id === parseInt(phoneId));
  res.json(phone);
});

module.exports = router;
