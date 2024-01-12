 //si el usuario ya esta en la base de datos
 const User = require('../models/userModel')
 const Categoria = require('../models/categoriasModel')
 

 const emailExist = async (email)=>{
   const search = await User.findOne({email})
   //search.length !==0
   if (search) {
     throw new Error(`El usuario ${email} ya existe`)
     
   }
   return false
 }
 const categoriaExiste = async (name) => {
  const categoriaExist = await Categoria.findOne({name})
  if(categoriaExist){
      throw new Error ('La categoria ya existe')
  }
}


 module.exports={
   emailExist,
   categoriaExiste
 }