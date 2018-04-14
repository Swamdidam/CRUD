var User = require("../model/user/user.js");
mongoose = require('mongoose');
Ads      = require('../model/Ads/Ads');
ObjectId = require('mongodb').ObjectId;


function route(app) {

    //===============================================================================================
    // creating a new record
    //===============================================================================================  
        
    app.post('/createAds', (req, res)=>{
        return Ads.create(req.body)
            .then(doc =>{
                return res.status(200).json(doc)
            })
            console.log('1')
            .catch(err=>{
                return res.status(400).json(err)
            })
    })
    //===============================================================================================
    // Deleting by Id
    //===============================================================================================    
    app.post('/deleteAds', (req, res)=>{
        return Ads.findOneAndRemove({"_id":ObjectId(req.body._id)})
            .then(ok =>{
                return res.status(200).json({status:200, message:"Item successfully deleted"})
            })
            .catch(err=>{
                return res.status(err).json(err)
            })
    })
    //===============================================================================================
    // editing by Id
    //===============================================================================================    

    app.post('/editAds', (req, res)=>{

        
        return Ads.update({"_id":ObjectId(req.body._id)}, 
            {$set:
                req.body
            })
            .then(doc=>{
                return res.status(200).json({status:200, message:"Ads successfully Modified"})
            })
            .catch(err=>{
                return res.status(400).json(err)
            })
    });
    
    
}


module.exports.route = route;