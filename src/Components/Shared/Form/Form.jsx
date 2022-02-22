import React, {useContext, useState} from 'react';
import {UserContext} from "../../../Context/userContext";
import {Redirect} from "react-router-dom";

function Form({loginForm = true, submitHandler}) {
    const [formData, setFormData] = useState({name: "", email: "", password: "", confirmPassword: ""});
    const [user, setUser] = useContext(UserContext);

    function handleInput(e) {
        setFormData(() => {
            return {
                ...formData,
                [e.target.name]: e.target.value
            }
        })
    }

    async function handleSubmit(e) {
        e.preventDefault()
        let result = await submitHandler({formData: formData});
        console.log(result)
        if (result.status === 200) {
            console.log(result.data.user)
            setUser(result.data.user)
            setFormData({name: "", email: "", password: "", confirmPassword: ""})
        } else {
            setFormData({name: "", email: "", password: "", confirmPassword: ""})
        }
    }

    return (
        <form className={"flex flex-col bg-transparent"} onSubmit={handleSubmit} id={"custom-form"}>
            {loginForm === false && <input onChange={handleInput} value={formData.name} type="text" name="name"
                                           placeholder={"Enter your name"}
                                           className={"dark:text-gray-300 dark:focus:border-blue-300 my-3 p-4 text-xl bg-transparent border-b-4 focus:border-blue-600 outline-0"}
                                           required/>}
            <input onChange={handleInput} value={formData.email} type="email" placeholder={"Enter your Email"}
                   name={"email"}
                   className={"dark:text-gray-300 dark:focus:border-blue-300 my-3 p-4 text-xl bg-transparent border-b-4 focus:border-blue-600 outline-0"} required/>
            <input onChange={handleInput} value={formData.password} type="password" placeholder={"Enter your Password"}
                   name={"password"}
                   className={"dark:text-gray-300 dark:focus:border-blue-300 my-3 p-4 text-xl bg-transparent border-b-4 focus:border-blue-600 outline-0"} required/>
            {loginForm === false &&
                <input onChange={handleInput} value={formData.confirmPassword} type="password"
                       placeholder={"Confirm password"} name={"confirmPassword"}
                       className={"dark:text-gray-300 dark:focus:border-blue-300 my-3 p-4 text-xl bg-transparent border-b-4 focus:border-blue-600 outline-0"}
                       required/>}
            <input type="submit" value={loginForm ? "Login" : "Register"}
                   className={"cursor-pointer bg-blue-600 dark:bg-transparent transition hover:bg-blue-700 dark:hover:bg-blue-300 rounded-md py-3 text-white dark:text-blue-300 dark:hover:text-gray-800 font-bold text-2xl capitalize mt-8 dark:border dark:border-blue-300"}/>
        </form>
    );
}

export default Form;