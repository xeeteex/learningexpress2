const express = require("express");
const app = express(); // objects like get listen post bhanne in express

/*
middleware
   function which has access to req and res and also modify them
   
   and also has access to next valid middleware
   */

const checkAuthentication = (req, res, next) => {
  console.log("check authentication..");

  let loggedIn = true;
  if (!loggedIn) {
    // else lekhnu pardena this style
    return res.status(401).send({
      msg: "unauthenticated",
    });
  }

  next();
};

const checkBuyer = (req, res, next) => {
  let role = "buyer";
  console.log("check buyer");

  if (role === "buyer") {
    next();
  } else {
    res.status(403).send({
      msg: "forbidden",
    });
  }
};

app.use(express.json() )
// app.use(checkBuyer);
//global middleware
//app.use(checkAuthentication); //middleware call garne tarika

/* protected routes */

app.get("/api/dashboard", checkAuthentication, (req, res) => {
  res.send("dashboard data");
});

app.get("/api/orders", checkAuthentication, checkBuyer, (req, res) => {
  res.send("orders data");
});

app.post("/api/orders", checkAuthentication, checkBuyer, (req, res) => {
  console.log("req.body", req.body);
  res.send("create orders  ");
});

app.get("/api/test", (req, res) => {
  res.send("test success");
});

app.listen(8000, () => {
  console.log("server started");
});

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
