var express = require('express');
var router = express.Router();
var dao = require('../database/dao')

router.post("/login", function (req, res){
    dao.findUserByEmail(req.body).then( ([rows])=>{
        res.send(rows);
    })
})

router.put("/update", function(req, res){
    dao.findUserByID(req.body.user_id).then( ([rows])=>{
        if(rows.length){
            dao.updateUser(req.body)
            res.send("Usuário atualizado com sucesso");
        }
        else{
            res.json({success: false, errors: "O usuário não foi encontrado"});
        }

    })
})

router.post("/save",function(req,res){
    console.log(req.body)
    dao.saveUser(req.body).then(()=>{
        res.send("Usuário criado com sucesso")
    }).catch(()=>{
        res.json({success: false, error: "Não foi possível criar o usuário"})
    })

})

router.delete("/delete",function(req,res){
    dao.removeUser(req.body.user_id)
    .then( ()=>{
        res.send("Usuário excluído com sucesso")
    }).catch(()=>{
        res.json({success: false, error: "Não foi possível deletar o usuário"})
    })
})

module.exports = router;