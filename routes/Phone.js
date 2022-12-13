const { response } = require('express');
var express = require('express');
var router = express.Router();
var dao = require('../database/dao')



router.get('/',function(req,res){
    dao.listCelular().then(([rows])=>{
        res.send(rows)
    }).catch( err =>{
        res.json({success:false, error:"Não foi possível listar os celulares"})
    })
})


router.put("/update", function(req,res){
    dao.findPhoneById(req.body.idcelulares).then( ([rows])=>{
        if(rows.length){
            dao.updateCelular(req.body)
            res.send("Celular atualizado com sucesso");
        }
        else{
            res.json({success:false,error:"O celular não foi encontrado"})
        }
    })
})

router.post("/save", function(req,res){
    dao.saveCelular(req.body).then(()=>{
        res.send("Celular criado com sucesso")
    }).catch(()=>{
        res.json({success:false, error:"Não foi possível criar o celular"})
    })
})

router.delete("/delete",function(req,res){
    console.log("ASD",req.body)
    dao.removeCelular(req.body.idcelulares)
    .then( ()=>{
        res.send("Celular excluído com sucesso")
    }).catch(()=>{
        res.json({success:false, error:"Não foi possível deletar o celular"})
    })
})

module.exports = router;