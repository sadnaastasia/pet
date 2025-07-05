import { IoClose } from 'react-icons/io5';
import 'intl-tel-input/build/css/intlTelInput.css';
import Navigation from '../components /Navigation';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { useSelector } from 'react-redux';
import { type RootState } from '../store/store';
import CartItem from '../components /CartItem';

function Cart() {
  const productsList = useSelector((state: RootState) =>
    state.cart.cartItems.slice().reverse()
  );
  return (
    <>
      <Navigation />
      <div className="cart_container">
        <div className="cart_outer">
          <h1>Cart</h1>
          {productsList.map((item) => (
            <CartItem
              key={item.id}
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
            />
          ))}
          <div className="cart_sum">
            <span>
              Total:{' '}
              {productsList.reduce(
                (sum, item) =>
                  parseFloat(item.price.replace(/[^\d.-]/g, '')) + sum,
                0
              )}
              $
            </span>
          </div>
          <div className="cart_main">
            <div>
              <div className="input_container">
                <div className="label_container">
                  <label>Name and Surname</label>
                </div>
                <input placeholder="Anna Brown" />
              </div>
              <PhoneInput
                country={'by'}
                autoFormat={true}
                containerClass={'phone-input_container'}
                buttonClass={'phone-input_button'}
                inputClass={'phone-input'}
                inputProps={{
                  name: 'phone',
                }}
              />
              <fieldset className="contact">
                <legend>Choose how to contact you:</legend>
                <div>
                  <input type="radio" id="telegram" name="contact" />
                  <label htmlFor="telegram">Telegram</label>
                </div>
                <div>
                  <input type="radio" id="whatsapp" name="contact" />
                  <label htmlFor="whatsapp">Whatsapp</label>
                </div>
                <div>
                  <input type="radio" id="imessage" name="contact" />
                  <label htmlFor="imessage">iMessage</label>
                </div>
              </fieldset>
              <div className="remember">
                <input type="checkbox" id="remember" name="remember" />
                <label htmlFor="remember">
                  Remember contacts in browser for repeat purchase
                </label>
              </div>
              <div className="input_container">
                <div className="label_container">
                  <label>Promo</label>
                </div>
                <input />
              </div>
              <div className="cart_sum">
                <span>
                  Subtotal:{' '}
                  {productsList.reduce(
                    (sum, item) =>
                      parseFloat(item.price.replace(/[^\d.-]/g, '')) + sum,
                    0
                  )}
                  $
                </span>
              </div>
              <div className="cart_sum">
                <span>
                  Total:{' '}
                  {productsList.reduce(
                    (sum, item) =>
                      parseFloat(item.price.replace(/[^\d.-]/g, '')) + sum,
                    0
                  )}
                  $
                </span>
              </div>
              <button className="cart-button">Contact me</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
