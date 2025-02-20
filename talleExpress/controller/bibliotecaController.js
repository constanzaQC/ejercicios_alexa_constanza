let db = require("../condig/database.js");
class BibliotecaController{
    
static async registarLibro(req,res){
    let {titulo,autor,anioPublicacion,dicponibilidad}=req.body;
    let libro = await db.query("Insert into libro(titulo,autor,anioPublicacion,dicponibilidad)VALUES (?,?,?,?)",[titulo,autor,anioPublicacion,dicponibilidad]);
    res.json(libro);
}

static async actualizarLibro(req,res){
    let {id}=req.params;
    let{titulo,autor,anioPublicacion,dicponibilidad}=req.body;
    await db.query("UPDATE libro SET titulo =?, autor=?, anioPublicacion=?, disponibilidad=? WHERE id=?",[titulo,autor,anioPublicacion,dicponibilidad,id]);
        res.json(req.body)  
}
}

module.exports=BibliotecaController;
