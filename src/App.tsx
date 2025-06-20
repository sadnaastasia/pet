import Main from './Main';
import Products from './Products';
import './styles/App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useLayoutEffect } from 'react';

const Wrapper = ({ children }: { children: React.ReactElement }) => {
  const location = useLocation();

  useLayoutEffect(() => {
    // Scroll to the top of the page when the route changes
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [location.pathname]);

  return children;
};

function App() {
  return (
    <Router>
      <Wrapper>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/products" element={<Products />}></Route>
        </Routes>
      </Wrapper>
    </Router>
  );
}

export default App;
