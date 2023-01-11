const express = require("express");
const app = express();
const port = 8000;

require("./config/mongoose.config");

app.use(express.json(), express.urlencoded({ extended: true }));

const AllMyUserRoutes = require("./routes/user.routes");
AllMyUserRoutes(app);


// this needs to be below the other code blocks
app.listen( port, () => console.log(`Listening on port: ${port}`) );