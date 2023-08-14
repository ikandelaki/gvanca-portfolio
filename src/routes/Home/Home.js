import Hero from '../../components/Hero/Hero';
import ProgressBar from '../../components/ProgressBar/ProgressBar';

function Home() {
    return (
        <div className='Home'>
            <ProgressBar />
            <Hero />
        </div>
    );
}

export default Home;