const express = require("express");
const router = express.Router();
const OrdenesService=require('./../servicios/ordenesServicio')
const ordenes=new OrdenesService();
const datosMiddleware=require('./../middleware/datosMiddleware')
//el servicio de Ordenes viene con funciones que permiten manipularlo
router.get("/lista",(req,res)=>{
    //Acceso a la funcione para mostrar las ordenes
    console.log(ordenes.listar())
    res.send({
      nombre:"listas pro haci chido"})
  })
router.post("/crear",(datosMiddleware))
router.post("/crear",(req,res)=>{
    console.log("hola 1")
    ordenes.crear(req.body)
    console.log(ordenes.listar())
    
    res.send(req.body)
    })
    
module.exports=router;