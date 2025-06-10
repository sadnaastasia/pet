import './styles/App.css';
import RunningLine from './components /Running-line';
import Navigation from './components /Navigation';
import BeckoningInfo from './components /BeckoningInfo';

function App() {
  return (
    <div>
      <RunningLine />
      <Navigation />
      <div className="navOverlay"></div>
      <BeckoningInfo />
      <div className="mainArticle"></div>
      <div className="articles"></div>
    </div>
  );
}

export default App;
