import User from '../model/User.js';
import jwt from 'jsonwebtoken';

// Generate JWT
const generateToken = (id) => {
    console.log('JWT_SECRET in controller:', process.env.JWT_SECRET);

    return jwt.sign(
        { id },
        process.env.JWT_SECRET,
        { expiresIn: '30d', }
    );
};
// Signup
export const signupUser = async (req, res) => {
    const { username, email, password } = req.body;

    try {
        const userExists = await User.findOne({ email });

        if (userExists) {
            return res.status(400).json({
                message: 'User already exists',
            });
        }

        const user = await User.create({
            username,
            email,
            password,
        });

        res.status(201).json({
            _id: user._id,
            username: user.username,
            email: user.email,
            token: generateToken(user._id),
        });
    } catch (err) {
        res.status(500).json({
            message: err.message,
        });
    }
};

// Login
export const loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });

        if (user && (await user.matchPassword(password))) {
            res.json({
                _id: user._id,
                username: user.username,
                email: user.email,
                token: generateToken(user._id),
            });
        } else {
            res.status(401).json({
                message: 'Invalid credentials',
            });
        }
    } catch (err) {
        res.status(500).json({
            message: err.message,
        });
    }
};