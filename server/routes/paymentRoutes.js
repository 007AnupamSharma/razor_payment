import express from 'express'
import { checkout, paymentVerficiation } from '../controllers/paymentController.js';
const router = express.Router();

router.route("/checkout").post(checkout)

router.route("/paymentverification").post(paymentVerficiation)

export default router