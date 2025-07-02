import express from 'express';
import { handleSignupController } from '../controllers/userController.js';

const router = express.Router();


router.post('/signup', handleSignupController);

export default router;