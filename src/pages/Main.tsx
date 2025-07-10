import RunningLine from '../components /Running-line';
import Navigation from '../components /Navigation';
import BeckoningInfo from '../components /BeckoningInfo';
import MainCourse from '../components /MainCourse';
import AboutMainCourse from '../components /AboutMainCourse';
import { useState, useEffect } from 'react';
import Footer from '../components /Footer';

function Main() {
  const [isScrolled, setIsScrolled] = useState<string>('');

  useEffect(() => {
    const handleScroll = (): void => {
      if (window.scrollY > window.innerHeight) {
        setIsScrolled('nav_grey');
      } else {
        setIsScrolled('');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div>
      <RunningLine />
      <Navigation isScrolled={isScrolled} />
      <BeckoningInfo />
      <MainCourse />
      <AboutMainCourse />
      <Footer />
      <div className="biglogo_container">
        <span className="biglogo">CBT</span>
      </div>
    </div>
  );
}

export default Main;
