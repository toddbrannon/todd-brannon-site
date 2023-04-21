// contact.route.js

const express = require('express');
const router = express.Router();

const Prospect = require('../models/prospect');

router.get('/', function(req, res) {
    res.render('contact', { title: 'Todd Brannon', success: req.session.success, errors: req.session.errors });
    console.log('session errors should be null');
    req.session.errors = null;
    //console.log('destroying the cookie session');
    //req.session.destroy();
});

// CREATE (POST) ROUTE - add new prospect to the DB
router.post('/', (req, res) => {

    /////// Captcha handler BEGIN /////////////////////
    /*if(
        req.body.captcha === undefined ||
        req.body.captcha === '' ||
        req.body.captcha === null
    ){
        return res.json({"success": false, "msg":"Please select captcha"});
    }

    // Secret Key
    const secretKey = '6LdtwBMTAAAAALnEpxjiNx2nmgMd8C_-UXQXhnsB';

    // Verify URL
    const verifyUrl = `https://google.com/recaptcha/api/siteverify?secret=$
    {secretKey}&response=${req.body.captcha}&remoteip=$
    {req.connection.remoteAddress}`;

    // Make request to VerifyURL
    request(verifyUrl, (err, response, body) => {
        body = JSON.parse(body);

        // If not successful
        if(body.success !== undefined && !body.success){
            return res.json({"success": false, "msg":"Failed captcha verification"});
        }

        // If successful
        return res.json({"success": true, "msg":"Captcha passed"});
    });*/
    /////// Captcha handler END ////////////////////////////////////

    console.log("post route initiated!");
    var firstname = req.body.firstName;
    var lastname = req.body.lastName;
    var emailaddress = req.body.emailAddress;
    var phonenumber = req.body.phoneNumber;
    var message = req.body.message;
    var newProspect = { firstName: firstname, lastName: lastname, emailAddress: emailaddress, phoneNumber: phonenumber, message: message };

    console.log("starting validation!");
    req.checkBody('firstName', 'Please enter at least one letter').not().isEmpty().withMessage('Please enter a first name').trim().escape();
    req.checkBody('lastName', 'Please enter at least one letter').not().isEmpty().withMessage('Please enter a last name').trim().escape();
    req.checkBody('emailAddress', 'Please enter a valid email address').isEmail().withMessage('Please enter a valid email').normalizeEmail();
    //req.checkBody('phoneNumber', 'Please enter a valid phone number').not().isEmpty().isMobilePhone();
    req.checkBody('message', 'Please enter at least one letter').not().isEmpty().withMessage('Please enter a message').trim().escape();

    var errors = req.validationErrors();
    if (errors) {
        console.log('There were validation errors!');
        req.session.errors = errors;
        req.session.success = false;
        res.redirect('/contact');
    } else {
        console.log("No validation errors!");

        // Create a new prospect and save to DB
        Prospect.create(newProspect, function(err, newlyCreated) {
            if (err) {
                console.log(err);
            } else {
                //redirect back to landing page
                console.log('Post request successful from the contact route');
                req.session.success = true;
                //req.flash('success', 'Message was sent');
                res.redirect("/contact_success");
            }
        });
    }
});

module.exports = router;