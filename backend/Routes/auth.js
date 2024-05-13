import expres from 'express'
import { register, login } from '../Controllers/authController.js'

const router = expres.Router()

router.post('/register', register)
router.post('/login', login)

export default router;