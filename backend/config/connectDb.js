const mongoose =require('mongoose');

const connectDatabase = ()=>{
    mongoose.connect(process.env.DB_URL).then((con)=>{
        console.log("MOngodb connected "+con.connection.host)
    })
};

module.exports = connectDatabase