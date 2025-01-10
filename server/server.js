import {app} from './app.js'
import Razorpay from 'razorpay'
import { connectDB } from "./config/database.js";

connectDB();

// id: rzp_test_aBDZMIcMzIB4SM
// secret:rS3hMgjq86zp3LDFoSf9hHRX
export const instance = new Razorpay({
    key_id: process.env.RAZORPAY_API_KEY,
    key_secret: process.env.RAZORPAY_APT_SECRET
})



app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`)
})