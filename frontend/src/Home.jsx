import React from 'react'
import { Box, Stack } from "@chakra-ui/react"
import Card from './Card'
import axios from 'axios'
function Home() {
    const checkoutHandler = async (amount) => {

        const {data:{key}} = await axios.get("http://localhost:5000/api/getkey")

        const { data: {order} } = await axios.post("http://localhost:5000/api/checkout", {
            amount
        })
        // console.log(data);
        const options = {
            key,
            amount: order.amount,
            currency: "INR",
            name: "Jio developer",
            description: "Tutorial of RazorPay",
            image: "https://avatars.githubusercontent.com/u/25058652?v=4",
            order_id: order.id,
            callback_url: "http://localhost:5000/api/paymentverification",
            prefill: {
                name: "Anupam Sharma",
                email: "as9254794@example.com",
                contact: "6205140809"
            },
            notes: {
                "address": "Razorpay Corporate Office"
            },
            theme: {
                "color": "#121212"
            }
        };
        const razor = new window.Razorpay(options);
        razor.open();

    }
    return (
        <Box>

            <Stack h={"100vh"} alignItems="center" justifyContent="center" direction={["column", "row"]}>

                <Card amount={5000} img={"https://www.bhphotovideo.com/images/images2500x2500/apple_z0um_mpxv22_bh_macbook_pro_tb_i5_1344676.jpg"} checkoutHandler={checkoutHandler} />
                <Card amount={3000} img={"http://i1.adis.ws/i/canon/eos-r5_front_rf24-105mmf4lisusm_32c26ad194234d42b3cd9e582a21c99b"} checkoutHandler={checkoutHandler} />

            </Stack>
        </Box>
    )
}

export default Home
