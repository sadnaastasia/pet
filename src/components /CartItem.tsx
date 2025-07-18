import { useDispatch } from 'react-redux';
import { deleteItem } from '../slices/cartSlice';
import { IoClose } from 'react-icons/io5';

function CartItem({
  id,
  image,
  title,
  price,
}: {
  id: number;
  image: string;
  title: string;
  price: string;
}) {
  const dispatch = useDispatch();

  const toggleCartRemove = () => {
    dispatch(deleteItem({ id, image, title, price }));
  };
  return (
    <div className="cart-item">
      <img loading="lazy" src={image} />
      <div className="item-main">
        <h3 className="item_title">{title}</h3>
        <h4 className="item_price">{price}</h4>
      </div>
      <button className="item_button" onClick={toggleCartRemove}>
        <IoClose />
      </button>
    </div>
  );
}

export default CartItem;
