const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            require: true,
            unique: true,
        },
        email: {
            type: String,
            require: true,
            unique: true,
        },
        password: {
            type: String,
            require: true,
        },
    }, { timestamps: true }
);
// Hash Pass before saving
UserSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next();
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
})
// Compare Method
UserSchema.method.matchPassword = async function (enteredPassword) {
    return bcrypt.compare(enteredPassword, this.password);
}
module.exports = mongoose.model('User', UserSchema);