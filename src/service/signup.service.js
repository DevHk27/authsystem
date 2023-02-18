import axios from "axios";

export const sendOtp = async (email) => {
    try{
        const apiResponse = await axios.post('http://localhost:8081/signup/sendOtp', { emailId: email });
        console.log(apiResponse.data)
        console.log(apiResponse.data.message)
        return apiResponse.data.message
    }catch(err){
        console.log(err.data)
    }
}

export const verifyOtp = async (otp) => {
    const result = await axios.post('http://localhost:8081/signup/verifyOtp', { emailId: "abc@gmail.com", otp: otp, secretKey: "32424" });
    console.log(result.data)
    console.log(result.data.responseMessage)
}