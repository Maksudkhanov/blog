import mongoose from 'mongoose'
import bcrypt from 'bcrypt'

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: String,
    password: String
});

UserSchema.pre('save', function(next) {
    const user = this;

    bcrypt.hash(user.password, 10, (error, hash) => {
        user.password = hash
        next()
    })
})

export const User = mongoose.model('User', UserSchema)

