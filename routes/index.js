const userRouter = require('./user.route');

function routes(app){
    app.use('/user', userRouter);
}

module.exports = routes;