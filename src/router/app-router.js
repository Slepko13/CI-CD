import React from 'react';
import { Routes, Route } from 'react-router-dom'
import Users from '../users/users';
import MainPage from '../pages/main-page';
import AboutPage from '../pages/about-page';
import ErrorPage from '../pages/error-page';
import UserDetails from '../pages/user-details-page';

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/*" element={<ErrorPage />} />
            <Route path="/users" element={<Users />} />
            <Route path="/users/:id" element={<UserDetails />} />
        </Routes>
    );
}

export default AppRouter;