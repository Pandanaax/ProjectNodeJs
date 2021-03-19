var User = require('../models/users')

exports.users_list = function(req, res) {
    User.find({}, function (err, docs) {
        if(err){
            console.log(err);
        } else{
            res.send(docs)
        }
    });
}

exports.users_create = function(req, res){
    let newUser = {
        username: req.body.username,
        email : req.body.email
    };
    User.create(newUser, function(err,docs) {
        if(err){
            res.send(err);
        } else{
            res.send("Le user a bien été crée");
             }
    });
}
