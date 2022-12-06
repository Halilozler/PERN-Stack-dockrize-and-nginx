import React, { Component, useState } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from './App';

import ScreenOne from './components/ScreenOne';
import ScreenTwo from './components/ScreenTwo';
import NotFound from './components/NotFound/Index';

const Router = () => {
    const [user, setUser] = useState(null);

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App/>}>
                    <Route index element={<ScreenOne/>}/>
                </Route>
                <Route path='/screenTwo' element={<App/>}>
                    <Route index element={<ScreenTwo/>}/>
                    <Route path='screenOne' element={<ScreenOne/>}/>
                </Route>
                <Route path='*' element={<NotFound/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router;