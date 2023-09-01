const express = require('express');
const router = express.Router();


//hello route
router.get('/test', (req, res) => {
  res.render('index.pug');
});
router.post("/regtest", async (req, res) => {
  try {
    const test = new Test(req.body);
    await test.save();
    res.redirect("/api/test");
    console.log(req.body);
  } catch (error) {
    res.status(400).render(" no data");
    console.log(error);
  }
});






module.exports = router;