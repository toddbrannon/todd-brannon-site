// blogs.route.js

const express = require('express');
const router = express.Router();

router.get('/', function(req, res) {
    res.render('blogs', { title: 'Todd Brannon', success: req.session.success, errors: req.session.errors });
    req.session.errors = null;
    //console.log('blogs loaded')
});

router.get('/blog_entry1', function(req, res) {
    res.render('blog_entry1', { title: 'Todd Brannon', success: req.session.success, errors: req.session.errors });
    req.session.errors = null;
});

router.get('/blog_entry2', function(req, res) {
    res.render('blog_entry2', { title: 'Todd Brannon',success: req.session.success, errors: req.session.errors });
    req.session.errors = null;
});

router.get('/blog_entry3', function(req, res) {
    res.render('blog_entry3', { title: 'Todd Brannon', success: req.session.success, errors: req.session.errors });
    req.session.errors = null;
});

router.get('/blog_entry4', function(req, res) {
    res.render('blog_entry4', { title: 'Todd Brannon', success: req.session.success, errors: req.session.errors });
    req.session.errors = null;
});

router.get('/blog_entry5', function(req, res) {
    res.render('blog_entry5', { title: 'Todd Brannon', success: req.session.success, errors: req.session.errors });
    req.session.errors = null;
});

router.get('/blog_entry6', function(req, res) {
    res.render('blog_entry6', { title: 'Todd Brannon', success: req.session.success, errors: req.session.errors });
    req.session.errors = null;
});

router.get('/feature1', function(req, res) {
    res.render('nutrition_tool_feature', { stitle: 'Todd Brannon', uccess: req.session.success, errors: req.session.errors });
    req.session.errors = null;
});

module.exports = router;