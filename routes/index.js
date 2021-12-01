const express = require('express');
const admin = require('./admin');
const posts = require('./posts');

module.exports = (app, prefix = '/') => {
    app.use(
        prefix,
        express.urlencoded({extended: true}),
        express.json(),
        admin,
        posts
        );
};