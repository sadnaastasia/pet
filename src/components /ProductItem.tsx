import { AiOutlineLoading } from 'react-icons/ai';
import { useState, useEffect } from 'react';

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
  const [isLoading, setIsLoading] = useState(true);

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
  return (
    <div className="item_container">
      <div>
        <div className="image_container">
          {isLoading ? (
            <AiOutlineLoading className="item_icon" />
          ) : (
            <img className="item_image" src={image} />
          )}
        </div>
        <h2>{title}</h2>
        <p>{info}</p>
        <h3>{price}</h3>
      </div>
      <button className="item_button">Add to cart</button>
    </div>
  );
}

export default ProductItem;
