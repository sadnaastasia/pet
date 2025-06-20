import './styles/App.css';
import RunningLine from './components /Running-line';
import Navigation from './components /Navigation';
import BeckoningInfo from './components /BeckoningInfo';
import MainCourse from './components /MainCourse';
import AboutMainCourse from './components /AboutMainCourse';
import { useState, useEffect } from 'react';

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
    </div>
  );
}

export default Main;
