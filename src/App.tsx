import './styles/App.css';
import RunningLine from './components /Running-line';
import Navigation from './components /Navigation';
import BeckoningInfo from './components /BeckoningInfo';
import MainCourse from './components /MainCourse';
import AboutMainCourse from './components /AboutMainCourse';

function App() {
  return (
    <div>
      <RunningLine />
      <Navigation />
      <BeckoningInfo />
      <MainCourse />
      <AboutMainCourse />
    </div>
  );
}

export default App;
