import React, {useContext} from 'react';
import {UserContext, UserProvider} from "./Context/userContext";
import {BrowserRouter, Navigate, Outlet, Route, Routes} from "react-router-dom";
import AppBar from "./Components/Shared/AppBar/AppBar";
import Home from "./Components/Pages/Home/Home";
import Login from "./Components/Pages/Login/Login";
import Register from "./Components/Pages/Register/Register";
import NotFound from "./Components/Pages/404/NotFound";
import Admin from "./Components/Pages/Admin/Admin";
import Directory from "./Components/Pages/Directory/Directory";

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
                        <Route path='/admin' element={<Admin/>}/>
                        <Route path={"/directory"} element={<Directory/>}/>
                        <Route path={"*"} element={<NotFound/>}/>
                    </Routes>
                </BrowserRouter>
            </UserProvider>
        </>
    );
}

export default App;