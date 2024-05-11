import mongoose from "mongoose";
import bcyrpt from "bcrypt";

const { Schema } = mongoose;
// kullanıcı modelini oluşturduk
const userSchema = new Schema({
    userName: {
        type: String,
        required: true,
        unique : true,
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true,
    }
}
,{
    timestamps: true
});

//password'ü hashledik
userSchema.pre("save",  function (next) {
    const user = this
    bcyrpt.hash(user.password,10,(err,hash) => {
        if(err){
            return next(err)
        }
        user.password =  hash
        next()
    })
});

const User = mongoose.model("User", userSchema);

export default User;
