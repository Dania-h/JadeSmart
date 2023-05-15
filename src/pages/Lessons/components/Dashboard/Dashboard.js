import './Dashboard.scss';
import user from '../../../../assets/images/user.png';
import tracker from '../../../../assets/icons/tracker.svg';

function Dashboard() {
    return (
        <>
            <article className='dashboard'>
                <section className='user'>
                    <img className='user__picture' src={user} alt='user' />
                    <div className='user__info'>
                        <h1>Welcome!</h1>
                        <p>Sign in to save your progress.</p>
                    </div>
                </section>
                <section className='courses'>
                    <h2>Courses</h2>
                    <div>
                        <button className='courses__button courses__button--active'>ALL</button>
                        <button className='courses__button'>INTRO TO INVESTING</button>
                        <button className='courses__button'>BUDGETING</button>
                        <button className='courses__button'>PAYING OFF DEBT</button>
                        <button className='courses__button'>YOUR FIRST HOME</button>
                    </div>
                    <h2>Lessons</h2>
                    <div className='courses__container'>
                        <div className='courses__course-title'>
                            <h3>INTRO TO INVESTING</h3>
                        </div>
                        <div className='courses__lesson'>
                            <img className='courses__tracker' src={tracker} alt='tracking circle' />
                            <button>Stocks and the stock market</button>
                        </div>
                        <div className='courses__lesson'>
                            <img className='courses__tracker' src={tracker} alt='tracking circle' />
                            <button>Investment planning</button>
                        </div>
                        <div className='courses__lesson'>
                            <img className='courses__tracker' src={tracker} alt='tracking circle' />
                            <button>Interpreting stock information</button>
                        </div>
                        <div className='courses__lesson'>
                            <img className='courses__tracker' src={tracker} alt='tracking circle' />
                            <button>Returns calculator</button>
                        </div>
                    </div>
                </section>
            </article>
        </>
    );
}

export default Dashboard;