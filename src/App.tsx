import { globalContext } from './GlobalContext';
import './styles.css';
import EncubeNavbar from './components/navbar/EncubeNavbar';
import { useContext, useState, useEffect } from 'react';
import HomePage from './components/HomePage';
import SignInModal from './components/signInModal/SignInModal';
import InsumosWrapper from './components/insumos/InsumosWrapper';
import CategoriasWrapper from './components/categorias/CategoriasWrapper';

function App() {
  const { currentScreen } = useContext(globalContext);
  const [screen, setScreen] = useState(<HomePage />);

  useEffect(() => {
    if (currentScreen === 'categorias') {
      setScreen(<CategoriasWrapper />);
    } else if (currentScreen === 'insumos') {
      setScreen(<InsumosWrapper />);
    } else {
      setScreen(<HomePage />);
    }
  }, [currentScreen]);

  return (
    <>
      <EncubeNavbar />
      <SignInModal />
      {<div className='mx-5 my-5'>{screen}</div>}
    </>
  );
}

export default App;
