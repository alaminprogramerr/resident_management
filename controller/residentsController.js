const residentsModel= require('../models/residentsModel')
const validator= require('../validator/validattor')

const createResidents=(req,res)=>{
    // const verify= validator.residentsValidator(req.body)
    // if(!verify.isValid){
    //     return res.status(400).json(verify.err)
    // }
    new residentsModel ({...req.body})
    .save((err, clients)=>{
        if(err){
            return res.json({massage:"error ", err:err})
        }else {
            return res.status(200).json({massage:"Customer added successfull", clients:clients})
        }
    })
}

const getAllResidents=(req, res)=>{
    residentsModel.find()
    .then(residents=>{
        res.status(200).json({residents:residents})
    })
    .catch(err=>{
        res.status(500).json({massage:"server error occurd"})
    })
}
editResidents= (req, res)=>{
    residentsModel.findByIdAndUpdate(req.params.id, {...req.body} , (err, result)=>{
        if(err){
            console.log(err)
            return res.status({massage:"server erroro occured ! "})
        }
        console.log(result)
        return res.status(500).json({massage:"Updated successfull !", result:result})
    })
}
deleteResidents=(req, res)=>{
    residentsModel.findByIdAndDelete(req.params.id)
    .then(deletedResidents=>{
        // console.log(deletedResidents)
        return res.status(200).json({massage:"Residents  updated successfull ! "})
    })
    .catch(err=>{
        console.log(err)
        return res.status(500).json({massage:"server erroro occured"})
    })
}

getSingleResidents=(req, res)=>{
    residentsModel.findById(req.params.id)
    .then(resident=>{
        if(!resident){
            return res.status(400).json({massage:"Residents not found !"})
        }
        return res.status(200).json({massage:"Resident's founded ! ", resident:resident})
    })
    .catch(err=>{
        console.log(err)

        return res.status(500).json({massage:"Server error occured "})
    })
}
module.exports={
    createResidents, 
    editResidents, 
    deleteResidents,
    getSingleResidents,
    getAllResidents 

}


