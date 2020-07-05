// Dependencies
const router = require('express').Router();
const cors = require('cors');

// Model
const Data = require('../models/data');

// Check URI & HTTP method
router.use((req, res, next) => {
    console.log(`URI: ${req.url} / method : ${req.method}`);
    next();
});

// CORS
// Front와 나눠서 개발하는 경우 CORS 문제 발생
// https://expressjs.com/en/resources/middleware/cors.html
const whitelist = ['http://localhost:8080']; // 이후에 API 호출하는 Front의 URL 추가
const corsOptions = {
    origin: function (origin, callback) {
        console.log(`origin : ${origin}`);
        // origin 자체가 의미가 없거나 (자체 호출) whitelist에 호출한 origin 주소가 존재하면
        if (origin === undefined || whitelist.indexOf(origin) !== -1) {
            callback(null, true) // 참 값으로 판정하여 데이터 전달해줌
        } else {
            callback(new Error('Not allowed by CORS')) // CORS Error 리턴
        }
    }, credentials: true
};

// Pre-Flight Setting
router.options('*', cors(corsOptions));

// Create Data
router.post('/data', async (req, res, next) => {
    try {
        await Data.create(req.body);
        const msg = "successfully saved" 
        res.send(msg);
        console.log(msg);
    } catch (e) {
        console.log("an error occurred!");
        next(e);
    }
});

// Read All Data
router.get('/data', async (req, res, next) => {
    try {
        res.send(await Data.find());
        const msg = "successfully searched (all)" 
        console.log(msg);
    } catch (e) {
        console.log("an error occurred!");
        next(e);
    }
})

// Read Data By Id
router.get('/data/:id', async (req, res, next) => {
    try {
        res.send(await Data.findById(req.params.id));
        const msg = "successfully searched" 
        console.log(msg);
    } catch (e) {
        console.log("an error occurred!");
        next(e);
    }
})

// Read Data By Name
router.get('/data_name/:name', async (req, res, next) => {
    try {
        // https://mongoosejs.com/docs/api.html#model_Model.find
        res.send(await Data.findOne({name: req.params.name}));
        const msg = "successfully searched" 
        console.log(msg);
    } catch (e) {
        console.log("an error occurred!");
        next(e);
    }
})

// Update Data By Id 
router.put('/data/:id', async (req, res, next) => {
    try {
        await Data.findByIdAndUpdate(req.params.id, req.body);
        const msg = "successfully changed" 
        res.send(msg);
        console.log(msg);
    } catch (e) {
        console.log("an error occurred!");
        next(e);
    }
})

// Update Data By Name 
router.put('/data_name/:name', async (req, res, next) => {
    try {
        await Data.findOneAndUpdate({name: req.params.name}, req.body);
        const msg = "successfully changed" 
        res.send(msg);
        console.log(msg);
    } catch (e) {
        console.log("an error occurred!");
        next(e);
    }
})

// Delete Data By Id 
router.delete('/data/:id', async (req, res, next) => {
    try {
        await Data.findByIdAndRemove(req.params.id, req.body);
        const msg = "successfully deleted" 
        res.send(msg);
        console.log(msg);
    } catch (e) {
        console.log("an error occurred!");
        next(e);
    }
})

// Delete Data By Name 
router.delete('/data_name/:name', async (req, res, next) => {
    try {
        await Data.findOneAndRemove({name: req.params.name}, req.body);
        const msg = "successfully deleted" 
        res.send(msg);
        console.log(msg);
    } catch (e) {
        console.log("an error occurred!");
        next(e);
    }
})

// Delete All Data
router.delete('/data', async (req, res, next) => {
    try {
        await Data.remove();
        const msg = "successfully deleted (all)" 
        res.send(msg);
        console.log(msg);
    } catch (e) {
        console.log("an error occurred!");
        next(e);
    }
})

// Error Handling
router.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send(err.message);
});

// Export Router
module.exports = router;