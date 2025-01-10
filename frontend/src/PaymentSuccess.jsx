import { Box, Heading, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { useSearchParams } from "react-router-dom"

function PaymentSuccess() {

    const search = useSearchParams()[0];
    const referenceNum = search.get("reference");
    
    return (
        <Box>
            <VStack h="100vh" justifyContent={"center"}>

                <Heading textTransform={"uppercase"}> Order Successfull</Heading>

                <Text>
                    Reference No.{referenceNum}
                </Text>

            </VStack>
        </Box>
    )
}

export default PaymentSuccess
