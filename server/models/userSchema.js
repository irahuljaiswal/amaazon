const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const secretKey = process.env.KEY

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  number: {
    type: String,
    required: true,
    unique: true,
    maxlength: 10,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("not a valid email address");
      }
    },
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
  },
  confirmpass: {
    type: String,
    required: true,
    minlength: 6,
  },
  tokens:[
    {
        token:{
            type:String,
            required:true,
        }
    }
  ],
  carts:Array
});

userSchema.pre("save", async function(next){
    if(this.isModified("password")){
      this.password = await bcrypt.hash(this.password, 12)
      this.confirmpass = await bcrypt.hash(this.confirmpass, 12)
    } 

    next()
})

//generating token

userSchema.methods.generateAuthtoken = async function(){
  try{
    let token = jwt.sign({ _id: this._id }, secretKey);
    this.tokens = this.tokens.concat({token:token})
    await this.save()
    return token
  }
  catch(error){
    console.log(error);
  } 
}

const USER = new mongoose.model("USER", userSchema)
module.exports = USER