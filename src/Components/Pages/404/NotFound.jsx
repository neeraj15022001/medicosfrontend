import React from 'react';
import notfound from "../../../assets/notfound.svg";

function NotFound() {
    return (
        <section className={"flex items-center justify-center h-screen"}>
            <img src={notfound} alt="Not Found" className={"h-full"}/>
        </section>
    );
}

export default NotFound;