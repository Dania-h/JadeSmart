import Focus from "../Focus/Focus";
import Hero from "../Hero/Hero";
import Mission from "../Mission/Mission";


function Home({ setNewHeader }) {
    return (
        <>
            <main>
                <Hero setNewHeader={setNewHeader} />
                <Mission />
                <Focus />
            </main>

        </>
    );
}

export default Home;