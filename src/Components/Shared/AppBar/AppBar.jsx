import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import {UserContext} from "../../../Context/userContext";
import axios from "axios";

function AppBar() {
    const [user, setUser] = useContext(UserContext);
    console.log(user)
    async function handleLogout() {
        const url = "http://localhost:8000/api/v1/users/logout";
        let result = await axios(url);
        console.log(result);
        if (result.status === 200) {
            setUser({})
        }
        return result;
    }

    return (
        <>
            <nav
                className={"flex items-center px-5 py-4 bg-white dark:bg-gray-800 fixed z-50 right-0 left-0 top-0 backdrop-filter backdrop-blur-xl dark:backdrop-blur-0 bg-opacity-30 dark:bg-opacity-100 border border-gray-200 dark:border-gray-600 dark:border-0 dark:border-b"}>
            <span className={"uppercase text-gray-600 dark:text-gray-300 font-bold cursor-pointer text-3xl"}><Link to={"/"}><span
                className={"uppercase text-blue-600 dark:text-blue-300"}>med</span>icos</Link></span>
                <div className={"flex-1 flex items-center justify-end"}>
                    {Object.keys(user).length !== 0 && <button
                        className={"bg-blue-600 transition hover:bg-blue-700 px-8 py-2 capitalize text-white rounded-full mr-2"}
                        onClick={handleLogout}>
                        logout
                    </button>}
                    {Object.keys(user).length === 0  && <Link to={"/login"}>
                        <button
                            className={"bg-blue-600 dark:bg-transparent transition hover:bg-blue-700 dark:hover:bg-blue-300 dark:hover:text-gray-800 px-8 py-2 capitalize text-white dark:text-blue-300 dark:border dark:border-blue-300 rounded-full mr-2"}>
                            login
                        </button>
                    </Link>}
                    {Object.keys(user).length === 0  && <Link to={"/register"}>
                        <button
                            className={"bg-white dark:bg-transparent border border-blue-600 dark:border-blue-300 transition hover:bg-blue-600 dark:hover:bg-blue-300 hover:text-white dark:hover:text-gray-800 px-8 py-2 capitalize text-blue-600 dark:text-blue-300 rounded-full"}>
                            register
                        </button>
                    </Link>}
                </div>
            </nav>
            <section className={"flex h-16"}>
                <section className={"flex-1 flex flex-col justify-center px-5 box-border"}></section>
                <section className={"flex-1 bg-blue-100 box-border"}></section>
            </section>
        </>


    )
        ;
}

export default AppBar;