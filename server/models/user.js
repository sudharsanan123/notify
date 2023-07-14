const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    name:{
         name:{
            type: 'string',
            required: true
         },
         age: {type: 'number',
            type: 'number',
            required: true
        }
    }
})
module.exports = mongoose.model('User',userSchema);