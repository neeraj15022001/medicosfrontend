import React from 'react';
import home from "../../../assets/home.svg"
import {Link} from "react-router-dom";

function Home() {
    return (
        <section className={"flex h-screen bg-white dark:bg-gray-800"}>
            <section className={"flex-1 flex flex-col justify-center pl-16 mb-20"}>
                <h1 className={"text-gray-600 dark:text-gray-300 font-black text-7xl capitalize"}>Medicines</h1>
                <p className={"text-gray-600 dark:text-gray-300 font-black text-7xl capitalize"}>Directory</p>
                <p className={"text-5xl text-blue-600 dark:text-blue-400 align-top font-black mt-6 capitalize"}>in your
                    pocket</p>
                <Link to={"/directory"}>
                    <button
                        className={"bg-transparent transition hover:bg-blue-600 dark:hover:bg-blue-300 hover:text-white dark:hover:text-gray-800 border border-blue-600 dark:border-blue-300 w-32 py-3 text-blue-600 dark:text-blue-300 rounded-md font-bold mt-10"}>Get
                        Started
                    </button>
                </Link>
            </section>
            <section className={"flex-1 hidden items-center justify-center sm:hidden md:flex"}>
                <img src={home} alt="home" className={"w-full"}/>
            </section>
        </section>
    );
}

export default Home;