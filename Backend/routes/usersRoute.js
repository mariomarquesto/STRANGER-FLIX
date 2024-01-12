const { Router } = require('express')
const route = Router()
const { getUsers, createUser ,deleteuserById,getRoles} = require('../controllers/userController')
const { body } =require('express-validator')
const { emailExist } = require('../helpers/validation')
const { jwtValidation }= require('../middleware/jwtValidation')
const{ ensureAdmin}= require('../middleware/ensureAdmin')



route.get('/' ,getUsers)
route.get('/getRoles' ,getRoles)
route.delete("/userDelete/:id", jwtValidation,ensureAdmin, deleteuserById);



route.post('/',
 body('email').not().isEmpty().withMessage("El correo es obligatorio").isEmail().withMessage(
   "ingresa un correo valido"
 ),
 body('password').matches(/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/).withMessage('La contrasena no cumple requisitos')

,createUser)



module.exports = route
