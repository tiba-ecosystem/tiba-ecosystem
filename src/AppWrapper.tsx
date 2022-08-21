import ContextStateWrapper from './ContextStateWrapper';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import './styles.css';
import App from './App';

function AppWrapper() {
  const client = new ApolloClient({
    uri: process.env.REACT_APP_ENDPOINT,
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <ContextStateWrapper>
        <App />
      </ContextStateWrapper>
    </ApolloProvider>
  );
}

export default AppWrapper;
