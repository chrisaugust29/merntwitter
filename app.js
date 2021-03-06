const express = require("express");
const app = express();
const db = require('./config/keys').mongoURI;
const mongoose = require('mongoose');
const users = require("./routes/api/users");
const tweets = require("./routes/api/tweets");
const User = require('./models/User');
const bodyParser = require('body-parser');
// const passport = require('passport');

mongoose.connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));

app.get("/", (req, res) => {
    const user = new User ({
        handle: "chris",
        email: "chris@chris.com",
        password: "chris123"
    })
    user.save()
    res.send("Hello Worlds!@@@@");
})

// app.use(passport.initialize());
// require('./config/passport')(passport);

app.use(bodyParser.urlencoded({ 
    extended: false 
}));
app.use(bodyParser.json());

app.use("/api/users", users);
app.use("/api/tweets", tweets);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));

// mongodb+srv://dev:81221@cluster0.sq5gf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority





