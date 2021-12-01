const router = require('./routes');
const express = require('express');
const { engine } = require('express-handlebars');
const path = require('path');
const app = express();
const session = require('express-session');
const flash = require('connect-flash');

app.use(session({
    secret: 'cursodenode',
    resave: true,
    saveUninitialized: true
}))

app.use(flash());

app.use((req, res, next) => {
    res.locals.success_msg = req.flash("success_msg")
    res.locals.error_msg = req.flash("error_msg")
    next()
})

app.engine('handlebars', engine({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.set('views', './views');

app.use(express.static(path.join(__dirname + '/public')));

router(app);

const port = 8081
app.listen(port, () => {
    console.log(`Server is running at port ${port}`);
});

module.exports = app;