import { useState } from 'react';
import { MdErrorOutline } from 'react-icons/md';
import { type ChangeEvent } from 'react';

function Input({ type, text }: { type: any; text: string }) {
  const [inputValue, setInputValue] = useState<string>('');
  const [isClassAdded, setIsClassAdded] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const [isClicked, setIsClicked] = useState<boolean>(false);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setInputValue(event.target.value);
    setIsClassAdded(false);
    if (text === 'Email') {
      validateEmail(event.target.value);
    }
    if (text === 'Password') {
      validatePassword(event.target.value);
    }
  };

  const handleInputClick = (): void => {
    if (!isClicked) {
      setIsClassAdded(false);
      if (text === 'Email') {
        validateEmail('');
      }
      if (text === 'Password') {
        validatePassword('');
      }
      setIsClicked(true);
    }
  };

  const handleBlur = (): void => {
    if (inputValue !== '') {
      setIsClassAdded(true);
    }
  };
  const validateEmail = function (email: string): void {
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
  const validatePassword = function (password: string): void {
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
        onClick={handleInputClick}
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
