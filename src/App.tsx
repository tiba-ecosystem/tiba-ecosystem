import Insumos from './components/insumos/Insumos';
import ContextStateWrapper from './ContextStateWrapper';
import './styles.css';

function App() {
  return (
    <ContextStateWrapper>
      <div className='mx-5 my-5'>
        <Insumos />
      </div>
    </ContextStateWrapper>
  );
}

export default App;
