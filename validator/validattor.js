const validator=require('validator')
const registervalidator =(info)=>{
    
    const err={}
    if(!info.name){
        err.name="Name requird"
    }
    if(!info.email){
        err.email="Email requird"
    } else if(!validator.default.isEmail(info.email)){
        err.email="Email Not Valid "
    }
    if(!info.password){
        err.password="Password requird"
    } else if(info.password.length <6){
        err.password="Password Length should be gatter then 6 Charecter"
    }
    if(!info.confirmPassword){
        err.confirmPassword="Confirm Password requird"
    }else  if(info.confirmPassword !== info.password){
        err.confirmPassword="Both Password Are Different"
    }
    return{
        err:err,
        isValid:Object.keys(err).length===0
    }
}




const loginValidator =(info)=>{
    
    let err={}
    if(!info.email){
        err.email="Email requird"
    } else if(!validator.default.isEmail(info.email)){
        err.email="Email Not Valid "
    }
    if(!info.password){
        err.password="Password requird"
    }
    return{
        err:err,
        isValid:Object.keys(err).length===0
    }
}




const residentsValidator =(residents)=>{
    
    let err={}
    if(!residents.name){
        err.name="First name is requird"
    }
    if(!residents.dateOfAdmission){
        err.dateOfAdmission="Date of admission is requird"
    }
    if(!residents.dateOfBirth){
        err.dateOfBirth="Date of birth is requird"
    }
    if(!residents.cellPhoneNumber){
        err.cellPhoneNumber="Cell phone number is  requird"
    }
    if(!residents.phoneNumber){
        err.phoneNumber="Phone number is  requird"
    }
    if(!residents.guardianNumber){
        err.guardianNumber="Guardian  number is  requird"
    }
    return{
        err:err,
        isValid:Object.keys(err).length===0
    }
}



module.exports ={
    login:loginValidator,
    register:registervalidator,
    residentsValidator:residentsValidator
}