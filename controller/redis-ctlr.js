const { setKeyInRedis, getValueFromRedis } = require('../utils/helper');

const setRedisKeyCtrl = async (req, res) => {
  try {
    // set key in redis
    const { body } = req;
    console.log(body);
    const result = await setKeyInRedis(body.key, body.value);
    console.log(result);
    res.send('success');
  } catch (error) {
    console.log(err);
  }
};

const getRedisKeyCtrl = async (req, res) => {
  try {
    // get key in redis
    const { key } = req.query;
    console.log(key);
    const result = await getValueFromRedis(key);
    console.log(result);
    res.send({ value: result });
  } catch (error) {
    console.log(err);
  }
};

module.exports = { setRedisKeyCtrl, getRedisKeyCtrl };
