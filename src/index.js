import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './global.css';
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/routes";
import { Provider } from 'react-redux';
import { store } from './app/store';

const root = createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <StrictMode>
      <RouterProvider router={router}/>
    </StrictMode>
  </Provider>
);