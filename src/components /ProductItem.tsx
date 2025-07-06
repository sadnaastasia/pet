import { AiOutlineLoading } from 'react-icons/ai';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, deleteItem } from '../slices/cartSlice';
import { RiArrowDownWideLine } from 'react-icons/ri';
import { RiArrowUpWideLine } from 'react-icons/ri';
import { type RootState } from '../store/store';

function ProductItem({
  id,
  image,
  title,
  info,
  price,
  program,
}: {
  id: number;
  image: string;
  title: string;
  info: string;
  price: string;
  program: string[];
}) {
  const dispatch = useDispatch();
  const buttonsActivity = useSelector(
    (state: RootState) => state.cart.buttonsActivity
  );

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isHidden, setIsHidden] = useState<boolean>(true);
  const [currentIcon, setCurrentIcon] = useState('down');

  const buttonAdd = `course_button-add ${
    (
      localStorage.getItem(`${id}numberOfItems`) !== null
        ? localStorage.getItem(`${id}numberOfItems`) === 'true'
          ? true
          : false
        : buttonsActivity.find((item) => item.id === id)?.isActive
    )
      ? 'display-block'
      : 'display-none'
  }`;
  const buttonRemove = `course_button-delete ${
    (
      localStorage.getItem(`${id}numberOfItems`) !== null
        ? localStorage.getItem(`${id}numberOfItems`) === 'true'
          ? true
          : false
        : buttonsActivity.find((item) => item.id === id)?.isActive
    )
      ? 'display-none'
      : 'display-block'
  }`;
  const courseProgram = `course-program_container ${isHidden ? '' : 'open'}`;

  useEffect(() => {
    const img = new Image();
    img.src = image;
    img.onload = () => {
      setIsLoading(false);
    };
    img.onerror = () => {
      setIsLoading(false);
    };
  }, [image]);

  const toggleArrow = () => {
    setIsHidden(!isHidden);
    setCurrentIcon(currentIcon === 'down' ? 'up' : 'down');
  };

  const toggleCart = () => {
    dispatch(addItem({ id, image, title, info, price }));
  };
  const toggleCartRemove = () => {
    dispatch(deleteItem({ id, image, title, info, price }));
  };
  return (
    <div>
      <div className="course_container">
        <div>
          <div className="image_container">
            {isLoading ? (
              <AiOutlineLoading className="course_icon" />
            ) : (
              <img
                loading="lazy"
                alt={title}
                className="course_image"
                src={image}
              />
            )}
          </div>
          <h2>{title}</h2>
          <p>{info}</p>
          <h3>{price}</h3>
          <div className={courseProgram}>
            <div className="course-program_text">
              <h2>What you'll learn:</h2>
              <ul className="text-list_container">
                {program.map((elem) => (
                  <li>{elem}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="button-arrow_container">
            <button className="button-arrow" onClick={toggleArrow}>
              <RiArrowDownWideLine
                className="icon"
                style={{
                  opacity: currentIcon === 'down' ? 1 : 0,
                  transition: 'opacity 0.5s ease-in-out',
                }}
              />
              <RiArrowUpWideLine
                className="icon"
                style={{
                  opacity: currentIcon === 'up' ? 1 : 0,
                  transition: 'opacity 0.5s ease-in-out',
                }}
              />
            </button>
          </div>
        </div>
        <div>
          <button className={buttonAdd} onClick={toggleCart}>
            Add to cart
          </button>
          <button className={buttonRemove} onClick={toggleCartRemove}>
            Remove from cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
