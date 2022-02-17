import React from 'react';
import home from "../../../assets/home.svg"

function Home() {
    return (
        <section className={"flex items-center justify-center h-screen relative"}>
            <section className={"absolute top-6"}>
                <h1 className={"text-gray-600 font-bold text-2xl capitalize"}>Medicines Directory in your pocket</h1>
            </section>
            <img src={home} alt="home" className={"w-1/2"}/>
        </section>
    );
}

export default Home;