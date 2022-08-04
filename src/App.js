import React from 'react';
import Header from './components/header/header.js';
import Footer from "./components/footer/footer.js";
import Profile from "./components/profile/profile.js";
import Messages from "./components/messages/messages.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Authorization from "./components/authorisation/authorisation";
import { configureStore } from '@reduxjs/toolkit';
import { Provider, useSelector, } from 'react-redux';
import { mainReducer, selectUserIsLogging } from './slices/main.slice.js';

const store = configureStore({
    reducer: {
        main: mainReducer,
    }
});

const Main = () => {
    return (
        <Provider store={store}>
            <App />
        </Provider>
    )
};


const App = () => {

    const isLoggin = useSelector(selectUserIsLogging);

    return (
        <BrowserRouter>
            <Header />
            <Routes>
                {isLoggin && <Route path="/profile" element={<Profile />} />}
                {isLoggin && <Route path="/messages/*" element={<Messages />} />}
                <Route path="/authorization" element={<Authorization />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
};

export default Main;
