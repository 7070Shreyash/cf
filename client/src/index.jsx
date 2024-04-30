import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { ChainId, ThirdwebProvider } from '@thirdweb-dev/react';

import { StateContextProvider } from './context';
import App from './App';
import './index.css';
import { Sepolia } from "@thirdweb-dev/chains"

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <ThirdwebProvider activeChain={Sepolia}
  clientId="de276801ccbba64973160589cf4d3417"
> 
    <Router>
      <StateContextProvider>
        <App />
      </StateContextProvider>
    </Router>
  </ThirdwebProvider> 
)