const winston = require('winston');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const sequelize = require('./startup/db')();


require('./startup/logger')();//Error logging
require('./startup/routes')(app);








sequelize.authenticate().then(() => {
    winston.info(`Database connection successfully`);
    app.listen(port, () => winston.info(`Connected: http://localhost:${port}...`));
}).catch(err => {
    winston.error('Unable to connect to the database:', err);
});

