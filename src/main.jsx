// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './App.jsx'

import './styles/tailwind.css';
import './styles/index.css'
import { MovieProvider } from './contexts/MovieContext.jsx';
import { store } from './store/index.js';

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  <Provider store={store}>
    <BrowserRouter>
      <MovieProvider>
        <App />
      </MovieProvider>
    </BrowserRouter>
  </Provider>
  // </StrictMode>,
)