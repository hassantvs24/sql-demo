const winston = require('winston');

module.exports = function (){
      winston.createLogger({
        level: 'info',
        format: winston.format.combine(
          winston.format.timestamp(),
          winston.format.json()
        ),
        exceptionHandlers: [
          winston.add(new winston.transports.File({ filename: 'error.log' }, {'timestamp':true}))
        ],
        transports: [
          winston.add(new winston.transports.File({ filename: 'error.log', level: 'error' }, {'timestamp':true})),
          winston.add(new winston.transports.File({ filename: 'activity.log' }, {'timestamp':true}))
        ]
      });


    process.on('uncaughtException', (ex) => { //Uncaught Exceptions Error Handle
        winston.error(ex.message, ex);
        process.exit(1);//1 = process exit active 0= process exit inactive
    });
    
    process.on('unhandledRejection', (ex) => { //Unhandled Rejection Error Handle
        throw ex;
    });
    
    winston.exceptions.handle(
        new winston.transports.Console({colorize: true, prettyPrint: true}),
        winston.add(new winston.transports.File({filename: 'error.log'}))
        );//File base error log implementation for exception
    winston.add(new winston.transports.File({filename: 'activity.log'}));//File base error log implementation

}