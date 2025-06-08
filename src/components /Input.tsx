import { useState } from 'react';
import { MdErrorOutline } from 'react-icons/md';

function Input({ type, text }: { type: any; text: string }) {
  const [inputValue, setInputValue] = useState('');
  const [isClassAdded, setIsClassAdded] = useState(false);
  const [error, setError] = useState('');

  const handleInputChange = (event: any) => {
    setInputValue(event.target.value);
    setIsClassAdded(false);
    if (text === 'Email') {
      validateEmail(event.target.value);
    }
    if (text === 'Password') {
      validatePassword(event.target.value);
    }
  };

  const handleBlur = () => {
    if (inputValue !== '') {
      setIsClassAdded(true);
    }
  };
  const validateEmail = function (email: string) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === '') {
      setError('Please enter your email.');
      return;
    } else if (!emailRegex.test(email)) {
      setError('Please enter a valid email address.');
    } else {
      setError('');
    }
  };
  const validatePassword = function (password: string) {
    if (password === '') {
      setError('Please enter your password.');
    } else if (password.length < 10) {
      setError('Password must contain at least 10 characters');
    } else {
      setError('');
    }
  };
  return (
    <div className="logIn-item">
      <input
        type={type}
        id={type}
        className={`logIn-input ${error ? 'logIn-input_error' : ''}`}
        value={inputValue}
        onChange={handleInputChange}
        onBlur={handleBlur}
        required
      />
      <label
        htmlFor={type}
        className={`${isClassAdded ? 'logIn-label_filled' : 'logIn-label'} ${
          error ? 'logIn-label_error' : ''
        }`}
      >
        {text}
      </label>
      {error ? (
        <p className="errorMessage">
          <MdErrorOutline style={{ stroke: 'red' }} />
          <span>{error}</span>
        </p>
      ) : (
        <p></p>
      )}
    </div>
  );
}
export default Input;
