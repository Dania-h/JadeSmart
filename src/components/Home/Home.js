import Focus from "../Focus/Focus";
import Header from "../Header/Header";
import Hero from "../Hero/Hero";
import Mission from "../Mission/Mission";


function Home() {
    return (
        <>
            <Header />
            <main>
                <Hero />
                <Mission />
                <Focus />
            </main>

        </>
    );
}

export default Home;