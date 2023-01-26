import React from "react";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import Home from "../Components/Home";
import OneParameter from "../Components/OneParameter";
import VariousParameters from "../Components/VariousParameters";

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="*" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path=":parameter" element={<OneParameter />} />
                <Route
                    path=":parameter/:color/:bgColor"
                    element={<VariousParameters />}
                />
            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;
