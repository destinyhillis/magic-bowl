const mongoose = require('mongoose');
const BlueprintType = 'mongodb://localhost/magic-bowl';

mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
});

mongoose.connection.on('connected', () => {
    console.log(`Mongoose connected to ${connectionString}`);
});

mongoose.connection.on('error', (err) => {
    console.log(`Mongoose connection error ${err}`);
});

mongoose.connection.on('disconnected', () => {
    console.log('Mongoose disconnected.');
});
