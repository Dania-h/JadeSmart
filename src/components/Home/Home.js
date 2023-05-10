import Focus from "../Focus/Focus";
import Footer from "../Footer/Footer";
import Hero from "../Hero/Hero";
import Mission from "../Mission/Mission";


function Home() {
    return (
        <>
            <main>
                <Hero />
                <Mission />
                <Focus />
            </main>
            <Footer />
        </>
    );
}

export default Home;