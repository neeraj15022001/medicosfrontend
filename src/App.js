import React from 'react';
import {UserProvider} from "./Context/userContext";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import AppBar from "./Components/Shared/AppBar/AppBar";
import Home from "./Components/Pages/Home/Home";
import Login from "./Components/Pages/Login/Login";
import Register from "./Components/Pages/Register/Register";

function App() {
    return (
        <>
            <UserProvider>
                <AppBar/>
                <BrowserRouter>
                    <Routes>
                        <Route path={"/"} exact={true} element={<Home/>}/>
                        <Route path={"/login"} element={<Login/>}/>
                        <Route path={"/register"} element={<Register/>}/>
                    </Routes>
                </BrowserRouter>
            </UserProvider>
        </>
    );
}

export default App;