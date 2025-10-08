import { Outlet } from 'react-router-dom';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import BackToTop from '@/components/Button/BackToTop';

function MainLayout() {
    return (
        <>
            <Header />
            <main className="min-vh-100">
                <Outlet />
            </main>
            <Footer />
            <BackToTop />
        </>
    );
}

export default MainLayout;
