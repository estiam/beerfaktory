var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');

/* GET home page. */
router.get('/', function (req, res, next) {
  mongoose.model('Beer').find({}, (err, items) => {
    res.render('index', { beers: items });
  })
});

router.get('/create', (req, res) => {
  res.render('create');
})

router.post('/create', (req, res) => {
  let body = req.body;
  body.tried = body.tried === 'on';

  mongoose.model('Beer').create(body, (err, item) => {
    if (err)
      return res.send(err);
    res.redirect('/');
  });
});

router.get('/edit/:id', (req, res) => {
  mongoose.model('Beer').findById(req.params.id, (err, beer) => {
    if (err)
      return res.send(err);

    res.render('edit', { beer });
  });
});

router.post('/edit/:id', (req, res) => {
  mongoose.model('Beer').findByIdAndUpdate(req.params.id, req.body, (err, item) => {
    if (err)
      return res.send(err);

    res.redirect('/');
  })
});

router.get('/delete/:id', (req, res) => {
  mongoose.model('Beer').findByIdAndRemove(req.params.id, (err, item) => {
    if (err)
      return res.send(err);

    res.redirect('/');
  });
})

// router.post

// router.put

// router.delete

// router.propfind

// router.head

// router.patch

module.exports = router;
