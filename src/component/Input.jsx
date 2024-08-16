export const Input = ({ placeholder, value, handler }) => {
  const inputValue = (event) => {
    event.preventDefault();
    handler(event.target.value);
  };

  return (
    <input
      placeholder={placeholder}
      value={value}
      type="text"
      onChange={(event) => inputValue(event)}
    />
  );
};
