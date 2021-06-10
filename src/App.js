import Header from "components/header";
import Footer from "components/footer";
import Home from "components/home";
import { Provider } from "react-redux";
import store from "redux/store";

import "App.scss";

function App() {
  return (
    <Provider store={store}>
      <Header></Header>
      <Home></Home>
      <Footer></Footer>
    </Provider>
  );
}

export default App;
