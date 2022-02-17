import React from 'react';
import {Link} from "react-router-dom";

function AppBar() {
    return (
        <nav
            className={"flex items-center px-5 py-4 bg-white fixed right-0 left-0 top-0 backdrop-filter backdrop-blur-xl bg-opacity-30 border border-gray-200"}>
            <span className={"uppercase text-gray-600 font-bold cursor-pointer text-3xl"}><Link to={"/"}><span
                className={"uppercase text-blue-600"}>med</span>icos</Link></span>
            <div className={"flex-1 flex items-center justify-end"}>
                <button
                    className={"bg-blue-600 transition hover:bg-blue-700 px-8 py-2 capitalize text-white rounded-full mr-2"}>
                    <Link to={"/login"}>login</Link>
                </button>
                <button
                    className={"bg-gray-400 transition hover:bg-gray-500 px-8 py-2 capitalize text-white rounded-full"}>
                    <Link to={"/register"}>register</Link>
                </button>
            </div>
        </nav>
    );
}

export default AppBar;