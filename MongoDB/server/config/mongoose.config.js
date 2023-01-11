const mongoose = require("mongoose");


// insert database name!!!
mongoose.connect("mongodb://127.0.0.1:27017/play_DB", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("Established a connection to the database"))
    .catch(err => console.log("something went wrong when connecting to the database", err));
