var User = require('../models/users')

/* View list of all users*/
exports.users_list = function(req, res) {
    User.find({}, function (err, docs) {
        if(err){
            console.log(err);
        } else{
            res.send(docs)
        }
    });
}
/* Create one user*/
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

/* Find user by email */
exports.get_by_email = function(req, res) {
    let email = req.params.email;
    User.findOne({email}, function(err,email) {
        if(err){
            console.log(err);

        }else{
            res.send(email)
        }
    });
}