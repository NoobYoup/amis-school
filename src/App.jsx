import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import MainLayout from '@/layouts/MainLayout';
import Home from '@/pages/Home/Home';
import Admission from '@/pages/Admission/Admission';
import CenterEnglish from '@/pages/CenterEnglish/CenterEnglish';
import NotificationAdmission from '@/pages/Admission/Components/Notification';

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route element={<MainLayout />}>
                        <Route path="/" element={<Home />} />
                        <Route path="/admission" element={<Admission />} />
                        <Route path="/admission/notification" element={<NotificationAdmission />} />
                        <Route path="/english-center" element={<CenterEnglish />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
