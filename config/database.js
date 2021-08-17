const mongoose = require("mongoose");


module.exports = async () =>{
    try{
        const connectionParams = {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
    };
    await mongoose.connect(process.env.DB, connectionParams);
    console.log("Connect succs");
} catch(error) {
    console.log("Faild to connect");
}
};