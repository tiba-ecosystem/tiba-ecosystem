import Insumos from './components/insumos/Insumos';
import ContextStateWrapper from './ContextStateWrapper';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import './styles.css';

function App() {
  const client = new ApolloClient({
    uri: 'http://34.192.200.70/api/',
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <ContextStateWrapper>
        <div className='mx-5 my-5'>
          <Insumos />
        </div>
      </ContextStateWrapper>
    </ApolloProvider>
  );
}

export default App;
