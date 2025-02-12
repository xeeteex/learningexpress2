const express = require("express");
const app = express(); // objects like get listen post bhanne in express

/*
middleware
   function which has access to req and res and also modify them
   
   and also has access to next valid middleware
   */

const checkAuthentication = (req, res,next) => {
  console.log("check authentication..");

  let loggedIn = false;
  if (!loggedIn) {
    // else lekhnu pardena this style
    return res.status(401).send({
      msg: "unauthenticated",
    });
  }

  next()
};

//global middleware
//app.use(checkAuthentication); //middleware call garne tarika

/* protected routes */

// const checkAuthentication= (res) => {
//   let loggedIn = false
//   if(!loggedIn){  // else lekhnu pardena this style
//    return res.status(401).send({
//       msg: "unauthenticated"
//     })
//   }
// }
 
/**checkAuthentication if only used in certain functions
 * otherwise use app.use
 */

app.get("/api/dashboard",checkAuthentication,  (req, res) => {
  res.send("dashboard data");
});

app.get("/api/orders",checkAuthentication, (req, res) => {
  res.send("dashboard data");
});

app.get("/api/test", (req, res) => {
  res.send("test success");
});

app.listen(8000, () => {
  console.log("server started");
});
