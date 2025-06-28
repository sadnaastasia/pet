import { IoClose } from 'react-icons/io5';
import 'intl-tel-input/build/css/intlTelInput.css';
import IntlTelInput from 'intl-tel-input/reactWithUtils';
import Navigation from '../components /Navigation';

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
            <div className="name-input_container">
              <div className="name-label_container">
                <label>Name and Surname</label>
              </div>
              <input placeholder="Anna Brown" className="name-input" />
            </div>
            <IntlTelInput
              initOptions={{
                initialCountry: 'auto',
                geoIpLookup: (success, failure) => {
                  fetch('https://ipapi.co/json')
                    .then((res) => res.json())
                    .then((data) => success(data.country_code))
                    .catch(() => failure());
                },
                strictMode: true,
                separateDialCode: true,
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
