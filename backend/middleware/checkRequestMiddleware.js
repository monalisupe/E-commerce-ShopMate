const checkRequestMiddleware = (req, res, next) => {

  console.log("Second middleware is running");

  next();
};

module.exports = checkRequestMiddleware;

