const mongoose = require('mongoose');

const db = process.env.MONGODB_URI || 'mongodb://localhost/PracticeProject-22';

mongoose.connect(db)
    .then(() => console.log('Connected to DB ...'))
    .catch(err => console.log(err))
