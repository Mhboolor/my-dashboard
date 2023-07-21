import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./global.css";
import { BrowserRouter} from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./app/store";
import App from "./App";

const root = createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <StrictMode>
        <App/>
      </StrictMode>
    </BrowserRouter>
  </Provider>
);
