const express = require("express");
const routerApi = require('./routes/index')
const app = express();
const port = 3000;
app.use(express.json());

app.get("/", (req, res) =>{
  res.send("Hola mi server en Express");
});
app.listen(port, () =>{
  console.log(" Hola consola My port: " + port);
});
routerApi(app);