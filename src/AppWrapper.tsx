import GlobalContext from './GlobalContext';
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
      <GlobalContext>
        <App />
      </GlobalContext>
    </ApolloProvider>
  );
}

export default AppWrapper;
