import { AiOutlineLoading } from 'react-icons/ai';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { increment, decrement } from '../slices/cartSlice';

function ProductItem({
  image,
  title,
  info,
  price,
}: {
  image: string;
  title: string;
  info: string;
  price: string;
}) {
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isActive, setIsActive] = useState<boolean>(true);

  const buttonAdd = `item_button-add ${
    isActive ? 'item_display-block' : 'item_display-none'
  }`;
  const buttonRemove = `item_button-delete ${
    isActive ? 'item_display-none' : 'item_display-block'
  }`;

  const handleClick = () => {
    setIsActive(!isActive);
  };

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

  const toggleCart = () => {
    dispatch(increment());
    handleClick();
  };
  const toggleCartRemove = () => {
    dispatch(decrement());
    handleClick();
  };
  return (
    <div className="item_container">
      <div>
        <div className="image_container">
          {isLoading ? (
            <AiOutlineLoading className="item_icon" />
          ) : (
            <img
              loading="lazy"
              alt={title}
              className="item_image"
              src={image}
            />
          )}
        </div>
        <h2>{title}</h2>
        <p>{info}</p>
        <h3>{price}</h3>
      </div>
      <button className={buttonAdd} onClick={toggleCart}>
        Add to cart
      </button>
      <button className={buttonRemove} onClick={toggleCartRemove}>
        Remove from cart
      </button>
    </div>
  );
}

export default ProductItem;
