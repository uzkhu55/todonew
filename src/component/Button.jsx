export const Button = ({ click, width, height, text }) => {
  return (
    <button style={{ width, height }} onClick={click}>
      {text}
    </button>
  );
};
