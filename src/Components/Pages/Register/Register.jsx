import React from 'react';
import Form from "../../Shared/Form/Form";

function Register() {
    return (
        <section className={"flex h-screen"}>
            <section className={"flex-1 flex flex-col justify-center px-5 box-border"}>
                <div className={"mb-8"}>
                    <p className={"text-5xl font-bold capitalize ml-3 text-gray-600"}>create account</p>
                </div>
                <Form loginForm={false} />
            </section>
            <section className={"flex-1 bg-blue-100 box-border"}></section>
        </section>
    );
}

export default Register;