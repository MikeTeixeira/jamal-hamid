"production"===process.env.NODE_ENV?module.exports=require("./prod"):module.exports=require("./dev");