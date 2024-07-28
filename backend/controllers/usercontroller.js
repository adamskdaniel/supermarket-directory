import bcrypt from 'bcrypt';
import { userModel } from '../models/usermodel.js';
import nodemailer from 'nodemailer';
import crypto from 'crypto';
import jwt from 'jsonwebtoken';
import { nanoid } from 'nanoid';

export const userControllers = {
    signupUser: async (req, res) => {
        try {
            let { username, email, password } = req.body;

            // Trim and convert to lowercase
            username = username.trim().toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
            email = email.trim().toLowerCase();
            password = password.trim();

            // Validation for empty fields
            if (!username && !email && !password) {
                return res.json({ error: 'All fields are required' });
            }

            let errors = {};
            if (!username) errors.username = 'Username is required';
            if (!email) errors.email = 'Email is required';
            if (!password) errors.password = 'Password is required';

            // Validate username to accept only letters and numbers
            if (username && !/^[a-zA-Z0-9]+$/.test(username)) {
                errors.username = 'Username must contain only letters and numbers';
            }

            if (Object.keys(errors).length > 0) {
                return res.json({ errors });
            }

            const existingUsernameUser = await userModel.findOne({ username });
            if (existingUsernameUser) errors.username = 'Username is already taken';

            const existingEmailUser = await userModel.findOne({ email });
            if (existingEmailUser) errors.email = 'Email is already registered';

            const isStrongPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).{8,}$/.test(password);
            if (!isStrongPassword) errors.password = 'Password must meet certain criteria';

            if (Object.keys(errors).length > 0) {
                return res.json({ errors });
            }

            const verificationToken = crypto.randomBytes(32).toString('hex');
            const verificationCode = nanoid(6);
            const baseURL = process.env.BASE_URL || 'http://localhost:2000';
            const verificationLink = `${baseURL}/verify?token=${verificationToken}`;

            const sendVerificationEmail = async (email, verificationLink, verificationCode) => {
                const transporter = nodemailer.createTransport({ host: 'smtp.ethereal.email', port: 587, auth: { user: 'freida40@ethereal.email', pass: 'bbvTKK4f9ydqRXd44R' } });
                const mailOptions = { from: 'freida40@ethereal.email', to: email, subject: 'Verify Your Email', text: `Please click the following link to verify your email: ${verificationLink}\n\nVerification Code: ${verificationCode}` };
                await transporter.sendMail(mailOptions);
            };

            const hashedPassword = await bcrypt.hash(password, 10);
            const newUser = new userModel({ username, email, password: hashedPassword, verifiedEmail: false, verificationToken });

            await sendVerificationEmail(email, verificationLink, verificationCode);
            await newUser.save();

            res.json({ message: 'User created successfully', user: newUser });
        } catch {
            res.json({ error: 'Internal Server Error' });
        }
    },


    signinUser: async (req, res) => {
        try {
            const { email, password } = req.body;
            if (!email || !password) return res.json({ error: 'Please enter all required fields' });
            const user = await userModel.findOne({ email });
            if (!user) return res.json({ error: 'User not found. Create an account' });
            const passwordMatch = await bcrypt.compare(password, user.password);
            if (!passwordMatch) return res.json({ error: 'Invalid password' });
            const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
            res.json({ message: 'Login successful', token, user: { id: user._id, username: user.username, email: user.email, gender: user.gender } });
        }   catch {res.json({ error: 'Internal Server Error' })}
    },

    deleteUser: async (req, res) => {
        try {
            const userId = req.params.id;
            const deletedUser = await userModel.findByIdAndDelete(userId);
            if (!deletedUser) return res.json({ error: 'User not found' });
            res.json({ message: 'User deleted successfully', user: deletedUser });
        }   catch {res.json({ error: 'Internal Server Error' })}
    },

    getUsers: async (req, res) => {
        try {
            const users = await userModel.find();
            res.json({ users });
        }   catch {res.json({ error: 'Internal Server Error' })}
    },
    
    getUser: async (req, res) => {
        try {
            const userId = req.params.id;
            const user = await userModel.findById(userId);
            if (!user) return res.json({ error: 'User not found' });
            res.json({ user });
        }   catch {res.json({ error: 'Internal Server Error' })}
    },

    updateUser: async (req, res) => {
        try {
            const { username, email, gender } = req.body;
            const userId = req.params.id;
            const updatedUser = await userModel.findByIdAndUpdate(userId, { username, email, gender }, { new: true });
            if (!updatedUser) return res.json({ error: 'User not found' });
            res.json({ message: 'User profile updated successfully', user: updatedUser });
        }   catch {res.json({ error: 'Internal Server Error' })}
    }
};
