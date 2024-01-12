const mongoose = require('mongoose')

const dbConnection = async() => {
  try {
    await mongoose.connect(process.env.DB_URL)
    console.log("Conexion exitosa")
  } catch (error) {
    console.log(error)
  }
}

dbConnection()