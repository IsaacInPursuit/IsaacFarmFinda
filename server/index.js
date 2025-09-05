const express = require('express');
const mongoose = require('mongoose');
const argon2 = require('argon2');

const app = express();
app.use(express.json());

const usernameRegex = /^[a-zA-Z0-9_]{3,}$/;
const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[^A-Za-z\d]).{8,}$/;

mongoose.connect(process.env.MONGO_URL || 'mongodb://localhost:27017/farmfinder');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const User = mongoose.model('User', userSchema);

app.post('/api/register', async (req, res) => {
  const { username, password } = req.body;
  if (!usernameRegex.test(username)) {
    return res.status(400).json({ error: 'Invalid username' });
  }
  if (!passwordRegex.test(password)) {
    return res.status(400).json({
      error: 'Password must be 8+ chars, include letters, numbers and special char',
    });
  }
  const existing = await User.findOne({ username });
  if (existing) {
    return res.status(400).json({ error: 'User already exists' });
  }
  const hash = await argon2.hash(password);
  await User.create({ username, password: hash });
  res.json({ status: 'ok' });
});

app.post('/api/login', async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });
  if (!user) {
    return res.status(400).json({ error: 'Invalid credentials' });
  }
  const valid = await argon2.verify(user.password, password);
  if (!valid) {
    return res.status(400).json({ error: 'Invalid credentials' });
  }
  res.json({ status: 'ok' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));
