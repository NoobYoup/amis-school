import Hero from '@/pages/Home/Components/Hero.jsx';
import Stats from '@/pages/Home/Components/Stats.jsx';
import Feature from '@/pages/Home/Components/Feature.jsx';
import Program from '@/pages/Home/Components/Program.jsx';
import Partner from '@/pages/Home/Components/Partner.jsx';
import Contact from '@/pages/Admission/Components/Contact.jsx';

export default function Home() {
    return (
        <>
            <Hero />
            <Stats />
            <Feature />
            <Program />
            <Contact />
            <Partner />
        </>
    );
}
