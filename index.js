const express = require("express");
const cors = require("cors");
const controllers = require("./controllers");
const swaggerUI = require("swagger-ui-express");

const { PORT = 8000 } = process.env;

const app = express();
app.use(cors());
app.use(express.json());

// users
app.post("/api/v1/login", controllers.login);
app.post("/api/v1/register", controllers.register);

// https://www.npmjs.com/package/swagger-ui-express
const options = {
    swaggerOptions: {
        url: "/api-docs"
    }
};
app.use("/docs", swaggerUI.serve, swaggerUI.setup(null, options));
app.get("/api-docs", (req, res) => {
    res.sendFile(__dirname + "/swagger.yaml");
});

app.listen(PORT, () => {
    console.log(`Server is listening on PORT ${PORT}`);
});
