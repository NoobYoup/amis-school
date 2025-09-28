import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import MainLayout from "@/layouts/MainLayout";
import Home from "@/pages/Home/Home";
import Admission from "@/pages/Admission/Admission";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route element={<MainLayout />}>
                        <Route path="/" element={<Home />} />
                        <Route path="/admission" element={<Admission />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
