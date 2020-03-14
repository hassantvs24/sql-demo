const winston = require('winston');

module.exports = function (){
      winston.createLogger({
        level: 'info',
        format: winston.format.combine(
          winston.format.timestamp(),
          winston.format.json()
        ),
        transports: [
          winston.add(new winston.transports.File({ filename: 'error.log', level: 'error' }, {'timestamp':true})),
          winston.add(new winston.transports.File({ filename: 'activity.log' }, {'timestamp':true}))
        ]
      });
}