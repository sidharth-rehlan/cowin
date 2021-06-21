import Header from "components/header";
import Footer from "components/footer";
import Home from "components/home";
import { Provider } from "react-redux";
import store from "redux/store";
import { ThemeProvider } from "context/ThemeContext";

import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/css/bootstrap-grid.css";

import "App.scss";

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <Header></Header>
        <Home></Home>
        <Footer></Footer>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
