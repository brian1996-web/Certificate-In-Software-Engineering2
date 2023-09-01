const mongoose  = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const testSchema = new mongoose.Schema({
  firstname:{
    type: String,
    trim: true,
  },
  lastname:{
    type: String,
    trim: true,
  },
  date:{
    type: String,
    trim: true,
  },
  gender:{
    type: String,
    trim: true,
  
  },
  country:{
    type: String,
    trim: true,
  }
   ,state:{
    type: String,
    trim: true,
  },
  town:{
    type: String,
    trim: true,
  },
  zip:{
    type: String,
    trim: true,
  },
  phone:{
    type: String,
    trim: true,
  }
});

// signupSchema.plugin(passportLocalMongoose,{usernameField: 'email'})
module.exports = mongoose.model('Test',testSchema);