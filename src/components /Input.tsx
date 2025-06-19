import { useState } from 'react';
import { MdErrorOutline } from 'react-icons/md';
import { type ChangeEvent } from 'react';
import { LuEye } from 'react-icons/lu';
import { LuEyeClosed } from 'react-icons/lu';

function Input({
  type,
  text,
  isInputValid,
  setIsInputlValid,
}: {
  type: any;
  text: string;
  isInputValid: boolean;
  setIsInputlValid: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [inputValue, setInputValue] = useState<string>(
    type === 'email' ? localStorage.getItem('email') || '' : ''
  );
  const [isClassAdded, setIsClassAdded] = useState<boolean>(
    inputValue !== '' ? true : false
  );
  const [error, setError] = useState<string>();
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const [isEye, setIsEye] = useState<boolean>(false);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setInputValue(event.target.value);
    setIsClassAdded(true);
    if (text === 'Email' && isInputValid) {
      localStorage.setItem('email', event.target.value);
    } else if (text === 'Email' && !isInputValid) {
      localStorage.setItem('email', '');
    }
    if (text === 'Email') {
      validateEmail(event.target.value);
    }
    if (text === 'Password') {
      validatePassword(event.target.value);
    }
  };

  const handleInputClick = (): void => {
    if (!isClicked) {
      setIsClassAdded(true);
      if (text === 'Email') {
        validateEmail(inputValue);
      }
      if (text === 'Password') {
        validatePassword(inputValue);
      }
      setIsClicked(true);
    }
    setIsClassAdded(true);
  };

  const handleBlur = (): void => {
    if (inputValue !== '') {
      setIsClassAdded(true);
    } else {
      setIsClassAdded(false);
    }
  };
  const validateEmail = function (email: string): void {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === '') {
      setError('Please enter your email.');
      setIsInputlValid(false);
      return;
    } else if (!emailRegex.test(email)) {
      setError('Please enter a valid email address.');
      setIsInputlValid(false);
    } else {
      setError('');
      setIsInputlValid(true);
    }
  };
  const validatePassword = function (password: string): void {
    if (password === '') {
      setError('Please enter your password.');
      setIsInputlValid(false);
    } else if (password.length < 10) {
      setError('Password must contain at least 10 characters');
      setIsInputlValid(false);
    } else {
      setError('');
      setIsInputlValid(true);
    }
  };
  const handleEyeClick = () => {
    setIsEye(!isEye);
  };

  return (
    <div className="login-item">
      <div
        className={`input-container ${error ? 'login-input_error' : ''}`}
        onClick={handleInputClick}
      >
        <input
          type={type === 'password' ? (isEye ? 'text' : 'password') : type}
          value={inputValue}
          className={'login-input'}
          onChange={handleInputChange}
          onBlur={handleBlur}
          id={type}
          required
        />
        {type === 'password' ? (
          <button
            className="password-eye"
            onClick={handleEyeClick}
            onBlur={handleBlur}
          >
            {isEye ? <LuEye /> : <LuEyeClosed />}
          </button>
        ) : (
          ''
        )}
      </div>
      <label
        htmlFor={type}
        className={`${isClassAdded ? 'login-label_filled' : 'login-label'} ${
          error ? 'login-label_error' : ''
        }`}
      >
        {text}
      </label>
      {error ? (
        <p className="error-message">
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
