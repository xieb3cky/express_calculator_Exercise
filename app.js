const express = require('express');

const app = express();
const ExpressError = require('./expressError');
const { convertStringToNumsArray, findMean, findMedian, findMode } = require('./helper')


app.get('/mean', (req, res) => {
    if (!req.query.nums) {
        throw new ExpressError('You must pass in valid number(s)', 400);
    }
    let arrNums = convertStringToNumsArray(req.query.nums);

    return res.json({ operation: "mean", value: findMean(arrNums) });
});
app.get('/median', function (req, res, next) {
    if (!req.query.nums) {
        throw new ExpressError('You must pass in valid number(s)', 400);
    }

    let arrNums = convertStringToNumsArray(req.query.nums);

    return res.json({ operation: "median", value: findMedian(arrNums) });
});

app.get('/mode', function (req, res, next) {
    if (!req.query.nums) {
        throw new ExpressError('You must pass in valid number(s)', 400)
    }
    let arrNums = convertStringToNumsArray(req.query.nums)

    return res.json({ operation: "mode", value: findMode(arrNums) })

});

app.use(function (req, res, next) {
    const err = new ExpressError("Not Found", 404);
    return next(err);
});

app.use(function (err, req, res, next) {
    res.status(err.status || 500);

    return res.json({
        error: err,
        message: err.message
    });
});


app.listen(3000, function () {
    console.log('App on port 3000');
})