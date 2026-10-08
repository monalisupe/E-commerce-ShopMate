// const checkRequestMiddleware = (req , res , next) =>{
//     console.log("Second middleware is running");
//     res.status(401).json({
//         message : "Access Denied"
//     });
// };

// module.exports = checkRequestMiddleware;


const checkRequestMiddleware = (req, res, next) => {

  console.log("Second middleware is running");

  next();
};

module.exports = checkRequestMiddleware;

