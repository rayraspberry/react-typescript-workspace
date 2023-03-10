import { createRoot } from 'react-dom/client';
import { RecoilRoot } from 'recoil';
import { getChainOptions, WalletProvider } from '@terra-money/wallet-provider';
import { BrowserRouter } from 'react-router-dom';

import '@scss/app.module.scss';
import App from '@layouts/App';
//import reportWebVitals from './reportWebVitals';

const container = document.getElementById('root');
const root = createRoot(container!);

getChainOptions().then((chainOptions) => {
  root.render(
    <WalletProvider {...chainOptions}>
        <RecoilRoot>
          <BrowserRouter>
              <main>
                <App />
              </main>
          </BrowserRouter>
        </RecoilRoot>
    </WalletProvider>
  );
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
