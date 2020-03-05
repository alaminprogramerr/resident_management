const residentRouter= require('express')()
const residentController = require('../controller/residentsController')



residentRouter.post('/create-residents', residentController.createResidents)
residentRouter.post('/edit-residents/:id', residentController.editResidents)
residentRouter.get('/delete-residents/:id', residentController.deleteResidents)
residentRouter.get('/single-residents/:id', residentController.getSingleResidents)
residentRouter.get('/all-residents', residentController.getAllResidents)



module.exports= residentRouter