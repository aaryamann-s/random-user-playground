import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { Client as Styletron } from "styletron-engine-monolithic";
import { Provider as StyletronProvider } from "styletron-react";
import { LightTheme, BaseProvider } from "baseui";

const engine = new Styletron();

import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <StyletronProvider value={engine}>
      <BaseProvider theme={LightTheme}>
          <App />
      </BaseProvider>
    </StyletronProvider>
  </React.StrictMode>,
)
