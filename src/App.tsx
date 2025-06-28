import Main from './pages/Main';
import Products from './pages/Products';
import './styles/App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useLayoutEffect } from 'react';
import Cart from './pages/Cart';

const Wrapper = ({ children }: { children: React.ReactElement }) => {
  const location = useLocation();

  useLayoutEffect(() => {
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
          <Route path="/cart" element={<Cart />}></Route>
        </Routes>
      </Wrapper>
    </Router>
  );
}

export default App;
