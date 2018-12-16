// const config = require('config.json');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/website-project', 
		{ useNewUrlParser: true,
			useCreateIndex:true
		});
mongoose.Promise = global.Promise;

module.exports = {
    User: require('../users/user.model')
};