import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import MainLayout from '@/layouts/MainLayout';
import Home from '@/pages/Home/Home';
import Admission from '@/pages/Admission/Admission';
import Activities from '@/pages/Activities/Activities';
import News from '@/pages/News/News';
import Information from '@/pages/Information/Information';
import Documents from '@/pages/Documents/Documents';

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route element={<MainLayout />}>
                        <Route path="/" element={<Home />} />
                        <Route path="/admission" element={<Admission />} />
                        <Route path="/activities" element={<Activities />} />
                        <Route path="/news" element={<News />} />
                        <Route path="/information" element={<Information />} />
                        <Route path="/documents" element={<Documents />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
