import React from 'react';
import Form from "../../Shared/Form/Form";
import {handleRegistration} from "../../../services";

function Register() {
    return (
        <section className={"flex h-screen bg-white dark:bg-gray-800"}>
            <section className={"flex-1 flex flex-col justify-center px-5 box-border"}>
                <div className={"mb-8"}>
                    <p className={"text-5xl font-bold capitalize ml-3 text-gray-600 dark:text-gray-300"}>create account</p>
                </div>
                <Form loginForm={false} submitHandler={handleRegistration}/>
            </section>
            <section className={"flex-1 bg-blue-100 box-border hidden sm:hidden md:block"} style={{
                background: "url('https://images.pexels.com/photos/7722650/pexels-photo-7722650.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260') no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center"
            }}></section>
        </section>
    );
}

export default Register;