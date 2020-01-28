
import React from 'react'
import ReactDOM from 'react-dom';
import App from './App'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { persistor, store } from './configureStore';

import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

const httpLink = createHttpLink({
  uri: 'https://api-euwest.graphcms.com/v1/ck0madizz00t301d7d6jbafx4/master'
})

// 3
const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
})

const rootElement = document.getElementById("root");

if (rootElement.hasChildNodes()) {
  ReactDOM.hydrate( <Provider store={store}>    <PersistGate loading={null} persistor={persistor}> <ApolloProvider client={client}><App />  </ApolloProvider></PersistGate></Provider>, rootElement);
} else {
  ReactDOM.render( <Provider store={store}>    <PersistGate loading={null} persistor={persistor}> <ApolloProvider client={client}><App />  </ApolloProvider></PersistGate></Provider>, rootElement);
}
// const renderApp =
//   render(
//     <Provider store={store}>
//       <PersistGate loading={null} persistor={persistor}>
//         <ApolloProvider client={client}>
//           <App />
//         </ApolloProvider>
//       </PersistGate>
//     </Provider>
//   , root)

// module.hot.accept(renderApp)