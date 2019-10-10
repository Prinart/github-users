var express = require('express')
var router = express.Router()
var request = require('request')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' })
})

router.post('/', function(req, res) {
  console.log(req.body.username)
  res.render('index')
})

module.exports = router
