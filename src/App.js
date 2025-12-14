import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Router from "./routs/Router";
import Layout from "./layout/Layout";
import SnackbarProvider from "./providers/SnackbarProvider";
import AlertProvider from "./providers/AlertProvider";

function App() {
  return (
    <BrowserRouter>
      <SnackbarProvider>
        <AlertProvider>
          <Layout>
            <Router />
          </Layout>
        </AlertProvider>
      </SnackbarProvider>
    </BrowserRouter>
  );
}

export default App;
