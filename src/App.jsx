import { useState } from 'react';
import ColorList from './components/ColorList';
import Form from './components/Form';
import Values from 'values.js';
import { ToastContainer, toast } from 'react-toastify';

const App = () => {
  const [colors, setColors] = useState(new Values('#f15025').all(10));
  const addColor = (color) => {
    try {
      setColors(new Values(`${color}`).all(10));
      toast.success('new Color added');
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <>
      <main>
        <Form addColor={addColor} />
        <ColorList colors={colors} />
        <ToastContainer positin="top-center" />
      </main>
    </>
  );
};
export default App;
