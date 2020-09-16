const User = require('../models/user.model');
class UserController{
    //[GET] /user
    index(req,res){
        res.render('user');
    }
    add(req, res){
    //   try{
        const newUser = User({
            name: req.body.name,
            address: req.body.address
        });
        // const rs = await newUser.save();
        // return res.status(200).json({message: "add success"});
        newUser.save(function(err){
            if(err){
                res.status(500).json({message: err});
            }else{
                res.status(200).json({message: "success"});
            }
        });
    //   }catch(e){
    //     res.status(500).json({message: "err"});
    //   }
    }
    show(req, res){
        User.find(function(err, data){
            if(err){
                res.status(500).json({message: err});
            }else{
                res.status(200).json({message: data});
            }
        });
    }
}

module.exports = new UserController;