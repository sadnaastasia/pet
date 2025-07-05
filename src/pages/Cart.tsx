import { IoClose } from 'react-icons/io5';
import 'intl-tel-input/build/css/intlTelInput.css';
import Navigation from '../components /Navigation';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
function Cart() {
  return (
    <>
      <Navigation />
      <div className="cart_container">
        <div className="cart_outer">
          <h1>Cart</h1>
          <div className="cart_item">
            <img loading="lazy" src="../../product1.webp" />
            <h3 className="item_title">
              Theory and Practice of Cognitive-Behavioral Therapy: a clinical
              course with pre-accreditation status{' '}
            </h3>
            <h4 className="item_price">1000$</h4>
            <button className="item_button">
              <IoClose />
            </button>
          </div>
          <div className="cart_sum">
            <span>Total: 1000$</span>
          </div>
          <div className="cart_inputs">
            <div>
              <div className="name-input_container">
                <div className="name-label_container">
                  <label>Name and Surname</label>
                </div>
                <input placeholder="Anna Brown" className="name-input" />
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
              <div className="name-input_container">
                <div className="name-label_container">
                  <label>Promo</label>
                </div>
                <input className="name-input" />
              </div>
              <div className="cart_sum">
                <span>Subtotal: 1000$</span>
              </div>
              <div className="cart_sum">
                <span>Total: 1000$</span>
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
