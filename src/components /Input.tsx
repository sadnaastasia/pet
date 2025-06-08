import { useState } from 'react';

function Input({ type, text }: { type: any; text: string }) {
  const [inputValue, setInputValue] = useState('');
  const [isClassAdded, setIsClassAdded] = useState(false);

  const handleInputChange = (event: any) => {
    setInputValue(event.target.value);
    setIsClassAdded(false);
  };

  const handleBlur = () => {
    if (inputValue !== '') {
      setIsClassAdded(true);
    }
  };
  return (
    <div className="logIn-item">
      <input
        type={type}
        id={type}
        className="logIn-input"
        value={inputValue}
        onChange={handleInputChange}
        onBlur={handleBlur}
        required
      />
      <label
        htmlFor={type}
        className={isClassAdded ? 'logIn-label_filled' : 'logIn-label'}
      >
        {text}
      </label>
    </div>
  );
}
export default Input;
