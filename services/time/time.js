exports.handler = (event, context, callback) => {
    var currentTime = new Date();
    callback(null, {
        statusCode: '200',
        body: 'The time somewhere is: ' + currentTime.toString(),
    });
};
