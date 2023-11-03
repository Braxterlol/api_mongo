const mongoose = require('mongoose');

mongoose.connect(process.env.URL_MONGODB)
.then(() => {
    console.log("conectado a mongodb")
})
.catch(console.log);