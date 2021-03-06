const express = require("express");
const app = express();
const port = 8001;
const cors = require("cors");
app.use(cors());

    // HANDLING POST REQUESTS
app.use(express.json(), express.urlencoded({extended: true}));

    // CONNECT TO CONFIG FILE
require("./config/mongoose.config")

    // CONNECT TO ROUTES AND PASS IT TO MY APP
require("./routes/users.routes")(app)
require("./routes/posts.routes")(app)
require("./routes/saleItem.routes")(app)
require("./routes/groupPosts.routes")(app)
require("./routes/groups.routes")(app)

app.listen(port, () => console.log(`MERN_PORT: ${port}`))