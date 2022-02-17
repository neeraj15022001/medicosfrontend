import React from 'react';

function Form({loginForm = true}) {
    return (
        <form className={"flex flex-col"}>
            {loginForm === false && <input type="text" name="name" placeholder={"Enter your name"} className={"my-3 p-4 text-xl bg-transparent border-b-4 focus:border-blue-600 outline-0"}/>}
            <input type="email" placeholder={"Enter your Email"} name={"email"} className={"my-3 p-4 text-xl bg-transparent border-b-4 focus:border-blue-600 outline-0"}/>
            <input type="password" placeholder={"Enter your Password"} name={"password"} className={"my-3 p-4 text-xl bg-transparent border-b-4 focus:border-blue-600 outline-0"}/>
            {loginForm === false &&
                <input type="password" placeholder={"Confirm password"} name={"confirmpassword"} className={"my-3 p-4 text-xl bg-transparent border-b-4 focus:border-blue-600 outline-0"}/>}
            <input type="submit" value="Login"
                   className={"bg-blue-600 transition hover:bg-blue-700 rounded-md py-3 text-white font-bold text-2xl capitalize mt-8"}/>
        </form>
    );
}

export default Form;