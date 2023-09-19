const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}))
app.use("/api", require("./routes/routes")(app));


mongoose.connect('mongodb://localhost:27017').then(() => {
    
    console.log("connected to mongoDB")
    app.listen(3000, () => {
        console.log("node Api app is Running on Port 3000");
    })    
}).catch((error) => {
    console.log(error)
})