import React from 'react';
import ReactDOM from 'react-dom/client';
import { UserContextProvider } from './context/UserContext';
import { BrowserRouter as Router } from 'react-router-dom';
import { QueryClient, QueryClientProvider} from 'react-query'

import App from './App';

const client = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <UserContextProvider>
        <QueryClientProvider client={client}>
          <Router>
            <App style={{fontFamily:'Avenir'}}/>
          </Router>
        </QueryClientProvider>
      </UserContextProvider>
  </React.StrictMode>
);


