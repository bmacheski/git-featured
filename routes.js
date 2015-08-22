var express = require('express');
var router  = express.Router();
var nodemailer = require('nodemailer');

router.get('/', function(req, res){
  res.render('templates/featured');
})

router.get('/about', function(req, res) {
  res.render('templates/about')
})

router.get('/contact', function(req, res) {
  res.render('templates/contact')
})

router.post('/contact', function(req, res) {
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'email',
      pass:  'password'
    }
  });
  transporter.sendMail({
      from: req.body.email,
      to: 'bwm0007@gmail.com',
      subject: 'feature this project',
      text: req.body.message
  });
})

module.exports = router;
