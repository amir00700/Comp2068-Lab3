'use strict';
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    res.render('index', { title: 'My Family' });
});

router.get('/amir', function (req, res) {
    res.render('amir', { title: 'Amir' });
});

router.get('/Kabir', function (req, res) {
    res.render('Kabir', { title: 'Kabir' });
});

router.get('/mahbuba', function (req, res) {
    res.render('mahbuba', { title: 'Mahbuba' });
});

router.get('/masuda', function (req, res) {
    res.render('masuda', { title: 'Masuda' });
});

module.exports = router;
