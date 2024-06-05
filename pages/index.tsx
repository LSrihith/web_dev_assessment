import Hero from '../Hero';
import ProblemsSolved from '../ProblemsSolved';
import KeyMetrics from '../KeyMetrics';
import Reviews from '../Reviews';
import Features from '../Features';
import CallToAction from '../CallToAction';
import Footer from '../Footer';

const Home: React.FC = () => {
  return (
    <div>
      <Hero />
      <ProblemsSolved />
      <KeyMetrics />
      <Reviews />
      <Features />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Home;
