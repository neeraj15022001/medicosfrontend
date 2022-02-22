import React from 'react';
import Form from "../../Shared/Form/Form";
import {handleLogin} from "../../../services";

function Login() {
    return (
        <section className={"flex h-screen bg-white dark:bg-gray-800"}>
            <section className={"flex-1 flex flex-col justify-center px-5 box-border"}>
                <div className={"mb-8"}>
                    <p className={"text-5xl font-bold capitalize ml-3 text-gray-600 dark:text-gray-300"}>login here</p>
                </div>
                <Form loginForm={true} submitHandler={handleLogin}/>
            </section>
            <section className={"flex-1 bg-blue-100 box-border hidden sm:hidden md:block"}
                     style={{
                         background: "url('https://images.pexels.com/photos/6075009/pexels-photo-6075009.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500') no-repeat",
                         backgroundSize: "cover",
                         backgroundPosition: "center"
                     }}></section>
        </section>
    );
}

export default Login;