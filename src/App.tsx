import { globalContext } from './GlobalContext';
import './styles.css';
import EncubeNavbar from './components/navbar/EncubeNavbar';
import { useContext, useState, useEffect } from 'react';
import HomePage from './components/HomePage';
import SignInModal from './components/signInModal/SignInModal';
import CategoriasContext from './components/categorias/CategoriasContext';
import InsumosContext from './components/insumos/InsumosContext';

function App() {
  const { currentScreen } = useContext(globalContext);
  const [screen, setScreen] = useState(<HomePage />);

  useEffect(() => {
    const screens: { [key: string]: JSX.Element } = {
      categorias: <CategoriasContext />,
      insumos: <InsumosContext />,
      homePage: <HomePage />,
    };
    setScreen(screens[currentScreen]);
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
