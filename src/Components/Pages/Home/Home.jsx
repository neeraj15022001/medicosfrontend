import React from 'react';
import home from "../../../assets/home.svg"

function Home() {
    return (
        <section className={"flex h-screen"}>
            <section className={"flex-1 flex flex-col justify-center pl-16 mb-20"}>
                <h1 className={"text-gray-600 font-black text-8xl capitalize"}>Medicines</h1>
                <p className={"text-gray-600 font-black text-8xl capitalize"}>Directory</p>
                <p className={"text-6xl text-blue-600 align-top font-black mt-6 capitalize"}>in your pocket</p>
            </section>
            <section className={"flex-1 flex items-center justify-center"}>
                <img src={home} alt="home" className={"w-full"}/>
            </section>
        </section>
    );
}

export default Home;