const { createClient } = require('redis');

exports.setKeyInRedis = async (key, value) => {
  const client = createClient();
  client.on('error', (err) => console.log('Redis Client Error', err));

  await client.connect();
  await client.set(key, value);
  await client.disconnect();
  return true;
};

exports.getValueFromRedis = async (key) => {
  const client = createClient();
  client.on('error', (err) => console.log('Redis Client Error', err));

  await client.connect();
  const value = await client.get(key);
  await client.disconnect();
  return value;
};
