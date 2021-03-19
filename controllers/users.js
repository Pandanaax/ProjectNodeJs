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
