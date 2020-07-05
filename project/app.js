// Dependencies
const express = require('express');
const mongoose = require('mongoose');
// https://www.npmjs.com/package/mongoose-auto-increment

// MongoDB Connection
// console.log(process.env.MONGODB_URI);
mongoose
    // https://mongoosejs.com/docs/api.html#mongoose_Mongoose-connect
    .connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: true })
    .then(console.log("mongoDB 연결 성공"))
    .catch(err => console.error(err));

// express & port
const app = express();
const PORT = process.env.PORT || 5000;

// parsing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Router
app.use('/', require('./routes/controller'));

app.listen(PORT, () => console.log(`Listening on ${PORT}`));