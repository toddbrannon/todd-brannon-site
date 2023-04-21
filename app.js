const express = require('express');
const app = express();
const expressValidator = require('express-validator');
const flash = require('connect-flash');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const helmet = require('helmet');
const compression = require('compression');

require('dotenv').config();

const port = process.env.PORT || 5000;

app.use(helmet());
app.use(compression());

app.use(express.static('public'));

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(expressValidator());    
app.use(cookieParser());


// OLD deprecated connect.session usage ====================
app.use(session({ secret: 'toad', saveUninitialized: false, resave: false }));

app.use(require('connect-flash')());

// Load Keys ===================================================================
//const keys = require('./config/keys');
// const mongoURI = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@trusponse.ugdwe.mongodb.net/${process.env.MONGO_DATABASE}?retryWrites=true&w=majority`;
// Next line for development only

// NEXT LINE IS FOR PRODUCTION
const mongoURI = `${process.env.MONGO_URI}`; // Added 03/16/2021 for mongodb atlas

// Map global promises
mongoose.Promise = global.Promise;

// Mongoose Connect (6/19/2019) ====================================================
const connection = mongoose
    .connect(mongoURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
     })
    .then(() => console.log('connected to the toddbrannonsite mongodbatlas collection...'))
    .catch(err => console.log(err)
);

// Routes ======================================================================
const index = require('./routes/index');
const contact = require('./routes/contact');
const contact_success = require('./routes/contact_success');
const about = require('./routes/about');
// const blog = require('./routes/blogs');
const work = require('./routes/work');
const portfolio = require('./routes/portfolio');
//const resume = require('./routes/resume');
//const privacy_policy = require('./routes/privacy_policy.route');
//const terms = require('./routes/terms.route');

app.use('/', index);
app.use('/contact', contact);
app.use('/contact_success', contact_success);
app.use('/about', about);
// app.use('/blogs', blog);
app.use('/work', work);
app.use('/portfolio', portfolio)
//app.use('/resume', resume);
//app.use('/join', join);
//app.use('/privacy_policy', privacy_policy);
//app.use('/terms', terms);


app.listen(port, () => {
    console.log(`The server is running on port ${port}...`)
});