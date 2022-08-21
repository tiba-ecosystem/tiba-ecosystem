import Insumos from './components/insumos/Insumos';
import { contextStateProps } from './ContextStateWrapper';
import './styles.css';
import EncubeNavbar from './components/navbar/EncubeNavbar';
import Categorias from './components/categorias/Categorias';
import { useContext, useState, useEffect } from 'react';
import HomePage from './components/HomePage';

function App() {
  const { currentScreen } = useContext(contextStateProps);
  const [screen, setScreen] = useState(<HomePage />);

  useEffect(() => {
    if (currentScreen === 'categorias') {
      setScreen(<Categorias />);
    } else if (currentScreen === 'insumos') {
      setScreen(<Insumos />);
    } else {
      setScreen(<HomePage />);
    }
  }, [currentScreen]);

  return (
    <>
      <EncubeNavbar />
      {<div className='mx-5 my-5'>{screen}</div>}
    </>
  );
}

export default App;
