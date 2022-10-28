const express = require("express");
const ordenRouter=require("./ordenRouter.js")
function routerApi(app){
    //creamos la el enrutado para la vercion de la API
    const router =express.Router();
    app.use('/api/v1',router);
    router.use('/ordenes',ordenRouter);
}
module.exports=routerApi;