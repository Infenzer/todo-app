const Router = require('express')
const User = require('../models/User')
const Todo = require('../models/Todo')
const auth = require('../middleware/auth.middleware')

const router = Router()

router.post('/create', auth, async (req, res) => {
  try {
    const {text} = req.body

    if (text === '') {
      return res.status(401).json({message: 'Введите название заметки'})
    }
 
    const userId = req.user.userId
    const user = await User.findById(userId).exec()

    const todo = new Todo({
      text
    })
  
    await todo.save()
    user.todoList.push(todo)
    await user.save()

    res.status(201).json({todo})
  } catch (e) {
    res.status(500).json({message: "Что-то пошло не так"})
  }
})

module.exports = router