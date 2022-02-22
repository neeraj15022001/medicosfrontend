import axios from "axios";

export const fetchMedicines = async () => {
    const url = "http://localhost:8000/api/v1/medicines/list";
    let medicines = await fetch(url)
        .then(res => res.json())
        .then(res => res)
        .catch(err => console.log(err))
    return medicines;
}

export const handleLogin = async ({formData}) => {
    console.log(formData)
    const url = "http://localhost:8000/api/v1/users/login";
    let result = await axios.post(url, {
        email: formData.email,
        password: formData.password
    })
    return result;
}

export const handleRegistration = async ({formData}) => {
    console.log(formData)
    const url = "http://localhost:8000/api/v1/users/register";
    let result = await axios.post(url, formData)
    return result;
}