import express from 'express';
const router = express.Router();
import {getInsights} from '../controllers/gemini.controller.js';

router.post('/getInsights', getInsights);

export default router;