import { useState } from 'react';

const Form = ({ addColor }) => {
  const [color, setColor] = useState('#f15025');
  const handleSubmit = (e) => {
    e.preventDefault();
    addColor(color);
  };
  return (
    <section className="container">
      <form action="" className="color-form" onSubmit={handleSubmit}>
        <input
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
        <input type="text" value={color} readOnly={true} />
        <button className="btn" type="sumbit" style={{ background: color }}>
          submit
        </button>
      </form>
    </section>
  );
};
export default Form;
