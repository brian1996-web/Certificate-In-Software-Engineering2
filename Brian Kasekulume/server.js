const express = require("express");
const path = require("path");
const dotenv = require("dotenv").config();
// const expressSession = require("express-session");
const passport = require("passport");





// importing our database
const connectDB = require("./config/dbConfig");
const port = process.env.PORT || 3001;


// calling the configuration to run
const app = express();

//importing the Routes
const testRoutes = require('./controllers/testRoutes');


// const expressSession = require("express-session")({
//   secret: "secret",
//   resave: false,
//   saveUninitialized: false
// })
// const session = expressSession({})

// app.use(express.urlencoded({ extended:false }));
// app.use(express.json());

// calling the configuration to run
connectDB();

//setting up pug as our view engine
app.engine("pug",require("pug").__express);
app.set("view engine", "pug");
app.set("views",path.join(__dirname,"views"));

// app.use(expressSession);


// app.use(passport.initialize());
// app.use(passport.session());

// passport.use(Signup.createStrategy());
// passport.serializeUser(Signup.serializeUser());
// passport.deserializeUser(Signup.deserializeUser)


// setting up directory for static files
app.use(express.static(path.join(__dirname,'public')));
// using imported routes

app.use('/api',testRoutes)








app.listen(port, () => console.log(" server is running at http://localhost:"+port));

