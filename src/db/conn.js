const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config({path:`${__dirname}/dev.env`});
// console.log(process.env.DB_NAME);
// console.log(process.env.DB_PASS);

const DB = `mongodb+srv://${process.env.DB_NAME}:${process.env.DB_PASS}@cluster0.8pxo6.mongodb.net/form?retryWrites=true&w=majority`;
mongoose.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).then(() => {
    console.log(`Connection Successful`);
}).catch((e) => {
    console.log(`No Connection\n${e}`);
})