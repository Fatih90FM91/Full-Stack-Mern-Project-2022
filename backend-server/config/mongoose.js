const mongoose = require('mongoose');

const db = 'mongodb://localhost/PracticeProject-22';

mongoose.connect(db)
    .then(() => console.log('Connected to DB ...'))
    .catch(err => console.log(err))
