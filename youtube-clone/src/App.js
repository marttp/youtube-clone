import "./styles.css";

import { Provider } from "react-redux";

import store from "./store";

import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  return (
    <Provider store={store}>
      <div className="w-full bg-white">
        <Header />
        <Main />
      </div>
    </Provider>
  );
}

export default App;
