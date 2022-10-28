const express = require("express");
const router = express.Router();
const OrdenesService=require('./../servicios/ordenesServicio')
const ordenes=new OrdenesService();
//el servicio de Ordenes viene con funciones que permiten manipularlo
router.get("/lista",(req,res)=>{
    //Acceso a la funcione para mostrar las ordenes
    console.log(ordenes.listar())
    res.send({
      nombre:"listas pro haci chido"})
  })
router.post("/crear",(req,res)=>{
    //agregaremos el poste al arrar la intacia de ordenes
    ordenes.crear(req.body)

    console.log(ordenes.listar())
    if(req.body.origen.lati){
        res.send(req.body) 
    }else
    res.send("error bro") 
  })
module.exports=router;