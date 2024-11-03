import axios from "axios";



export const SendMessage = async(name, email, subject, message) => {
    try {
        await axios
        .post('http://localhost:3000/contact', {
            name,
            email,
            subject,
            message
        })
        .then(res => {
           return(console.log(res));
        })
    } catch (error) {
        return(console.log(error));
    }
}