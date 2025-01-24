const Bull = require("bull");

const workQueue = new Bull("workqueue", {
  redis: {
    port: 6379,
    host: "redis",
  },
});

module.exports = workQueue;
