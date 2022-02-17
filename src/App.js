import React from 'react';
import {UserProvider} from "./Context/userContext";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import AppBar from "./Components/Shared/AppBar/AppBar";
import Home from "./Components/Pages/Home/Home";
import Login from "./Components/Pages/Login/Login";
import Register from "./Components/Pages/Register/Register";
import NotFound from "./Components/Pages/404/NotFound";

function App() {
    return (
        <>
            <UserProvider>
                <BrowserRouter>
                <AppBar/>
                    <Routes>
                        <Route path={"/"} exact={true} element={<Home/>}/>
                        <Route path={"/login"} element={<Login/>}/>
                        <Route path={"/register"} element={<Register/>}/>
                        <Route path={"*"} element={<NotFound/>}/>
                    </Routes>
                </BrowserRouter>
            </UserProvider>
        </>
    );
}

export default App;