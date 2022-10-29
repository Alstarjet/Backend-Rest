//usando joi creamos un objeto con el que verificar que el JSON del frontend
//para la creacion de pedidos sea correcto, si es incorrecto le respondemos su error
const Joi=require('joi');
const schema=Joi.object({
    origen:Joi.object({
        lati:Joi.number().required(),
        long:Joi.number().required(),
        address:Joi.string().required(),
        zipcode:Joi.number().max(99999).required(),
        extnum:Joi.number().required(),
        intnum:Joi.string()
        }).required(),
    destino:Joi.object({
        lati:Joi.number().required(),
        long:Joi.number().required(),
        address:Joi.string().required(),
        zipcode:Joi.number().max(99999).required(),
        extnum:Joi.number().required(),
        intnum:Joi.string()
        }).required(),
    productos:Joi.array().items(Joi.number().max(25)).required()
})
async function datosMiddleware(req,res,next){
    try{
        const valor= await schema.validateAsync(req.body)
        next()
    }catch(err){
        res.status(400).send(err)
    }
}
module.exports=datosMiddleware;
