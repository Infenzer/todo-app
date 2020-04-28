const Router = require('express')
const User = require('../models/User')
const bcrypt = require('bcrypt')
const validator = require('validator');

const router = Router()

// /api/auth/login
router.post('/login', (req, res) => {
  try {
    
  } catch (e) {
    res.status(500).json({message: "Ошибка при авторизации"})
  }
})

// /api/auth/register
router.post('/register', async (req, res) => {
  try {
    const {email, password} = req.body

    const emailValid = validator.default.isEmail(email)
    const passwordValid = validator.default.isLength(password, {min: 6, max: undefined})

    console.log(emailValid, passwordValid)

    if (!emailValid || !passwordValid) {
      return res.status(400).json({
        message: 'Некорректныйе данные при регистрации'
      })
    }

    const candidat = await User.findOne({ email })

    if (candidat) {
      return res.status(400).json({message: "Такой пользователь уже существует"})
    }

    const bcryptPassword = await bcrypt.hash(password, 10)
    const user = new User({
      email: email,
      password: bcryptPassword
    })

    await user.save()
    res.status(201).json({ message: 'Пользователь создан' })  
  } catch (e) {
    res.status(500).json({ message: "Ошибка при регистрации" })
  }
})

module.exports = router