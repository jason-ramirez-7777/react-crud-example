import { FC } from "react";
import { RouterProvider } from "react-router-dom";
import router from "./config/router-config";
import { Provider } from "react-redux";
import store from "./@store";
import { StyledEngineProvider } from "@mui/material";

const App: FC = () => {
  return (
    <Provider store={store}>
      <StyledEngineProvider injectFirst>
        <RouterProvider router={router}></RouterProvider>
      </StyledEngineProvider>
    </Provider>
  );
};

export default App;
