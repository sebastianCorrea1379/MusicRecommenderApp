import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './styles.css';
import { Provider } from 'react-redux';
import { store } from './store';
import { MusicRecommenderApp } from './MusicRecommender';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={ store }>
      <BrowserRouter>
        <MusicRecommenderApp />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)
