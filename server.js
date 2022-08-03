const express = require('express');
const app = express();
const serverConfig = require('./configs/server.config')
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dbConfig = require('./configs/db.config');
// const Notification = require('./models/notification.model');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));

mongoose.connect(dbConfig.DB_URL, async ()=>{
    console.log("#### Connected to mongoDB ####");
    // await Notification.collection.drop()
}, err =>{
    console.log("#### Error while connecting to mongoDB #### ", err.message);
});

require('./routes/notification.route')(app);

require('./schedulers/emailScheduler');

app.listen(serverConfig.PORT,()=>{
    console.log(`#### connected to server at port no.: ${serverConfig.PORT} ####`);
})