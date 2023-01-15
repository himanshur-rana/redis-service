const express = require('express');
const router = express.Router();
const {
  setRedisKeyCtrl,
  getRedisKeyCtrl,
} = require('../controller/redis-ctlr');

router.post('/redis', setRedisKeyCtrl);
router.get('/redis', getRedisKeyCtrl);

module.exports = router;
