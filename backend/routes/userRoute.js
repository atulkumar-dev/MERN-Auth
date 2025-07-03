import express from 'express';
import { handleSignupController, handleSigninController } from '../controllers/userController.js';

const router = express.Router();


router.post('/signup', handleSignupController);

router.post('/signin', handleSigninController)


export default router;