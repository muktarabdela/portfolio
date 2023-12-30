import { About, Experience, Feedbacks, Hero, Tech, Works, } from "../components";
const Home = () => {
    return (
        <div className='relative z-0 bg-primary'>
            <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
                <Hero />
            </div>
            <About />
            <Experience />
            <Tech />
            <Works />
            <Feedbacks />

        </div>
    )
}

export default Home