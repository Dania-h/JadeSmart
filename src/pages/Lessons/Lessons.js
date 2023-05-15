import Dashboard from "./components/Dashboard/Dashboard";
import LessonsHeader from "./components/LessonsHeader/LessonsHeader";

function Lessons() {
    return (
        <>
            <LessonsHeader />
            <main>
                <Dashboard />
            </main>
        </>
    );
}

export default Lessons;