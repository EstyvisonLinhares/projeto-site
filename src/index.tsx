import React from 'react';
import ReactDOM from 'react-dom/client';
import { createServer, Model } from 'miragejs';
import { App } from './App';

createServer({
  models: {
    customer: Model,
  },

  seeds(server) {
    server.db.loadData({
      customers: [
        {
          id: 1,
          name: 'Maria',
          age: '20',
          service: 'Corte de cabelo',
          price: 'R$20'
        },
        {
          id: 2,
          name: 'Luiza',
          age: '25',
          service: 'Chapinha',
          price: 'R$30'
        },
        {
          id: 3,
          name: 'Joseane',
          age: '50',
          service: 'Botox',
          price: 'R$40'
        },
      ]
    })
  }
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
