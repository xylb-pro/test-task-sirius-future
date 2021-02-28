import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { rootReducer } from '../redux/rootReducer';

export default function MyApp({ Component, pageProps }) {
  const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk)),
  );

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
