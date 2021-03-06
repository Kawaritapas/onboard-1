let express = require("express");
let app = express();
let mongoose = require("mongoose");
let cookieSession = require("cookie-session");
let Onboard = require("../server/models/onboard");
let Answers = require("../server/models/answers");
let passport = require("passport");
require("../server/passport_setup/passport_setup");
mongoose.set("useNewUrlParser", true);
mongoose.set("useUnifiedTopology", true);
mongoose.connect("mongodb://localhost/wysa_p1");
app.use(
  cookieSession({
    name: "client-session",
    keys: ["key1", "key2"],
  })
);
app.use(passport.initialize());
app.use(passport.session());

const isLoggedIn = (req, res, next) => {
    if (req.user) {
      next();
    } else {
      res.sendStatus(401);
    }
  };
  app.get("/failed", function (req, res) {
    res.send("failed");
  });
  
  app.get(
    "/google",
    passport.authenticate("google", { scope: ["profile", "email"] })
  );
  
  app.get(
    "/google/callback",
    passport.authenticate("google", { failureRedirect: "/failed" }),
    function (req, res) {
      res.redirect("http://localhost:3000/onboard/");
    }
  );
  
  app.get("/logout", (req, res) => {
    req.session = null;
    req.logout();
    res.redirect("http://localhost:3000/");
  });

  app.get("/user", function (req, res) {
    res.status(200).json(req.user);
  });

  app.get('/onboard/:id',isLoggedIn,function(req,res){
    Onboard.find({"id":req.params.id},function(err,found){
        if(err){
            res.status(400).send("error occured")
        }else{
            res.status(200).json(found)
        }
    })
  })

  app.post('/submit',isLoggedIn,function(req,res){

    Answers.create({user:req.user,answer:req.body},function(err,created){
        if(err){
            res.status(400).send("error occured");
        }else{
            res.status(200).json("successfully recorded answer")
        }
    })
  })


  app.listen(3002, function (req, res) {
    console.log("server is starting");
  });

