import './styles/App.css';
import Navigation from './components /Navigation';
import { productArray } from './data/data';
import ProductItem from './components /ProductItem';

function Products() {
  return (
    <>
      <Navigation />
      <div className="courses_container">
        {productArray.map((elem) => (
          <ProductItem
            id={elem.id}
            key={elem.id}
            image={elem.image}
            title={elem.title}
            info={elem.info}
            price={elem.price}
            program={elem.program}
          />
        ))}
      </div>
    </>
  );
}

export default Products;
